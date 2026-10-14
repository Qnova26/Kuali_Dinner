import { useState } from 'react';

const menuOptions = [
  {
    id: 'rijsttafel',
    name: 'Balinese Rijsttafel',
    desc: 'Traditional Royal Megibung feast featuring Babi Guling spice profile, Duck Betutu, Sambal Matah.',
  },
  {
    id: 'sumatran',
    name: 'Sumatran Feast Set',
    desc: 'Aromatic Padang & Minangkabau riches: slow-braised Beef Rendang, Gulai Snapper, Sambal Ijo.',
  },
  {
    id: 'plantbased',
    name: 'Plant-Based Nusantara',
    desc: '100% Vegan archipelago journey: Banana flower curry, Tempeh Bacem, charred young jackfruit rendang.',
  },
  {
    id: 'alacarte',
    name: 'A La Carte Selection',
    desc: 'Custom mix-and-match of coastal Jimbaran seafood BBQ, sate lilit skewers, and archipelago desserts.',
  },
  {
    id: 'recommend',
    name: 'Need Chef Recommendation',
    desc: "Let our executive chef design a custom seasonal menu suited to your group's taste.",
  },
];

const dietaryOptions = [
  'Peanut Allergy',
  'Kid-friendly Mild',
  'Gluten-Free',
  'No Pork',
  'Vegan',
  'Vegetarian',
  'Halal',
  'Dairy-Free',
];

const servingTimes = [
  '6:00 PM (Early Twilight)',
  '6:30 PM (Sunset Hour)',
  '7:00 PM (Prime Villa Dinner)',
  '7:30 PM (Late Dinner)',
  '8:00 PM (Evening Service)',
];

const WA_NUMBER = '6281234567890'; // Ganti dengan nomor WhatsApp admin

