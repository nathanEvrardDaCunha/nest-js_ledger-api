import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { FindOneUser } from './dto/find-one-user.dto';
import { UsersRepository } from './entities/UsersRepository';

@Injectable()
export class UsersService {
    constructor(private usersRepository: UsersRepository) {}

    // create(createUserDto: CreateUserDto) {
    //   return 'This action adds a new user';
    // }
    // findAll() {
    //   return `This action returns all users`;
    // }
    // findOne(id: number) {
    //   return `This action returns a #${id} user`;
    // }
    // update(id: number, updateUserDto: UpdateUserDto) {
    //   return `This action updates a #${id} user`;
    // }
    // remove(id: number) {
    //   return `This action removes a #${id} user`;
    // }

    findOne(id: number): FindOneUser | null {
        // if (id === 0) {
        //     const foundUser: FindOneUser = new FindOneUser();
        //     return foundUser;
        // }
        // return null;
        return this.usersRepository.findById(id);
    }
}
