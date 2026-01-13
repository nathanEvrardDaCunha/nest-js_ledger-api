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
            save: jest.fn(),
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

    describe('findOne()', () => {
        it.failing('should return null when user does not exist', async () => {});

        it.failing('should return user data when user exists', async () => {});

        it.failing('should throw error when repository throws error', async () => {});

        it.failing('should map repository entity to DTO correctly', async () => {});
    });

    describe('create()', () => {
        it.failing('should throw ConflictException when user already exists', async () => {});

        it.failing('should create user and return success message', async () => {});

        it.failing('should hash password before saving', async () => {});

        it.failing('should throw InternalServerErrorException on database failure', async () => {});
    });
});
