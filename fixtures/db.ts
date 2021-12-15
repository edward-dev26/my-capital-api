import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';

export class DataBase {
  private mongod = new MongoMemoryServer();

  async connect() {
    const uri = await this.mongod.getUri();

    await mongoose.connect(uri);
  }

  async close() {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await this.mongod.stop();
  }

  async clear() {
    const collections = mongoose.connection.collections;

    for (const key in collections) {
      const collection = collections[key];

      await collection.deleteMany({});
    }
  }
}
