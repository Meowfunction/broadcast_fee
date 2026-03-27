// ==============================
// TRANSLATIONS
// ==============================
const T = {
  en: {
    cookieText: "This website uses Firebase to sync data across devices. Do you agree?",
    cookieAccept: "Accept",
    cookieDecline: "Decline",
    loginTitle: "Broadcasting Tax",
    loginSub: "Schwetzinger Straße 1",
    tabTenant: "Tenant",
    tabAdmin: "Admin",
    lRoom: "Room Number",
    lName: "Full Name",
    lPhone: "Phone Number",
    lRegDate: "Move-in Date",
    loginBtn: "Continue",
    detailsTitle: "Your Details",
    detailsSub: "Fill in your contact info and move-in date. You can update this anytime.",
    dLabelPhone: "Phone Number",
    dLabelRegDate: "Move-in Date",
    btnSaveDetails: "Save & Continue",
    btnEditDetails: "Edit My Details",
    setupNote: "First-time admin setup: create your credentials.",
    lSetupUser: "Username",
    lSetupPass: "Password",
    lSetupBnr: "Beitragsnummer",
    btnAdminSetup: "Create Admin Account",
    lAdminUser: "Username",
    lAdminPass: "Password",
    btnAdminLogin: "Login",
    logout: "Logout",
    welcome: "Welcome,",
    headerBlurb: "Dear tenants in Schwetzinger Straße 1, this website intends to collect information regarding the broadcasting tax (Rundfunkbeitrag). Please fill in the form below and save.",
    myInfoTitle: "My Information",
    fLabelRoom: "Room",
    fLabelName: "Name",
    fLabelPhone: "Phone",
    fLabelRegDate: "Move-in Date",
    btnSave: "Save",
    saveOk: "Saved!",
    tableTitle: "All Tenants",
    thRoom: "Room",
    thName: "Name",
    thPhone: "Phone",
    thReg: "Registration Date",
    thFee: "Est. Outstanding Fee",
    thPaid: "Paid",
    thAct: "Actions",
    badgePaid: "Paid",
    badgeUnpaid: "Unpaid",
    badgeMoved: "Moved out",
    btnDeregister: "Deregister",
    btnMarkPaid: "Mark Paid",
    btnMarkUnpaid: "Mark Unpaid",
    btnDelete: "Delete",
    btnReregister: "Re-register",
    confirmReregister: "Re-register this tenant? This will restore them as an active tenant.",
    payTitle: "Payment Information",
    bnrUnknown: "Beitragsnummer: Unknown",
    btnPay: "Pay",
    ibanLabel: "IBAN",
    beneficiaryLabel: "Beneficiary",
    payHint: "Please pay {amount} to the account above. Once confirmed by the admin, your Beitragsnummer will be revealed here so you can link it to your account.",
    bnrLabel: "Your Beitragsnummer:",
    bnrInstructions: "You can now link this number to your Rundfunkbeitrag account.",
    yes: "Yes",
    no: "No",
    confirmDeregister: "Are you sure you want to deregister? This marks you as moved out.",
    confirmDelete: "Are you sure you want to delete this tenant? This cannot be undone.",
    errFillAll: "Please fill in all required fields.",
    errRoomTaken: "That room is already registered under a different name.",
    errBadLogin: "Wrong username or password.",
    adminLabel: "Admin",
    connecting: "Connecting to database…",
    configError: "Firebase is not configured yet. Please fill in firebase-config.js.",
  },
  de: {
    cookieText: "Diese Website verwendet Firebase, um Daten geräteübergreifend zu synchronisieren. Sind Sie einverstanden?",
    cookieAccept: "Akzeptieren",
    cookieDecline: "Ablehnen",
    loginTitle: "Rundfunkbeitrag",
    loginSub: "Schwetzinger Straße 1",
    tabTenant: "Mieter",
    tabAdmin: "Admin",
    lRoom: "Zimmernummer",
    lName: "Vollständiger Name",
    lPhone: "Telefonnummer",
    lRegDate: "Einzugsdatum",
    loginBtn: "Weiter",
    detailsTitle: "Ihre Angaben",
    detailsSub: "Geben Sie Ihre Kontaktdaten und Ihr Einzugsdatum ein. Sie können dies jederzeit ändern.",
    dLabelPhone: "Telefonnummer",
    dLabelRegDate: "Einzugsdatum",
    btnSaveDetails: "Speichern & Weiter",
    btnEditDetails: "Angaben bearbeiten",
    setupNote: "Ersteinrichtung: Erstellen Sie Ihre Admin-Zugangsdaten.",
    lSetupUser: "Benutzername",
    lSetupPass: "Passwort",
    lSetupBnr: "Beitragsnummer",
    btnAdminSetup: "Admin-Konto erstellen",
    lAdminUser: "Benutzername",
    lAdminPass: "Passwort",
    btnAdminLogin: "Anmelden",
    logout: "Abmelden",
    welcome: "Willkommen,",
    headerBlurb: "Liebe Mieter der Schwetzinger Straße 1, diese Website soll Informationen zum Rundfunkbeitrag sammeln. Bitte füllen Sie das Formular aus und speichern Sie.",
    myInfoTitle: "Meine Informationen",
    fLabelRoom: "Zimmer",
    fLabelName: "Name",
    fLabelPhone: "Telefon",
    fLabelRegDate: "Einzugsdatum",
    btnSave: "Speichern",
    saveOk: "Gespeichert!",
    tableTitle: "Alle Mieter",
    thRoom: "Zimmer",
    thName: "Name",
    thPhone: "Telefon",
    thReg: "Registrierungsdatum",
    thFee: "Gesch.<br>Ausstehender Betrag",
    thPaid: "Bezahlt",
    thAct: "Aktionen",
    badgePaid: "Bezahlt",
    badgeUnpaid: "Ausstehend",
    badgeMoved: "Ausgezogen",
    btnDeregister: "Abmelden",
    btnMarkPaid: "Als bezahlt markieren",
    btnMarkUnpaid: "Als unbezahlt markieren",
    btnDelete: "Löschen",
    btnReregister: "Wieder anmelden",
    confirmReregister: "Diesen Mieter wieder anmelden? Er wird wieder als aktiver Mieter geführt.",
    payTitle: "Zahlungsinformationen",
    bnrUnknown: "Beitragsnummer: Unbekannt",
    btnPay: "Bezahlen",
    ibanLabel: "IBAN",
    beneficiaryLabel: "Begünstigter",
    payHint: "Bitte zahlen Sie {amount} an das obige Konto. Sobald der Admin die Zahlung bestätigt, wird Ihre Beitragsnummer hier angezeigt, damit Sie sie mit Ihrem Konto verknüpfen können.",
    bnrLabel: "Ihre Beitragsnummer:",
    bnrInstructions: "Sie können diese Nummer jetzt mit Ihrem Rundfunkbeitragskonto verknüpfen.",
    yes: "Ja",
    no: "Nein",
    confirmDeregister: "Möchten Sie sich wirklich abmelden? Das bedeutet, Sie sind ausgezogen.",
    confirmDelete: "Möchten Sie diesen Mieter wirklich löschen? Das kann nicht rückgängig gemacht werden.",
    errFillAll: "Bitte alle Pflichtfelder ausfüllen.",
    errRoomTaken: "Dieses Zimmer ist bereits unter einem anderen Namen registriert.",
    errBadLogin: "Falscher Benutzername oder falsches Passwort.",
    adminLabel: "Admin",
    connecting: "Verbindung zur Datenbank…",
    configError: "Firebase ist noch nicht konfiguriert. Bitte firebase-config.js ausfüllen.",
  }
};

