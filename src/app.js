import express from "express";
const app = express();
app.get("/health", (_req, res) => res.json({ ok: true }));
app.get("/hello", (_req, res) => {
 const msg = process.env.FEATURE_GREETING_NEW ? "hello v2" : "hello v1";
 res.send(msg);
});
export default app;
if (process.env.NODE_ENV !== "test") {
 const port = process.env.PORT || 3000;
 app.listen(port, () => console.log(`up on :${port}`));
}
