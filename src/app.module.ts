import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize/dist/sequelize.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioController } from './usuario.controller';
import { Usuario } from './usuario.model';
import { UsuarioServices } from './usuario.services';

@Module({
  imports: [
    
    SequelizeModule.forRoot({
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Tristanaismymain11769',
    database: 'banco_de_dados_ecognitive',
    autoLoadModels: true,
    synchronize: true,
  }),
  SequelizeModule.forFeature([ Usuario ])
],
  controllers: [AppController, UsuarioController],
  providers: [AppService, UsuarioServices],
})
export class AppModule {}
