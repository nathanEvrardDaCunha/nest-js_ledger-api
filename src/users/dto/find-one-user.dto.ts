import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class FindOneUser extends PartialType(CreateUserDto) {
    // todo: implement user data base response interface
}
