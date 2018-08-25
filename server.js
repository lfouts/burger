
var exphbs = require("express-handlebars");

var app = express();
app.use(express.static("public"));


app.use(bodyParser.urlencoded({
  extended: false
}));

app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controllers.js");

app.use(routes);

// listen on port 3000
var PORT = process.env.PORT || 3306;

  app.listen(PORT, function() {
    console.log("App now listening on port:", PORT);
  });
