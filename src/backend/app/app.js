/**
 * Created by Evan on 2016/7/22.
 */
const os = require("os");
const gprop = require('../etc/'+(os.platform()=="linux"?"config-linux":"config")).prop;
const log = require('../controllers/log');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
exports.use = function (app, express) {
	log.use(app);
	//设置当前模式为开发模式
	app.set('env', 'development');
	app.engine('ejs', require('ejs').renderFile);
	// app.set('views', gprop.server_path + "/src/frontend/hexo-theme-material-1.4.0/layout");
	app.set('view engine', 'ejs');
    app.use('/downloads', express.static(gprop.download_path));
    app.use('/home', express.static(gprop.server_path + "/src/frontend/jquery-animate-image-filling/"));
    // app.use('/download', express.static(gprop.download_path))
    // var download = serveStatic('gprop.download_path', {'index': ['index.html', 'index.htm']})
    // app.use('/home', express.static("home"))
	app.use(bodyParser.json({limit: '5mb'}));
	app.use(bodyParser.urlencoded({extended: false, limit: '5mb'}));
	app.use(cookieParser());
	app.use(function (req, res, next) {
		if (req.url.indexOf("/favicon.ico") >= 0) return res.end();
		res.setHeader("Access-Control-Allow-Origin", "*");
		//某些浏览器或者某些环境下，浏览器一直认为请求未结束，为避免误会我们直接设置连接关闭
		res.setHeader("Connection", "Close");
		// res.setHeader("X-Frame-Options", "SAMEORIGIN");
		next();
	});
}