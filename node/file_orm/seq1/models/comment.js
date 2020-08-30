const Sequelize = require("sequelize");

module.exports = class Comment extends Sequelize.Model {
    // 테이블 정의
    static init(sequelize){
        return super.init({
            // VARCHAR -> STRING
            // INT -> INTEGER
            // TINYINT -> BOOLEAN
            // DATETIME -> DATE
            // NOT NULL -> allowNull : false
            // UNIQUE -> unique:true
            // DEFAULT now() -> defaultValue:Sequelize.NOW
            comment : {
                type: Sequelize.STRING(100),
                allowNull: false,
            },

        }, {
            sequelize,
            timestamp : true, // 타임스탬프를 true로 하면 createAt updateAt이 생성이 된다.
            underscored: false, // 기본적으로 테이블명과 컬럼명을 CamelCase로 바꾸는데, snake case로 설정
            modelName: "Comment",
            tableName: "comments",
            paranoid: false, // true로 하면 deleteAt 컬럼이 생긴다. 정보 자체는 살린다.
            charset: "utf8mb4",
            collate: "utf8mb4_general_ci"
        })
    }

    // 관계 매핑
    static associate(db){
        db.Comment.belongsTo(db.User, {foreignKey: "commenter", targetKey: "id"});
    }
}