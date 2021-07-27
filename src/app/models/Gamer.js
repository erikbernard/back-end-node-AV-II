import Sequelize, { Model } from "sequelize";

class Gamer extends Model {
    static init(sequelize){
        super.init(
            {
                name: Sequelize.STRING,
                gender: Sequelize.STRING,
                platform: Sequelize.STRING,
                hours_played: Sequelize.STRING,
                // user_id: Sequelize.INTEGER
                // status: Sequelize.ENUM("ACTIVE","ARCHIVED") 
            },
            {
                sequelize,
            }
        )
    }

    static associate(models){
        this.belongsTo(models.User, {foreignKey:'user_id', as: 'users'});
    }
}

export default Gamer 