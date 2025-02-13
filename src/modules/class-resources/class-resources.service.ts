import mongoose from "mongoose";
import { ClassResource } from "./class-resources.model";
import { ClassResourceData, IClassReourcesDetails } from "./types/class-resources.types";


export const getAllService = async () => await ClassResource.find();

export const getByClassIdService = async (classId: string) => {
  // await ClassResource.find({ class: classId }).populate("class").populate("candidate")
  // candidate.find({_id: classId})
  let result = await ClassResource.aggregate(
    [
      {
        $match: {class: new mongoose.Types.ObjectId(classId)}
      },
      {
        $lookup: {
          from: "candidates",
          localField: "candidate",
          foreignField: "_id",
          as: "candidate"
        }
      },
      {
        $unwind: {path: "$candidate", preserveNullAndEmptyArrays: true}
      },
      {
        $lookup: {
          from: "classes",
          localField: "class",
          foreignField: "_id",
          as: "class"
        }
      },
      {
        $unwind: {path: "$class", preserveNullAndEmptyArrays: true}
      },
      {
        $lookup: {
          from: "candidatedocuments",
          localField: "candidate._id",
          foreignField: "candidateId",
          as: "candidate.doc",
        },
      },
    ]
   )
   return result;
  
};

export const createService = async (data: ClassResourceData) => {
  const classId = data?.class;
  const candidateIds = data?.candidates?.map((candidate) => {
    return {candidate, class: classId};
  });
  const result = await ClassResource.insertMany(candidateIds);
  return result;
};

export const updateHiredService = async (id: string) => {
  const updatedResource = await ClassResource.findByIdAndUpdate(id, {status: "hired"}, {new: true});
  if(!updatedResource){
    throw new Error("Resource not found");
  }
  return updatedResource;
}

export const updateWithdrawnService = async (id: string) => {
  const updatedResource = await ClassResource.findByIdAndUpdate(id, {status: "withdrawn"}, {new: true});
  if(!updatedResource){
    throw new Error("Resource not found");
  }
  return updatedResource;
}

export const updateTerminatedService = async (id: string) => {
  const updatedResource = await ClassResource.findByIdAndUpdate(id, {status: "terminated"}, {new: true});
  if(!updatedResource){
    throw new Error("Resource not found");
  }
  return updatedResource;
}

export const updateService = async (
  id: string,
  data: Partial<IClassReourcesDetails>
) => {
  const updatedClass = await ClassResource.findByIdAndUpdate(id, data, {
    new: true,
  });
  if (!updatedClass) {
    throw new Error("Class not found");
  }
  return updatedClass;
};

export const deleteService = async (id: string) => {
  const deletedClass = await ClassResource.findByIdAndDelete(id);
  if (!deletedClass) {
    throw new Error("Class not found");
  }
  return deletedClass;
};
