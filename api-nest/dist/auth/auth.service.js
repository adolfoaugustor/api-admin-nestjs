"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const user_roles_enum_1 = require("../users/user-roles.enum");
const users_repository_1 = require("../users/users.repository");
let AuthService = class AuthService {
    constructor(userRepository, jwtService) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
    }
    async signUp(createUserDto) {
        if (createUserDto.password != createUserDto.passwordConfirmation) {
            throw new common_1.UnprocessableEntityException('As senhas não conferem');
        }
        else {
            return await this.userRepository.createUser(createUserDto, user_roles_enum_1.UserRole.USER);
        }
    }
    async signIn(credentialsDto) {
        const user = await this.userRepository.checkCredentials(credentialsDto);
        if (user === null) {
            throw new common_1.UnauthorizedException('Credenciais inválidas');
        }
        const jwtPayload = {
            id: user.id,
        };
        const token = await this.jwtService.sign(jwtPayload);
        return { token };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(users_repository_1.UserRepository)),
    __metadata("design:paramtypes", [users_repository_1.UserRepository,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map