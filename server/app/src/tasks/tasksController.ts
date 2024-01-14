import { Request, Response } from "express"
import { getAllTasksService } from "./tasksService.js"

  
export const getAllTasksController = async (req:Request, res:Response) => {
    try{
        const tasksFromGetAllTasksService = await getAllTasksService ()
        return tasksFromGetAllTasksService
    }catch{
        
    }
}