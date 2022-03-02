require("dotenv").config();
const express = require("express");
require("./DB");
const cors = require("cors");
const RouterEmployee = require("./Routs/EmployeeRout");
const RouterUser = require("./Routs/UserRout");


const app = express();
// בזכות זה אפשר לגשת ולקרוא לbody
app.use(express.json({extended:true}));
// שורה שעוזרת לנו לקרוא נתונים בתוך הURL
app.use(express.urlencoded());
const passport = require("passport");
require("./Config/passport")(passport);

app.use(cors());
const PORT = process.env.PORT || 1998;
app.listen(PORT);
// app.register('/',(req,res)=>res.send('register'))
app.get('/',(req,res)=>res.send('workk'))
app.post('/',(req,res)=>res.send('add'))
app.put('/',(req,res)=>res.send('workk put'))
app.delete('/',(req,res)=>res.send('workk delete'))

// authenticate היא בודקת אם יש תוקן בתוף זו הפונקצית מילוור
// פרמטר ראשון באיזה אסטרטגיה נרצה להשתמש וזה בJWT
// סאן שהוא אובייקט שנשאר ומתחלף כל 20 דקותת ואנחנו לא רוצים לעבוד איתו
app.use('/employees',passport.authenticate('jwt',{session:false}),RouterEmployee);

// http://localhost:1998/auth/register
// app.get("/", (req, res) => res.send("gfgf"));
app.use("/auth", RouterUser);



// פוקנציה שעוזרת לנו לאתחל את הפונקציה פספוט בתוך השרת
app.use(passport.initialize());

