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

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    describe('findOne()', () => {
        it('should be defined', () => {
            expect(service.findOne).toBeDefined();
        });

        it('should return null when no user was found', () => {
            const id = 1;
            mockUsersRepository.findById.mockReturnValue(null);

            const response = service.findOne(id);

            expect(mockUsersRepository.findById).toHaveBeenCalledWith(id);
            expect(response).toBeNull();
        });

        it('should return a FindOneUser object if user was found', () => {
            const id = 0;
            const mockUser = new FindOneUser();
            mockUsersRepository.findById.mockReturnValue(mockUser);

            const response = service.findOne(id);

            expect(mockUsersRepository.findById).toHaveBeenCalledWith(id);
            expect(response).toBe(mockUser);
            expect(response).toBeInstanceOf(FindOneUser);
        });
    });
});
