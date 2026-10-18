import express from 'express';
import {
  createConsultation,
  listConsultations,
  updateStatus,
  deleteConsultation,
} from './store.js';

const app = express();
app.use(express.json({ limit: '100kb' }));

// Simple in-process rate limiting to reduce abuse on the public form.
const SUBMIT_WINDOW_MS = 60_000;
const SUBMIT_MAX = 5;
const ipHits = new Map();
function rateLimited(req) {
  const ip = req.ip || 'unknown';
  const now = Date.now();
  const arr = (ipHits.get(ip) || []).filter((t) => now - t < SUBMIT_WINDOW_MS);
  arr.push(now);
  ipHits.set(ip, arr);
  return arr.length > SUBMIT_MAX;
}

function adminOk(req) {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) return false; // refuse if not configured
  const sent = req.get('x-admin-password') || req.query.token;
  return sent === expected;
}

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'pars-bozorgmehr-api' });
});

// Public: submit a consultation request
app.post('/api/consultations', (req, res) => {
  if (rateLimited(req)) {
    return res.status(429).json({ error: 'تعداد درخواست‌ها بیش از حد مجاز است. لطفاً کمی بعد تلاش کنید.' });
  }
  const b = req.body || {};
  const errors = {};
  if (!b.fullName || b.fullName.trim().length < 2) errors.fullName = 'نام و نام خانوادگی را وارد کنید.';
  if (!b.phone || !/^[0-9+\-\s()]{7,20}$/.test(b.phone.trim())) errors.phone = 'شماره تماس معتبر وارد کنید.';
  if (b.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b.email.trim())) errors.email = 'ایمیل معتبر وارد کنید.';
  if (!b.description || b.description.trim().length < 5) errors.description = 'شرح نیاز را وارد کنید.';
  if (Object.keys(errors).length) {
    return res.status(400).json({ error: 'اطلاعات واردشده ناقص است.', fields: errors });
  }
  try {
    const rec = createConsultation({
      fullName: b.fullName.trim(),
      company: (b.company || '').trim(),
      phone: b.phone.trim(),
      email: (b.email || '').trim(),
      category: b.category || '',
      description: b.description.trim(),
      consent: !!b.consent,
    });
    return res.status(201).json({ ok: true, id: rec.id });
  } catch (err) {
    console.error('create consultation failed:', err);
    return res.status(500).json({ error: 'ثبت درخواست با خطا مواجه شد. لطفاً مجدداً تلاش کنید.' });
  }
});

// Admin: list / manage requests (protected)
app.get('/api/consultations', (req, res) => {
  if (!adminOk(req)) return res.status(401).json({ error: 'دسترسی غیرمجاز.' });
  res.json({ requests: listConsultations() });
});

app.patch('/api/consultations/:id', (req, res) => {
  if (!adminOk(req)) return res.status(401).json({ error: 'دسترسی غیرمجاز.' });
  const { status } = req.body || {};
  const allowed = ['new', 'contacted', 'done', 'archived'];
  if (!allowed.includes(status)) return res.status(400).json({ error: 'وضعیت نامعتبر.' });
  const rec = updateStatus(req.params.id, status);
  if (!rec) return res.status(404).json({ error: 'درخواست یافت نشد.' });
  res.json({ ok: true, request: rec });
});

app.delete('/api/consultations/:id', (req, res) => {
  if (!adminOk(req)) return res.status(401).json({ error: 'دسترسی غیرمجاز.' });
  const ok = deleteConsultation(req.params.id);
  if (!ok) return res.status(404).json({ error: 'درخواست یافت نشد.' });
  res.json({ ok: true });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`pars-bozorgmehr-api listening on ${PORT}`);
});