// ==============================
// STATE
// ==============================
let lang = 'en';
let currentUserId = null; // 'admin' or tenant id
let appData = { admin: null, adminPrivate: null, tenants: {} };
let db = null;
let paymentRevealed = false;
let authReady = false;
let tenantBeitragsnummer = null;

function t(key) { return (T[lang] && T[lang][key]) || T.en[key] || key; }

// ==============================
// FIREBASE HELPERS
// ==============================
function isConfigured() {
  return typeof firebaseConfig !== 'undefined' &&
    firebaseConfig.apiKey &&
    !firebaseConfig.apiKey.startsWith('REPLACE');
}

function dbRef(path) {
  return firebase.database().ref(path);
}

function getTenantsList() {
  if (!appData.tenants) return [];
  return Object.values(appData.tenants);
}

// ==============================
// REALTIME DATA LISTENER
// ==============================
function startDataListener() {
  let tenantsReady = false, adminReady = false;

  function onBothReady() {
    document.getElementById('loading').classList.add('hidden');
  }

  function rerender() {
    if (!document.getElementById('mainPage').classList.contains('hidden') && currentUserId) {
      renderTable();
      renderPayment();
    }
  }

  dbRef('tenants').on('value', snapshot => {
    appData.tenants = snapshot.val() || {};
    if (!tenantsReady) { tenantsReady = true; if (adminReady) onBothReady(); }
    rerender();
  }, err => showDbError(err));

  dbRef('admin').on('value', snapshot => {
    appData.admin = snapshot.val() || null;
    if (!adminReady) { adminReady = true; if (tenantsReady) onBothReady(); }
    if (!document.getElementById('pAdmin').classList.contains('hidden')) updateAdminTabUI();
    rerender();
  }, err => showDbError(err));
}

