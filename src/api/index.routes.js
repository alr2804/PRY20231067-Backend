const { UserRoutes } = require("./routes/user.routes")
const {AuthRoutes} = require('./routes/auth.routes');

function indexRoutes(app){
    AuthRoutes(app);
    UserRoutes(app);
}

module.exports = {indexRoutes}