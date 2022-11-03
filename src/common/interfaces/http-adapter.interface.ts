

//definicion de lo que se necsita una clase adpatadora
//pára que se pueda utilzar 
export interface HttpAdapter {
    get<T>( url: string ): Promise<T>;
}