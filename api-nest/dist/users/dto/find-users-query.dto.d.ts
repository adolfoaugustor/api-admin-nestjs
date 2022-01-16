import { BaseQueryParametersDto } from "src/share/dto/base-query-parameters.dto";
export declare class FindUsersQueryDto extends BaseQueryParametersDto {
    name: string;
    email: string;
    status: boolean;
    role: string;
}
