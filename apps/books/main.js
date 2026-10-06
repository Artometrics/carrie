import confetti from 'canvas-confetti';

// --- CURATED BOOKS DATABASE ---
const BOOKS_DATABASE = [
  {
    id: 'tomorrow-tomorrow',
    title: 'Tomorrow, and Tomorrow, and Tomorrow',
    author: 'Gabrielle Zevin',
    genre: 'Literary Fiction',
    rating: 4.8,
    pages: 416,
    year: 2022,
    emblem: '🕹️',
    gradient: 'linear-gradient(135deg, #1e3a8a, #3b82f6)',
    synopsis: 'Two childhood friends reunite in college to design video games that catapult them to fame, exploring identity, creativity, heartbreak, and platonic love over thirty years.',
    moods: ['deep', 'cozy', 'escapist'],
    tropes: ['found-family', 'character-journey'],
    pacing: 'medium',
    goal: ['escape', 'humanity'],
    vibes: ['Found Family', 'Gaming Culture', 'Bittersweet', 'Nostalgic'],
    amazonAsin: '0593321200'
  },
  {
    id: 'project-hail-mary',
    title: 'Project Hail Mary',
    author: 'Andy Weir',
    genre: 'Sci-Fi & Fantasy',
    rating: 4.9,
    pages: 496,
    year: 2021,
    emblem: '🚀',
    gradient: 'linear-gradient(135deg, #064e3b, #10b981)',
    synopsis: 'A lone astronaut wakes up with amnesia on a desperate interstellar mission to save Earth from an extinction-level solar crisis, only to encounter an unexpected extraterrestrial ally.',
    moods: ['gripping', 'witty', 'escapist'],
    tropes: ['found-family', 'puzzle'],
    pacing: 'fast',
    goal: ['edge-of-seat', 'slump-buster'],
    vibes: ['Interstellar Bromance', 'Smart Sci-Fi', 'Humorous', 'High Stakes'],
    amazonAsin: '0593135202'
  },
  {
    id: 'the-silent-patient',
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    genre: 'Mystery & Thriller',
    rating: 4.6,
    pages: 336,
    year: 2019,
    emblem: '🎭',
    gradient: 'linear-gradient(135deg, #31103f, #701a75)',
    synopsis: 'A celebrated painter shoots her husband five times in the face and never speaks another word. A criminal psychotherapist becomes obsessed with uncovering her motive.',
    moods: ['dark', 'gripping'],
    tropes: ['unreliable-narrator', 'puzzle'],
    pacing: 'fast',
    goal: ['edge-of-seat', 'slump-buster'],
    vibes: ['Mind Bending Twist', 'Psychological', 'Dark Atmosphere'],
    amazonAsin: '1250301696'
  },
  {
    id: 'yellowface',
    title: 'Yellowface',
    author: 'R.F. Kuang',
    genre: 'Literary Fiction',
    rating: 4.5,
    pages: 336,
    year: 2023,
    emblem: '✍️',
    gradient: 'linear-gradient(135deg, #78350f, #d97706)',
    synopsis: 'When a rising literary star dies in a freak choking accident, her envious peer steals her unpublished manuscript about Chinese laborers and publishes it as her own under an Asian pseudonym.',
    moods: ['gripping', 'dark', 'deep'],
    tropes: ['unreliable-narrator', 'character-journey'],
    pacing: 'fast',
    goal: ['slump-buster', 'humanity'],
    vibes: ['Publishing Satire', 'Cultural Appropriation', 'Cringe Comedy Thriller'],
    amazonAsin: '006325083X'
  },
  {
    id: 'fourth-wing',
    title: 'Fourth Wing',
    author: 'Rebecca Yarros',
    genre: 'Romance & Romantasy',
    rating: 4.8,
    pages: 528,
    year: 2023,
    emblem: '🐉',
    gradient: 'linear-gradient(135deg, #450a0a, #dc2626)',
    synopsis: 'Violet Sorrengail entered the war college expecting a quiet scribe life, but her fierce commander mother forces her to join the deadly dragon riders where graduation means survival.',
    moods: ['gripping', 'escapist'],
    tropes: ['slow-burn', 'worldbuilding'],
    pacing: 'fast',
    goal: ['escape', 'edge-of-seat'],
    vibes: ['Enemies to Lovers', 'Dragons', 'Deadly Trials', 'High Tension'],
    amazonAsin: '1649374046'
  },
  {
    id: 'midnight-library',
    title: 'The Midnight Library',
    author: 'Matt Haig',
    genre: 'Literary Fiction',
    rating: 4.7,
    pages: 304,
    year: 2020,
    emblem: '🕰️',
    gradient: 'linear-gradient(135deg, #0f172a, #38bdf8)',
    synopsis: 'Between life and death stands a library containing endless books—each providing a chance to experience what your life would look like if you had made different choices.',
    moods: ['cozy', 'deep'],
    tropes: ['character-journey'],
    pacing: 'medium',
    goal: ['humanity', 'escape'],
    vibes: ['Life Affirming', 'Philosophical', 'Magical Realism', 'Second Chances'],
    amazonAsin: '0525559477'
  },
  {
    id: 'piranesi',
    title: 'Piranesi',
    author: 'Susanna Clarke',
    genre: 'Sci-Fi & Fantasy',
    rating: 4.7,
    pages: 272,
    year: 2020,
    emblem: '🏛️',
    gradient: 'linear-gradient(135deg, #134e4a, #2dd4bf)',
    synopsis: 'Piranesi lives in a labyrinthine House of infinite halls lined with thousands of classical statues, where ocean tides surge up staircases and clouds drift through upper chambers.',
    moods: ['deep', 'dark', 'escapist'],
    tropes: ['puzzle', 'character-journey'],
    pacing: 'medium',
    goal: ['escape', 'humanity'],
    vibes: ['Surreal Beauty', 'Dreamlike', 'Labyrinth Mystery', 'Quiet Wonder'],
    amazonAsin: '163557563X'
  },
  {
    id: 'demon-copperhead',
    title: 'Demon Copperhead',
    author: 'Barbara Kingsolver',
    genre: 'Literary Fiction',
    rating: 4.9,
    pages: 560,
    year: 2022,
    emblem: '⛰️',
    gradient: 'linear-gradient(135deg, #713f12, #ca8a04)',
    synopsis: 'Pulitzer Prize winner set in the mountains of southern Appalachia, reimagining David Copperfield through a redheaded boy navigating foster care, addiction, resilience, and survival.',
    moods: ['deep', 'dark'],
    tropes: ['found-family', 'character-journey'],
    pacing: 'epic',
    goal: ['humanity'],
    vibes: ['Pulitzer Winner', 'Appalachian Epic', 'Gritty Resilience', 'Masterpiece'],
    amazonAsin: '0063251925'
  },
  {
    id: 'thursday-murder-club',
    title: 'The Thursday Murder Club',
    author: 'Richard Osman',
    genre: 'Mystery & Thriller',
    rating: 4.6,
    pages: 368,
    year: 2020,
    emblem: '🔍',
    gradient: 'linear-gradient(135deg, #1e293b, #64748b)',
    synopsis: 'Four unlikely septuagenarian friends in a peaceful retirement village investigate unsolved crimes for fun on Thursdays until a real, brutal murder happens right on their doorstep.',
    moods: ['cozy', 'witty', 'gripping'],
    tropes: ['found-family', 'puzzle', 'small-town'],
    pacing: 'medium',
    goal: ['escape', 'slump-buster'],
    vibes: ['British Charm', 'Witty Sleuths', 'Heartwarming Murder Mystery'],
    amazonAsin: '1984880969'
  },
  {
    id: 'crying-in-h-mart',
    title: 'Crying in H Mart',
    author: 'Michelle Zauner',
    genre: 'Non-Fiction & Memoir',
    rating: 4.8,
    pages: 256,
    year: 2021,
    emblem: '🍜',
    gradient: 'linear-gradient(135deg, #831843, #f43f5e)',
    synopsis: 'Indie rock musician Japanese Breakfast reflects on Korean-American identity, delicious food rituals, complicated family expectations, and grief following her mother’s terminal diagnosis.',
    moods: ['deep', 'cozy'],
    tropes: ['character-journey'],
    pacing: 'medium',
    goal: ['humanity'],
    vibes: ['Culinary Love Letter', 'Grief & Healing', 'Raw & Moving', 'Memoir'],
    amazonAsin: '0525657746'
  },
  {
    id: 'atomic-habits',
    title: 'Atomic Habits',
    author: 'James Clear',
    genre: 'Non-Fiction & Memoir',
    rating: 4.9,
    pages: 320,
    year: 2018,
    emblem: '⚡',
    gradient: 'linear-gradient(135deg, #1e3a5f, #0284c7)',
    synopsis: 'A universally practical guide explaining how microscopic daily shifts compound into extraordinary personal transformations, backed by neuroscience and behavioral psychology.',
    moods: ['deep', 'witty'],
    tropes: ['character-journey'],
    pacing: 'fast',
    goal: ['humanity', 'slump-buster'],
    vibes: ['Actionable', 'High Impact', 'Clear Frameworks', 'Game Changer'],
    amazonAsin: '0735211299'
  },
  {
    id: 'song-of-achilles',
    title: 'The Song of Achilles',
    author: 'Madeline Miller',
    genre: 'Romance & Romantasy',
    rating: 4.8,
    pages: 416,
    year: 2012,
    emblem: '🏹',
    gradient: 'linear-gradient(135deg, #7c2d12, #ea580c)',
    synopsis: 'An unforgettable reimagining of the Iliad through the eyes of awkward exile Patroclus, recounting his tender, fateful bond with golden Greek demigod Achilles.',
    moods: ['deep', 'escapist', 'dark'],
    tropes: ['slow-burn', 'character-journey'],
    pacing: 'medium',
    goal: ['escape', 'humanity'],
    vibes: ['Greek Mythology', 'Poetic & Devastating', 'Soulmate Bond'],
    amazonAsin: '0062060627'
  },
  {
    id: 'lessons-in-chemistry',
    title: 'Lessons in Chemistry',
    author: 'Bonnie Garmus',
    genre: 'Literary Fiction',
    rating: 4.7,
    pages: 400,
    year: 2022,
    emblem: '🧪',
    gradient: 'linear-gradient(135deg, #065f46, #059669)',
    synopsis: 'In 1960s California, brilliant chemist Elizabeth Zott finds her career sabotaged by sexism, only to become the unexpected host of America’s most revolutionary cooking show.',
    moods: ['witty', 'cozy', 'gripping'],
    tropes: ['found-family', 'character-journey'],
    pacing: 'medium',
    goal: ['slump-buster', 'humanity'],
    vibes: ['Feminist Triumph', 'Witty & Sharp', 'Cooking Science', 'Beloved Dog Six-Thirty'],
    amazonAsin: '038554734X'
  },
  {
    id: 'babel',
    title: 'Babel: Or the Necessity of Violence',
    author: 'R.F. Kuang',
    genre: 'Sci-Fi & Fantasy',
    rating: 4.8,
    pages: 560,
    year: 2022,
    emblem: '🏛️',
    gradient: 'linear-gradient(135deg, #374151, #9ca3af)',
    synopsis: 'In Victorian Oxford, the Royal Institute of Translation manipulates magical silver bars fueled by what is lost in translation between languages, fueling the British Empire’s colonial expansion.',
    moods: ['deep', 'dark', 'escapist'],
    tropes: ['found-family', 'worldbuilding'],
    pacing: 'epic',
    goal: ['escape', 'humanity'],
    vibes: ['Dark Academia', 'Linguistics Magic', 'Anti-Colonial', 'Stunning Depth'],
    amazonAsin: '0063021420'
  },
  {
    id: 'house-in-cerulean-sea',
    title: 'The House in the Cerulean Sea',
    author: 'TJ Klune',
    genre: 'Romance & Romantasy',
    rating: 4.8,
    pages: 396,
    year: 2020,
    emblem: '🌊',
    gradient: 'linear-gradient(135deg, #0284c7, #38bdf8)',
    synopsis: 'Linus Baker, a meticulous caseworker at the Department in Charge of Magical Youth, is sent on a classified assignment to an island orphanage housing six dangerous magical children and their charming caretaker.',
    moods: ['cozy', 'witty'],
    tropes: ['found-family', 'slow-burn'],
    pacing: 'medium',
    goal: ['escape', 'humanity'],
    vibes: ['Warm Hug', 'Heartfelt', 'Whimsical', 'Found Family Masterpiece'],
    amazonAsin: '1250217288'
  },
  {
    id: 'seven-husbands-evelyn-hugo',
    title: 'The Seven Husbands of Evelyn Hugo',
    author: 'Taylor Jenkins Reid',
    genre: 'Literary Fiction',
    rating: 4.8,
    pages: 400,
    year: 2017,
    emblem: '💎',
    gradient: 'linear-gradient(135deg, #14532d, #16a34a)',
    synopsis: 'Aging Hollywood icon Evelyn Hugo chooses an unknown magazine reporter to write her tell-all memoir, unveiling ruthless glamour, seven scandalous marriages, and the one true love of her life.',
    moods: ['gripping', 'escapist', 'deep'],
    tropes: ['character-journey', 'slow-burn'],
    pacing: 'fast',
    goal: ['slump-buster', 'escape'],
    vibes: ['Old Hollywood Glamour', 'Secret Romance', 'Epic Biography', 'Unputdownable'],
    amazonAsin: '1501161938'
  }
];

