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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_roles_enum_1 = require("./user-roles.enum");
const users_repository_1 = require("./users.repository");
let UsersService = class UsersService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async createAdminUser(createUserDto) {
        if (createUserDto.password != createUserDto.passwordConfirmation) {
            throw new common_1.UnprocessableEntityException('As senhas não conferem');
        }
        else {
            return this.userRepository.createUser(createUserDto, user_roles_enum_1.UserRole.ADMIN);
        }
    }
    async findUserById(userId) {
        const user = await this.userRepository.findOne(userId, {
            select: ['email', 'name', 'role', 'id'],
        });
        if (!user)
            throw new common_1.NotFoundException('Usuário não encontrado');
        return user;
    }
    async updateUser(updateUserDto, id) {
        const user = await this.findUserById(id);
        const { name, email, role, status } = updateUserDto;
        user.name = name ? name : user.name;
        user.email = email ? email : user.email;
        user.role = role ? role : user.role;
        user.status = status === undefined ? user.status : status;
        try {
            await user.save();
            return user;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Erro ao salvar os dados no banco de dados');
        }
    }
    async deleteUser(userId) {
        const result = await this.userRepository.delete({ id: userId });
        if (result.affected === 0) {
            throw new common_1.NotFoundException('Não foi encontrado um usuário com o ID informado');
        }
    }
    async findUsers(queryDto) {
        const users = await this.userRepository.findUsers(queryDto);
        return users;
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(users_repository_1.UserRepository)),
    __metadata("design:paramtypes", [users_repository_1.UserRepository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map