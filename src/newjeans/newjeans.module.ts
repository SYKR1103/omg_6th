import { Module } from '@nestjs/common';
import { NewjeansService } from './newjeans.service';
import { NewjeansController } from './newjeans.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Newjean } from './entities/newjean.entity';

@Module({
  imports : [TypeOrmModule.forFeature([Newjean])],
  controllers: [NewjeansController],
  providers: [NewjeansService],
})
export class NewjeansModule {}
