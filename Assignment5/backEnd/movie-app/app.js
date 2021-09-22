const express = require('express');
const movieRouter = require('./routes/movie');
const userRouter=require('./routes/users')
const mongoConnect=require('./util/database').mongoConnect
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(userRouter)
app.use('/movies', movieRouter);
app.use((error,req,res,next)=>{
    res.status(500).send("it does not exist")
})

app.use((req,res,next)=>{
    res.status(404).send("this url does not found")
})
mongoConnect(()=>{
    app.listen(3000, () => console.log('listening to 3000...'));
}
)

