import { Query, Resolver } from '@nestjs/graphql';
import { Pet } from './pets.entity';
import { PetsService } from './pets.service';

@Resolver(of => Pet)
export class PetsResolver {
    constructor(private petservice: PetsService) { }

    @Query(returns => [Pet])
    pets() {
        return this.petservice.findall()
    }
}
