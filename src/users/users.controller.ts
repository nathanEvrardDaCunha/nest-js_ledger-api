import { Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    // question: should I use a Pipe on the Param to validate it ?
    @Get(':id')
    findOne(@Param('id') id: number): string {
        if (this.usersService.findOne(+id)) {
            return 'user found !';
        }
        return 'missing user.';
    }

    @Post()
    create() {}

    // question: should I use a Pipe on the Body to validate future DTO ?
}
