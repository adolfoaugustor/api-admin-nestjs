import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRole } from './user-roles.enum';
import { CredentialsDto } from 'src/auth/dto/credentials.dto';
import { FindUsersQueryDto } from './dto/find-users-query.dto';
export declare class UserRepository extends Repository<User> {
    findUsers(queryDto: FindUsersQueryDto): Promise<{
        users: User[];
        total: number;
    }>;
    createUser(createUserDto: CreateUserDto, role: UserRole): Promise<User>;
    checkCredentials(credentialsDto: CredentialsDto): Promise<User>;
    private hashPassword;
}
