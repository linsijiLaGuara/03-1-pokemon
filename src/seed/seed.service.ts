import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import axios, { AxiosInstance } from 'axios';
import { Model } from 'mongoose';
import { async } from 'rxjs';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { PokeResponse } from './interfaces/poke-response.interface';


@Injectable()
export class SeedService {
private readonly axios: AxiosInstance = axios;

constructor(
   
  @InjectModel( Pokemon.name )
  private readonly pokemonModel: Model<Pokemon>,
){}

 async executeSeed(){
   const {data}= await this.axios.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=1');
    
    data.results.forEach(async({name, url})=> {

    const segments = url.split('/');
    const no = +segments [segments.length - 2];
 //inserccion lo busque en pokeomon services para insertar
    const pokemon = await this.pokemonModel.create( {name, no} );

    })

    return 'seed ejecutado';
  }
}
