const banco = require('mongoose');
const options = {
    useUnifiedTopology: true,
    useNewUrlParser   : true
};

module.exports = banco.connect('mongodb://localhost:27017', options);