function showDbError(err) {
  console.error('Firebase error:', err);
  document.getElementById('loadingText').textContent = 'Database error: ' + err.message;
  document.getElementById('loading').classList.remove('hidden');
}

function startAdminPrivateListener() {
  dbRef('adminPrivate').on('value', snapshot => {
    appData.adminPrivate = snapshot.val() || null;
    // Migrate beitragsnummer from old location if present
    if (appData.admin?.beitragsnummer && !appData.adminPrivate?.beitragsnummer) {
      dbRef('adminPrivate').set({ beitragsnummer: appData.admin.beitragsnummer });
      dbRef('admin/beitragsnummer').remove();
    }
  });
}

// ==============================
// SIMPLE PASSWORD HASH
// (Acceptable for this local-trust-group app)
// ==============================
function hashPassword(pw) {
  let h = 0;
  for (let i = 0; i < pw.length; i++) {
    h = Math.imul(31, h) + pw.charCodeAt(i) | 0;
  }
  return h.toString(36) + '_' + pw.length;
}

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

// ==============================
// FEE CALCULATION
// ==============================
// Admin/account holder always counts as 1 from May 2025.
// Tenants counted from their registrationDate.
// Active in month (y, m) = registered by that month AND not deregistered before it.

function monthKey(y, m) { return y * 100 + m; }

function countActiveInMonth(y, m, tenants) {
  const BASE_Y = 2025, BASE_M = 5;
  if (monthKey(y, m) < monthKey(BASE_Y, BASE_M)) return 0;
  let count = 1; // the admin/account holder
  for (const tn of tenants) {
    if (!tn.registrationDate) continue; // skip tenants who haven't filled in details yet
    const reg = new Date(tn.registrationDate);
    const ry = reg.getFullYear(), rm = reg.getMonth() + 1;
    if (isNaN(ry) || isNaN(rm)) continue; // skip invalid dates
    if (monthKey(ry, rm) > monthKey(y, m)) continue;
    if (tn.deregistrationDate) {
      const der = new Date(tn.deregistrationDate);
      const dy = der.getFullYear(), dm = der.getMonth() + 1;
      if (monthKey(dy, dm) < monthKey(y, m)) continue;
    }
    count++;
  }
  return count;
}

function calcFee(tenant, allTenants) {
  const now = new Date();
  const curY = now.getFullYear(), curM = now.getMonth() + 1;

  const reg = new Date(tenant.registrationDate);
  let sy = reg.getFullYear(), sm = reg.getMonth() + 1;

  let ey = curY, em = curM;
  if (tenant.deregistrationDate) {
    const der = new Date(tenant.deregistrationDate);
    ey = der.getFullYear();
    em = der.getMonth() + 1;
    if (monthKey(ey, em) > monthKey(curY, curM)) { ey = curY; em = curM; }
  }

  let total = 0;
  let y = sy, m = sm;
  while (monthKey(y, m) <= monthKey(ey, em)) {
    const count = countActiveInMonth(y, m, allTenants);
    if (count > 0) total += 18.36 / count;
    m++;
    if (m > 12) { m = 1; y++; }
  }
  return Math.round(total * 100) / 100;
}

function fmtEur(amount) {
  return amount.toFixed(2).replace('.', ',') + '\u00a0€';
}

function fmtDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  return d.toLocaleDateString(lang === 'de' ? 'de-DE' : 'en-GB');
}

// ==============================
// LANGUAGE
// ==============================
function setLang(l) {
  lang = l;
  document.getElementById('btnEN').classList.toggle('active', l === 'en');
  document.getElementById('btnDE').classList.toggle('active', l === 'de');
  applyTranslations();
}