// --- QUIZ QUESTIONS CONFIG ---
const QUIZ_QUESTIONS = [
  {
    category: 'Vibe & Mood',
    title: 'What emotional atmosphere are you craving right now?',
    subtitle: 'Choose the overall feeling you want from this book.',
    options: [
      { id: 'cozy', icon: '☕', title: 'Warm, Cozy & Heartfelt', desc: 'Comforting, gentle humor, restorative and comforting like a blanket.' },
      { id: 'gripping', icon: '⚡', title: 'Fast, High-Octane & Gripping', desc: 'Can\'t look away, turning pages at 1:00 AM, heart pounding.' },
      { id: 'deep', icon: '🌊', title: 'Thought-Provoking & Philosophical', desc: 'Complex questions about existence, morality, human connection.' },
      { id: 'dark', icon: '🕯️', title: 'Dark, Atmospheric & Chilling', desc: 'Foreboding shadows, psychological tension, morally gray motives.' },
      { id: 'escapist', icon: '✨', title: 'Sweeping Escapist Adventure', desc: 'Transport me completely away from the real world into wondrous realms.' },
      { id: 'witty', icon: '🍸', title: 'Witty, Sharp & Entertaining', desc: 'Clever banter, satire, social commentary with intellectual spark.' }
    ]
  },
  {
    category: 'Genre Lean',
    title: 'Which genre universe do you want to step into?',
    subtitle: 'Select the genre that sounds most appealing today.',
    options: [
      { id: 'Sci-Fi & Fantasy', icon: '🛸', title: 'Sci-Fi & Fantasy', desc: 'Space odysseys, magical academies, dragons, speculative futures.' },
      { id: 'Mystery & Thriller', icon: '🔍', title: 'Mystery & Thriller', desc: 'Whodunits, unreliable narrators, chilling twists, detectives.' },
      { id: 'Literary Fiction', icon: '📚', title: 'Literary Fiction', desc: 'Lyrical prose, layered character studies, contemporary epics.' },
      { id: 'Romance & Romantasy', icon: '💖', title: 'Romance & Romantasy', desc: 'High tension, enemies to lovers, passionate stakes and chemistry.' },
      { id: 'Non-Fiction & Memoir', icon: '💡', title: 'Memoir & Big Ideas', desc: 'Incredible real-life journeys, behavioral science, personal growth.' }
    ]
  },
  {
    category: 'Pacing & Length',
    title: 'What reading rhythm fits your schedule?',
    subtitle: 'Pacing makes or breaks your reading enjoyment.',
    options: [
      { id: 'fast', icon: '🐇', title: 'Brisk & Addictive (< 350 pages)', desc: 'Short chapters, cliffhangers, finished in a weekend.' },
      { id: 'medium', icon: '📖', title: 'Balanced & Immersive (350–450 pages)', desc: 'Room to breathe, rich world details, steady momentum.' },
      { id: 'epic', icon: '🏔️', title: 'Sweeping Doorstopper (500+ pages)', desc: 'Deep multi-layered universe you can live inside for weeks.' }
    ]
  },
  {
    category: 'Favorite Tropes',
    title: 'Which story element makes you fall in love?',
    subtitle: 'The specific trope or ingredient you can never resist.',
    options: [
      { id: 'found-family', icon: '🤝', title: 'Found Family & Fierce Loyalty', desc: 'Misfits who choose each other against all odds.' },
      { id: 'unreliable-narrator', icon: '🎭', title: 'Unreliable Narrator & Big Twists', desc: 'Nothing is as it seems, jaw-dropping revelations.' },
      { id: 'slow-burn', icon: '🔥', title: 'Slow-Burn Tension & Banter', desc: 'Unspoken longing, crackling chemistry, earned payoff.' },
      { id: 'puzzle', icon: '🧩', title: 'Clever Puzzles & Survival Games', desc: 'Using wits and intellect to solve insurmountable puzzles.' },
      { id: 'worldbuilding', icon: '🗺️', title: 'Rich Lore & Magic Systems', desc: 'Intricate politics, histories, languages, and cultures.' },
      { id: 'character-journey', icon: '🌱', title: 'Deep Emotional Growth', desc: 'A protagonist who is profoundly transformed by the end.' }
    ]
  },
  {
    category: 'Reading Objective',
    title: 'What is your primary reading mission right now?',
    subtitle: 'Tell Carrie what this book needs to do for you.',
    options: [
      { id: 'slump-buster', icon: '🚀', title: 'Break Out of a Reading Slump', desc: 'Must grab my attention immediately and make reading fun again.' },
      { id: 'escape', icon: '🌌', title: 'Pure Escapism from Everyday Stress', desc: 'Total immersion so I can forget my to-do list.' },
      { id: 'humanity', icon: '❤️', title: 'Feel Something Deep & Meaningful', desc: 'Resonant themes that stick with me long after the final page.' },
      { id: 'edge-of-seat', icon: '🎢', title: 'Keep Me on the Edge of My Seat', desc: 'Adrenaline, high stakes, and sheer momentum.' }
    ]
  }
];

