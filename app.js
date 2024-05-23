const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const axios = require('axios');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

const mysql = require("mysql2/promise");
const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root', // <== ระบุให้ถูกต้อง
    password: '',  // <== ระบุให้ถูกต้อง
    database: 'tree_database',
    port: 3306  // <== ใส่ port ให้ถูกต้อง (default 3306, MAMP ใช้ 8889)
});

app.get("/", (req,res)=>{
    res.sendFile(__dirname+'/index.html')
})

app.get("/test-1", (req, res) => {
    res.status(200).send({ "status": "success" })
})

app.get("/addList", (req, res) => {
    res.sendFile(__dirname+'/addList.html')
})

app.get("/about", (req, res) => {
  res.sendFile(__dirname+'/about.html')
})

app.get('/joke', async (req, res) => {
  try {
      const url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=racist,sexist'; // Replace with the URL you want to fetch data from
      const response = await axios.get(url);
      res.json(response.data); // Send the fetched data as a response
  } catch (error) {
      res.status(500).send('Error fetching data');
  }
});

app.get('/list', async (req,res) => {
  const connection = await dbConn
  const [rows] = await connection.query('SELECT * from trees')
  res.send(rows)
})

// GET students/:id 
app.get('/list/:id', async (req,res)=>{
  const connection = await dbConn
  const rows = await connection.query('SELECT * from trees where id = ' +req.params.id)
  res.send(rows)
})

app.delete('/list/:id', async (req,res)=>{

  const connection = await dbConn
  await connection.query('Delete from trees where id = ' +req.params.id)
  res.status(204).send("Deleted id " + req.params.id + " successful" )
})

app.post("/list", async (req, res) => {
  // ส่งข้อมูลผ่าน body-parser (Middleware)
  const name = req.body.name;
  const age = req.body.age;
  const email = req.body.email;

  const connection = await dbConn
  const rows = await connection.query("insert into trees (name,age,email) values('"+name+"','"+age+"','"+email+"')")
  //res.status(201).send(rows)
  res.status(201).send(`<h1 style="color:blue;"> คุณได้ทำการเพิ่มข้อมูลเรียบร้อยแล้ว จำนวน ${rows[0].affectedRows} แถว</h1>`)
})

// PUT
/*
{
  "name":"Oak",
  "age":"22",
  "phone":555,
  "email":"oak@email.com"
}
*/
app.put("/students/:id", async (req, res) => {
  // รับ id จาก params
  const id = req.params.id;
  // ส่งข้อมูลผ่าน body-parser (Middleware)
  const name = req.body.name;
  const age = req.body.age;
  const phone = req.body.phone;
  const email = req.body.email;

  const connection = await dbConn
  const rows = await connection.query("Update students set name = '"+name+"', age = '"+age+"', phone = "+phone+", email = '"+email+"' where id = "+id+" ")
  res.status(201).send(rows)
})

app.listen(3000, () => {
    console.log("Server is running at port 3000")
})

