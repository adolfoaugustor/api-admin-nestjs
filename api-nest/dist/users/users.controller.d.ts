import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { ReturnUserDto } from './dto/return-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.entity';
import { FindUsersQueryDto } from './dto/find-users-query.dto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    createAdminUser(createUserDto: CreateUserDto): Promise<ReturnUserDto>;
    findUserById(id: any): Promise<ReturnUserDto>;
    updateUser(updateUserDto: UpdateUserDto, user: User, id: string): Promise<User>;
    deleteUser(id: string): Promise<{
        message: string;
    }>;
    findUsers(query: FindUsersQueryDto): Promise<{
        found: {
            users: User[];
            total: number;
        };
        message: string;
    }>;
}
