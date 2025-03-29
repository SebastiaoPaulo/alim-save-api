import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { BagModule } from './bag/bag.module';
import { OrderModule } from './order/order.module';
import { EstablishmentModule } from './establishment/establishment.module';
// import { DatabaseConfig } from './database';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bag } from './bag/entities/bag.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as any,
      host: process.env.PG_HOST,
      port: parseInt(process.env.PG_PORT),
      username: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DB,
      entities: [Bag],
      synchronize: true,
    }),
    UsersModule,
    BagModule,
    OrderModule,
    EstablishmentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
