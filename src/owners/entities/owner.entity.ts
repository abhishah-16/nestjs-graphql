import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Pet } from '../../pets/pets.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Owner {

  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number

  @Column()
  @Field()
  name: string

  @Column()
  @Field()
  email: string

  @OneToMany(() => Pet, pet => pet.owner)
  @Field(type => [Pet], { nullable: true })
  pets: Pet[]

}
