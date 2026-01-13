import { Injectable } from '@nestjs/common';
import { FindOneUser } from '../dto/find-one-user.dto';

// design: this file will be deleted and replaced by the database when implemented.
// design: no test should be performed because this file is temporary.
@Injectable()
export class UsersRepository {
    private users: FindOneUser[] = [];

    findById(id: number): FindOneUser | null {
        if (this.users[id]) {
            return this.users[id];
        }
        return null;
    }
}
