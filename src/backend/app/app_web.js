/**
 * Created by Evan on 2016/7/22.
 */
let express = require('express');
let app = express();
require("./app").use(app, express);
//路由
require('../routers/routers')(app);
module.exports = app;