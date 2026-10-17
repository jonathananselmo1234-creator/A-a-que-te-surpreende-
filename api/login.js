// api/login.js
import { kv } from '@vercel/kv';
export default async function handler(req, res) {
  const email = req.body.email?.toLowerCase().trim();
  const pagou = await kv.sismember('pagos', email);
  if (pagou) {
    res.setHeader('Set-Cookie', `acesso=${email}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=2592000`);
    return res.status(200).json({ ok: true });
  } else {
    return res.status(401).json({ ok: false });
  }
}
