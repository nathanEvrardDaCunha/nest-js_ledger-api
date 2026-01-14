import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { FindOneUser } from './dto/find-one-user.dto';
import { UsersRepository } from './entities/UsersRepository';

describe('UsersService', () => {
    let service: UsersService;
    let mockUsersRepository: jest.Mocked<UsersRepository>;

    beforeEach(async () => {
        mockUsersRepository = {
            findById: jest.fn(),
            findAll: jest.fn(),
            save: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
        } as jest.Mocked<Partial<UsersRepository>> as jest.Mocked<UsersRepository>;

        const module: TestingModule = await Test.createTestingModule({
            providers: [
                UsersService,
                {
                    provide: UsersRepository,
                    useValue: mockUsersRepository,
                },
            ],
        }).compile();

        service = module.get<UsersService>(UsersService);
    });

    describe('create()', () => {
        it.failing('should throw InternalServerErrorException on database failure', async () => {});

        it.failing('should throw ConflictException when user already exists', async () => {});

        it.failing('should throw BadRequestException when creation data is invalid', async () => {});

        it.failing('should hash password before saving', async () => {});

        it.failing('should create user and return user data', async () => {});
    });

    describe('findOne()', () => {
        it.failing('should throw InternalServerErrorException on database failure', async () => {});

        it.failing('should throw NotFoundException when user is not found', async () => {});

        it.failing('should throw BadRequestException when user ID is invalid', async () => {});

        it.failing('should exclude sensitive fields from returned data', async () => {});

        it.failing('should return user data when user is found', async () => {});
    });

    describe('findAll()', () => {
        it.failing('should throw InternalServerErrorException on database failure', async () => {});

        it.failing('should exclude sensitive fields from returned data', async () => {});

        it.failing('should return empty array when no users exist', async () => {});

        it.failing('should return users data when users are found', async () => {});
    });

    describe('update()', () => {
        it.failing('should throw InternalServerErrorException on database failure', async () => {});

        it.failing('should throw NotFoundException when user is not found', async () => {});

        it.failing('should throw BadRequestException when update data is invalid', async () => {});

        it.failing('should hash password if password is being updated', async () => {});

        it.failing('should update user and return updated user data', async () => {});
    });

    describe('delete()', () => {
        it.failing('should throw InternalServerErrorException on database failure', async () => {});

        it.failing('should throw NotFoundException when user is not found', async () => {});

        it.failing('should throw BadRequestException when ID is invalid', async () => {});

        it.failing('should delete user and return void', async () => {});
    });
});
