const express=require('express');
const app=express();
const path=require('path');

const PORT=process.env.PORT||5001;

app.get('/',function (req,res) {
    res.sendFile(__dirname+'/src/index.html')
})

app.use(express.static(path.join(__dirname,'src')));
app.listen(PORT, ()=>console.log(`Server is up at http://127.0.0.1:${PORT}`) );