function applyTranslations() {
  const ids = {
    cookieText: 'cookieText', cookieAccept: 'cookieAccept', cookieDecline: 'cookieDecline',
    loginTitle: 'loginTitle', loginSub: 'loginSub',
    tabTenant: 'tabTenant', tabAdmin: 'tabAdmin',
    lRoom: 'lRoom', lName: 'lName',
    loginBtn: 'btnTenantLogin',
    detailsTitle: 'detailsTitle', detailsSub: 'detailsSub',
    dLabelPhone: 'dLabelPhone', dLabelRegDate: 'dLabelRegDate',
    btnSaveDetails: 'btnSaveDetails', btnEditDetails: 'btnEditDetails', setupNote: 'setupNote',
    lSetupUser: 'lSetupUser', lSetupPass: 'lSetupPass', lSetupBnr: 'lSetupBnr',
    btnAdminSetup: 'btnAdminSetup', lAdminUser: 'lAdminUser', lAdminPass: 'lAdminPass',
    btnAdminLogin: 'btnAdminLogin', logout: 'btnLogout', headerBlurb: 'headerBlurb',
    myInfoTitle: 'myInfoTitle', fLabelRoom: 'fLabelRoom', fLabelName: 'fLabelName',
    fLabelPhone: 'fLabelPhone', fLabelRegDate: 'fLabelRegDate', btnSave: 'btnSave', saveOk: 'saveOk',
    tableTitle: 'tableTitle', thRoom: 'thRoom', thName: 'thName', thPhone: 'thPhone',
    thReg: 'thReg', thPaid: 'thPaid', thAct: 'thAct',
    payTitle: 'payTitle',
    yes: 'modalYes', no: 'modalNo', connecting: 'loadingText',
  };
  for (const [key, elId] of Object.entries(ids)) {
    const el = document.getElementById(elId);
    if (el) el.textContent = t(key);
  }
  // thFee uses innerHTML to allow <br> in DE translation
  const thFeeEl = document.getElementById('thFee');
  if (thFeeEl) thFeeEl.innerHTML = t('thFee');
  // Re-render dynamic parts if on main page
  if (!document.getElementById('mainPage').classList.contains('hidden')) {
    renderTable();
    renderPayment();
  }
}

// ==============================
// COOKIE CONSENT (per-device, localStorage)
// ==============================
function initCookies() {
  if (!localStorage.getItem('cookiesAccepted')) {
    document.getElementById('cookieBanner').classList.remove('hidden');
  }
}

document.getElementById('cookieAccept').addEventListener('click', () => {
  localStorage.setItem('cookiesAccepted', '1');
  document.getElementById('cookieBanner').classList.add('hidden');
});
document.getElementById('cookieDecline').addEventListener('click', () => {
  document.getElementById('cookieBanner').classList.add('hidden');
});

// ==============================
// ROUTING
// ==============================
function showPage(name) {
  ['loginPage', 'detailsPage', 'mainPage'].forEach(id =>
    document.getElementById(id).classList.add('hidden')
  );
  document.getElementById(name).classList.remove('hidden');
}

// ==============================
// AUTH
// ==============================
// Returns { error, isNew }
function tenantLogin(room, name) {
  room = room.trim(); name = name.trim();
  if (!room || !name) return { error: t('errFillAll') };

  const tenants = getTenantsList();
  const existing = tenants.find(tn => tn.room === room);

  const uid = firebase.auth().currentUser?.uid || '';

  if (existing) {
    if (existing.name.toLowerCase() !== name.toLowerCase()) return { error: t('errRoomTaken') };
    if (uid && existing.uid !== uid) dbRef(`tenants/${existing.id}/uid`).set(uid);
    currentUserId = existing.id;
    return { error: null, isNew: false };
  }

  // New tenant — details filled in on the next page
  const id = generateId();
  dbRef(`tenants/${id}`).set({
    id, room, name, uid,
    phone: '',
    registrationDate: '',
    deregistrationDate: null,
    paid: false
  });
  currentUserId = id;
  return { error: null, isNew: true };
}

function showDetailsPage() {
  const me = getTenantsList().find(tn => tn.id === currentUserId);
  if (me) {
    document.getElementById('dPhone').value   = me.phone || '';
    document.getElementById('dRegDate').value = me.registrationDate || '';
  }
  showPage('detailsPage');
}

function saveDetails() {
  const phone    = document.getElementById('dPhone').value.trim();
  const regMonth = document.getElementById('dRegDate').value;
  if (!regMonth) { showErr('detailsErr', t('errFillAll')); return; }
  dbRef(`tenants/${currentUserId}`).update({
    phone,
    registrationDate: regMonth
  });
  hideErr('detailsErr');
  showPage('mainPage');
  renderMain();
}

function adminLogin(username, password) {
  if (!username || !password) return t('errFillAll');
  if (!appData.admin) return t('errBadLogin');
  if (appData.admin.username !== username) return t('errBadLogin');
  if (appData.admin.passwordHash !== hashPassword(password)) return t('errBadLogin');
  // Claim admin UID so Firebase Rules recognise this session as admin
  const uid = firebase.auth().currentUser?.uid || '';
  if (uid) dbRef('admin/uid').set(uid);
  currentUserId = 'admin';
  startAdminPrivateListener();
  return null;
}

function adminSetup(username, password, beitragsnummer) {
  username = username.trim(); beitragsnummer = beitragsnummer.trim();
  if (!username || !password || !beitragsnummer) return t('errFillAll');
  if (appData.admin) return 'Admin account already exists.';
  const uid = firebase.auth().currentUser?.uid || '';
  dbRef('admin').set({ username, passwordHash: hashPassword(password), uid });
  dbRef('adminPrivate').set({ beitragsnummer });
  startAdminPrivateListener();
  currentUserId = 'admin';
  return null;
}

