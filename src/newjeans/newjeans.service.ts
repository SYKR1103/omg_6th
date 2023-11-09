import { Injectable } from '@nestjs/common';
import { CreateNewjeanDto } from './dto/create-newjean.dto';
import { UpdateNewjeanDto } from './dto/update-newjean.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Newjean } from './entities/newjean.entity';
import { Repository } from 'typeorm';
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';

@Injectable()
export class NewjeansService {

    constructor(

      @InjectRepository(Newjean)
      private newjeans: Repository<Newjean>
    ) {}

      async createProduct(item :CreateNewjeanDto) {
        const newproduct = await this.newjeans.create(item)
        await this.newjeans.save(newproduct)
        return newproduct
      }

      async getProducts() {
        return this.newjeans.find()
      }

      async getProductById(id:string) {
        const foundproduct = await this.newjeans.findOneBy({id})
        if (foundproduct) return {foundproduct}
        throw new HttpException("not found", HttpStatus.NOT_FOUND)
      }

      async updateProductId(id:string,item :CreateNewjeanDto ) {
        await this.newjeans.update(id, item)
        const updatedproduct = await this.newjeans.findOneBy({id})
        if (updatedproduct) {return updatedproduct}
        throw new HttpException("whhhh", HttpStatus.NOT_FOUND)
      }

      async deleteProductId(id:string) {

        const deleteresponse = await this.newjeans.delete(id)
        console.log("what")
        if (!deleteresponse.affected) { throw new HttpException("WHATTT", HttpStatus.NOT_FOUND)}
        return "deleted"
      }

}
