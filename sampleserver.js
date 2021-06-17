
var fs=require('fs')
var http=require('http')
var url=require('url')

http.createServer(function(req,res){

var q=url.parse(req.url,true)


if(q.pathname==='/'){

     fs.readFile('one.html',function(err,data){
         res.writeHead(200,{'content-Type':'text/html'})
        res.write(data)
        res.end()
     })
}else if(q.pathname==='/login'){
    fs.readFile('login.html',function(err,data){
        res.writeHead(200,{'content-Type':'text/html'})
       res.write(data)
       res.end()
    })
}else if(q.pathname==='/loginaction'){
    console.log('email: '+q.query.name)
    console.log('password: '+q.query.psw)
    res.write('hmm')
    res.end()
}
else{
    res.write('errror')
    res.end()
}
   }).listen(7000
   )

