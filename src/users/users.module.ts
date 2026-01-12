import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersRepository } from './entities/UsersRepository';

@Module({
    controllers: [UsersController],
    providers: [UsersService, UsersRepository],
})
export class UsersModule {}
