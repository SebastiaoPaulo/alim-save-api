import { Injectable } from '@nestjs/common';
import { CreateBagDto } from './dto/create-bag.dto';
// import { UpdateBagDto } from './dto/update-bag.dto';
import { Bag } from './entities/bag.entity';
import { GenericService } from 'src/utils/generics/service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BagService extends GenericService<Bag, CreateBagDto> {
  constructor(
    @InjectRepository(Bag) private bagRepository: Repository<Bag>,
    private bag: Bag,
  ) {
    super(bagRepository, bag);
  }

  // create(createBagDto: CreateBagDto) {
  //   return 'This action adds a new bag';
  // }

  // findAll() {
  //   return `This action returns all bag`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} bag`;
  // }

  // update(id: number, updateBagDto: UpdateBagDto) {
  //   return `This action updates a #${id} bag`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} bag`;
  // }
}
