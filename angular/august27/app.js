import { error } from "util";

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

app.post('/edit',(req,body)=>{
    var m=req.body.name;
    var n=req.body.email;
    var o=req.body.msg;
    var p=req.body.phno;
});

asd.update({$set{name:m,email:n,msg:o,phno:p}},(error,data)=>{
    if (error){
        throw error;
    }
    else{
        console.log(data);
    }
});
    




app.set(process.env.PORT || 3000,()=>{
    app.listen(3000);

})