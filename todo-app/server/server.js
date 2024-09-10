const express = require('express')
const {Client} = require("pg");
const app = express();
const client = new Client({
    user: "postgres",
    password: "G00dbye202!2",
    host: "localhost",
    port: 5432,
    database: "todo_app"
})

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:5173");
    res.header("Access-Control-Allow-Credentials", true);
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-Width, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods","POST, PUT, DELETE, OPTIONS, GET");
    next();
});
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// connect to db
connect();
async function connect(){
    try{
        await client.connect();
        console.log(('Connected'));
    }
    catch(e){
        console.log(`connection failed` + e);
    }
}

// respond with "hello world" when a GET request is made to the homepage
app.get("/todos", async (req, res) => {
  try{
    const results = await client.query("select * from todos");
    res.json(results.rows)
  } catch (e) {
    console.log("There was an error");
    res.send("There was an error")
  }

  res.json([])
})

app.post("/todos", async (req, res) => {
    try{
      res.json({status: "success"})
    } catch (e) {
      console.log("There was an error");
      res.send("There was an error")
    }
  
    res.json([])
  })

app.listen(5001, () => console.log("listening on port 5001...."));