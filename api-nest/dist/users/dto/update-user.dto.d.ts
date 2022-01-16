import { UserRole } from '../user-roles.enum';
export declare class UpdateUserDto {
    name: string;
    email: string;
    role: UserRole;
    status: boolean;
}
