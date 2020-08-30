const Sequelize = require("sequelize");

module.exports = class User extends Sequelize.Model {
    // 테이블 정의
    static init(sequelize){
        return super.init({
            name : {
                type: Sequelize.STRING(60),
                allowNull: false,
            },
            email : {
                type: Sequelize.STRING(100),
                allowNull: false
            },
            address : {
                type: Sequelize.STRING(100),
            },
            phone : {
                type: Sequelize.STRING(20),
                allowNull: false
            },
            agree :{
                type: Sequelize.TINYINT,
                allowNull: false
            }
        }, {
            sequelize,
            timestamp : true, // 타임스탬프를 true로 하면 createAt updateAt이 생성이 된다.
            underscored: false, // 기본적으로 테이블명과 컬럼명을 CamelCase로 바꾸는데, snake case로 설정
            modelName: "Info",
            tableName: "info",
            paranoid: false, // true로 하면 deleteAt 컬럼이 생긴다. 정보 자체는 살린다.
            charset: "utf8mb4",
            collate: "utf8mb4_general_ci"
        })
    }

    // 관계 매핑
    static associate(db){
        
    }
}