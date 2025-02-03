import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {AppController} from './app.controller';
import {UsersModule} from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:rootpassword@localhost:27017'),
    UsersModule,
  ],
  controllers: [AppController],
})
export class AppModule {
}
