import { Injectable } from '@nestjs/common';
import { FindOneUser } from '../dto/find-one-user.dto';

// design: this file will be deleted and replaced by the database when implemented.
@Injectable()
export class UsersRepository {
    // deisgn: in-memory storage
    private users: FindOneUser[] = [];

    findById(id: number): FindOneUser | null {
        if (this.users[id]) {
            return this.users[id];
        }
        return null;
    }
}

// save(user: FindOneUser): void {
//     this.users.push(user);
// }
