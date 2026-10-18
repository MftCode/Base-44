import { useState } from 'react';
import { products } from '../data/products.js';
import { IconCheck } from './Icons.jsx';

const initial = { fullName: '', company: '', phone: '', email: '', category: '', description: '', consent: false };

export default function ConsultationForm({ compact = false }) {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [serverError, setServerError] = useState('');

  const set = (k, v) => {
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const validate = () => {
    const e = {};
    if (!form.fullName.trim() || form.fullName.trim().length < 2) e.fullName = 'نام و نام خانوادگی را وارد کنید.';
    if (!form.phone.trim() || !/^[0-9+\-\s()]{7,20}$/.test(form.phone.trim())) e.phone = 'شماره تماس معتبر وارد کنید.';
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = 'ایمیل معتبر وارد کنید.';
    if (!form.description.trim() || form.description.trim().length < 5) e.description = 'شرح نیاز خود را وارد کنید.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = async (ev) => {
    ev.preventDefault();
    setServerError('');
    if (status === 'submitting') return;
    if (!validate()) return;
    setStatus('submitting');
    try {
      const res = await fetch('/api/consultations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        if (data.fields) {
          setErrors(data.fields);
          setStatus('idle');
          setServerError(data.error || 'لطفاً موارد مشخص‌شده را اصلاح کنید.');
        } else {
          setStatus('error');
          setServerError(data.error || 'ثبت درخواست با خطا مواجه شد. لطفاً مجدداً تلاش کنید.');
        }
        return;
      }
      setStatus('success');
      setForm(initial);
    } catch (err) {
      setStatus('error');
      setServerError('ارتباط با سرور برقرار نشد. لطفاً اتصال اینترنت را بررسی و مجدداً تلاش کنید.');
    }
  };

  if (status === 'success') {
    return (
      <div className="form-card" role="status" aria-live="polite">
        <div className="form-msg ok">
          <strong>درخواست شما با موفقیت ثبت شد.</strong> کارشناسان پارس بزرگمهر برای بررسی نیاز شما و برقراری ارتباط اقدام خواهند کرد.
        </div>
        <button className="btn btn-outline" onClick={() => setStatus('idle')}>ثبت درخواست جدید</button>
      </div>
    );
  }

  return (
    <form className="form-card" onSubmit={submit} noValidate>
      {status === 'error' && serverError && (
        <div className="form-msg bad" role="alert">{serverError}</div>
      )}
      <div className="form-row">
        <div className={`field ${errors.fullName ? 'invalid' : ''}`}>
          <label htmlFor="cf-name">نام و نام خانوادگی <span className="req">*</span></label>
          <input id="cf-name" type="text" value={form.fullName} onChange={(e) => set('fullName', e.target.value)} autoComplete="name" />
          {errors.fullName && <span className="err">{errors.fullName}</span>}
        </div>
        <div className="field">
          <label htmlFor="cf-company">نام شرکت</label>
          <input id="cf-company" type="text" value={form.company} onChange={(e) => set('company', e.target.value)} autoComplete="organization" />
        </div>
      </div>
      <div className="form-row">
        <div className={`field ${errors.phone ? 'invalid' : ''}`}>
          <label htmlFor="cf-phone">شماره تماس <span className="req">*</span></label>
          <input id="cf-phone" className="ltr" type="tel" dir="ltr" value={form.phone} onChange={(e) => set('phone', e.target.value)} autoComplete="tel" placeholder="0912..." />
          {errors.phone && <span className="err">{errors.phone}</span>}
        </div>
        <div className={`field ${errors.email ? 'invalid' : ''}`}>
          <label htmlFor="cf-email">ایمیل</label>
          <input id="cf-email" className="ltr" type="email" dir="ltr" value={form.email} onChange={(e) => set('email', e.target.value)} autoComplete="email" placeholder="example@mail.com" />
          {errors.email && <span className="err">{errors.email}</span>}
        </div>
      </div>
      <div className="field">
        <label htmlFor="cf-cat">دسته محصول موردنظر</label>
        <select id="cf-cat" value={form.category} onChange={(e) => set('category', e.target.value)}>
          <option value="">انتخاب کنید...</option>
          {products.map((p) => <option key={p.slug} value={p.name}>{p.name}</option>)}
          <option value="سایر / نامشخص">سایر / نامشخص</option>
        </select>
      </div>
      <div className={`field ${errors.description ? 'invalid' : ''}`}>
        <label htmlFor="cf-desc">شرح نیاز یا توضیحات فنی <span className="req">*</span></label>
        <textarea id="cf-desc" value={form.description} onChange={(e) => set('description', e.target.value)} rows={compact ? 4 : 5} placeholder="نوع تجهیز، کاربرد، ظرفیت موردنظر و شرایط محیطی را شرح دهید." />
        {errors.description && <span className="err">{errors.description}</span>}
      </div>
      <div className="check-field">
        <input id="cf-consent" type="checkbox" checked={form.consent} onChange={(e) => set('consent', e.target.checked)} />
        <label htmlFor="cf-consent">می‌پذیرم که اطلاعات واردشده برای بررسی درخواست و برقراری ارتباط توسط پارس بزرگمهر استفاده می‌شود.</label>
      </div>
      <button type="submit" className="btn btn-primary btn-block" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'در حال ارسال...' : <>ارسال درخواست مشاوره <IconCheck size={18} /></>}
      </button>
    </form>
  );
}