// --- APP STATE ---
let currentQuizStep = 0;
let userAnswers = {};
let savedBookIds = JSON.parse(localStorage.getItem('carrie_saved_books') || '[]');
let affiliateTag = localStorage.getItem('carrie_amazon_tag') || 'carrie-20';

// DOM Elements
const heroSection = document.getElementById('heroSection');
const quizSection = document.getElementById('quizSection');
const resultsSection = document.getElementById('resultsSection');
const browseSection = document.getElementById('browseSection');
const savedSection = document.getElementById('savedSection');

const navLogo = document.getElementById('navLogo');
const navQuizBtn = document.getElementById('navQuizBtn');
const navBrowseBtn = document.getElementById('navBrowseBtn');
const navSavedBtn = document.getElementById('navSavedBtn');
const savedCountBadge = document.getElementById('savedCountBadge');

const startQuizBtn = document.getElementById('startQuizBtn');
const randomSurpriseBtn = document.getElementById('randomSurpriseBtn');
const quizProgressBar = document.getElementById('quizProgressBar');
const quizStepText = document.getElementById('quizStepText');
const quizCategoryBadge = document.getElementById('quizCategoryBadge');
const quizQuestionTitle = document.getElementById('quizQuestionTitle');
const quizQuestionSubtitle = document.getElementById('quizQuestionSubtitle');
const quizOptionsGrid = document.getElementById('quizOptionsGrid');
const quizPrevBtn = document.getElementById('quizPrevBtn');
const quizNextBtn = document.getElementById('quizNextBtn');
const quizRestartBtn = document.getElementById('quizRestartBtn');

