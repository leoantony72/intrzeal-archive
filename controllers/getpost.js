import { pool as client } from "../config/database.js";

export const getPost = async (req, res) => {
  try {
    let test = await client.query("SELECT * FROM profile");
    return res.json(test.rows);
  } catch (err) {
    return res.status(409).send(err);
  }
};
