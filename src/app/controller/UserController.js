
import User from "../models/User.js"
import { Op } from 'sequelize';

class UserController {

    // ok
    async index(req, res){
        try {
            const data = await User.findAll()

            const status = data ? 200 : 400
            return res.status(status).json(data)
        } catch(e){
            console.error("Error", e)
        }
    }
    // ok
    async listEmail(req, res){
        try {
            const { type_email } = req.params;
            
            const data = await User.findAll({
                attributes:['nick_gamer', 'email'],
                where:{
                    email: {
                        [Op.like]: `%@${type_email}%`
                    }
                }

            })

            const status = data ? 200 : 400
            return res.status(status).json(data)
        } catch(e){
            console.error("Error", e)
        }
    }

    // ok
    async create(req, res){
        try {
            const { name, nick_gamer, email} = req.body;
            const user = await User.create({
                name, nick_gamer, email
            })
            
            const status = user ? 200 : 400
            return res.status(status).json(user)
        } catch(e){
            console.error(e)
        }
    }

    // ok
    async update(req, res){
        
        try {
            const { user_id } = req.params;
            const user_index = await User.findByPk(user_id); 

            const {name, nick_gamer, email } = req.body;
            const status = user_index ? 200 : 400

            if(!user_index ){
                return res.status(status).json(user)
            }

            const gamer = await user_index.update({
                name, nick_gamer, email
            })
            return res.status(status).json(gamer)
        } catch(e){
            console.error(e)
        }

    }

    // ok
    async destroy(req, res){
        try{
            const { user_id } = req.params;
            const user_index = await User.findByPk(user_id);
            const status = user_index ? 200 : 400 

            if(!user_index){
                return res.status(status).json({user_index, gamer_index})
            }
            user_index.destroy();
            return res.status(status).json();
        }catch(e){
            console.error(e)
        }
    }
}
export default new UserController();
