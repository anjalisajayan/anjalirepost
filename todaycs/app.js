const Express=require('express');
const Mongoose=require('mongoose');
var app= Express();
var bodyparser = require('body-parser');

var request=require('request');

app.set('view engine','ejs');

app.use(Express.static(__dirname+"/public"));
app.use(bodyparser.json());

app.use(bodyparser.urlencoded({extended:true}));
app.use(Express.urlencoded());

const employee=Mongoose.model("employeedetails",
    {
        name:String,
        designation:String,
        salary:String,
        }


);


Mongoose.connect("mongodb:mongodb+srv://Imdeepu45:<Iam@deepu45>@cluster0-y7joj.mongodb.net/test?retryWrites=true&w=majority");



app.get('/',(req,res)=>{

    res.render("index");


});


app.post('/',(req,res)=>{

    console.log(req.body);

    var employeeobj=new employee(req.body);
    var result=employeeobj.save((error,data)=>{
        console.log(data);
    });



//     var name= req.body.name;
//     var designation= req.body.designation;
//     var salary= req.body.salary;
//    console.log("Name :"+ name);
//    console.log("designation :"+designation);
//    console.log("salary :"+salary);
});

app.get('/getdata',(req,res)=>{
    result=employee.find((error,data)=>{
        if(error){
            throw error;
        }
        else{
            res.send("data");
        }
    }

    )});
                const getdataapi="http://localhost:3000/getdata"


app.get('/view',(req,res)=>{
   
    request(getdataapi,(error,response,body)=>{
        var data=JSON.parse(body);

        console.log(data)

        res.render('view',{'data':data});


    });

    app.get('/getAemployeeApi/:admno',(req,res)=>{
        var Admno=req.params.admno;
    })

});


app.listen(process.env.PORT || 3000,()=>{
    console.log("Working Server...::3000...");
});