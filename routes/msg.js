const express = require("express");
const app = express();

const router = express.Router();

const fs = require("fs");
let newmsg;

router.get("/", (req, res) => {
  fs.readFile("chat.txt", "utf-8", (err, data) => {
    res.send(`${data.length>0? data: 'No msg found'}<br><form  onsubmit="document.getElementById('username').value=localStorage.getItem('username')" action="/" method="POST">

   
    <input type="text" id="message" name="msg" placeholder="message"/>
    <input type="hidden" id="username" name="username" />
   
    
    <button type="submit">
      Send message 
    </button>
    </form>`);
});
});

router.post("/", (req, res) => {
  // newmsg+='<br/>'+req.body.username;


  fs.writeFile("chat.txt", `${req.body.username}: ${req.body.msg} </br>`,{ flag: "a" }, (err) => {
    if (err) console.log("err");
    else {
      res.redirect("/");
    }
  });
});

module.exports = router;
