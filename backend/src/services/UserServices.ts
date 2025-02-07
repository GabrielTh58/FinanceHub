import { UserRepository } from "../models/UserRepositories";
import bcrypt from "bcrypt";
export default class UserServices {
    private repo: UserRepository

    constructor() {
        this.repo = new UserRepository();
    }

    async create(email: string, password: string, name: string) {
        const existingUser = await this.repo.findByEmail(email);

        if (existingUser) {
            throw new Error("User already exists.");
        }

        if(password.length < 6){
            throw new Error("Password must be at least 8 characters long.");
        }

        const hashedPassword = await bcrypt.hash(password, 10); 
    }
    
}