const config = require('config');

module.exports = () => {
    console.log(process.env.mindmaze_jwtPrivateKey);
    if (!config.get('jwtPrivateKey')) {
        throw new Error('FATAL ERROR: jwtPrivateKey is not defined.');
    }
}