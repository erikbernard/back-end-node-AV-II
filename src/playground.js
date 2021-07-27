import Empresa from "./app/models/Empresa";
import './database'

class  Playground {
    static async play(){
        //Buscas
        const empresas = await Empresa.findAll();
        console.log(JSON.stringify(empresas, null, 2))

        // //criar
        // const empresas = await Empresa.create({
        //     name: "UFC", site: "https:/ufc.com"
        // });

        // //atualizar
        // const empresa = await Empresa.findByPk(5);
        // const newEmpresa = await empresa.update({
        //     site: "https:/ufc.com"
        // });
        // console.log(JSON.stringify(newEmpresa, null, 2))

        // //excluir
        // const empresa = await Empresa.findByPk(5);
        // empresa.destroy();




    }//play 
}

Playground.play()