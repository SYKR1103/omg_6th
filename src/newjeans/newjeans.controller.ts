import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NewjeansService } from './newjeans.service';
import { CreateNewjeanDto } from './dto/create-newjean.dto';
import { UpdateNewjeanDto } from './dto/update-newjean.dto';

@Controller('newjeans')
export class NewjeansController {
  constructor(private readonly newjeansService: NewjeansService) {}

  @Post()

  async createProduct(@Body() product : CreateNewjeanDto ) {
    return this.newjeansService.createProduct(product)
  }

  @Get("all")
  async getProducts()   {return this.newjeansService.getProducts()}

  @Get(':id')

  async getProductById(@Param("id") id:string)  {return this.newjeansService.getProductById(id)}

  @Patch(':id')
  async updateProductId(@Param("id") id:string, @Body() product : CreateNewjeanDto) {return this.newjeansService.updateProductId(id, product)}


  @Delete(':id')

  async deleteProductId(@Param("id") id:string) {return this.newjeansService.deleteProductId(id)}


}
