const express = require("express");
const app = express();
const port = 8000;


// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.use(require('./routes/ejemplos'));
app.use(require('./routes/api'));


app.listen( port, () => console.log(`Estamos en el puerto: ${port}`) );