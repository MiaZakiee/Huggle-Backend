import { PartialType } from '@nestjs/swagger';
import { CreateLikedpostDto } from './create-likedpost.dto';

export class UpdateLikedpostDto extends PartialType(CreateLikedpostDto) {}
