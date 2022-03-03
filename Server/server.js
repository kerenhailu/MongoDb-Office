require("dotenv").config();
const express = require("express");
require("./DB");
const cors = require("cors");
const RouterEmployee = require("./Routs/EmployeeRout");
const RouterUser = require("./Routs/UserRout");

// ניתוב וחיפוש לקבצים
    // צריך להוריד את הפאקג הזה
    const path=require('path');

const app = express();
// בזכות זה אפשר לגשת ולקרוא לbody
app.use(express.json({extended:true}));
// שורה שעוזרת לנו לקרוא נתונים בתוך הURL
app.use(express.urlencoded());
const passport = require("passport");
const { Server } = require("http");
require("./Config/passport")(passport);
app.use(passport.initialize());

app.use(cors());
const PORT = process.env.PORT || 1998;
app.listen(PORT);

app.post('/',(req,res)=>res.send('add'))
app.put('/',(req,res)=>res.send('workk put'))
app.delete('/',(req,res)=>res.send('workk delete'))

// authenticate היא בודקת אם יש תוקן בתוף זו הפונקצית מידלוור
// פרמטר ראשון באיזה אסטרטגיה נרצה להשתמש וזה בJWT
// סאן שהוא אובייקט שנשאר ומתחלף כל 20 דקותת ואנחנו לא רוצים לעבוד איתו
app.use('/employees',passport.authenticate('jwt',{session:false}),RouterEmployee);

// http://localhost:1998/auth/register
app.use("/auth", RouterUser);

// אתותיקשן זה אימות לאשר שיש משתמש כזה
// הרשאות זה שאני רוצה לאפשר לו הרשאות אתורליזיישן 


// פוקנציה שעוזרת לנו לאתחל את הפונקציה פספוט בתוך השרת
// ולהציב בכל מיני ראוטים שאני ארצה לחוסם בעזרת התוקן



if(process.env.NODE_ENV==='production'){
    // תיקייות client ובתוקה תיקיית build 
    // בתוך הבילד היא לוקחת את הפרויקט מפרקת ובונה מחדש
    // צריך ליצור את תיקיית הבילד
    app.use(express.static(path.join(__dirname,'../client/build')));
    
    // הניתוב של הגט הוא הכל זה הכוכבית וזה מכסה את הפינה של הסלאש
    // הפונקציה מחזיר לנו את הבקשה של קבצים 
    app.get('*',(req,res)=>
    // הפרמטר האחרון הוא הקובץ שאחרי על זה
    // מודול path עוזר לנו בניתובים של קבצים 
    // ועוזר לנו לשלב את הענן לדברים המקומיים שיש לנו במחשב כי אנחנו רגילים לעבוד לוקאלי
    //  נכניס הכל לפונקציה כדי שהכל יהיה בטוח ומאובטח
    // ואי אפשר לדעת באמת איפה הקובץ אינדקס
    // הוא צריך להיות בסוף של Server.js

    // __dirname הוא עוזר לנו לנתב לא לוקלאי כמו שאנחנו רגילים 
    //  אלא במחשב שאנו נמצאים בו
    res.sendFile(path.join(__dirname,'../client/build','index.html')))
}
