
const db = require("./sqlconfig.js");
let userModal={
    logindo:function(user,pwd,callback){

        let sql = "select * from user where userName =? AND password=?";
        db.connect(sql,[user,pwd],callback);

    },
    select:function(callback){
        let sql = "select * from student";
       db.connect(sql,[null],callback);
    }

}

module.exports = userModal;