import mongoose from "mongoose";
import {AcmQuery } from "./acm-query.model";
import { IAcmQueryDetails } from "./types/acm-query.types";

export const getAllService = async () => await AcmQuery.find()
.populate("askedBy", "name")
.populate("answeredBy", "name");

export const getByAcmIdService = async (acmId: string) => {
  let result = await AcmQuery.aggregate([
    {
      $match: { 
        askedBy: new mongoose.Types.ObjectId(acmId)  // Match based on acmId being in the askedBy field
      }
    },
    {
      $lookup: {
        from: "acms", // Lookup to join the collection
        localField: "askedBy", // Field in AcmQuery that contains the askedBy ObjectId
        foreignField: "_id", // Matching it with _id of acmqueries collection
        as: "askedBy" // Output field name
      }
    },
    {
      $unwind: {
        path: "$askedBy", // Unwind to flatten the array
        preserveNullAndEmptyArrays: true
      }
    },
    // Lookup for `answeredBy` from the `users` collection
    {
      $lookup: {
        from: "users", // Lookup users collection
        localField: "answeredBy", // Field in AcmQuery that contains the answeredBy ObjectId
        foreignField: "_id", // Matching it with _id of acmqueries collection
        as: "answeredByUsers" // Output field name for users
      }
    },
    {
      $unwind: {
        path: "$answeredByUsers", // Unwind to flatten the array
        preserveNullAndEmptyArrays: true
      }
    },
    // Lookup for `answeredBy` from the `manager` collection
    {
      $lookup: {
        from: "managers", // Lookup managers collection
        localField: "answeredBy", // Field in AcmQuery that contains the answeredBy ObjectId
        foreignField: "_id", // Matching it with _id of acmqueries collection
        as: "answeredByManagers" // Output field name for managers
      }
    },
    {
      $unwind: {
        path: "$answeredByManagers", // Unwind to flatten the array
        preserveNullAndEmptyArrays: true
      }
    },
    // Merge the two possible answers
    {
      $set: {
        answeredBy: {
          $ifNull: [
            { $ifNull: ["$answeredByUsers.name", null] }, // First try users collection
            { $ifNull: ["$answeredByManagers.name", null] } // Then try managers collection
          ]
        }
      }
    },
    // Project to include only the relevant fields
    {
      $project: {
        askedBy: { name: 1 }, // Include only the name field from askedBy
        answeredBy: 1, // Now the unified answeredBy field
        _id: 1, // Include the _id field from AcmQuery
        question: 1, // Include other relevant fields as needed
        answer: 1 ,// Include other relevant fields as needed
        createdAt: 1,
        updatedAt: 1,
      }
    }
  ]);

  return result;
}



export const createService = async (data: IAcmQueryDetails) => await AcmQuery.create(data);

export const updateService = async (id: string, data: Partial<IAcmQueryDetails>) => {
  const updatedAcm = await AcmQuery.findByIdAndUpdate(id, data, { new: true });
  if (!updatedAcm) {
    throw new Error("Acm not found");
  }
  return updatedAcm;
};

export const deleteService = async (id: string) => {
  const deletedAcm = await AcmQuery.findByIdAndDelete(id);
  if (!deletedAcm) {
    throw new Error("Acm not found");
  }
  return deletedAcm;
};

export const getUnansweredAdminQueriesService = async () => await AcmQuery.find({ answer: { $exists: false } })
      .populate("askedBy", "name") 
      .populate("answeredBy" ,"name") 
      .exec();


