const { UserRoutes } = require("./routes/user.routes")
const {AuthRoutes} = require('./routes/auth.routes');
const {Object3DRoutes} = require('./routes/object3d.routes');
const {SouvenirRoutes} = require('./routes/souvenir.routes');
const {PlaceRoutes} = require('./routes/place.routes')

function indexRoutes(app){
    AuthRoutes(app);
    UserRoutes(app);
    Object3DRoutes(app);
    SouvenirRoutes(app);
    PlaceRoutes(app)
}

module.exports = {indexRoutes}