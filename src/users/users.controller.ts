import { Controller, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get(':id')
    findOne(@Param('id') id: number): string {
        if (this.usersService.findOne(+id)) {
            return 'user found !';
        }
        return 'missing user.';
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create() {
        return await this.usersService.create();
    }
}
