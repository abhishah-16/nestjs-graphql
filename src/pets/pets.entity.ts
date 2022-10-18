import { Field, Int, ObjectType } from "@nestjs/graphql"
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

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
}