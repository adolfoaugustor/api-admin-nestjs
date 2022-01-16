"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const nest_winston_1 = require("nest-winston");
const app_module_1 = require("./app.module");
const wiston_configs_1 = require("./configs/wiston.configs");
async function bootstrap() {
    const logger = nest_winston_1.WinstonModule.createLogger(wiston_configs_1.winstonConfig);
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map