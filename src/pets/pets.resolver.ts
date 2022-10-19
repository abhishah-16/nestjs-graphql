import { Args, ID, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Owner } from 'src/owners/entities/owner.entity';
import { CreatePetInput } from './dto/create-project.dto';
import { Pet } from './pets.entity';
import { PetsService } from './pets.service';

@Resolver(of => Pet)
export class PetsResolver {
    constructor(private petservice: PetsService) { }

    @Query(returns => [Pet])
    pets() {
        return this.petservice.findall()
    }

    @Query(returns => Pet)
    pet(@Args('id', { type: () => ID }) id: number) {
        return this.petservice.findone(id)
    }

    @ResolveField(returns => Owner)
    owner(@Parent() pet: Pet) {
        return this.petservice.getOwner(pet.ownerId)
    }

    @Mutation(() => Pet)
    addPet(@Args('createProjectInput') createPetInput: CreatePetInput) {
        return this.petservice.createPet(createPetInput)
    }
}
