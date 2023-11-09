import { Injectable } from '@nestjs/common';
import { CreateNewjeanDto } from './dto/create-newjean.dto';
import { UpdateNewjeanDto } from './dto/update-newjean.dto';

@Injectable()
export class NewjeansService {
  create(createNewjeanDto: CreateNewjeanDto) {
    return 'This action adds a new newjean';
  }

  findAll() {
    return `This action returns all newjeans`;
  }

  findOne(id: number) {
    return `This action returns a #${id} newjean`;
  }

  update(id: number, updateNewjeanDto: UpdateNewjeanDto) {
    return `This action updates a #${id} newjean`;
  }

  remove(id: number) {
    return `This action removes a #${id} newjean`;
  }
}
