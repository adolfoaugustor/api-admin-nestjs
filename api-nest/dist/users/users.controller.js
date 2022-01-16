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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const create_user_dto_1 = require("./dto/create-user.dto");
const users_service_1 = require("./users.service");
const passport_1 = require("@nestjs/passport");
const user_roles_enum_1 = require("./user-roles.enum");
const role_decorator_1 = require("../auth/role.decorator");
const roles_guard_1 = require("../auth/roles.guard");
const update_user_dto_1 = require("./dto/update-user.dto");
const user_entity_1 = require("./user.entity");
const get_user_decorator_1 = require("../auth/get-user.decorator");
const find_users_query_dto_1 = require("./dto/find-users-query.dto");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async createAdminUser(createUserDto) {
        const user = await this.usersService.createAdminUser(createUserDto);
        return {
            user,
            message: 'Administrador cadastrado com sucesso',
        };
    }
    async findUserById(id) {
        const user = await this.usersService.findUserById(id);
        return {
            user,
            message: 'Usuário encontrado',
        };
    }
    async updateUser(updateUserDto, user, id) {
        if (user.role != user_roles_enum_1.UserRole.ADMIN && user.id.toString() != id) {
            throw new common_1.ForbiddenException('Você não tem autorização para acessar esse recurso');
        }
        else {
            return this.usersService.updateUser(updateUserDto, id);
        }
    }
    async deleteUser(id) {
        await this.usersService.deleteUser(id);
        return {
            message: 'Usuário removido com sucesso',
        };
    }
    async findUsers(query) {
        const found = await this.usersService.findUsers(query);
        return {
            found,
            message: 'Usuários encontrados',
        };
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, role_decorator_1.Role)(user_roles_enum_1.UserRole.ADMIN),
    __param(0, (0, common_1.Body)(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "createAdminUser", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, role_decorator_1.Role)(user_roles_enum_1.UserRole.ADMIN),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findUserById", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Body)(common_1.ValidationPipe)),
    __param(1, (0, get_user_decorator_1.GetUser)()),
    __param(2, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_user_dto_1.UpdateUserDto,
        user_entity_1.User, String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, role_decorator_1.Role)(user_roles_enum_1.UserRole.ADMIN),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "deleteUser", null);
__decorate([
    (0, common_1.Get)(),
    (0, role_decorator_1.Role)(user_roles_enum_1.UserRole.ADMIN),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_users_query_dto_1.FindUsersQueryDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findUsers", null);
UsersController = __decorate([
    (0, common_1.Controller)('users'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)(), roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map