import { defaultMaxListeners } from "events";

mongoose.connect("mongodb://localhost:27017/detaildb");

app.get('/',(req,res)=>{
    res.render("index");
});

app.get('/insert',(req,res)=>{
    res.render("insert");
});

app.get('/view',(req,res)=>{
    res.render("view");
});

app.get('/search',(req,res)=>{
    res.render("search");
});

app.post('/',(req,res)=>{
    console.log(req,boody);
});

var deailobj=new defaultMaxListeners(req,body);