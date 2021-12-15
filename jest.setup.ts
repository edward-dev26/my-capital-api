import { DataBase } from './fixtures/db';

jest.mock('./src/db', () => jest.fn());

export default function () {
  const db = new DataBase();

  beforeAll(async () => await db.connect());
  afterEach(async () => await db.clear());
  afterAll(async () => await db.close());
}
