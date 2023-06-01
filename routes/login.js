const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
  res.send(
    `<form action="/" onsubmit="localStorage.setItem('username',document.getElementById('user').value)" > 
    <input type='text' name='username' id="user"/>
    <button type='submit'>Add Username</button>`
  );
});

module.exports = router;
