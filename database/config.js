const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CNN, {
      useNewUrlParser: true,
      useUnifiedTopoLogy: true,
    });

    console.log("Base de datos online");
  } catch (error) {
    console.log("Error de conexión ->", error);
    throw new Error("No Hubo conexión con la BD");
  }
};

module.exports = {
  dbConnection,
};
