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
    payTitle: "Payment Information",
    payText: "Please pay {amount} to IBAN: DE19 6725 0020 1019 1607 22 / Beneficiary: Siar Amin",
    bnrLabel: "Your Beitragsnummer:",
    bnrInstructions: "Use this number to bind your account to the main Rundfunkbeitrag account.",
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
    thFee: "Gesch. Ausstehender Betrag",
    thPaid: "Bezahlt",
    thAct: "Aktionen",
    badgePaid: "Bezahlt",
    badgeUnpaid: "Ausstehend",
    badgeMoved: "Ausgezogen",
    btnDeregister: "Abmelden",
    btnMarkPaid: "Als bezahlt markieren",
    btnMarkUnpaid: "Als unbezahlt markieren",
    btnDelete: "Löschen",
    payTitle: "Zahlungsinformationen",
    payText: "Bitte zahlen Sie {amount} an IBAN: DE19 6725 0020 1019 1607 22 / Begünstigter: Siar Amin",
    bnrLabel: "Ihre Beitragsnummer:",
    bnrInstructions: "Nutzen Sie diese Nummer, um Ihr Konto mit dem Hauptkonto zu verknüpfen.",
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
let appData = { admin: null, tenants: {} };
let db = null;

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
  dbRef('/').on('value', (snapshot) => {
    appData = snapshot.val() || { admin: null, tenants: {} };
    if (!appData.tenants) appData.tenants = {};

    // Hide loading spinner on first load
    document.getElementById('loading').classList.add('hidden');

    // Update admin tab visibility when data changes
    if (!document.getElementById('pAdmin').classList.contains('hidden')) {
      updateAdminTabUI();
    }

    // Re-render if already on main page
    if (currentUserId && !document.getElementById('mainPage').classList.contains('hidden')) {
      renderTable();
      renderPayment();
    }
  }, (error) => {
    console.error('Firebase read error:', error);
    document.getElementById('loading').classList.add('hidden');
    document.getElementById('loadingText').textContent = 'Database error: ' + error.message;
    document.getElementById('loading').classList.remove('hidden');
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
    const reg = new Date(tn.registrationDate);
    const ry = reg.getFullYear(), rm = reg.getMonth() + 1;
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
    thReg: 'thReg', thFee: 'thFee', thPaid: 'thPaid', thAct: 'thAct',
    payTitle: 'payTitle', bnrLabel: 'bnrLabel', bnrInstructions: 'bnrInstructions',
    yes: 'modalYes', no: 'modalNo', connecting: 'loadingText',
  };
  for (const [key, elId] of Object.entries(ids)) {
    const el = document.getElementById(elId);
    if (el) el.textContent = t(key);
  }
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
function tenantLogin(room, name) {
  room = room.trim(); name = name.trim();
  if (!room || !name) return t('errFillAll');

  const tenants = getTenantsList();
  const existing = tenants.find(tn => tn.room === room);

  if (existing) {
    if (existing.name.toLowerCase() !== name.toLowerCase()) return t('errRoomTaken');
    currentUserId = existing.id;
    return null;
  }

  // New tenant — details filled in on the next page
  const id = generateId();
  dbRef(`tenants/${id}`).set({
    id, room, name,
    phone: '',
    registrationDate: '',
    deregistrationDate: null,
    paid: false
  });
  currentUserId = id;
  return null;
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
  currentUserId = 'admin';
  return null;
}

function adminSetup(username, password, beitragsnummer) {
  username = username.trim(); beitragsnummer = beitragsnummer.trim();
  if (!username || !password || !beitragsnummer) return t('errFillAll');
  if (appData.admin) return 'Admin account already exists.';
  dbRef('admin').set({ username, passwordHash: hashPassword(password), beitragsnummer });
  currentUserId = 'admin';
  return null;
}

function logout() {
  currentUserId = null;
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
  const isAdmin = currentUserId === 'admin';
  if (isAdmin) {
    document.getElementById('payText').innerHTML =
      `IBAN: <strong>DE19 6725 0020 1019 1607 22</strong> / Siar Amin`;
    document.getElementById('bnrBox').classList.add('hidden');
    return;
  }

  const me = getTenantsList().find(tn => tn.id === currentUserId);
  if (!me) return;

  const fee = calcFee(me, getTenantsList());
  const payTpl = t('payText').replace('{amount}', `<strong>${fmtEur(fee)}</strong>`);
  document.getElementById('payText').innerHTML = payTpl;

  if (me.paid && appData.admin && appData.admin.beitragsnummer) {
    document.getElementById('bnrBox').classList.remove('hidden');
    document.getElementById('bnrValue').textContent = appData.admin.beitragsnummer;
  } else {
    document.getElementById('bnrBox').classList.add('hidden');
  }
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
  dbRef(`tenants/${id}`).update({ paid: !tn.paid });
}

function doDelete(id) {
  dbRef(`tenants/${id}`).remove();
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

  startDataListener();
  initCookies();

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
    const err = tenantLogin(
      document.getElementById('inRoom').value,
      document.getElementById('inName').value
    );
    if (err) { showErr('tenantErr', err); return; }
    hideErr('tenantErr');
    showDetailsPage();
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
  ['inRoom','inName','inPhone'].forEach(id =>
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
    if (action === 'deregister') showConfirm(t('confirmDeregister'), () => doDeregister(id));
    else if (action === 'delete')    showConfirm(t('confirmDelete'),    () => doDelete(id));
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
