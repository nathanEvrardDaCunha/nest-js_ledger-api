import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { FindOneUser } from './dto/find-one-user.dto';
import { UsersRepository } from './entities/UsersRepository';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    constructor(private usersRepository: UsersRepository) {}

    findOne(id: number): FindOneUser | null {
        // Will probably need to implement try/catch
        const user = this.usersRepository.findById(id);
        if (user) {
            return user;
        }
        return null;
    }

    // user: CreateUserDto
    // console.error('Database error:', error);
    // suggestion: handle the error graacefully.
    async create() {
        try {
            const user = {
                firstname: 'Nathan',
                lastname: 'EVRARD',
                email: 'nathan.evrard@gmail.com',
                password: 'Azerty11!',
            } satisfies CreateUserDto;

            return await this.usersRepository.create(user);
        } catch (error) {
            throw error;
        }
    }
}
