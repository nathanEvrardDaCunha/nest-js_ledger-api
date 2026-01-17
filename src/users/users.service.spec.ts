import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { FindOneUser } from './dto/find-one-user.dto';
import { UsersRepository } from './entities/UsersRepository';
import { InternalServerErrorException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

describe('UsersService', () => {
    let service: UsersService;
    let mockUsersRepository: jest.Mocked<UsersRepository>;

    beforeEach(async () => {
        mockUsersRepository = {
            findById: jest.fn(),
            findAll: jest.fn(),
            create: jest.fn(),
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

    // question: where do I validate the Body data ?
    describe('create()', () => {
        it('should throw InternalServerErrorException on database failure', async () => {
            mockUsersRepository.create.mockRejectedValue(
                new InternalServerErrorException('Database connection failed !'),
            );

            let result = service.create();

            await expect(result).rejects.toThrow('Database connection failed !');
        });

        it.todo('should throw ConflictException when user already exists');

        it.todo('should hash password before saving');

        it('should create user and return user data', async () => {
            const mockUser = {
                firstname: 'Nathan',
                lastname: 'EVRARD',
                email: 'nathan.evrard@gmail.com',
                password: 'Azerty11!',
            } satisfies CreateUserDto;
            mockUsersRepository.create.mockReturnValue(Promise<mockUser>);

            let result = service.create();
            // Check user has been pushed to array

            expect(result).toBe(mockUser);
        });
    });

    describe('findOne()', () => {
        it.todo('should throw InternalServerErrorException on database failure');

        it.todo('should throw NotFoundException when user is not found');

        it.todo('should throw BadRequestException when user ID is invalid');

        it.todo('should exclude sensitive fields from returned data');

        it.todo('should return user data when user is found');
    });

    describe('findAll()', () => {
        it.todo('should throw InternalServerErrorException on database failure');

        it.todo('should exclude sensitive fields from returned data');

        it.todo('should return empty array when no users exist');

        it.todo('should return users data when users are found');
    });

    describe('update()', () => {
        it.todo('should throw InternalServerErrorException on database failure');

        it.todo('should throw NotFoundException when user is not found');

        it.todo('should throw BadRequestException when update data is invalid');

        it.todo('should hash password if password is being updated');

        it.todo('should not update immutable fields');

        it.todo('should update user and return updated user data');
    });

    describe('delete()', () => {
        it.todo('should throw InternalServerErrorException on database failure');

        it.todo('should throw NotFoundException when user is not found');

        it.todo('should throw BadRequestException when ID is invalid');

        it.todo('should delete user and return void');
    });
});
