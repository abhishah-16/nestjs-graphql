import { Field, ID, Int, ObjectType } from "@nestjs/graphql"
import { Owner } from "../owners/entities/owner.entity"
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

@ObjectType()
@Entity()
export class Pet {
    @PrimaryGeneratedColumn()
    @Field(type => Int)
    id: number

    @Column()
    @Field()
    name: string

    @Column({ nullable: true })
    @Field({ nullable: true })
    type?: string

    @Column()
    @Field(type => ID)
    ownerId: number

    @ManyToOne(() => Owner, owner => owner.pets)
    @Field(type => Owner)
    owner: Owner
}