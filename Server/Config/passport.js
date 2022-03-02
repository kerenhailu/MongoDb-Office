// איך לפענח (לקרוא)נבייא אותו
const StrategyJWT = require("passport-jwt").Strategy;
// ועל מנת לחלץ מידע נייבא אותו
const ExtractJwt = require("passport-jwt").ExtractJwt;
//  כדי לעבוד מול הקולקשן נייבא מודל של יוזר
const Users = require("../Models/UserModel");

// את האיך יש לנו למעלה ייבואנו אבל באיזה שפה אנחנו לא יודעים
// ובגלל זה נבייא גם את הסיקרט שלנו

const options = {
secretOrKey:process.env.SECRET_KEY
};
// מחזיק את התוקן מהבקשה
// הפונקציה הולכת לריקווסט ומוציאה משם את התוקן
// הןא מחוץ לאובייקט כדי שנפעיל את הפונקציה ויביא לי רק את התוקן
// ולא יחשוב שמביאים לו את הפונקציה עצמה
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();

// הפןנקציה מתווכת
module.exports= (passport) => {
  passport.use(
    new StrategyJWT(options, (obj_user_from_payload, done) => {
      Users.findById( obj_user_from_payload.user._id)
        .then(user => {
            // פרמטר ראשון של פונקצית דן היא פרמטר שגיאה , פרמטר שני הצלחה/אובייקט שנרצה לעבוד איתו(מידע)
          if (user)return done(null, user);
          done(null, false);
        })
        .catch(err => done(err, false));
    })
  );
};

