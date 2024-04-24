
const mongoose = require("mongoose")

const connectDatabase = () => {
    mongoose.connect(process.env.DB_LINK, {}).then((data)=>{
        console.log(`mongoose connect with server :${data.connection.host}`);

    });
};

module.exports = connectDatabase;