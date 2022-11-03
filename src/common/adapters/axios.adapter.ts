import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios'
import { HttpAdapter } from './../interfaces/http-adapter.interface';


//envltorio del codigo por si axios cambia solo tenga que cambiar 
//implenta la interfase la httpadapter
@Injectable()
export class AxiosAdapter implements HttpAdapter {
   
    private axios: AxiosInstance = axios;

    async get<T>(url: string): Promise<T> {
        //aca de hizo la destruturacion del dato
        try {
            const { data } = await this.axios.get<T>( url );
            return data;

        } catch (error) {
            
            throw new Error('This is an error - Check logs');
        }

    }

}
