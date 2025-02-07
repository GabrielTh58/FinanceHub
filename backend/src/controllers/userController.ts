import { Request, Response } from "express";
import { UserRepository } from "../models/UserRepositories";

export default class UserController{
    private repo: UserRepository;
    constructor() {
        this.repo = new UserRepository();
    }
    async create(req: Request, res: Response) {
        try{
            const user = req.body

            if(!user.name || !user.email || !user.password){
                return res.status(400).json({error: "All fields are required"})
            }

            if(user){
                const newUser = await this.repo.create(user)
                return res.status(201).send(newUser)
            }
        }catch(e:any){
            console.error("Error creating user:", e);
            return res.status(400).json({ error: e.message })
        }
    }
}