const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(a);
});

app.use((err,req,res,next)=>{
    
})

app.listen(3000, () => console.log("Listening to port 3000"));
