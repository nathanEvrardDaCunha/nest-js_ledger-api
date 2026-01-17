UserControler

// constructor(private readonly usersService: UsersService) {}
// @Post()
// create(@Body() createUserDto: CreateUserDto) {
//   return this.usersService.create(createUserDto);
// }
// @Get()
// findAll() {
//   return this.usersService.findAll();
// }
// @Get(':id')
// findOne(@Param('id') id: string) {
//   return this.usersService.findOne(+id);
// }
// @Patch(':id')
// update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
//   return this.usersService.update(+id, updateUserDto);
// }
// @Delete(':id')
// remove(@Param('id') id: string) {
//   return this.usersService.remove(+id);
// }

UserService

// create(createUserDto: CreateUserDto) {
//   return 'This action adds a new user';
// }
// findAll() {
//   return `This action returns all users`;
// }
// findOne(id: number) {
//   return `This action returns a #${id} user`;
// }
// update(id: number, updateUserDto: UpdateUserDto) {
//   return `This action updates a #${id} user`;
// }
// remove(id: number) {
//   return `This action removes a #${id} user`;
// }

// if (id === 0) {
//     const foundUser: FindOneUser = new FindOneUser();
//     return foundUser;
// }
// return null;


----------

### Tests Users Controller:
```ts
    describe('findOne()', () => {
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
```

### Tests Users Service:
```ts
   describe('findOne()', () => {
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
```




