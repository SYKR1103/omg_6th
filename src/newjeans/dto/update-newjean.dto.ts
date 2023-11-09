import { PartialType } from '@nestjs/mapped-types';
import { CreateNewjeanDto } from './create-newjean.dto';

export class UpdateNewjeanDto extends PartialType(CreateNewjeanDto) {}
