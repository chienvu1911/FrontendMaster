const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/frontendmaster_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('Connect MongoDB Success');
    } catch (error) {
        console.error('Connect MongoDB Error', error);
    }
}

module.exports = {
    connect,
};
