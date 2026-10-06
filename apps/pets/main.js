import confetti from 'canvas-confetti';

// --- CERTIFICATE TYPES CONFIG ---
const CERT_TYPES = {
  birth: {
    title: 'BIRTH CERTIFICATE',
    icon: '🐾',
    preamble: 'This certifies with absolute joy that the following beloved companion has officially entered our world:',
    dateLabel: 'DATE OF BIRTH',
    vowDefault: 'Bound by endless love, unconditional cuddles, treat privileges, and eternal happiness.'
  },
  gotcha: {
    title: 'OFFICIAL ADOPTION CERTIFICATE',
    icon: '🏠',
    preamble: 'This certifies that the following cherished soul has officially entered their forever home and family:',
    dateLabel: 'GOTCHA DAY DATE',
    vowDefault: 'Promised lifelong shelter, unlimited belly rubs, warm blankets, and infinite love.'
  },
  birthday: {
    title: 'BIRTHDAY CELEBRATION CERTIFICATE',
    icon: '🎂',
    preamble: 'In joyous commemoration of another magnificent year of spreading happiness and tail wags:',
    dateLabel: 'BIRTHDAY DATE',
    vowDefault: 'Celebrating another year of being our favorite reason to smile every single day.'
  },
  goodboy: {
    title: 'HONOR OF 100% GOOD PET',
    icon: '🌟',
    preamble: 'Officially conferring the highest honor of excellence for extraordinary cuddles, loyalty, and companionship:',
    dateLabel: 'DATE CONFERRED',
    vowDefault: 'Certified 100% good, zero bad habits, full pardon for any stolen socks or table scraps.'
  },
  citizen: {
    title: 'SOVEREIGN PET CITIZENSHIP',
    icon: '👑',
    preamble: 'By decree of the household realm, officially recognized as Supreme Ruler of the Couch and Heart:',
    dateLabel: 'ACCESSION DATE',
    vowDefault: 'Entitled to the softest spot in bed, supreme window-watching rights, and royal affection.'
  }
};

const SPECIES_ICONS = {
  'Dog': '🐕',
  'Cat': '🐈',
  'Bunny': '🐇',
  'Bird': '🦜',
  'Hamster': '🐹',
  'Horse': '🐎',
  'Ferret': '🐾',
  'Reptile': '🦎'
};

const SEAL_ICONS = {
  'gold-paw': '🐾',
  'royal-crest': '👑',
  'star-ribbon': '🌟',
  'heart-shield': '❤️'
};

// Preset Pets
const PRESETS = {
  dog: {
    type: 'birth',
    theme: 'gold',
    name: 'Barnaby Bear',
    species: 'Dog',
    breed: 'Golden Retriever',
    date: '2024-04-18',
    gender: 'Good Boy',
    guardians: 'Carrie & Family',
    location: 'San Francisco, California',
    vow: 'Bound by endless love, unconditional cuddles, treat privileges, and eternal happiness.',
    seal: 'gold-paw'
  },
  cat: {
    type: 'gotcha',
    theme: 'emerald',
    name: 'Cleo Clementine',
    species: 'Cat',
    breed: 'Calico Rescue',
    date: '2023-10-12',
    gender: 'Good Girl',
    guardians: 'Carrie & Kyle',
    location: 'Portland, Oregon',
    vow: 'Promised lifelong sunbeam napping rights, gourmet salmon feasts, and endless affection.',
    seal: 'heart-shield'
  },
  birthday: {
    type: 'birthday',
    theme: 'party',
    name: 'Winston Churchill',
    species: 'Dog',
    breed: 'French Bulldog',
    date: '2021-08-04',
    gender: 'Good Boy',
    guardians: 'Carrie, Maya & Crew',
    location: 'Austin, Texas',
    vow: 'Happy 5th Birthday to the loudest snorer and sweetest boy in the universe!',
    seal: 'star-ribbon'
  },
  goodboy: {
    type: 'goodboy',
    theme: 'royal',
    name: 'Archie',
    species: 'Dog',
    breed: 'Beagle Hound',
    date: '2022-03-15',
    gender: 'Good Boy',
    guardians: 'The McAuliffe Family',
    location: 'Boston, Massachusetts',
    vow: 'Certified 100% Good Boy. Absolute master of howling and neighborhood sniffing adventures.',
    seal: 'royal-crest'
  }
};

