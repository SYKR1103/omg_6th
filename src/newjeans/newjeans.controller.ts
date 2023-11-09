import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NewjeansService } from './newjeans.service';
import { CreateNewjeanDto } from './dto/create-newjean.dto';
import { UpdateNewjeanDto } from './dto/update-newjean.dto';

@Controller('newjeans')
export class NewjeansController {
  constructor(private readonly newjeansService: NewjeansService) {}

  @Post()
  create(@Body() createNewjeanDto: CreateNewjeanDto) {
    return this.newjeansService.create(createNewjeanDto);
  }

  @Get()
  findAll() {
    return this.newjeansService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.newjeansService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNewjeanDto: UpdateNewjeanDto) {
    return this.newjeansService.update(+id, updateNewjeanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.newjeansService.remove(+id);
  }
}
