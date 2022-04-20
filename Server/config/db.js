const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const database = await mongoose.connect(process.env.MONGO_URI, {
     useNewUrlParser: true,
      useUnifiedTopology: true,
    
        });

        console.log(`mongodb connected: ${database.connection.host}`);
    }
    catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit();
    }
}

module.exports = connectDB;