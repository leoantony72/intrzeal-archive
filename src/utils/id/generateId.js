import { customAlphabet } from "nanoid";

//generate UserID
export function Userid() {
  const nanoid = customAlphabet(
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
    11
  );
  const id = nanoid();
  return id;
}
//generate postID
export function Postid() {
  const nanoid = customAlphabet(
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
    11
  );
  const id = nanoid();
  return id;
}
export function Categoryid() {
  const nanoid = customAlphabet(
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
    11
  );
  const id = nanoid();
  return id;
}
