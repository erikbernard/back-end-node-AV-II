
import Gamer from "../models/Gamer.js"
import User from './../models/User';

class GamerController {

    // ok
    // encontrar o gamers e faz um join com user
    async index(req, res){
        try {
            const { user_id } = req.params;
            const user = await User.findByPk(user_id, {
                include:{ association: "gamers"}
            }); 
            const status = user ? 200 : 400

            return res.status(status).json(user.gamers)
        } catch(e){
            console.error("Error", e)
        }
    }

    // ok
    async create(req, res){
        try {
            const { user_id } = req.params;
            const { name, gender, platform, hours_played } = req.body;
            const user = await User.findByPk(user_id); 
            const status = user ? 200 : 400

            if(!user){
                return res.status(status).json(user)
            }

            const gamer = await Gamer.create({
                name, gender, platform, hours_played, user_id
            })
            
            return res.status(status).json(gamer)
        } catch(e){
            console.error(e)
        }
    }

    // ok
    async update(req, res){
        
        try {
            const { user_id, gamer_id } = req.params;
            const user_index = await User.findByPk(user_id); 
            const gamer_index = await Gamer.findByPk(gamer_id); 

            const { name, gender, platform, hours_played } = req.body;

            if(!user_index && !gamer_index){
                return res.status(400).json(user)
            }

            const gamer = await gamer_index.update({
                name, gender, platform, hours_played, user_id
            })

            return res.status(200).json(gamer)
        } catch(e){
            console.error(e)
        }

    }

    // ok
    async destroy(req, res){
        try{
            const { user_id, gamer_id } = req.params;
            const user_index = await User.findByPk(user_id); 
            const gamer_index = await Gamer.findByPk(gamer_id); 

            if(!user_index && !gamer_index){
                return res.status(400).json({user_index, gamer_index})
            }

            gamer_index.destroy()
            return res.status(200).json()
        }catch(e){
            console.error(e)
        }
    }

}
export default new GamerController();
