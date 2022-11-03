import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { throws } from 'assert';
import { Model } from 'mongoose';
import { async } from 'rxjs';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { PokeResponse } from './interfaces/poke-response.interface';


@Injectable()
export class SeedService {

constructor(
   
  @InjectModel( Pokemon.name )
  private readonly pokemonModel: Model<Pokemon>,
  private readonly http: AxiosAdapter,
){}

 async executeSeed(){
  await this.pokemonModel.deleteMany({});//delete * from pokemon

//ya no se destructura la data
   const data= await this.http.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=650');
    //insertar promesas  multiples insercciones
  //const inserPromisesArray = [];
  //arreglo para insertar 
  const pokemonToInsert:{name: string, no : number }[] = [];

    data.results.forEach(({name, url})=> {

    const segments = url.split('/');
    const no = +segments [segments.length - 2];
 //inserccion lo busque en pokeomon services para insertar
   // const pokemon = await this.pokemonModel.create( {name, no} );
     
   pokemonToInsert.push( {name, no} ); //arreglo
    });

    //espera que todas la promeses se inserten hace todas las insersiones de manera sinmultanea
  // await Promise.all(inserPromisesArray);
  
  
  //inserta el arreglo con muchas entradas
 await this.pokemonModel.insertMany(pokemonToInsert);
    return 'seed ejecutado';
  }
}
