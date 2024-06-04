const express = require("express");
const tasks = require("./routes/task");
const connectDB = require("./database/connect")
const notFound = require("./middleware/not-found");
const errorHandler = require("./middleware/errorHandler");

//INVOKERS 
//invoke express module
const app = express();

// to get the body data in json format
app.use(express.static('./public'))
app.use(express.json());


//MIDDLEWARE
//gets the router and routes the control flow to that router
app.use("/api/v1/tasks", tasks);
app.use(notFound);
//app.use(errorHandler);



// connect db and then spinup the server 
const start = async()=>{
  try {
  
    await connectDB(process.env.MongoKEY);
    app.listen(process.env.PORT, () => {
      console.log(`Server started in ${process.env.PORT}`);
    });

  } catch (error) {
    console.log(error);
  }
}

start();