export default function BookingSection() {
  const today = new Date().toISOString().split('T')[0];

  const [form, setForm] = useState({
    fullName: '',
    waNumber: '',
    villaAddress: '',
    dinnerDate: '',
    servingTime: '7:00 PM (Prime Villa Dinner)',
    guests: 4,
    menuOption: '',
    dietary: [],
    allergies: '',
    villaRequests: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const update = (field, val) => {
    setForm((prev) => ({ ...prev, [field]: val }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: '' }));
  };

  const toggleDietary = (item) => {
    setForm((prev) => ({
      ...prev,
      dietary: prev.dietary.includes(item)
        ? prev.dietary.filter((d) => d !== item)
        : [...prev.dietary, item],
    }));
  };

  const validate = () => {
    const e = {};
    if (!form.fullName.trim()) e.fullName = 'Name is required';
    if (!form.villaAddress.trim()) e.villaAddress = 'Villa address is required';
    if (!form.dinnerDate) e.dinnerDate = 'Please select a date';
    if (!form.menuOption) e.menuOption = 'Please select a menu preference';
    return e;
  };

  const buildWAMessage = () => {
    const selectedMenu = menuOptions.find((m) => m.id === form.menuOption);
    const dietary = form.dietary.length > 0 ? form.dietary.join(', ') : 'None specified';
    return encodeURIComponent(
      `Hi KUALI Bali, I would like to book a private chef dinner.\n\n` +
        `*Name:* ${form.fullName}\n` +
        `*WhatsApp:* ${form.waNumber || 'Not provided'}\n` +
        `*Villa:* ${form.villaAddress}\n` +
        `*Date:* ${form.dinnerDate}\n` +
        `*Time:* ${form.servingTime}\n` +
        `*Guests:* ${form.guests} Pax\n` +
        `*Menu Preference:* ${selectedMenu ? selectedMenu.name : 'To be discussed'}\n` +
        `*Dietary/Allergies:* ${dietary}${form.allergies ? ` — ${form.allergies}` : ''}\n` +
        `${form.villaRequests ? `*Additional Requests:* ${form.villaRequests}\n` : ''}` +
        `\nPlease let me know the availability and total price for our villa. Thank you!`
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    const msg = buildWAMessage();
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank');
    setSubmitted(true);
  };

  const selectedMenu = menuOptions.find((m) => m.id === form.menuOption);

  // Live preview message
  const previewMsg = `Hi KUALI Bali, I would like to book a private chef dinner.\n\nName: ${form.fullName || 'Sarah Jenkins'}\nWhatsApp: ${form.waNumber || '+61 412 345 678'}\nVilla: ${form.villaAddress || 'Villa Anggrek, Seminyak'}\nDate: ${form.dinnerDate || 'Wed, Oct 14, 2026'}\nTime: ${form.servingTime}\nGuests: ${form.guests} Pax\nMenu Preference: ${selectedMenu ? selectedMenu.name : 'Balinese Rijsttafel Set'}\nDietary/Allergies: ${form.dietary.length > 0 ? form.dietary.join(', ') : 'None specified yet'}\n\nPlease let me know the availability and total price for our villa. Thank you!`;

  return (
    <section id="book" className="w-full py-28 section-bg-booking">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
          <div className="lg:col-span-8 space-y-4">
            <span className="font-label-caps text-label-caps uppercase text-secondary font-bold tracking-widest block">
              Prince Reservations Open
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary">
              Reserve Your Private Villa Chef
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
              Complete the details below to generate your personalized booking draft. You will be
              seamlessly redirected to chat with our WhatsApp reservations team to finalize your
              bespoke menu and confirm island availability.
            </p>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end">
            <div className="p-4 rounded-lg bg-surface-container-low max-w-sm shadow-sm border border-[rgba(140,106,83,0.12)]">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary text-[22px] mt-0.5">verified_user</span>
                <div className="space-y-1">
                  <span className="font-label-lg text-label-lg text-primary block">Zero Upfront Obligation</span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Submitting your WhatsApp request allows our culinary director to check date
                    openings, dietary logistics, and villa kitchen requirements before payment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form + Preview Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-start">
          {/* Left: Form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-7 bg-surface-container-lowest rounded-xl p-6 sm:p-8 lg:p-10 shadow-sm space-y-8 border border-[rgba(140,106,83,0.08)]"
          >
            {/* Step 01: Guest & Location */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary font-bold">01</span>
                <h3 className="font-headline-sm text-headline-sm text-primary">Guest & Location Details</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="block font-label-caps text-label-caps uppercase tracking-wider text-on-surface-variant" htmlFor="fullName">
                    Full Name *
                  </label>
                  <div className="relative">
                    <input
                      id="fullName"
                      type="text"
                      placeholder="e.g., Sarah Jenkins"
                      value={form.fullName}
                      onChange={(e) => update('fullName', e.target.value)}
                      className={`w-full bg-surface-container-lowest rounded-lg px-4 py-3 font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:ring-1 focus:ring-secondary transition-all shadow-sm border ${errors.fullName ? 'border-error' : 'border-[rgba(140,106,83,0.25)]'}`}
                    />
                    <span className="material-symbols-outlined absolute right-3.5 top-3.5 text-outline text-[18px]">person</span>
                  </div>
                  {errors.fullName && <p className="font-body-sm text-body-sm text-error">{errors.fullName}</p>}
                </div>
                <div className="space-y-1.5">
                  <label className="block font-label-caps text-label-caps uppercase tracking-wider text-on-surface-variant" htmlFor="waNumber">
                    WhatsApp Number
                  </label>
                  <div className="relative">
                    <input
                      id="waNumber"
                      type="tel"
                      placeholder="e.g., +61 412 345 678"
                      value={form.waNumber}
                      onChange={(e) => update('waNumber', e.target.value)}
                      className="w-full bg-surface-container-lowest rounded-lg px-4 py-3 font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:ring-1 focus:ring-secondary transition-all shadow-sm border border-[rgba(140,106,83,0.25)]"
                    />
                    <span className="material-symbols-outlined absolute right-3.5 top-3.5 text-outline text-[18px]">chat</span>
                  </div>
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="block font-label-caps text-label-caps uppercase tracking-wider text-on-surface-variant" htmlFor="villaAddress">
                  Villa Name & Area (Bali) *
                </label>
                <div className="relative">
                  <input
                    id="villaAddress"
                    type="text"
                    placeholder="e.g., Villa Anggrek, Jalan Kayu Aya, Seminyak"
                    value={form.villaAddress}
                    onChange={(e) => update('villaAddress', e.target.value)}
                    className={`w-full bg-surface-container-lowest rounded-lg px-4 py-3 font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:ring-1 focus:ring-secondary transition-all shadow-sm border ${errors.villaAddress ? 'border-error' : 'border-[rgba(140,106,83,0.25)]'}`}
                  />
                  <span className="material-symbols-outlined absolute right-3.5 top-3.5 text-outline text-[18px]">pin_drop</span>
                </div>
                {errors.villaAddress && <p className="font-body-sm text-body-sm text-error">{errors.villaAddress}</p>}
                <p className="font-body-sm text-body-sm text-on-surface-variant italic">
                  Chef service includes Seminyak, Canggu, Pererenan, Uluwatu, Sanur & Ubud.
                </p>
              </div>
            </div>

            <div className="w-full h-px bg-surface-variant/70" />

            {/* Step 02: Schedule */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary font-bold">02</span>
                <h3 className="font-headline-sm text-headline-sm text-primary">Dining Schedule & Party Size</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="block font-label-caps text-label-caps uppercase tracking-wider text-on-surface-variant" htmlFor="dinnerDate">
                    Date of Dinner *
                  </label>
                  <input
                    id="dinnerDate"
                    type="date"
                    min={today}
                    value={form.dinnerDate}
                    onChange={(e) => update('dinnerDate', e.target.value)}
                    className={`w-full bg-surface-container-lowest rounded-lg px-4 py-3 font-body-md text-body-md text-on-surface focus:outline-none focus:ring-1 focus:ring-secondary transition-all shadow-sm border ${errors.dinnerDate ? 'border-error' : 'border-[rgba(140,106,83,0.25)]'}`}
                  />
                  {errors.dinnerDate && <p className="font-body-sm text-body-sm text-error">{errors.dinnerDate}</p>}
                </div>
                <div className="space-y-1.5">
                  <label className="block font-label-caps text-label-caps uppercase tracking-wider text-on-surface-variant" htmlFor="servingTime">
                    Preferred Serving Time *
                  </label>
                  <div className="relative">
                    <select
                      id="servingTime"
                      value={form.servingTime}
                      onChange={(e) => update('servingTime', e.target.value)}
                      className="w-full bg-surface-container-lowest rounded-lg px-4 py-3 font-body-md text-body-md text-on-surface appearance-none focus:outline-none focus:ring-1 focus:ring-secondary transition-all shadow-sm border border-[rgba(140,106,83,0.25)]"
                    >
                      {servingTimes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                    <span className="material-symbols-outlined absolute right-3.5 top-3.5 text-outline text-[18px] pointer-events-none">schedule</span>
                  </div>
                </div>
              </div>

              {/* Guest Counter */}
              <div className="space-y-2 pt-2">
                <div className="flex items-center justify-between">
                  <label className="font-label-caps text-label-caps uppercase tracking-wider text-on-surface-variant">
                    Number of Guests (Pax) *
                  </label>
                  <span className="font-label-md text-label-md text-secondary">
                    {form.guests} Guest{form.guests !== 1 ? 's' : ''} Selected
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center bg-surface-container-lowest rounded-lg p-1 shadow-sm border border-[rgba(140,106,83,0.25)]">
                    <button
                      type="button"
                      aria-label="Decrease pax"
                      onClick={() => update('guests', Math.max(1, form.guests - 1))}
                      className="w-10 h-10 rounded flex items-center justify-center text-primary hover:bg-surface-container transition-colors focus:outline-none"
                    >
                      <span className="material-symbols-outlined text-[20px]">remove</span>
                    </button>
                    <span className="w-16 text-center font-headline-sm text-headline-sm text-primary select-none">
                      {form.guests}
                    </span>
                    <button
                      type="button"
                      aria-label="Increase pax"
                      onClick={() => update('guests', Math.min(10, form.guests + 1))}
                      className="w-10 h-10 rounded flex items-center justify-center text-primary hover:bg-surface-container transition-colors focus:outline-none"
                    >
                      <span className="material-symbols-outlined text-[20px]">add</span>
                    </button>
                  </div>
                  <div className="flex-1 px-4 py-2.5 rounded-lg bg-surface-container text-on-surface-variant flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[18px]">info</span>
                    <span className="font-body-sm text-body-sm">Strict maximum of 10 guests per booking.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-px bg-surface-variant/70" />

            {/* Step 03: Menu */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary font-bold">03</span>
                  <h3 className="font-headline-sm text-headline-sm text-primary">Menu Experience Interest</h3>
                </div>
                <span className="font-body-sm text-body-sm text-on-surface-variant">Select 1 style</span>
              </div>
              {errors.menuOption && <p className="font-body-sm text-body-sm text-error">{errors.menuOption}</p>}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {menuOptions.map((option) => (
                  <label
                    key={option.id}
                    className={`relative flex flex-col p-4 rounded-lg cursor-pointer transition-all border ${
                      form.menuOption === option.id
                        ? 'bg-surface-container border-secondary shadow-sm'
                        : 'bg-surface-container-lowest border-[rgba(140,106,83,0.15)] hover:bg-surface-container'
                    }`}
                  >
                    <input
                      type="radio"
                      name="menuOption"
                      value={option.id}
                      checked={form.menuOption === option.id}
                      onChange={() => update('menuOption', option.id)}
                      className="sr-only"
                    />
                    <div className="flex items-center justify-between w-full mb-1">
                      <span className="font-headline-sm text-headline-sm text-primary">{option.name}</span>
                      <span
                        className={`w-5 h-5 rounded-full flex items-center justify-center transition-all ${
                          form.menuOption === option.id
                            ? 'bg-primary text-on-primary'
                            : 'bg-surface-container text-transparent'
                        }`}
                      >
                        <span className="material-symbols-outlined text-[14px]">check</span>
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-snug">{option.desc}</p>
                  </label>
                ))}
              </div>
            </div>

            <div className="w-full h-px bg-surface-variant/70" />

            {/* Step 04: Allergies */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary font-bold">04</span>
                <h3 className="font-headline-sm text-headline-sm text-primary">Allergies & Special Arrangements</h3>
              </div>

              {/* Dietary chips */}
              <div className="space-y-2">
                <label className="font-label-caps text-label-caps uppercase tracking-wider text-on-surface-variant block">
                  Dietary Restrictions & Spice Levels
                </label>
                <div className="flex flex-wrap gap-2">
                  {dietaryOptions.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => toggleDietary(opt)}
                      className={`px-3 py-1.5 rounded-full font-label-md text-label-md transition-all border ${
                        form.dietary.includes(opt)
                          ? 'bg-secondary text-on-primary border-secondary'
                          : 'bg-surface-container-lowest text-on-surface-variant border-[rgba(140,106,83,0.25)] hover:border-secondary/50'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block font-label-caps text-label-caps uppercase tracking-wider text-on-surface-variant" htmlFor="allergies">
                  Allergy Details & Notes
                </label>
                <textarea
                  id="allergies"
                  rows={3}
                  placeholder="e.g., 1 person allergic to peanuts, 1 mild spice for 6yo child, 1 gluten-free"
                  value={form.allergies}
                  onChange={(e) => update('allergies', e.target.value)}
                  className="w-full bg-surface-container-lowest rounded-lg px-4 py-3 font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:ring-1 focus:ring-secondary transition-all shadow-sm border border-[rgba(140,106,83,0.25)] resize-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block font-label-caps text-label-caps uppercase tracking-wider text-on-surface-variant" htmlFor="villaRequests">
                  Additional Villa Requests (Optional)
                </label>
                <textarea
                  id="villaRequests"
                  rows={2}
                  placeholder="e.g., Anniversary table setup, pool candles, birthday cake request, or wine pairing recommendations"
                  value={form.villaRequests}
                  onChange={(e) => update('villaRequests', e.target.value)}
                  className="w-full bg-surface-container-lowest rounded-lg px-4 py-3 font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:ring-1 focus:ring-secondary transition-all shadow-sm border border-[rgba(140,106,83,0.25)] resize-none"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              id="submit-booking"
              className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-secondary text-on-primary rounded-lg font-label-lg text-label-lg uppercase tracking-wider hover:bg-on-secondary-container transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span className="material-symbols-outlined text-[20px]">send</span>
              Send Request via WhatsApp
            </button>
            <p className="text-center font-body-sm text-body-sm text-on-surface-variant">
              Redirects directly to WhatsApp with your draft text
            </p>

            {submitted && (
              <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center gap-3">
                <span className="material-symbols-outlined text-emerald-600 text-[20px]">check_circle</span>
                <p className="font-body-sm text-body-sm text-emerald-800">
                  WhatsApp opened! If it didn't open automatically,{' '}
                  <a
                    href={`https://wa.me/${WA_NUMBER}?text=${buildWAMessage()}`}
                    target="_blank"
                    rel="noreferrer"
                    className="underline font-semibold"
                  >
                    click here
                  </a>
                  .
                </p>
              </div>
            )}
          </form>

          {/* Right: Live WhatsApp Preview */}
          <div className="lg:col-span-5 sticky top-24 space-y-4">
            <div className="bg-surface-container-lowest rounded-xl border border-[rgba(140,106,83,0.12)] overflow-hidden shadow-[0_16px_36px_-12px_rgba(34,32,30,0.08)]">
              {/* WA Preview Header */}
              <div className="bg-[#128C7E] px-5 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="font-headline-sm text-headline-sm text-white text-[16px]">K</span>
                  </div>
                  <div>
                    <p className="font-label-lg text-label-lg text-white">KUALI Concierge Desk</p>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-green-400 pulse-dot" />
                      <span className="font-body-sm text-body-sm text-green-200 text-[11px]">Online · Instant Response</span>
                    </div>
                  </div>
                </div>
                <span className="font-label-caps text-label-caps uppercase text-green-200 tracking-widest text-[10px]">Live Draft</span>
              </div>

              {/* Preview Message */}
              <div className="p-5 bg-[#ECE5DD]">
                <p className="font-label-caps text-label-caps uppercase text-on-surface-variant tracking-widest text-[10px] mb-3">
                  Your Generated Message Preview
                </p>
                <div className="bg-white rounded-xl rounded-tl-none p-4 shadow-sm max-w-xs">
                  <pre className="font-body-sm text-body-sm text-on-surface whitespace-pre-wrap leading-relaxed" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '12px' }}>
                    {previewMsg}
                  </pre>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 text-right text-[10px]">
                    {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })} ✓✓
                  </p>
                </div>
              </div>

              {/* Send Button Preview */}
              <div className="px-5 py-4 space-y-3 border-t border-[rgba(140,106,83,0.12)]">
                <button
                  onClick={handleSubmit}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-[#25D366] text-white rounded-lg font-label-lg text-label-lg hover:bg-[#128C7E] transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px]">send</span>
                  Send Request via WhatsApp
                </button>
                <p className="text-center font-body-sm text-body-sm text-on-surface-variant text-[11px]">
                  Redirects directly to WhatsApp with your draft text
                </p>
              </div>
            </div>

            {/* Full-Service note */}
            <div className="p-4 rounded-xl bg-surface-container-low border border-[rgba(140,106,83,0.12)] flex items-start gap-3">
              <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5 shrink-0">local_dining</span>
              <div>
                <p className="font-label-lg text-label-lg text-primary mb-1">Full-Service Table Ritual Included</p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Every booking includes fresh market sourcing, on-site live chef preparation in your villa kitchen, professional plating, table setting, and 100% spotless kitchen cleanup.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
