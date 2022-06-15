import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Usuario } from "./usuario.model";


@Injectable()
export class UsuarioServices{
    constructor(
        @InjectModel(Usuario)
        private usuarioModel: typeof Usuario
    ) {}

    async ObterTodos(): Promise<Usuario[]> {
        return this.usuarioModel.findAll();  
    }

    async ObterUm(id: number): Promise<Usuario>{
        return this.usuarioModel.findByPk(id)
    } 

    async criar(usuario: Usuario) {
        console.log('listando usuario cadastrado/service')
        console.log(usuario)
        this.usuarioModel.create(usuario)
    }
    
    
    async alterar(usuario: Usuario): Promise<[number]> {
        return this.usuarioModel.update(usuario, {
            where: {
                id: usuario.id
            }
        });
    }


    async apagar(id: number) {
        const livro: Usuario = await this.ObterUm(id);
        livro.destroy();
    }
}