// --- DOM ELEMENTS ---
const certTypeSelect = document.getElementById('certTypeSelect');
const themePicker = document.getElementById('themePicker');
const petNameInput = document.getElementById('petNameInput');
const petSpeciesSelect = document.getElementById('petSpeciesSelect');
const petBreedInput = document.getElementById('petBreedInput');
const eventDateInput = document.getElementById('eventDateInput');
const dateLabel = document.getElementById('dateLabel');
const petGenderSelect = document.getElementById('petGenderSelect');
const photoUploadInput = document.getElementById('photoUploadInput');
const uploadTriggerBtn = document.getElementById('uploadTriggerBtn');
const removePhotoBtn = document.getElementById('removePhotoBtn');
const guardianInput = document.getElementById('guardianInput');
const locationInput = document.getElementById('locationInput');
const certNumberInput = document.getElementById('certNumberInput');
const regenCertNumBtn = document.getElementById('regenCertNumBtn');
const vowInput = document.getElementById('vowInput');
const sealTypeSelect = document.getElementById('sealTypeSelect');

const presetsBtn = document.getElementById('presetsBtn');
const presetsMenu = document.getElementById('presetsMenu');

const printBtn = document.getElementById('printBtn');
const downloadBtn = document.getElementById('downloadBtn');

// Certificate Display Elements
const certificateContainer = document.getElementById('certificateContainer');
const certDisplayNumber = document.getElementById('certDisplayNumber');
const certDisplayTitle = document.getElementById('certDisplayTitle');
const certTitleIcon = document.getElementById('certTitleIcon');
const certDisplayPreamble = document.getElementById('certDisplayPreamble');
const certPetPhoto = document.getElementById('certPetPhoto');
const certSpeciesSilhouette = document.getElementById('certSpeciesSilhouette');
const certDisplayName = document.getElementById('certDisplayName');
const certDisplayGender = document.getElementById('certDisplayGender');
const certDisplayBreed = document.getElementById('certDisplayBreed');
const certDetailDateLabel = document.getElementById('certDetailDateLabel');
const certDisplayDate = document.getElementById('certDisplayDate');
const certDisplayLocation = document.getElementById('certDisplayLocation');
const certDisplayGuardians = document.getElementById('certDisplayGuardians');
const certDisplayVow = document.getElementById('certDisplayVow');
const certGuardianSig = document.getElementById('certGuardianSig');
const certPetSig = document.getElementById('certPetSig');
const sealEmblemIcon = document.getElementById('sealEmblemIcon');
const exportCanvas = document.getElementById('exportCanvas');

let uploadedImageDataUrl = null;
let currentTheme = 'gold';

// --- INITIALIZATION ---
function init() {
  setupEventListeners();
  updateCertificate();
}

function setupEventListeners() {
  // Real-time input updates
  [petNameInput, petBreedInput, eventDateInput, guardianInput, locationInput, certNumberInput, vowInput].forEach(el => {
    el.addEventListener('input', updateCertificate);
  });

  certTypeSelect.addEventListener('change', handleTypeChange);
  petSpeciesSelect.addEventListener('change', updateCertificate);
  petGenderSelect.addEventListener('change', updateCertificate);
  sealTypeSelect.addEventListener('change', updateCertificate);

  // Theme selection
  themePicker.querySelectorAll('.theme-option').forEach(btn => {
    btn.addEventListener('click', () => {
      themePicker.querySelectorAll('.theme-option').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      setTheme(btn.dataset.theme);
    });
  });

  // Photo upload
  uploadTriggerBtn.addEventListener('click', () => photoUploadInput.click());
  photoUploadInput.addEventListener('change', handlePhotoUpload);
  removePhotoBtn.addEventListener('click', removePhoto);

  // Cert Number generator
  regenCertNumBtn.addEventListener('click', () => {
    const randomNum = Math.floor(10000 + Math.random() * 90000);
    certNumberInput.value = `PAW-2026-${randomNum}`;
    updateCertificate();
  });

  // Presets dropdown
  presetsBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    presetsMenu.classList.toggle('hidden');
  });
  document.addEventListener('click', () => presetsMenu.classList.add('hidden'));

  presetsMenu.querySelectorAll('.dropdown-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const preset = PRESETS[btn.dataset.preset];
      if (preset) applyPreset(preset);
    });
  });

  // Actions
  printBtn.addEventListener('click', () => window.print());
  downloadBtn.addEventListener('click', exportCertificatePNG);
}

