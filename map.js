const express = require('express');
const app = express();
app.get('/',(req,res) => {
 res.send("Docker Nodejs Example");
});
app.listen(9999,() => {
 console.log("Server is running on port 9999")
});
