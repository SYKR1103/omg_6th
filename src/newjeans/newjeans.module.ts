import { Module } from '@nestjs/common';
import { NewjeansService } from './newjeans.service';
import { NewjeansController } from './newjeans.controller';

@Module({
  controllers: [NewjeansController],
  providers: [NewjeansService],
})
export class NewjeansModule {}
