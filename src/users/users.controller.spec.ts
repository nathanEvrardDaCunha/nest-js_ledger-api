import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { FindOneUser } from './dto/find-one-user.dto';

describe('UsersController', () => {
    let controller: UsersController;
    let mockUsersService: jest.Mocked<UsersService>;

    beforeEach(async () => {
        mockUsersService = {
            findOne: jest.fn(),
            create: jest.fn(),
            findAll: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
        } as jest.Mocked<Partial<UsersService>> as jest.Mocked<UsersService>;

        const module: TestingModule = await Test.createTestingModule({
            controllers: [UsersController],
            providers: [
                {
                    provide: UsersService,
                    useValue: mockUsersService,
                },
            ],
        }).compile();

        controller = module.get<UsersController>(UsersController);
    });

    describe('create()', () => {
        it.todo('should return 500 when unexpected error occurs');

        it.todo('should return 409 when user already exists');

        it.todo('should return 400 when validation fails');

        it.todo('should return 201 when user is created');
    });

    describe('findOne()', () => {
        it.todo('should return 500 when service throws unexpected error');

        it.todo('should return 404 when user is not found');

        it.todo('should return 400 when ID is invalid');

        it.todo('should return 200 when user is found');
    });

    describe('findAll()', () => {
        it.todo('should return 500 when service throws unexpected error');

        it.todo('should return 404 when no users are found');

        it.todo('should return 200 when users are found');
    });

    describe('update()', () => {
        it.todo('should return 500 when unexpected error occurs');

        it.todo('should return 422 when validation fails');

        it.todo('should return 404 when user is not found');

        it.todo('should return 200 when user is updated');
    });

    describe('delete()', () => {
        it.todo('should return 500 when unexpected error occurs');

        it.todo('should return 404 when user is not found');

        it.todo('should return 400 when ID is invalid');

        it.todo('should return 204 when user is deleted');
    });
});
