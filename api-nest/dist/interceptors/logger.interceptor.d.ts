import { NestInterceptor, CallHandler, ExecutionContext } from '@nestjs/common';
import { Logger } from 'winston';
import { Observable } from 'rxjs';
export declare class LoggerInterceptor implements NestInterceptor {
    private logger;
    constructor(logger: Logger);
    intercept(context: ExecutionContext, next: CallHandler): Observable<any>;
    private log;
}
