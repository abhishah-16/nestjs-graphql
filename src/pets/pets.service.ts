import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pet } from './pets.entity';

@Injectable()
export class PetsService {
    constructor(@InjectRepository(Pet) private petrepo: Repository<Pet>) { }

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
}
