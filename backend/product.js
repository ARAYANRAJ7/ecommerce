var express=require('express');
var Sequelize=require('sequelize');
var dbconfig=require('../dbconfig');
var cors=require('cors');
var app=express();
var port=5001;
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
const productList=sequelize.define('productList',{
    SrNo:{
         primaryKey:true,
         type:Sequelize.INTEGER,
         autoIncrement:true
    },
    iname:Sequelize.STRING,
    price:Sequelize.INTEGER,
    image:Sequelize.STRING,
    quantity:Sequelize.INTEGER
},{
    timestamps : false,
    freezeTableName :true
})
//productList.sync({force:true});
const AddCartList =sequelize.define('AddCartList',{
    ID:{
         primaryKey:true,
         type:Sequelize.INTEGER,
         autoIncrement:true
    },
    userid:Sequelize.STRING,
    useremail:Sequelize.STRING,
    iname:Sequelize.STRING,
    price:Sequelize.INTEGER,
    image:Sequelize.STRING,
    quantity:Sequelize.INTEGER
    
    
},{
    timestamps : false,
    freezeTableName :true
})
AddCartList.sync();
const address=sequelize.define('address',{
    SrNo:{
         primaryKey:true,
         type:Sequelize.INTEGER,
         autoIncrement:true
    },
    name:Sequelize.STRING,
    village:Sequelize.STRING,
    street:Sequelize.STRING,
    landmark:Sequelize.STRING,
    pincode:Sequelize.INTEGER,
    mobile:Sequelize.STRING
},{
    timestamps : false,
    freezeTableName :true
})
address.sync({force:true});
app.post('/productList',(req,res)=>{
    console.log(req.body);
    
    var productObj=productList.build({
        
        iname:req.body.iname,
        price:req.body.price,
        image:req.body.image,
        quantity:req.body.quantity
        
    })
    productObj.save()
.then(data=>{
    console.log(data);
    res.send(data);
})

})

app.get('/getproduct',(req,res)=>{
    productList.findAll({raw:true})
    .then(data=>{
        res.status(200).send(data);
        console.log(data);
    })
    .catch(err=>{
        console.log(err);
    })
    
})
app.post('/addCart',(req,res)=>{
    var AddCartObj=AddCartList.build(
        {
            userid:req.body.userid,
            useremail:req.body.useremail,
            iname:req.body.iname,
            price:req.body.price,
            image:req.body.image,
            quantity:req.body.quantity,
            total:req.body.total

        }
    )
    AddCartObj.save()
    .then(data=>{
        console.log(data);
        res.send(data);
    })
    .catch(err=>{
        console.log(err);
    })
    
    
})
app.get('/getcartitem/:userid',(req,res)=>{
    AddCartList.findAll({where :{userid:req.params.userid}},{raw:true})
    .then(data=>{
        res.status(200).send(data);
        console.log(data);
    })
    .catch(err=>{
        console.log(err);
    })

})
app.delete('/deletecartitem/:id',(req,res)=>{
    var id=req.params.id;
    console.log(id);
    AddCartList.destroy({where : {ID:id}})
    .then(data=>{
        res.send({msg:"Deleted successfully"});
        console.log(data);
    })
    .catch(err=>{
        console.log(err);
    })
   /* AddCartList.destroy({where : {ID:id}})
    .then(data=>{
        console.log(data);
        res.status(200).send(data);
    })
    .catch(err=>{
        res.status(400).send(err);
    })
    */

})
app.post('/address',(req,res)=>{
    var addressObj=address.build({
        name:req.body.name,
        village:req.body.village,
        street:req.body.street,
        landmark:req.body.landmark,
        pincode:req.body.pincode,
        mobile:req.body.mobile

    })
    addressObj.save()
    .then(data=>{
        console.log(data);
        res.send(data);
    })
    .catch(err=>{
        console.log(err);
    })

})
app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
})
