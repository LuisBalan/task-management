import { Module } from "@nestjs/common";
import { TypeOrmExModule } from "./typeorm-ex.module";
import { UserRepository } from "./user.repository";
import { UserService } from "../services/user.service";

@Module({
  exports: [UserService],
  imports: [TypeOrmExModule.forCustomRepository([UserRepository])],
  providers: [UserService],
})
export class UserModule {}