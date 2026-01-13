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

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    describe('findOne()', () => {
        it('should be defined', () => {
            expect(controller.findOne).toBeDefined();
        });

        // suggestion: in the future, replace the returned string by custom Error or API response instead.
        it('should return a negative string when user was not found', () => {
            mockUsersService.findOne.mockReturnValue(null);

            const result = controller.findOne(0);

            expect(mockUsersService.findOne).toHaveBeenCalledWith(0);
            //todo: replace with proper API reponse.
            expect(result).toBe('missing user.');
        });

        // suggestion: in the future, replace the returned string by custom Error or API response instead.
        it('should return a affirmative string when user is found', () => {
            const mockUser = new FindOneUser();
            mockUsersService.findOne.mockReturnValue(mockUser);

            const result = controller.findOne(0);

            expect(mockUsersService.findOne).toHaveBeenCalledWith(0);
            //todo: replace with proper API reponse.
            expect(result).toBe('user found !');
        });
    });

    describe('create()', () => {
        it.todo('should be defined');

        // suggestion: in the future, replace the returned string by custom Error or API response instead.
        //todo: replace with proper API reponse.
        it.todo('should return a negative string when user already exist');

        // suggestion: in the future, replace the returned string by custom Error or API response instead.
        //todo: replace with proper API reponse.
        it.todo('should return a negative string when user already exist');
    });
});
