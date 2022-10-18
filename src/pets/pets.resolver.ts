import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
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

    @Mutation(() => Pet)
    createProject(@Args('createProjectInput') createPetInput: CreatePetInput) {
        return this.petservice.createPet(createPetInput)
    }
}
