import express  from 'express';
import handlebars from 'express-handlebars';

import homeController from './controllers/homeController.js';



const app = express();

app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}))
app.set('view engine', 'hbs');
app.set('views', './src/views');

app.use(express.static('public'));


app.use(homeController);

app.listen( 1000, () =>  console.log('Server listening on http://localhost:1000'));