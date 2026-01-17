import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { FindOneUser } from '../dto/find-one-user.dto';
import { CreateUserDto } from '../dto/create-user.dto';

// design: this file will be deleted and replaced by the database when implemented.
// design: no test should be performed because this file is temporary.
@Injectable()
export class UsersRepository {
    private users: CreateUserDto[] = [];

    findById(id: number): FindOneUser | null {
        if (this.users[id]) {
            return this.users[id];
        }
        return null;
    }

    // Should add data validation one day.
    async create(user: CreateUserDto): Promise<CreateUserDto> {
        try {
            this.users.push(user);
            return user;
        } catch (error) {
            throw new InternalServerErrorException();
        }
    }
}
