// const {readFileSync,writeFileSync}=require('fs')
// //async in use
// const read=readFileSync('./content/subfolder/text.txt','utf8')
// const readagain=readFileSync('./content/test1.txt','utf8')
// const edit = writeFileSync('./content/test3.txt',`these are the first created files ${read} ${readagain}`)
// console.log(read,readagain);
//lets use readfile only
const {readFile,writeFile}=require('fs')

const test=readFile('./content/test1.txt','utf8',(err,data)=>{
    if(err){
        console.log(err);
    }
    console.log(data);
})
const exp=writeFile('./content/new',`here are the results ${test}`,(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
}
 )
 console.log(exp);
 