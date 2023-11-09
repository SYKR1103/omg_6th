import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewjeansModule } from './newjeans/newjeans.module';

@Module({
  imports: [NewjeansModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
