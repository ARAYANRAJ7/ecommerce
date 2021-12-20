var express = require('express');
var cors = require('cors');
var insta = require('instamojo-nodejs');
var path=require('path');

var bodyparser = require('body-parser');
var app = express();
var port = 5003;
app.use(cors());
const API_KEY = "test_665071ac46d70b8c5cb6b39fc0b";

const AUTH_KEY = "test_66dca97143c55613c90a942bb74";
insta.setKeys(API_KEY, AUTH_KEY);

insta.isSandboxMode(true);
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.get("/", (req, res) => {
    res.sendFile(__dirname + "payment.html");
  });
app.post('/payment', (req, res) => {
    var name = req.body.name
    var email = req.body.email
    var amount = req.body.amount
    res.send(amount);
    var data = new insta.PaymentData();

    //const REDIRECT_URL = "http://localhost:5003/success";

    data.setRedirectUrl(REDIRECT_URL);
    data.send_email = "True";
    data.purpose = "Order Product";
    data.amount = amount;
    data.name = name;
    data.email = email;
    insta.createPayment(data, function (error, response) {
        if (error) {
          // some error
        } else {
          // Payment redirection link at response.payment_request.longurl
          res.send("Please check your email to make payment")
        }
      });
})
app.get('/sucsess',(req,res)=>{
    console.log("Your payment sucessfully done please check email for invoice");
    console.log("Thank You!");
})
app.listen(port, () => {
    console.log(`server is runniong at http://localhost:${port}`);
})