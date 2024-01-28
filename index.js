const http = require("http");
const fs = require("fs");

http.createServer(function(req,res){
  const url = req.url
  
  if(url === "/"){ // cuando el url es /
    
    fs.readFile("Index.html",function(err,data){ //lee el archivo index.html
        res.write(data); // escribe la informacion que leyo
        res.end();
      })
    
  }
  else if(url === "/about"){
    fs.readFile("about.html",function(err,data){
      res.write(data);
      res.end()
    })
    
  }
  else if(url === "/contact-me"){
    fs.readFile("contact-me.html",function(err,data){
      res.write(data);
      res.end()
    })
  }
  else{
    fs.readFile("404.html",function(err,data){
      res.write(data);
      res.end()
    })
  }
}).listen(8080,function(){
  console.log("server working");
})

