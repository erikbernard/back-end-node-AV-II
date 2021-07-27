import Sequelize, { Model } from "sequelize";

class User extends Model {
    static init(sequelize){
        super.init(
            {
                name: Sequelize.STRING,
                nick_gamer: Sequelize.STRING,
                email: Sequelize.STRING,
                // status: Sequelize.ENUM("ACTIVE","ARCHIVED") 
            },
            {
                sequelize,
            }
        )
    }

    static associate(models){
        this.hasMany(models.Gamer, {foreignKey:'user_id', as: 'gamers'});
    }
}

export default User 