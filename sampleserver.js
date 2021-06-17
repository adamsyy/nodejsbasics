
var fs=require('fs')
var http=require('http')

http.createServer(function(req,res){
     fs.readFile('one.html',function(err,data){
         res.writeHead(200,{'content-Type':'text/html'})
        res.write(data)
        res.end()
     })
    
   }).listen(7000)

