var http=require('http')

http.createServer(function(req,res){

    res.write('node server')
    res.end()
   }).listen(7000)

