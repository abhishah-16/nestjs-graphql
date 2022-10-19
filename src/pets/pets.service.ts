import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OwnersService } from 'src/owners/owners.service';
import { Repository } from 'typeorm';
import { Pet } from './pets.entity';

@Injectable()
export class PetsService {
    constructor(
        @InjectRepository(Pet) private petrepo: Repository<Pet>,
        private ownerService: OwnersService) { }

    createPet(createPetInput) {
        const newpet = this.petrepo.create(createPetInput)
        return this.petrepo.save(newpet)
    }

    findall() {
        return this.petrepo.find()
    }

    findone(id: number) {
        const pet = this.petrepo.findOne({ where: { id } })
        return pet
    }

    getOwner(ownerid: number) {
        return this.ownerService.findOne(ownerid)
    }
}