function handleTypeChange() {
  const typeKey = certTypeSelect.value;
  const config = CERT_TYPES[typeKey] || CERT_TYPES.birth;
  
  dateLabel.textContent = config.dateLabel;
  certDetailDateLabel.textContent = config.dateLabel.toUpperCase();
  vowInput.value = config.vowDefault;

  updateCertificate();
}

function setTheme(themeKey) {
  currentTheme = themeKey;
  certificateContainer.className = `certificate-wrapper theme-${themeKey} cert-${certTypeSelect.value}`;
}

function handlePhotoUpload(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (event) => {
    uploadedImageDataUrl = event.target.result;
    certPetPhoto.src = uploadedImageDataUrl;
    certPetPhoto.classList.remove('hidden');
    certSpeciesSilhouette.classList.add('hidden');
    removePhotoBtn.classList.remove('hidden');
    uploadTriggerBtn.textContent = '📷 Replace Photo';
  };
  reader.readAsDataURL(file);
}

function removePhoto() {
  uploadedImageDataUrl = null;
  certPetPhoto.src = '';
  certPetPhoto.classList.add('hidden');
  certSpeciesSilhouette.classList.remove('hidden');
  removePhotoBtn.classList.add('hidden');
  uploadTriggerBtn.textContent = '📷 Choose Photo';
  photoUploadInput.value = '';
}

function formatDateString(isoDateStr) {
  if (!isoDateStr) return 'April 18, 2024';
  try {
    const [year, month, day] = isoDateStr.split('-');
    const dateObj = new Date(year, month - 1, day);
    return dateObj.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  } catch (err) {
    return isoDateStr;
  }
}

function updateCertificate() {
  const typeKey = certTypeSelect.value;
  const config = CERT_TYPES[typeKey] || CERT_TYPES.birth;

  // Header texts
  certDisplayNumber.textContent = `NO. ${certNumberInput.value.trim() || 'PAW-2026-98102'}`;
  certDisplayTitle.textContent = config.title;
  certTitleIcon.textContent = config.icon;
  certDisplayPreamble.textContent = config.preamble;

  // Pet Info
  const petName = petNameInput.value.trim() || 'Beloved Pet';
  certDisplayName.textContent = petName;
  certDisplayGender.textContent = petGenderSelect.value;
  certDisplayBreed.textContent = petBreedInput.value.trim() || 'Companion';

  // Species silhouette fallback
  const species = petSpeciesSelect.value;
  certSpeciesSilhouette.textContent = SPECIES_ICONS[species] || '🐾';

  // Details
  certDisplayDate.textContent = formatDateString(eventDateInput.value);
  certDisplayLocation.textContent = locationInput.value.trim() || 'Earth';
  const guardians = guardianInput.value.trim() || 'Carrie & Family';
  certDisplayGuardians.textContent = guardians;

  // Vow
  const vow = vowInput.value.trim();
  certDisplayVow.textContent = vow ? `“${vow}”` : '';

  // Signatures
  certGuardianSig.textContent = guardians;
  const firstWord = petName.split(' ')[0];
  certPetSig.textContent = `${firstWord} 🐾`;

  // Seal
  const sealKey = sealTypeSelect.value;
  sealEmblemIcon.textContent = SEAL_ICONS[sealKey] || '🐾';
}

function applyPreset(preset) {
  certTypeSelect.value = preset.type;
  handleTypeChange();

  setTheme(preset.theme);
  themePicker.querySelectorAll('.theme-option').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.theme === preset.theme);
  });

  petNameInput.value = preset.name;
  petSpeciesSelect.value = preset.species;
  petBreedInput.value = preset.breed;
  eventDateInput.value = preset.date;
  petGenderSelect.value = preset.gender;
  guardianInput.value = preset.guardians;
  locationInput.value = preset.location;
  vowInput.value = preset.vow;
  sealTypeSelect.value = preset.seal;

  removePhoto();
  updateCertificate();

  confetti({
    particleCount: 50,
    spread: 50,
    origin: { y: 0.5 }
  });
}