const retakeQuizBtn = document.getElementById('retakeQuizBtn');
const shareResultsBtn = document.getElementById('shareResultsBtn');
const matchCardsGrid = document.getElementById('matchCardsGrid');
const resultsSummaryText = document.getElementById('resultsSummaryText');

const browseCardsGrid = document.getElementById('browseCardsGrid');
const librarySearchInput = document.getElementById('librarySearchInput');
const clearSearchBtn = document.getElementById('clearSearchBtn');
const genreFilterTabs = document.getElementById('genreFilterTabs');

const savedCardsGrid = document.getElementById('savedCardsGrid');
const emptySavedState = document.getElementById('emptySavedState');
const clearSavedBtn = document.getElementById('clearSavedBtn');

const affiliateModal = document.getElementById('affiliateModal');
const affiliateSettingsBtn = document.getElementById('affiliateSettingsBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const affiliateTagInput = document.getElementById('affiliateTagInput');
const saveAffiliateTagBtn = document.getElementById('saveAffiliateTagBtn');
const toastNotification = document.getElementById('toastNotification');
const themeToggleBtn = document.getElementById('themeToggleBtn');

// --- INITIALIZATION ---
function init() {
  updateSavedBadge();
  setupEventListeners();
  renderBrowseBooks(BOOKS_DATABASE);
  applyTheme();
}

function setupEventListeners() {
  navLogo.addEventListener('click', (e) => {
    e.preventDefault();
    showHero();
  });
  navQuizBtn.addEventListener('click', () => startQuiz());
  startQuizBtn.addEventListener('click', () => startQuiz());
  navBrowseBtn.addEventListener('click', () => showBrowse());
  navSavedBtn.addEventListener('click', () => showSaved());

  randomSurpriseBtn.addEventListener('click', () => {
    const randomBook = BOOKS_DATABASE[Math.floor(Math.random() * BOOKS_DATABASE.length)];
    renderMatchedBooks([randomBook], true);
    showResults();
    triggerCelebration();
  });

  quizRestartBtn.addEventListener('click', () => startQuiz());
  quizPrevBtn.addEventListener('click', () => goToPrevQuestion());
  quizNextBtn.addEventListener('click', () => goToNextQuestion());
  retakeQuizBtn.addEventListener('click', () => startQuiz());
  shareResultsBtn.addEventListener('click', () => shareResults());

  librarySearchInput.addEventListener('input', handleLibrarySearch);
  clearSearchBtn.addEventListener('click', () => {
    librarySearchInput.value = '';
    clearSearchBtn.classList.add('hidden');
    handleLibrarySearch();
  });

  genreFilterTabs.querySelectorAll('.genre-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      genreFilterTabs.querySelectorAll('.genre-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      filterBrowseByGenre(tab.dataset.genre);
    });
  });

  clearSavedBtn.addEventListener('click', () => {
    if (confirm('Clear your entire reading shelf?')) {
      savedBookIds = [];
      localStorage.setItem('carrie_saved_books', JSON.stringify(savedBookIds));
      updateSavedBadge();
      renderSavedBooks();
      showToast('Reading list cleared');
    }
  });

  affiliateSettingsBtn.addEventListener('click', () => {
    affiliateTagInput.value = affiliateTag;
    affiliateModal.classList.remove('hidden');
  });
  closeModalBtn.addEventListener('click', () => affiliateModal.classList.add('hidden'));
  saveAffiliateTagBtn.addEventListener('click', () => {
    affiliateTag = affiliateTagInput.value.trim() || 'carrie-20';
    localStorage.setItem('carrie_amazon_tag', affiliateTag);
    affiliateModal.classList.add('hidden');
    showToast(`Amazon Tag saved: ${affiliateTag}`);
    // re-render current views to update Amazon links
    renderBrowseBooks(getFilteredBooks());
    if (!resultsSection.classList.contains('hidden')) {
      calculateAndShowResults();
    }
  });

  themeToggleBtn.addEventListener('click', toggleTheme);
}

