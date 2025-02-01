import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:rootpassword@localhost:27017'),
  ],
  controllers: [AppController],
})
export class AppModule {}
