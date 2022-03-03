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

// authenticate היא בודקת אם יש תוקן בתוף זו הפונקצית מידלוור
// פרמטר ראשון באיזה אסטרטגיה נרצה להשתמש וזה בJWT
// סאן שהוא אובייקט שנשאר ומתחלף כל 20 דקותת ואנחנו לא רוצים לעבוד איתו
app.use('/employees',passport.authenticate('jwt',{session:false}),RouterEmployee);

// http://localhost:1998/auth/register
// app.get("/", (req, res) => res.send("gfgf"));
app.use("/auth", RouterUser);

// אתותיקשן זה אימות לאשר שיש משתמש כזה
// הרשאות זה שאני רוצה לאפשר לו הרשאות אתורליזיישן 


// פוקנציה שעוזרת לנו לאתחל את הפונקציה פספוט בתוך השרת
// ולהציב בכל מיני ראוטים שאני ארצה לחוסם בעזרת התוקן
app.use(passport.initialize());




// const basicURL='http://localhost:1998/employees';
// export const getAll=()=>{
//     // return על מנת שיחזיר משהו
//     // fetch   promise תמיד מחזיר 
// //    קודם נריץ את השרת לראות שהכל בסדר 
// //    ולוקחת את הURL שלנו
//     return fetch(basicURL)
// .then((response)=>response.json())
// .catch((err)=>console.log(err))
// }
// // ! ולאחר מכן נקרא לפונקציה הזו בקומפוננטה
// // ! שנרצה להראות את התצוגה מהשרת



// // ! בקומפוננטה עצמה ניצור פונקציה שקוראת לפונקציה עם הfetch
// const getEmployye=()=>{
//     getAll()
//     .then((employee)=>console.log(employee))
//     .catch((err)=>console.log(err))
// }