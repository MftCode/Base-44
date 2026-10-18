import fs from 'fs';
import path from 'path';

const DATA_DIR = process.env.DATA_DIR || path.resolve(process.cwd(), 'data');
const DATA_FILE = path.join(DATA_DIR, 'consultations.json');

function ensureStore() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, '[]', 'utf8');
  }
}

function readAll() {
  ensureStore();
  try {
    const raw = fs.readFileSync(DATA_FILE, 'utf8');
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    console.error('store: failed to read consultations:', err.message);
    return [];
  }
}

function writeAll(records) {
  ensureStore();
  fs.writeFileSync(DATA_FILE, JSON.stringify(records, null, 2), 'utf8');
}

export function createConsultation(data) {
  const records = readAll();
  const id = Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
  const record = {
    id,
    fullName: data.fullName || '',
    company: data.company || '',
    phone: data.phone || '',
    email: data.email || '',
    category: data.category || '',
    description: data.description || '',
    consent: !!data.consent,
    createdAt: new Date().toISOString(),
    status: 'new',
  };
  records.push(record);
  writeAll(records);
  return record;
}

export function listConsultations() {
  return readAll().sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
}

export function updateStatus(id, status) {
  const records = readAll();
  const rec = records.find((r) => r.id === id);
  if (!rec) return null;
  rec.status = status;
  writeAll(records);
  return rec;
}

export function deleteConsultation(id) {
  const records = readAll();
  const next = records.filter((r) => r.id !== id);
  writeAll(next);
  return next.length !== records.length;
}
