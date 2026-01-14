import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { FindOneUser } from './dto/find-one-user.dto';
import { UsersRepository } from './entities/UsersRepository';

@Injectable()
export class UsersService {
    constructor(private usersRepository: UsersRepository) {}

    findOne(id: number): FindOneUser | null {
        const user = this.usersRepository.findById(id);
        if (user) {
            return user;
        }
        return null;
    }

    async create() {
        try {
            return await this.usersRepository.create();
        } catch (error) {
            // console.error('Database error:', error);
            // suggestion: handle the error graacefully.
            throw error;
        }
    }
}
