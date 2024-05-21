import mongoose from "mongoose";

export async function connect() {
  const site = process.env.DB_SITE; 

  try {
    const connection = await mongoose.connect(site);
  } catch (err) {
    console.log(err);
  }
}
