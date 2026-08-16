import { useState, type FormEvent } from "react";
import { CheckCircle2, Clock, Mail, MapPin, Phone } from "lucide-react";
import { openingHours } from "../lib/content";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

interface FormState {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  message: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  guests: "2",
  message: "",
};

export default function Reservation() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (key: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Моля, въведете име";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Невалиден имейл адрес";
    if (!/^[+\d][\d\s]{6,}$/.test(form.phone)) next.phone = "Невалиден телефонен номер";
    if (!form.date) next.date = "Изберете дата";
    if (!form.time) next.time = "Изберете час";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    // Демо форма — тук би стоял реален API/имейл интеграция.
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-espresso py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            light
            eyebrow="Резервация"
            title="Запазете маса за незабравимо изживяване"
            description="Попълнете формата и ще потвърдим резервацията ви до 30 минути в работно време."
          />
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col justify-between rounded-3xl bg-cream/5 p-8 ring-1 ring-cream/10">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="mt-1 shrink-0 text-gold" size={20} />
                  <div>
                    <div className="font-medium text-cream">Адрес</div>
                    <p className="text-sm text-cream/60">ул. „Виа Италия" 24, София</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="mt-1 shrink-0 text-gold" size={20} />
                  <div>
                    <div className="font-medium text-cream">Телефон</div>
                    <p className="text-sm text-cream/60">+359 2 123 4567</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail className="mt-1 shrink-0 text-gold" size={20} />
                  <div>
                    <div className="font-medium text-cream">Имейл</div>
                    <p className="text-sm text-cream/60">rezervacii@osterianova.bg</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock className="mt-1 shrink-0 text-gold" size={20} />
                  <div>
                    <div className="font-medium text-cream">Работно време</div>
                    <ul className="mt-1 space-y-0.5 text-sm text-cream/60">
                      {openingHours.map((oh) => (
                        <li key={oh.day} className="flex justify-between gap-4">
                          <span>{oh.day}</span>
                          <span>{oh.hours}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center rounded-3xl bg-cream/5 p-10 text-center ring-1 ring-cream/10">
                <CheckCircle2 className="text-terracotta" size={44} />
                <h3 className="mt-4 font-display text-2xl font-medium text-cream">
                  Заявката е изпратена!
                </h3>
                <p className="mt-2 max-w-sm text-sm text-cream/60">
                  Благодарим ви, {form.name.split(" ")[0]}. Ще потвърдим резервацията ви на{" "}
                  {form.email} възможно най-скоро.
                </p>
                <button
                  onClick={() => {
                    setForm(initialState);
                    setSubmitted(false);
                  }}
                  className="mt-6 rounded-full border border-cream/25 px-6 py-2.5 text-sm font-medium text-cream hover:bg-cream/10"
                >
                  Нова резервация
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="grid gap-5 rounded-3xl bg-cream/5 p-8 ring-1 ring-cream/10 sm:grid-cols-2"
              >
                <Field label="Име и фамилия" error={errors.name}>
                  <input
                    value={form.name}
                    onChange={update("name")}
                    placeholder="Иван Иванов"
                    className={inputClass(!!errors.name)}
                  />
                </Field>

                <Field label="Имейл" error={errors.email}>
                  <input
                    value={form.email}
                    onChange={update("email")}
                    placeholder="ivan@email.com"
                    className={inputClass(!!errors.email)}
                  />
                </Field>

                <Field label="Телефон" error={errors.phone}>
                  <input
                    value={form.phone}
                    onChange={update("phone")}
                    placeholder="+359 88 123 4567"
                    className={inputClass(!!errors.phone)}
                  />
                </Field>

                <Field label="Брой гости">
                  <select
                    value={form.guests}
                    onChange={update("guests")}
                    className={inputClass(false)}
                  >
                    {Array.from({ length: 10 }).map((_, i) => (
                      <option key={i} value={i + 1}>
                        {i + 1} {i === 0 ? "гост" : "гости"}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="Дата" error={errors.date}>
                  <input
                    type="date"
                    value={form.date}
                    onChange={update("date")}
                    className={inputClass(!!errors.date)}
                  />
                </Field>

                <Field label="Час" error={errors.time}>
                  <input
                    type="time"
                    value={form.time}
                    onChange={update("time")}
                    className={inputClass(!!errors.time)}
                  />
                </Field>

                <Field label="Съобщение (по желание)" full>
                  <textarea
                    value={form.message}
                    onChange={update("message")}
                    rows={3}
                    placeholder="Специални изисквания, повод за празнуване..."
                    className={inputClass(false)}
                  />
                </Field>

                <button
                  type="submit"
                  className="sm:col-span-2 mt-2 rounded-full bg-terracotta px-7 py-3.5 text-sm font-semibold text-cream transition hover:bg-terracotta-dark"
                >
                  Изпрати заявка за резервация
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  full,
  children,
}: {
  label: string;
  error?: string;
  full?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className={`block ${full ? "sm:col-span-2" : ""}`}>
      <span className="mb-1.5 block text-sm font-medium text-cream/80">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-terracotta">{error}</span>}
    </label>
  );
}

function inputClass(hasError: boolean) {
  return `w-full rounded-xl border bg-espresso-2 px-4 py-2.5 text-sm text-cream placeholder:text-cream/30 outline-none transition focus:border-gold ${
    hasError ? "border-terracotta" : "border-cream/15"
  }`;
}
