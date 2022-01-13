import { UserRepository } from '../users/users.repository';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private userRepository;
    constructor(userRepository: UserRepository);
    validate(payload: {
        id: number;
    }): Promise<import("../users/user.entity").User>;
}
export {};
