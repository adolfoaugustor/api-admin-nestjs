import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { ReturnUserDto } from './dto/return-user.dto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    createAdminUser(createUserDto: CreateUserDto): Promise<ReturnUserDto>;
}
