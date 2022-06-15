import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Usuario } from "./usuario.model";
import { UsuarioServices } from "./usuario.services";


@Controller('usuario')
export class UsuarioController{
    constructor(private usuarioServices: UsuarioServices){

    }

    @Get()
    async ObterTodos(): Promise<Usuario[]> {
        return this.usuarioServices.ObterTodos();  
    }

    @Get(':id')
    async ObterUm(@Param() params): Promise<Usuario> {
        return this.usuarioServices.ObterUm(params.id);
    }

    @Post('criar')
    criar(@Body() usuario: Usuario) {
        console.log('listando usuario cadastrado')
        console.log(usuario)
       this.usuarioServices.criar(usuario)
        
    }

    @Put('alterar')
    async alterar(@Body() usuario: Usuario): Promise<[number]> {
        return this.usuarioServices.alterar(usuario);
    }

    @Delete(':id')
    async apagar(@Param()params) {
        this.usuarioServices.apagar(params.id)
    }
}