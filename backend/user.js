var express=require('express');
var Sequelize=require('sequelize');
var dbconfig=require('../dbconfig');
var cors=require('cors');
var app=express();
var port=5000;
app.use(cors());
app.use(express.json());
var sequelize=new Sequelize(dbconfig.DB,dbconfig.user,dbconfig.password,{
    host:dbconfig.HOST,
    dialect:dbconfig.dialect,
    pool:
    {
        min:dbconfig.pool.min,
        max:dbconfig.pool.max,
        acquire: dbconfig.pool.acquire,
        idle:dbconfig.pool.idle
    }
});
const register=sequelize.define('register',{
    Id :{
        primaryKey:true,
        type:Sequelize.INTEGER,
        autoIncrement:true
    },
    fullName:Sequelize.STRING,
    Email:Sequelize.STRING,
    Dob:Sequelize.STRING,
    password:Sequelize.STRING,
    confirmPassword:Sequelize.STRING,
    otp:Sequelize.STRING

},{
    timestamps : false,
    freezeTableName :true
})
register.sync();
const login=sequelize.define('login',{
   
    id:{
        primaryKey:true,
        type:Sequelize.INTEGER,
        autoIncrement:true

    },
    email:Sequelize.STRING,
    password:Sequelize.STRING


})
//login.sync();
app.post('/register',(req,res)=>{
    console.log(req.body);
    var registerObj=register.build({
        fullName:req.body.fullName,
        Email:req.body.email,
        DateofBirth:req.body.Dob,
        password:req.body.password,
        confirmPassword:req.body.confirmPassword

    })
    registerObj.save()
    .then(data=>{
        console.log(data);
        res.send(data);
    })

})

app.post('/login',(req,res)=>{

    var email = req.body.email;
    var password = req.body.password;
    console.log(req.body);
        register.findAll({where:{Email:email,password:password}})
        .then(data=>{
            if(data.length>0){
                console.log(data[0]);
                res.status(200).send({data:data[0],msg:"Login Successfully"});
            }
            else{
                res.status(400).send("Invalid Credential");
            }
        })
        .catch(err=>{
            console.error("Error : ",err);
            res.status(400).send(err);
    })
    
    
    
   
  

})


app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`)

})


