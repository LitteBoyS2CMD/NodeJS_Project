const mongoose = require ('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/happy_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connect Complete !");
    } catch (error) {
        console.log("Connect Fail !");
    }
}
module.exports = { connect }