// איך לפענח (לקרוא)נבייא אותו
const StrategyJWT = require("passport-jwt").Strategy;
// ועל מנת לחלץ מידע נייבא אותו
const ExtractJwt = require("passport-jwt").ExtractJwt;
// לייבא מודל של יוזר
const Users = require("../Models/UserModel");
// את האיך יש לנו למעלה ייבואנו אבל באיזה שפה אנחנו לא יודעים
// ובגלל זה נבייא גם את הסיקרט שלנו
const SECERET_KEY = process.env.SECERET_KEY;
const options = {};
// מחזיק את התוקן מהבקשה
// הפונקציה הולכת לריקווסט ומוציאה משם את התוקן
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();

// הפןנקציה מתווכת
const passportFunction = (passport) => {
  passport.use(
    new StrategyJWT(options, (jwt_payload, done) => {
      Users.findOne({ _id: jwt_payload.id })
        .then((user) => {
          if (user) return done(null, user);
          done(null, false);
        })
        .catch((err) => done(err, false));
    })
  );
};
