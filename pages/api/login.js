export default (req, res) => {
  if (req.method === 'POST') {
    res.setHeader("Set-Cookie", "a_name=Mike;MAx-Age=3600;HttpOnly,Secure");
    res.statusCode = 200;
    res.json({ message: "ok" });
  }
}