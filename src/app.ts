// Log Stuff
console.log("Running using NodeJS " + process.version)

// Import Express
import * as express from 'express';
const app = express();

// Welcome Route
app.all('/',(req,res)=>{
  res.send(`<link rel="stylesheet" href="https://discoursewebhook.yieldingcoder.repl.co/.css"><ctr><h3>Welcome</h3><hr>Running Node@${process.version.replace('v','')}<br/><a href="https://yieldingexploiter.github.io/Node-17-Base" target="_blank">About this</a></ctr>`)
})

// 404
app.use((req,res)=>{
  res.status(404).send(`<link rel="stylesheet" href="https://discoursewebhook.yieldingcoder.repl.co/.css"><ctr><h3>404</h3><hr>This page was not found!</ctr>`)
})

// Listen
const port = 42069;
app.listen(port, () => {
  console.log('Listening on port %s', port)
});