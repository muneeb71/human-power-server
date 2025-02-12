import { Candidate } from "./candidate.model";
import { ICandidateDetails } from "./types/candidate.types";

export const getAllService = async () => await Candidate.find();

export const createService = async (data: ICandidateDetails) => await Candidate.create(data);

export const updateService = async (id: string, data: Partial<ICandidateDetails>) => {
  const updatedCandidate = await Candidate.findByIdAndUpdate(id, data, { new: true });
  if (!updatedCandidate) {
    throw new Error("Candidate not found");
  }
  return updatedCandidate;
};

export const deleteService = async (id: string) => {
  const deletedCandidate = await Candidate.findByIdAndDelete(id);
  if (!deletedCandidate) {
    throw new Error("Candidate not found");
  }
  return deletedCandidate;
};
