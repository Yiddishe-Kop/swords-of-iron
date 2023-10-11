export function randomId() {
  let id = Math.random().toString(36).substring(2, 7);
  // ensure doesnt start with a digit
  if (/\d/.test(id[0])) {
    id = "a" + id;
  }
  return id;
}
