const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/wingahouse", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database Connected");
    } catch (error) {
        console.error(error);
    }
};

module.exports = connectDB;
