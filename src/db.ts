import mongoose from 'mongoose';

const DB_LOGIN = process.env.DB_LOGIN;
const DB_PASSWORD = process.env.DB_PASSWORD;
let CONNECTION_STRING;

if (process.env.NODE_ENV === 'development') {
  CONNECTION_STRING =
    'mongodb://127.0.0.1:27017/my-capital?directConnection=true&serverSelectionTimeoutMS=2000';
} else {
  CONNECTION_STRING = `mongodb+srv://${DB_LOGIN}:${DB_PASSWORD}@cluster0.d64ak.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
}

mongoose
  .connect(CONNECTION_STRING)
  .then(() => {
    console.log(`⚡️[server]: Connected to database successfully!`);
  })
  .catch((error) => {
    console.error(error);
    console.error(`⚡️[server]: Connection to database failed!`);
  });
