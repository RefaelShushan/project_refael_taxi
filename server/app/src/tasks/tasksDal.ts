import { TaskModel } from "../mongoDB/schemas/tasks.js";


export const getAllTasksDal = async () => {
    try {
      const orders = await TaskModel.find({});
      return orders;
    } catch{
     
    }
  };