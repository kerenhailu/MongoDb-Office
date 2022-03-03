const basicURL=process.env.NODE_ENV ==='production'?
'https://mern-office-app.herokuapp.com/employees':
'http://localhost:1998/employees';
// משתנה סביבה שנוצרים לנו בזמן הרצה process.env.NODE_EVV
// פרודקשן זה הסביבה בה הפרויקט נמצא והוא נגיש למשתמשים !!
// אם אני בסביבת עבודה של פרודקשן אני לוקחת את הכתובת מהענן ואם לא אני לוקחת את הלוקלהוסט
export const getAll=()=>{
    return fetch(basicURL)
.then((response)=>response.json())
.catch((err)=>console.log(err))
}