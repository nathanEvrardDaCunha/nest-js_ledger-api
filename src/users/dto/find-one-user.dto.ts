import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

// todo: implement user data base response interface
export class FindOneUser extends PartialType(CreateUserDto) {}
