const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');


app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(methodOverride('_method'));

mongoose.connect('mongodb://localhost27017/basiccrud', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
mongoose.connection.once('open', ()=>{
    console.log('connected mdbb');
})


app.listen(3000, ()=> {
    console.log('listening on: ' + 3000);
});