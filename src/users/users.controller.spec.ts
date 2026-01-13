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

    describe('findOne()', () => {
        it.failing('should return 404 when user is not found', async () => {});

        it.failing('should return 200 with user data when user is found', async () => {});

        it.failing('should return 400 when ID is invalid', async () => {});

        it.failing('should return 500 when service throws unexpected error', async () => {});
    });

    describe('create()', () => {
        it.failing('should return 201 and success message when user is created', async () => {});

        it.failing('should return 409 when user already exists', async () => {});

        it.failing('should return 400 when validation fails', async () => {});

        it.failing('should return 500 when unexpected error occurs', async () => {});
    });
});