function startSecretListener(tenantId) {
  dbRef(`secrets/${tenantId}`).on('value', snapshot => {
    tenantBeitragsnummer = snapshot.val()?.beitragsnummer || null;
    if (!document.getElementById('mainPage').classList.contains('hidden')) {
      renderPayment();
    }
  });
}

function logout() {
  if (currentUserId === 'admin') {
    dbRef('adminPrivate').off();
    appData.adminPrivate = null;
  } else if (currentUserId) {
    dbRef(`secrets/${currentUserId}`).off();
  }
  tenantBeitragsnummer = null;
  currentUserId = null;
  paymentRevealed = false;
  showPage('loginPage');
  ['inRoom','inName','dPhone','dRegDate','inAdminUser','inAdminPass','inSetupUser','inSetupPass','inSetupBnr']
    .forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
  hideErr('tenantErr'); hideErr('adminErr');
}

// ==============================
// RENDER
// ==============================
function renderMain() {
  const isAdmin = currentUserId === 'admin';
  let name = isAdmin
    ? (appData.admin ? appData.admin.username : t('adminLabel'))
    : (getTenantsList().find(tn => tn.id === currentUserId) || {}).name || '';

  document.getElementById('welcomeSpan').textContent = t('welcome') + ' ' + name;

  const myCard = document.getElementById('myInfoCard');
  if (isAdmin) {
    myCard.classList.add('hidden');
  } else {
    myCard.classList.remove('hidden');
    const me = getTenantsList().find(tn => tn.id === currentUserId);
    if (me) {
      document.getElementById('fRoom').value    = me.room;
      document.getElementById('fName').value    = me.name;
      document.getElementById('fPhone').value   = me.phone || '';
      document.getElementById('fRegDate').value = me.registrationDate || '';
    }
  }

  renderTable();
  renderPayment();
}

function renderTable() {
  const tbody = document.getElementById('tblBody');
  tbody.innerHTML = '';
  const isAdmin = currentUserId === 'admin';
  const tenants = getTenantsList();

  const sorted = [...tenants].sort((a, b) => {
    const aOut = !!a.deregistrationDate, bOut = !!b.deregistrationDate;
    if (aOut !== bOut) return aOut ? 1 : -1;
    return a.room.localeCompare(b.room, undefined, { numeric: true });
  });

  for (const tn of sorted) {
    const isMe = tn.id === currentUserId;
    const movedOut = !!tn.deregistrationDate;
    const fee = calcFee(tn, tenants);

    const tr = document.createElement('tr');
    if (isMe) tr.classList.add('my-row');
    if (movedOut) tr.classList.add('moved-out');

    let paidBadge;
    if (movedOut) {
      paidBadge = `<span class="badge-moved">${t('badgeMoved')}</span>`;
    } else if (tn.paid) {
      paidBadge = `<span class="badge-paid">${t('badgePaid')}</span>`;
    } else {
      paidBadge = `<span class="badge-unpaid">${t('badgeUnpaid')}</span>`;
    }

    let actions = '';
    if (isAdmin) {
      if (!movedOut) {
        const lbl = tn.paid ? t('btnMarkUnpaid') : t('btnMarkPaid');
        const cls = tn.paid ? 'btn-unpaid' : 'btn-paid';
        actions += `<button class="btn btn-sm ${cls}" data-action="togglePaid" data-id="${tn.id}">${lbl}</button>`;
      } else {
        actions += `<button class="btn btn-sm btn-reregister" data-action="reregister" data-id="${tn.id}">${t('btnReregister')}</button>`;
      }
      actions += `<button class="btn btn-sm btn-del" data-action="delete" data-id="${tn.id}">${t('btnDelete')}</button>`;
    } else if (isMe && !movedOut) {
      actions += `<button class="btn btn-sm btn-deregister" data-action="deregister" data-id="${tn.id}">${t('btnDeregister')}</button>`;
    }

    tr.innerHTML = `
      <td>${escHtml(tn.room)}</td>
      <td>${escHtml(tn.name)}</td>
      <td>${escHtml(tn.phone)}</td>
      <td>${fmtDate(tn.registrationDate)}</td>
      <td>${fmtEur(fee)}</td>
      <td>${paidBadge}</td>
      <td><div class="act-cell">${actions}</div></td>
    `;
    tbody.appendChild(tr);
  }
}