// --- HIGH RESOLUTION CANVAS EXPORT (2400 x 1700) ---
function exportCertificatePNG() {
  const canvas = exportCanvas;
  const ctx = canvas.getContext('2d');
  const width = canvas.width;
  const height = canvas.height;

  // Colors based on active theme
  const themeColors = {
    gold: {
      bg: '#fffdf9',
      borderOuter: '#c59741',
      borderInner: '#9f7220',
      textPrimary: '#2c2518',
      textAccent: '#8c6218',
      seal1: '#fce99f',
      seal2: '#d49f3b',
      seal3: '#9e6f1a'
    },
    emerald: {
      bg: '#f5f9f6',
      borderOuter: '#2d6a4f',
      borderInner: '#1b4332',
      textPrimary: '#132a20',
      textAccent: '#2d6a4f',
      seal1: '#52b788',
      seal2: '#2d6a4f',
      seal3: '#1b4332'
    },
    party: {
      bg: '#fffbfd',
      borderOuter: '#f43f5e',
      borderInner: '#8b5cf6',
      textPrimary: '#4c1d95',
      textAccent: '#e11d48',
      seal1: '#fde047',
      seal2: '#fb923c',
      seal3: '#f43f5e'
    },
    royal: {
      bg: '#f8fafc',
      borderOuter: '#1e3a8a',
      borderInner: '#3b82f6',
      textPrimary: '#0f172a',
      textAccent: '#1d4ed8',
      seal1: '#93c5fd',
      seal2: '#2563eb',
      seal3: '#1e3a8a'
    }
  };

  const colors = themeColors[currentTheme] || themeColors.gold;

  // 1. Background
  ctx.fillStyle = colors.bg;
  ctx.fillRect(0, 0, width, height);

  // 2. Borders
  ctx.lineWidth = 12;
  ctx.strokeStyle = colors.borderOuter;
  ctx.strokeRect(60, 60, width - 120, height - 120);

  ctx.lineWidth = 4;
  ctx.strokeRect(76, 76, width - 152, height - 152);

  ctx.lineWidth = 4;
  ctx.strokeStyle = colors.borderInner;
  ctx.strokeRect(100, 100, width - 200, height - 200);

  // Corner Filigrees
  ctx.font = '54px serif';
  ctx.fillStyle = colors.borderOuter;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('❦', 130, 130);
  ctx.fillText('❦', width - 130, 130);
  ctx.fillText('❦', 130, height - 130);
  ctx.fillText('❦', width - 130, height - 130);

  // 3. Header
  const typeKey = certTypeSelect.value;
  const config = CERT_TYPES[typeKey] || CERT_TYPES.birth;

  ctx.fillStyle = colors.textAccent;
  ctx.font = '600 28px Cinzel, serif';
  ctx.textAlign = 'center';
  ctx.fillText('OFFICIAL COMPANION REGISTRY', width / 2, 170);

  ctx.font = '700 24px sans-serif';
  ctx.textAlign = 'right';
  ctx.fillText(`NO. ${certNumberInput.value.trim()}`, width - 130, 170);

  // Main Title
  ctx.fillStyle = colors.textPrimary;
  ctx.font = '800 68px Cinzel, serif';
  ctx.textAlign = 'center';
  ctx.fillText(config.title, width / 2, 260);

  // Decorative Rule
  ctx.strokeStyle = colors.borderOuter;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(width / 2 - 250, 305);
  ctx.lineTo(width / 2 - 50, 305);
  ctx.stroke();

  ctx.font = '36px sans-serif';
  ctx.fillText(config.icon, width / 2, 305);

  ctx.beginPath();
  ctx.moveTo(width / 2 + 50, 305);
  ctx.lineTo(width / 2 + 250, 305);
  ctx.stroke();

  // Preamble
  ctx.fillStyle = colors.textAccent;
  ctx.font = 'italic 34px "Playfair Display", serif';
  ctx.fillText(config.preamble, width / 2, 380);

  // 4. Pet Name
  const petName = petNameInput.value.trim() || 'Beloved Pet';
  ctx.fillStyle = colors.textPrimary;
  ctx.font = 'bold 96px "Playfair Display", serif';
  ctx.fillText(petName, width / 2, 510);

  // Subtitle: Gender & Breed
  const subText = `${petGenderSelect.value}  •  ${petBreedInput.value.trim() || 'Companion'}`;
  ctx.fillStyle = colors.textAccent;
  ctx.font = '600 32px Cinzel, serif';
  ctx.fillText(subText, width / 2, 580);

  // 5. Details Section
  const detailBoxY = 660;
  ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
  ctx.fillRect(180, detailBoxY, width - 360, 260);
  ctx.strokeStyle = colors.borderOuter;
  ctx.lineWidth = 2;
  ctx.strokeRect(180, detailBoxY, width - 360, 260);

  // Labels & Values
  ctx.textAlign = 'left';
  ctx.fillStyle = colors.textAccent;
  ctx.font = '700 24px Cinzel, serif';
  ctx.fillText(config.dateLabel, 230, detailBoxY + 50);
  ctx.fillText('HOMETOWN & LOCATION', width / 2 + 50, detailBoxY + 50);

  ctx.fillStyle = colors.textPrimary;
  ctx.font = '600 38px "Playfair Display", serif';
  ctx.fillText(formatDateString(eventDateInput.value), 230, detailBoxY + 105);
  ctx.fillText(locationInput.value.trim() || 'San Francisco, CA', width / 2 + 50, detailBoxY + 105);

  // Guardian
  ctx.strokeStyle = colors.borderOuter;
  ctx.beginPath();
  ctx.moveTo(230, detailBoxY + 145);
  ctx.lineTo(width - 230, detailBoxY + 145);
  ctx.stroke();

  ctx.fillStyle = colors.textAccent;
  ctx.font = '700 22px Cinzel, serif';
  ctx.textAlign = 'center';
  ctx.fillText('OFFICIAL GUARDIAN(S) & PARENTS', width / 2, detailBoxY + 185);

  ctx.fillStyle = colors.textPrimary;
  ctx.font = 'bold 44px "Playfair Display", serif';
  ctx.fillText(guardianInput.value.trim() || 'Carrie & Family', width / 2, detailBoxY + 235);

  // 6. Vow Motto
  const vow = vowInput.value.trim();
  if (vow) {
    ctx.fillStyle = colors.textAccent;
    ctx.font = 'italic 30px "Playfair Display", serif';
    ctx.textAlign = 'center';
    ctx.fillText(`“${vow}”`, width / 2, 1010);
  }

  // 7. Signatures & Embossed Seal
  const footerY = 1350;

  // Guardian Signature
  ctx.fillStyle = colors.textPrimary;
  ctx.font = '64px Caveat, cursive';
  ctx.textAlign = 'center';
  ctx.fillText(guardianInput.value.trim() || 'Carrie', 480, footerY);

  ctx.strokeStyle = colors.borderOuter;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(300, footerY + 20);
  ctx.lineTo(660, footerY + 20);
  ctx.stroke();

  ctx.fillStyle = colors.textAccent;
  ctx.font = '700 20px Cinzel, serif';
  ctx.fillText('PROUD GUARDIAN / PARENT', 480, footerY + 55);

  // Pet Signature
  const firstWord = petName.split(' ')[0];
  ctx.fillStyle = colors.textAccent;
  ctx.font = '64px Caveat, cursive';
  ctx.fillText(`${firstWord} 🐾`, width - 480, footerY);

  ctx.strokeStyle = colors.borderOuter;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(width - 660, footerY + 20);
  ctx.lineTo(width - 300, footerY + 20);
  ctx.stroke();

  ctx.fillStyle = colors.textAccent;
  ctx.font = '700 20px Cinzel, serif';
  ctx.fillText('PET SIGNATURE & PAW APPROVAL', width - 480, footerY + 55);

  // Embossed Seal in Center
  const sealX = width / 2;
  const sealY = footerY + 10;
  const sealRadius = 110;

  const sealGradient = ctx.createRadialGradient(sealX, sealY, 10, sealX, sealY, sealRadius);
  sealGradient.addColorStop(0, colors.seal1);
  sealGradient.addColorStop(0.7, colors.seal2);
  sealGradient.addColorStop(1, colors.seal3);

  ctx.fillStyle = sealGradient;
  ctx.beginPath();
  ctx.arc(sealX, sealY, sealRadius, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 6;
  ctx.stroke();

  ctx.lineWidth = 2;
  ctx.setLineDash([6, 6]);
  ctx.beginPath();
  ctx.arc(sealX, sealY, sealRadius - 14, 0, Math.PI * 2);
  ctx.stroke();
  ctx.setLineDash([]);

  // Seal text & icon
  ctx.fillStyle = '#ffffff';
  ctx.font = '22px sans-serif';
  ctx.fillText('★ ★ ★', sealX, sealY - 45);

  ctx.font = '54px sans-serif';
  ctx.fillText(SEAL_ICONS[sealTypeSelect.value] || '🐾', sealX, sealY + 8);

  ctx.font = '800 18px Cinzel, serif';
  ctx.fillText('SEAL OF LOVE', sealX, sealY + 55);

  // Download trigger
  const link = document.createElement('a');
  link.download = `${petName.replace(/\s+/g, '_')}_Official_Certificate.png`;
  link.href = canvas.toDataURL('image/png');
  link.click();

  // Confetti
  confetti({
    particleCount: 80,
    spread: 70,
    origin: { y: 0.6 }
  });
}

// Start
init();
