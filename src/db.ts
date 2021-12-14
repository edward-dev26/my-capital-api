import mongoose from 'mongoose';

const DB_LOGIN = 'admin';
const DB_PASSWORD = '12345';

const connectionString = `mongodb+srv://${DB_LOGIN}:${DB_PASSWORD}@cluster0.d64ak.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose
  .connect(connectionString)
  .then(() => {
    console.log(`⚡️[server]: Connected to database successfully!`);
  })
  .catch((error) => {
    console.error(error);
    console.error(`⚡️[server]: Connection to database failed!`);
  });
