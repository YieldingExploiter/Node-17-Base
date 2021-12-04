console.log("Running using NodeJS " + process.version)

// Express App
import * as express from 'express';
const app = express();

app.all('/',(req,res)=>{
  res.send(`<link rel="stylesheet" href="https://discoursewebhook.yieldingcoder.repl.co/.css"><ctr>Running Node@${process.version.replace('v','')}<br/></ctr>`)
})

const port = 42069;
app.listen(port, () => {
  console.log('Running on port %s', port)
});