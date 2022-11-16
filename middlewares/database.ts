import connectDB from "../pages/database/connectDB";

export async function getDatabase(req: any, res: any, next: any) {
  try {
    req.db = await connectDB;
  } catch (err: unknown) {
    console.error(err);
  } finally {
    return next();
  }
}