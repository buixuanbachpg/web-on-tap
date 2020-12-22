var express = require('express'),
	bodyParser = require('body-parser'),
	morgan = require('morgan'),
	cors = require('cors');

var userCtrl = require('./apiControllers/userController'),
examCtrl = require('./apiControllers/examController'),
lessonCtrl = require('./apiControllers/lessonController');
var app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());


app.use('/users', userCtrl);
app.use('/lesson', lessonCtrl);
app.use('/exam', examCtrl);

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`API running on port ${port}`);
});