function renderPayment() {
  const body = document.getElementById('payBody');
  const isAdmin = currentUserId === 'admin';

  if (isAdmin) {
    body.innerHTML = `
      <p class="pay-iban-line"><span class="pay-iban-key">${escHtml(t('ibanLabel'))}</span>
        <strong>DE19 6725 0020 1019 1607 22</strong></p>
      <p class="pay-iban-line"><span class="pay-iban-key">${escHtml(t('beneficiaryLabel'))}</span>
        <strong>Siar Amin</strong></p>`;
    return;
  }

  const me = getTenantsList().find(tn => tn.id === currentUserId);
  if (!me) return;

  const fee = calcFee(me, getTenantsList());

  // State 3: paid — show Beitragsnummer (only populated if Firebase Rules allow it)
  if (me.paid && tenantBeitragsnummer) {
    body.innerHTML = `
      <p class="pay-iban-line"><span class="pay-iban-key">${escHtml(t('ibanLabel'))}</span>
        <strong>DE19 6725 0020 1019 1607 22</strong></p>
      <p class="pay-iban-line"><span class="pay-iban-key">${escHtml(t('beneficiaryLabel'))}</span>
        <strong>Siar Amin</strong></p>
      <p class="pay-hint">${escHtml(t('payHint').replace('{amount}', fmtEur(fee)))}</p>
      <div class="bnr-box">
        <p class="bnr-label">${escHtml(t('bnrLabel'))}</p>
        <p class="bnr-value">${escHtml(tenantBeitragsnummer)}</p>
        <p class="bnr-instructions">${escHtml(t('bnrInstructions'))}</p>
      </div>`;
    return;
  }

  // State 2: pay button tapped — show IBAN
  if (paymentRevealed) {
    body.innerHTML = `
      <p class="pay-iban-line"><span class="pay-iban-key">${escHtml(t('ibanLabel'))}</span>
        <strong>DE19 6725 0020 1019 1607 22</strong></p>
      <p class="pay-iban-line"><span class="pay-iban-key">${escHtml(t('beneficiaryLabel'))}</span>
        <strong>Siar Amin</strong></p>
      <p class="pay-hint">${escHtml(t('payHint').replace('{amount}', fmtEur(fee)))}</p>`;
    return;
  }

  // State 1: default — unknown Beitragsnummer + Pay button
  body.innerHTML = `
    <p class="bnr-unknown">${escHtml(t('bnrUnknown'))}</p>
    <button class="btn btn-primary" id="btnRevealPay">${escHtml(t('btnPay'))}</button>`;
  document.getElementById('btnRevealPay').addEventListener('click', () => {
    paymentRevealed = true;
    renderPayment();
  });
}

// ==============================
// ACTIONS
// ==============================
function saveMyInfo() {
  const room     = document.getElementById('fRoom').value.trim();
  const name     = document.getElementById('fName').value.trim();
  const phone    = document.getElementById('fPhone').value.trim();
  const regMonth = document.getElementById('fRegDate').value;
  if (!room || !name || !regMonth) { showSaveMsg(false); return; }

  const tenants = getTenantsList();
  const conflict = tenants.find(tn => tn.room === room && tn.id !== currentUserId);
  if (conflict) { showSaveMsg(false); return; }

  dbRef(`tenants/${currentUserId}`).update({ room, name, phone, registrationDate: regMonth });
  showSaveMsg(true);
}

function showSaveMsg(ok) {
  const el = document.getElementById('saveOk');
  el.textContent = ok ? t('saveOk') : t('errFillAll');
  el.style.color = ok ? '' : '#c03030';
  el.classList.remove('hidden');
  setTimeout(() => el.classList.add('hidden'), 2500);
}

function doDeregister(id) {
  dbRef(`tenants/${id}`).update({ deregistrationDate: new Date().toISOString().slice(0, 10) });
}

function doTogglePaid(id) {
  const tn = getTenantsList().find(t => t.id === id);
  if (!tn) return;
  const newPaid = !tn.paid;
  dbRef(`tenants/${id}`).update({ paid: newPaid });
  if (newPaid) {
    const bnr = appData.adminPrivate?.beitragsnummer;
    if (bnr) dbRef(`secrets/${id}`).set({ beitragsnummer: bnr });
  } else {
    dbRef(`secrets/${id}`).remove();
  }
}

function doDelete(id) {
  dbRef(`tenants/${id}`).remove();
}

function doReregister(id) {
  dbRef(`tenants/${id}`).update({ deregistrationDate: null });
}

// ==============================
// CONFIRM MODAL
// ==============================
let pendingConfirm = null;

function showConfirm(msg, onYes) {
  document.getElementById('modalText').textContent = msg;
  document.getElementById('modal').classList.remove('hidden');
  pendingConfirm = onYes;
}
function hideConfirm() {
  document.getElementById('modal').classList.add('hidden');
  pendingConfirm = null;
}

// ==============================
// UTILITIES
// ==============================
function escHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function showErr(id, msg) {
  const el = document.getElementById(id);
  el.textContent = msg;
  el.classList.remove('hidden');
}
function hideErr(id) {
  document.getElementById(id).classList.add('hidden');
}

