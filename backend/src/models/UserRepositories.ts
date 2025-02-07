import { PrismaClient } from "@prisma/client";
import { User } from "../core/users/User";
import { Password } from "../core/shared/Password";

export class UserRepository {
    private prisma = new PrismaClient();

    async create(user: User): Promise<User> {
        const hashedPassword = Password.hashPassword(user.password)

        return await this.prisma.user.create({
            data: {
                name: user.name,
                email: user.email,
                password: hashedPassword,
            }
        })
    }

    async findById(id: number): Promise<User | null> {
        return await this.prisma.user.findUnique({
            where: { id }
        })
    }

    async findByEmail(email:string): Promise<User | null> {
        return await this.prisma.user.findUnique({
            where: {
                email: email
            }
        })
    }

    async update(id: number, data: Partial<User>): Promise<User> {
        return await this.prisma.user.update({
           where: { id },
           data
        })
    }

    async delete(id: number): Promise<User> {
        return await this.prisma.user.delete({
            where: { id }
        })
    }
}