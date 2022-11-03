import { Module } from '@nestjs/common';
import { AxiosAdapter } from './adapters/axios.adapter';

@Module({
//deifnicio el axionAdapter y exportarlo
    providers:[ AxiosAdapter],
    exports:[AxiosAdapter]
})
export class CommonModule {}