// --- VIEW NAVIGATION ---
function hideAllSections() {
  heroSection.classList.add('hidden');
  quizSection.classList.add('hidden');
  resultsSection.classList.add('hidden');
  browseSection.classList.add('hidden');
  savedSection.classList.add('hidden');

  navQuizBtn.classList.remove('active');
  navBrowseBtn.classList.remove('active');
  navSavedBtn.classList.remove('active');
}

function showHero() {
  hideAllSections();
  heroSection.classList.remove('hidden');
}

function startQuiz() {
  hideAllSections();
  quizSection.classList.remove('hidden');
  navQuizBtn.classList.add('active');
  currentQuizStep = 0;
  userAnswers = {};
  renderQuizQuestion();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.showQuiz = startQuiz;

function showResults() {
  hideAllSections();
  resultsSection.classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showBrowse() {
  hideAllSections();
  browseSection.classList.remove('hidden');
  navBrowseBtn.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showSaved() {
  hideAllSections();
  savedSection.classList.remove('hidden');
  navSavedBtn.classList.add('active');
  renderSavedBooks();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- QUIZ LOGIC ---
function renderQuizQuestion() {
  const q = QUIZ_QUESTIONS[currentQuizStep];
  const total = QUIZ_QUESTIONS.length;
  const progressPct = ((currentQuizStep + 1) / total) * 100;

  quizProgressBar.style.width = `${progressPct}%`;
  quizStepText.textContent = `Question ${currentQuizStep + 1} of ${total}`;
  quizCategoryBadge.textContent = q.category;
  quizQuestionTitle.textContent = q.title;
  quizQuestionSubtitle.textContent = q.subtitle;

  quizPrevBtn.disabled = currentQuizStep === 0;
  quizNextBtn.disabled = !userAnswers[currentQuizStep];
  quizNextBtn.textContent = (currentQuizStep === total - 1) ? 'See My Matches ✨' : 'Next →';

  quizOptionsGrid.innerHTML = q.options.map(opt => {
    const isSelected = userAnswers[currentQuizStep] === opt.id;
    return `
      <div class="quiz-option-card ${isSelected ? 'selected' : ''}" data-opt-id="${opt.id}">
        <span class="option-icon">${opt.icon}</span>
        <div class="option-content">
          <span class="option-title">${opt.title}</span>
          <span class="option-desc">${opt.desc}</span>
        </div>
      </div>
    `;
  }).join('');

  quizOptionsGrid.querySelectorAll('.quiz-option-card').forEach(card => {
    card.addEventListener('click', () => {
      quizOptionsGrid.querySelectorAll('.quiz-option-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      userAnswers[currentQuizStep] = card.dataset.optId;
      quizNextBtn.disabled = false;

      // Auto-advance on option click for brisk mobile feel
      setTimeout(() => {
        goToNextQuestion();
      }, 220);
    });
  });
}

function goToNextQuestion() {
  if (!userAnswers[currentQuizStep]) return;
  if (currentQuizStep < QUIZ_QUESTIONS.length - 1) {
    currentQuizStep++;
    renderQuizQuestion();
  } else {
    calculateAndShowResults();
  }
}

function goToPrevQuestion() {
  if (currentQuizStep > 0) {
    currentQuizStep--;
    renderQuizQuestion();
  }
}

// --- RECOMMENDATION SCORING ALGORITHM ---
function calculateAndShowResults() {
  const selectedMood = userAnswers[0];
  const selectedGenre = userAnswers[1];
  const selectedPacing = userAnswers[2];
  const selectedTrope = userAnswers[3];
  const selectedGoal = userAnswers[4];

  // Score each book
  const scoredBooks = BOOKS_DATABASE.map(book => {
    let score = 0;
    const reasons = [];

    // Genre alignment (weight: 35)
    if (book.genre === selectedGenre) {
      score += 35;
      reasons.push(`Hits your preferred genre: ${book.genre}`);
    } else {
      score += 10;
    }

    // Mood alignment (weight: 25)
    if (book.moods.includes(selectedMood)) {
      score += 25;
      reasons.push(`Matches your ${selectedMood} reading vibe`);
    }

    // Trope alignment (weight: 20)
    if (book.tropes.includes(selectedTrope)) {
      score += 20;
      reasons.push(`Features the ${selectedTrope.replace('-', ' ')} trope you crave`);
    }

    // Pacing alignment (weight: 10)
    if (book.pacing === selectedPacing) {
      score += 10;
      reasons.push(`Ideal ${book.pacing} pacing & length (${book.pages} pages)`);
    }

    // Goal alignment (weight: 10)
    if (book.goal.includes(selectedGoal)) {
      score += 10;
      reasons.push(`Tailored to help you ${selectedGoal.replace('-', ' ')}`);
    }

    // Add baseline score
    const matchPercentage = Math.min(99, Math.max(76, Math.round(score)));

    return {
      ...book,
      matchPercentage,
      reasons: reasons.slice(0, 3)
    };
  });

  // Sort descending by match score
  scoredBooks.sort((a, b) => b.matchPercentage - a.matchPercentage);
  const topMatches = scoredBooks.slice(0, 4);

  renderMatchedBooks(topMatches);
  resultsSummaryText.textContent = `Based on your love for ${selectedGenre}, ${selectedMood} mood, and ${selectedTrope.replace('-', ' ')} dynamics, here are your top 4 matches handpicked by Carrie.`;
  showResults();
  triggerCelebration();
}

// --- RENDER BOOK CARDS ---
function createBookCardHTML(book, isMatchView = false) {
  const isSaved = savedBookIds.includes(book.id);
  const amazonUrl = `https://www.amazon.com/dp/${book.amazonAsin}?tag=${encodeURIComponent(affiliateTag)}`;

  return `
    <article class="book-card" data-book-id="${book.id}">
      <div class="book-cover-banner" style="background: ${book.gradient};">
        <div class="book-cover-overlay"></div>
        <span class="book-emblem">${book.emblem}</span>
        ${isMatchView ? `
          <div class="match-badge">
            <span>✨</span> ${book.matchPercentage || 98}% Match
          </div>
        ` : ''}
      </div>

      <div class="book-details">
        <div class="book-meta">
          <span class="genre-badge">${book.genre}</span>
          <span class="rating-badge">★ ${book.rating}</span>
          <span style="font-size: 0.78rem; color: var(--text-dim); margin-left: auto;">${book.pages}p</span>
        </div>

        <h3 class="book-title">${book.title}</h3>
        <span class="book-author">by ${book.author} (${book.year})</span>

        <p class="book-synopsis">${book.synopsis}</p>

        ${isMatchView && book.reasons && book.reasons.length > 0 ? `
          <div class="book-match-reasons">
            <span class="match-reasons-title">Why it matches your quiz:</span>
            <ul class="match-reasons-list">
              ${book.reasons.map(r => `<li>${r}</li>`).join('')}
            </ul>
          </div>
        ` : ''}

        <div class="vibe-tags">
          ${book.vibes.map(v => `<span class="vibe-tag">#${v}</span>`).join('')}
        </div>

        <div class="book-actions">
          <a href="${amazonUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-amazon" title="Buy on Amazon (Affiliate Link)">
            <span>🛒 Buy on Amazon</span>
          </a>
          <button class="btn btn-secondary bookmark-btn ${isSaved ? 'active' : ''}" data-id="${book.id}" title="${isSaved ? 'Remove from shelf' : 'Save to shelf'}">
            <span>${isSaved ? '❤️ Saved' : '🤍 Save'}</span>
          </button>
        </div>
      </div>
    </article>
  `;
}

function renderMatchedBooks(books, isSurprise = false) {
  matchCardsGrid.innerHTML = books.map(b => createBookCardHTML(b, true)).join('');
  attachCardListeners(matchCardsGrid);
  if (isSurprise) {
    resultsSummaryText.textContent = `Surprise literary pick! Here is a critically acclaimed crowd-pleaser that readers adore.`;
  }
}

function renderBrowseBooks(books) {
  browseCardsGrid.innerHTML = books.map(b => createBookCardHTML(b, false)).join('');
  attachCardListeners(browseCardsGrid);
}

function renderSavedBooks() {
  const savedBooks = BOOKS_DATABASE.filter(b => savedBookIds.includes(b.id));
  if (savedBooks.length === 0) {
    savedCardsGrid.innerHTML = '';
    emptySavedState.classList.remove('hidden');
  } else {
    emptySavedState.classList.add('hidden');
    savedCardsGrid.innerHTML = savedBooks.map(b => createBookCardHTML(b, false)).join('');
    attachCardListeners(savedCardsGrid);
  }
}

function attachCardListeners(container) {
  container.querySelectorAll('.bookmark-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const id = btn.dataset.id;
      toggleSavedBook(id);
    });
  });
}

function toggleSavedBook(id) {
  const book = BOOKS_DATABASE.find(b => b.id === id);
  if (savedBookIds.includes(id)) {
    savedBookIds = savedBookIds.filter(x => x !== id);
    showToast(`Removed "${book ? book.title : 'Book'}" from reading list`);
  } else {
    savedBookIds.push(id);
    showToast(`Saved "${book ? book.title : 'Book'}" to reading list! 📚`);
  }
  localStorage.setItem('carrie_saved_books', JSON.stringify(savedBookIds));
  updateSavedBadge();

  // Re-render current active views to update button states
  if (!resultsSection.classList.contains('hidden')) {
    containerUpdateBookmarkButtons(matchCardsGrid);
  }
  if (!browseSection.classList.contains('hidden')) {
    containerUpdateBookmarkButtons(browseCardsGrid);
  }
  if (!savedSection.classList.contains('hidden')) {
    renderSavedBooks();
  }
}

function containerUpdateBookmarkButtons(container) {
  container.querySelectorAll('.bookmark-btn').forEach(btn => {
    const isSaved = savedBookIds.includes(btn.dataset.id);
    btn.classList.toggle('active', isSaved);
    btn.innerHTML = `<span>${isSaved ? '❤️ Saved' : '🤍 Save'}</span>`;
  });
}

function updateSavedBadge() {
  savedCountBadge.textContent = savedBookIds.length;
}

// --- SEARCH & FILTER ---
let activeGenre = 'all';

function handleLibrarySearch() {
  const query = librarySearchInput.value.toLowerCase().trim();
  clearSearchBtn.classList.toggle('hidden', query.length === 0);
  renderBrowseBooks(getFilteredBooks());
}

function filterBrowseByGenre(genre) {
  activeGenre = genre;
  renderBrowseBooks(getFilteredBooks());
}

function getFilteredBooks() {
  const query = librarySearchInput.value.toLowerCase().trim();
  return BOOKS_DATABASE.filter(book => {
    const matchesGenre = (activeGenre === 'all') || (book.genre === activeGenre);
    const matchesQuery = query === '' || 
      book.title.toLowerCase().includes(query) ||
      book.author.toLowerCase().includes(query) ||
      book.synopsis.toLowerCase().includes(query) ||
      book.vibes.some(v => v.toLowerCase().includes(query));
    return matchesGenre && matchesQuery;
  });
}

// --- UTILITIES & TOASTS ---
function showToast(message) {
  toastNotification.textContent = message;
  toastNotification.classList.remove('hidden');
  toastNotification.style.opacity = '1';
  toastNotification.style.transform = 'translateY(0)';

  setTimeout(() => {
    toastNotification.style.opacity = '0';
    toastNotification.style.transform = 'translateY(10px)';
    setTimeout(() => toastNotification.classList.add('hidden'), 250);
  }, 2600);
}

function shareResults() {
  const url = window.location.href;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(url).then(() => {
      showToast('PageMatch link copied to clipboard! 📋');
    });
  } else {
    showToast('Copy URL from your browser address bar.');
  }
}

function triggerCelebration() {
  confetti({
    particleCount: 60,
    spread: 60,
    origin: { y: 0.6 }
  });
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('carrie_theme', newTheme);
  themeToggleBtn.querySelector('.theme-icon').textContent = newTheme === 'dark' ? '☀️' : '🌙';
}

function applyTheme() {
  const savedTheme = localStorage.getItem('carrie_theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  themeToggleBtn.querySelector('.theme-icon').textContent = savedTheme === 'dark' ? '☀️' : '🌙';
}

// Start app
init();
