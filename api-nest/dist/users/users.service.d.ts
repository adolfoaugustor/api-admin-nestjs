import { CreateUserDto } from './dto/create-user.dto';
import { FindUsersQueryDto } from './dto/find-users-query.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.entity';
import { UserRepository } from './users.repository';
export declare class UsersService {
    private userRepository;
    constructor(userRepository: UserRepository);
    createAdminUser(createUserDto: CreateUserDto): Promise<User>;
    findUserById(userId: string): Promise<User>;
    updateUser(updateUserDto: UpdateUserDto, id: string): Promise<User>;
    deleteUser(userId: string): Promise<void>;
    findUsers(queryDto: FindUsersQueryDto): Promise<{
        users: User[];
        total: number;
    }>;
}
