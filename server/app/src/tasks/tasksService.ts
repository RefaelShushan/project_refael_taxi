import { getAllTasksDal } from "./tasksDal.js"

export const getAllTasksService = async () => {
    try{
        const tasksFromGetAllTasksDal = await getAllTasksDal() 
        return tasksFromGetAllTasksDal
    }catch{

    }
}