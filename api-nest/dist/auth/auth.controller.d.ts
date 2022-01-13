import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { CredentialsDto } from './dto/credentials.dto';
import { User } from '../users/user.entity';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signUp(createUserDto: CreateUserDto): Promise<{
        message: string;
    }>;
    signIn(credentiaslsDto: CredentialsDto): Promise<{
        token: string;
    }>;
    getMe(user: User): User;
}
