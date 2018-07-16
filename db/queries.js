const db = require('./connections');

module.exports = {
    getAll() {
        return db('headline');
    }
}