import mongoose from "mongoose";

const mongoURI = process.env.MONGO_URI ?? "mongodb://localhost:27017/farmerapp";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      mongoURI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      (err) => {
        if (err) {
          console.log(err);
        }
      }
    );
    console.log(`database is connected at ${mongoURI}`);
  } catch (err) {
    console.log(err);
  }
};
