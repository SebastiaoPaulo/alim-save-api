import { Module } from '@nestjs/common';
import { BagService } from './bag.service';
import { BagController } from './bag.controller';
import { GenericsModule } from 'src/utils/generics/generics.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bag } from './entities/bag.entity';

@Module({
  imports: [GenericsModule, TypeOrmModule.forFeature([Bag])],
  controllers: [BagController],
  providers: [BagService],
})
export class BagModule {}
