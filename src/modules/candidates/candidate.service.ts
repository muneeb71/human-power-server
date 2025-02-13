import { CandidateDocuments, ICandidateDocuments } from "../../models/candidate-documents.model";
import { Candidate } from "./candidate.model";
import { ICandidateDetails } from "./types/candidate.types";

export const getAllService = async () => {
  let result = await Candidate.aggregate([
    {
      $lookup: {
        from: "candidatedocuments",
        localField: "_id",
        foreignField: "candidateId",
        as: "doc",
      },
    },
  ]);
  return result;
}

export const createService = async (data: ICandidateDetails) => {
  const createdCandidate = await Candidate.create(data);
  const documents = data?.doc;

  if (documents && documents?.length > 0) {
    const documentsToCreate = documents.map((doc: any) => ({
      ...doc,
      candidateId: createdCandidate._id, 
    }));

    await CandidateDocuments.insertMany(documentsToCreate);

    return createdCandidate;
  }
}

export const updateService = async (id: string, data: Partial<ICandidateDetails>) => {
  const updatedCandidate = await Candidate.findByIdAndUpdate(id, data, { new: true })
  if (!updatedCandidate) {
    throw new Error("Candidate not found");
  }
  // if (data.doc && data.doc.length > 0) {
  //   await CandidateDocuments.deleteMany({ candidateId: id });

  //   const documentsToCreate = data.doc.map((doc: any) => ({
  //     ...doc,
  //     candidateId: updatedCandidate._id,
  //   }));

  //   await CandidateDocuments.insertMany(documentsToCreate);
  // }

  return updatedCandidate;
};

export const deleteService = async (id: string) => {
  await CandidateDocuments.deleteMany({ candidateId: id });

  const deletedCandidate = await Candidate.findByIdAndDelete(id);
  if (!deletedCandidate) {
    throw new Error("Candidate not found");
  }

  return deletedCandidate;
};

