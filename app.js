var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var multer = require('multer');
var upload = multer({dest:'uploads/'});
var app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', function(req, res, next){
  res.sendFile(__dirname + "/index.html");
});

app.post('/upload', upload.single('file'), function(req,res,next){
  return res.json({size: req.file.size});
});

app.listen(80,function(){
  console.log("Server listening on port 3000")
});
