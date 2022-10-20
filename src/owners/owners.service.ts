import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOwnerInput } from './dto/create-owner.input';
import { Owner } from './entities/owner.entity';

@Injectable()
export class OwnersService {

  constructor(@InjectRepository(Owner) private ownerRepo: Repository<Owner>) { }

  create(createOwnerInput: CreateOwnerInput) {
    const newOwner = this.ownerRepo.create(createOwnerInput)
    return this.ownerRepo.save(newOwner)
  }

  findAll() {
    const owners = this.ownerRepo.find({
      relations: ['pets']
    })
    return owners
  }

  findOne(id: number) {
    const owner = this.ownerRepo.findOneOrFail({ where: { id } })
    return owner
  }
}
