import { Module } from '@nestjs/common';
import { PetsService } from './pets.service';
import { PetsResolver } from './pets.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pet } from './pets.entity';
import { Owner } from 'src/owners/entities/owner.entity';
import { OwnersModule } from 'src/owners/owners.module';

@Module({
  imports: [TypeOrmModule.forFeature([Pet]), OwnersModule],
  providers: [PetsService, PetsResolver]
})
export class PetsModule { }