function updateAdminTabUI() {
  if (appData.admin) {
    document.getElementById('adminSetup').classList.add('hidden');
    document.getElementById('adminLogin').classList.remove('hidden');
  } else {
    document.getElementById('adminSetup').classList.remove('hidden');
    document.getElementById('adminLogin').classList.add('hidden');
  }
}

// ==============================
// EASTER EGG PARTICLES
// ==============================
const EGG_COLORS = ['#9B59B6', '#27AE60', '#E91E63', '#FF9800'];
const EGG_TYPES  = ['zigzag', 'dots', 'stripes'];

function drawEggPath(ctx, rx, ry) {
  ctx.beginPath();
  ctx.moveTo(0, -ry);
  // Right side: narrower up top, wider and rounder at bottom
  ctx.bezierCurveTo( rx * 0.88, -ry * 0.6,  rx, ry * 0.28,  0,  ry);
  // Left side: mirror
  ctx.bezierCurveTo(-rx,  ry * 0.28, -rx * 0.88, -ry * 0.6,  0, -ry);
  ctx.closePath();
}

class EggParticle {
  constructor(cw, ch) {
    this.reset(cw, ch, true);
  }
  reset(cw, ch, initial) {
    this.x     = Math.random() * cw;
    this.y     = initial ? Math.random() * ch : ch + 40;
    this.vy    = -(0.22 + Math.random() * 0.42);
    this.vx    = (Math.random() - 0.5) * 0.18;
    this.drift = Math.random() * Math.PI * 2;
    this.rot   = Math.random() * Math.PI * 2;
    this.rotV  = (Math.random() - 0.5) * 0.013;
    this.size  = 15 + Math.random() * 17;
    this.color = EGG_COLORS[Math.floor(Math.random() * EGG_COLORS.length)];
    this.type  = EGG_TYPES [Math.floor(Math.random() * EGG_TYPES.length)];
    this.alpha = 0.48 + Math.random() * 0.35;
  }
  update(cw, ch) {
    this.drift += 0.016;
    this.x  += this.vx + Math.sin(this.drift) * 0.38;
    this.y  += this.vy;
    this.rot += this.rotV;
    if (this.y < -50) this.reset(cw, ch, false);
  }
  draw(ctx) {
    const rx = this.size * 0.5, ry = this.size * 0.6;
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rot);

    // Base egg fill
    drawEggPath(ctx, rx, ry);
    ctx.fillStyle = this.color;
    ctx.fill();

    // Clip decorations inside egg
    ctx.save();
    drawEggPath(ctx, rx, ry);
    ctx.clip();

    const W = rx * 2, H = ry * 2;

    if (this.type === 'zigzag') {
      ctx.strokeStyle = 'rgba(255,255,255,0.82)';
      ctx.lineWidth   = this.size * 0.11;
      ctx.lineJoin    = 'miter';
      const n = 5, amp = H * 0.12;
      const sw = W / (n - 1);
      ctx.beginPath();
      ctx.moveTo(-rx, 0);
      for (let i = 0; i < n; i++) {
        ctx.lineTo(-rx + i * sw, i % 2 === 0 ? -amp : amp);
      }
      ctx.lineTo(rx, 0);
      ctx.stroke();
    } else if (this.type === 'dots') {
      ctx.fillStyle = 'rgba(255,255,255,0.82)';
      const r = this.size * 0.1;
      [
        [0, -ry * 0.44], [-rx * 0.48, -ry * 0.06],
        [rx * 0.48,  ry * 0.06], [0, ry * 0.38],
        [-rx * 0.38, ry * 0.38], [rx * 0.38, -ry * 0.42]
      ].forEach(([dx, dy]) => {
        ctx.beginPath();
        ctx.arc(dx, dy, r, 0, Math.PI * 2);
        ctx.fill();
      });
    } else { // stripes
      ctx.fillStyle = 'rgba(255,255,255,0.58)';
      const sh = H * 0.14;
      [-H * 0.3, 0, H * 0.3].forEach(yOff => {
        ctx.fillRect(-rx, yOff - sh / 2, W, sh);
      });
    }

    ctx.restore(); // pop clip
    ctx.restore(); // pop translate/rotate/alpha
  }
}

function initEggCanvas(container, count) {
  const canvas = document.createElement('canvas');
  canvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:0;';
  container.insertBefore(canvas, container.firstChild);

  let particles = [], sized = false;

  function resize() {
    const cw = container.offsetWidth, ch = container.offsetHeight;
    if (!cw || !ch) { sized = false; return; }
    canvas.width  = cw;
    canvas.height = ch;
    if (!sized) {
      particles = Array.from({length: count}, () => new EggParticle(cw, ch));
      sized = true;
    }
  }

  function animate() {
    requestAnimationFrame(animate);
    if (!canvas.width || !canvas.height) { resize(); return; }
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(canvas.width, canvas.height); p.draw(ctx); });
  }

  new ResizeObserver(resize).observe(container);
  resize();
  animate();
}

