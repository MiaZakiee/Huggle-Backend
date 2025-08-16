import { PartialType } from '@nestjs/swagger';
import { CreateFollowedstoreDto } from './create-followedstore.dto';

export class UpdateFollowedstoreDto extends PartialType(
  CreateFollowedstoreDto,
) {}
