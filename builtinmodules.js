const os=require('os')


const userinfo=os.userInfo()
console.log(userinfo)
console.log(`the system uptime is ${os.uptime()} seconds`);
const currentOS={
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freemem:os.totalmem()
}
console.log(currentOS);


