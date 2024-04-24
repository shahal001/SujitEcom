const connectDatabase = require("./DB/Database")
const app = require("./App")

  process.on("uncaughtException",(err)=>{
    console.log(`Error : ${err.message}`);
    console.log(`shutting down the server for handilign exception`)
  });

  if(process.env.NODE_ENV !== "PRODUCTION"){
    require("dotenv").config({path:"Config/.env"})
  }

  connectDatabase()
  

  const server = app.listen(process.env.PORT, () => {
    console.log(`server running in port ${process.env.PORT}`)
  })

  process.on("unhandledRejection",(err) => {
    console.log(`shutting down the server ${err,message}`);
    server.close(()=>{
      process.exit(1)
    });
  });