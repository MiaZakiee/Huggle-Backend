import { PartialType } from '@nestjs/swagger';
import { CreatePushtokenDto } from './create-pushtoken.dto';

export class UpdatePushtokenDto extends PartialType(CreatePushtokenDto) {}
