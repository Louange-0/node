const http=require('http')

const server=http.createServer((req,res)=>{
if(req.url === '/'){
    res.write('Hello welcome to our homepage')
    res.end()
}
if(req.url === '/about'){
    res.write('here is a short story about us')
    res.end()
}
res.end(`<h1>Opps page not found</h1>
<p>sorry we can not find the page you are looking for</p>
<a href="/">go back on homepage</a>
`)
})


server.listen(3000)