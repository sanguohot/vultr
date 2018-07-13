/**
 * Created by evan on 2016/06/01.
 */
const os = require("os");
const gprop = require('../etc/'+(os.platform()=="linux"?"config-linux":"config")).prop;
if(typeof __line=="undefined" && gprop.codeline){
    require('magic-globals');
}else{
    __line="";
}
const filename= __filename.split(gprop.file_split).pop();
const flog = require('../controllers/log');
const path = require('path');
const fs=require("fs");
function do_json_res(res,path) {
    if(!path){
        res.writeHead(200);
        return res.end();
    }
    if(!fs.existsSync(path)){
        res.writeHead(200);
        return res.end();
    }
    fs.createReadStream(path).pipe(res);
}
module.exports = function (app) {
    // app.get("/node_modules/*",function (req,res,next) {
    //     do_json_res(res,gprop.server_path+req.path);
    // })
    app.get("/",function (req,res,next) {
        res.redirect("/home")
    })
}