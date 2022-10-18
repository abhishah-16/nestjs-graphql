import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetsModule } from './pets/pets.module';
import { ApolloDriver } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core'

@Module({
  imports: [GraphQLModule.forRoot({
    playground: false,
    plugins: [ApolloServerPluginLandingPageLocalDefault],
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    driver: ApolloDriver,
  }),
    PetsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
