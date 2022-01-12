import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './user.entity';
import { UserRepository } from './users.repository';
export declare class UsersService {
    private userRepository;
    constructor(userRepository: UserRepository);
    createAdminUser(createUserDto: CreateUserDto): Promise<User>;
}
