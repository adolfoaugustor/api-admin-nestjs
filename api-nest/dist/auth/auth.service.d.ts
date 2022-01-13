import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { User } from '../users/user.entity';
import { UserRepository } from '../users/users.repository';
import { CredentialsDto } from './dto/credentials.dto';
export declare class AuthService {
    private userRepository;
    private jwtService;
    constructor(userRepository: UserRepository, jwtService: JwtService);
    signUp(createUserDto: CreateUserDto): Promise<User>;
    signIn(credentialsDto: CredentialsDto): Promise<{
        token: string;
    }>;
}