function initEasterEggs() {
  initEggCanvas(document.getElementById('loginPage'),   14);
  initEggCanvas(document.getElementById('detailsPage'), 10);
  const header = document.querySelector('.site-header');
  if (header) initEggCanvas(header, 8);
}

// ==============================
// INIT
// ==============================
function init() {
  // Apply translations immediately so text is visible regardless of Firebase state
  setLang('en');

  // Check Firebase config
  if (!isConfigured()) {
    document.getElementById('loadingText').textContent = t('configError');
    return; // Stay on loading screen with error
  }

  // Start Firebase
  try {
    if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
    db = firebase.database();
  } catch (e) {
    document.getElementById('loadingText').textContent = 'Firebase error: ' + e.message;
    return;
  }

  initCookies();
  initEasterEggs();

  // Silent anonymous auth — Firebase Rules use this UID to gate secret reads
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      if (!authReady) { authReady = true; startDataListener(); }
    } else {
      firebase.auth().signInAnonymously().catch(e => console.warn('Auth error:', e));
    }
  });

  // Language buttons
  document.getElementById('btnEN').addEventListener('click', () => setLang('en'));
  document.getElementById('btnDE').addEventListener('click', () => setLang('de'));

  // Login tabs
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.dataset.tab;
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('pTenant').classList.toggle('hidden', tab !== 'tenant');
      document.getElementById('pAdmin').classList.toggle('hidden', tab !== 'admin');
      if (tab === 'admin') updateAdminTabUI();
    });
  });

  // Tenant login
  document.getElementById('btnTenantLogin').addEventListener('click', () => {
    const { error, isNew } = tenantLogin(
      document.getElementById('inRoom').value,
      document.getElementById('inName').value
    );
    if (error) { showErr('tenantErr', error); return; }
    hideErr('tenantErr');
    startSecretListener(currentUserId);
    if (isNew) {
      showDetailsPage();
    } else {
      showPage('mainPage');
      renderMain();
    }
  });

  document.getElementById('btnSaveDetails').addEventListener('click', saveDetails);

  document.getElementById('btnEditDetails').addEventListener('click', showDetailsPage);

  // Admin setup
  document.getElementById('btnAdminSetup').addEventListener('click', () => {
    const err = adminSetup(
      document.getElementById('inSetupUser').value,
      document.getElementById('inSetupPass').value,
      document.getElementById('inSetupBnr').value
    );
    if (err) { showErr('setupErr', err); return; }
    hideErr('setupErr');
    showPage('mainPage');
    renderMain();
  });

  // Admin login
  document.getElementById('btnAdminLogin').addEventListener('click', () => {
    const err = adminLogin(
      document.getElementById('inAdminUser').value,
      document.getElementById('inAdminPass').value
    );
    if (err) { showErr('adminErr', err); return; }
    hideErr('adminErr');
    showPage('mainPage');
    renderMain();
  });

  // Enter key support
  ['inRoom','inName'].forEach(id =>
    document.getElementById(id).addEventListener('keydown', e => {
      if (e.key === 'Enter') document.getElementById('btnTenantLogin').click();
    })
  );
  ['inAdminUser','inAdminPass'].forEach(id =>
    document.getElementById(id).addEventListener('keydown', e => {
      if (e.key === 'Enter') document.getElementById('btnAdminLogin').click();
    })
  );

  // Logout
  document.getElementById('btnLogout').addEventListener('click', logout);

  // Save my info
  document.getElementById('btnSave').addEventListener('click', saveMyInfo);

  // Table actions (event delegation)
  document.getElementById('tblBody').addEventListener('click', e => {
    const btn = e.target.closest('[data-action]');
    if (!btn) return;
    const { action, id } = btn.dataset;
    if (action === 'deregister')    showConfirm(t('confirmDeregister'),    () => doDeregister(id));
    else if (action === 'delete')   showConfirm(t('confirmDelete'),        () => doDelete(id));
    else if (action === 'reregister') showConfirm(t('confirmReregister'), () => doReregister(id));
    else if (action === 'togglePaid') doTogglePaid(id);
  });

  // Modal
  document.getElementById('modalYes').addEventListener('click', () => { if (pendingConfirm) pendingConfirm(); hideConfirm(); });
  document.getElementById('modalNo').addEventListener('click', hideConfirm);
  document.getElementById('modal').addEventListener('click', e => { if (e.target === document.getElementById('modal')) hideConfirm(); });

  // Apply translations
  setLang('en');
}

document.addEventListener('DOMContentLoaded', init);
