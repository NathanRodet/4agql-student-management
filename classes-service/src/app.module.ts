import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Classes } from './classes/entities/classes.entity';
import { ClassesModule } from './classes/classes.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: true,
      sortSchema: true,
      driver: ApolloDriver,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5434,
      username: 'postgres',
      password: 'password',
      database: 'postgres',
      entities: [Classes],
      synchronize: true,
    }),
    ClassesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }