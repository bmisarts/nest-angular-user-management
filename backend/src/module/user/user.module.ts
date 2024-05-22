import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { DbService } from 'src/config/db/db.service';
import { UserFakers } from './fakers/user.fakers';
import { JsonResponse } from 'src/helpers/json-response';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schema/user.schema';

@Module({
  controllers: [UserController],
  imports: [
    MongooseModule.forFeature([{name: 'User', schema: UserSchema}])
  ],
  providers: [UserService,DbService,UserFakers,JsonResponse],
  exports: [UserFakers]
})
export class UserModule {}
