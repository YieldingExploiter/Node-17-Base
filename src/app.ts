console.log("Running using NodeJS " + process.version)

// Express App
import * as express from 'express';
const app = express();

app.all('/',(req,res)=>{
  res.send(`<link rel="stylesheet" href="https://discoursewebhook.yieldingcoder.repl.co/.css"><ctr>Running Node@${process.version.replace('v','')}<br/><a href="https://github.com/YieldingExploiter/Node-17-Base" target="_blank">About this</a></ctr>`)
})

app.use((req,res)=>{
  res.status(404).send(`<link rel="stylesheet" href="https://discoursewebhook.yieldingcoder.repl.co/.css"><ctr><h3>404</h3><hr>This page was not found!</ctr>`)
})

const port = 42069;
app.listen(port, () => {
  console.log('Listening on port %s', port)
});