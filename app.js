import { TIERS, CARD_TYPES, TIER_CARDS, PENALTY_CARDS } from './deck.js';

// 6-sided die faces: 2 Truth, 2 Dare, 1 Penalty, 1 Wild (Curator's Choice)
const DIE_FACES = ['truth', 'dare', 'truth', 'dare', 'penalty', 'wild'];

const state = {
  players: ['Player 1', 'Player 2'],
  currentPlayerIndex: 0,
  targetPlayerIndex: 1,
  mode: 'allure', // 'allure' | 'erotic' | 'naughty' | 'progressive'
  progressiveTurnCount: 0,
  penaltyMode: 'deck', // 'deck' | 'custom'
  customPenaltyText:
    'Remove one item of clothing slowly, or grant your partner a 60-second uninterrupted request.',
  passCurtainEnabled: false,
  soundEnabled: true,
  usedIds: new Set(),
  redeemedTokens: new Set(),
  currentCard: null,
  isFlipped: false,
  isRolling: false,
  lastViewBeforePrint: 'view-setup',
  timer: {
    remaining: 0,
    total: 0,
    intervalId: null,
  },
};

// ==================== SUBTLE WEB AUDIO SYNTH ====================
let audioCtx = null;
function getAudioCtx() {
  if (!state.soundEnabled) return null;
  if (!audioCtx) {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (Ctx) audioCtx = new Ctx();
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {});
  }
  return audioCtx;
}

function playDiceTick() {
  const ctx = getAudioCtx();
  if (!ctx) return;
  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = 'triangle';
  osc.frequency.setValueAtTime(220 + Math.random() * 90, now);
  osc.frequency.exponentialRampToValueAtTime(80, now + 0.045);
  gain.gain.setValueAtTime(0.06, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.045);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(now);
  osc.stop(now + 0.05);
}

function playDiceLand() {
  const ctx = getAudioCtx();
  if (!ctx) return;
  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(150, now);
  osc.frequency.exponentialRampToValueAtTime(52, now + 0.14);
  gain.gain.setValueAtTime(0.14, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(now);
  osc.stop(now + 0.16);
}

function playCardFlip() {
  const ctx = getAudioCtx();
  if (!ctx) return;
  const now = ctx.currentTime;
  const bufferSize = Math.floor(ctx.sampleRate * 0.12);
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i += 1) {
    data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize);
  }
  const src = ctx.createBufferSource();
  src.buffer = buffer;
  const filter = ctx.createBiquadFilter();
  filter.type = 'bandpass';
  filter.frequency.setValueAtTime(1400, now);
  filter.Q.value = 1.4;
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.09, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
  src.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);
  src.start(now);
}

function playTimerChime() {
  const ctx = getAudioCtx();
  if (!ctx) return;
  const now = ctx.currentTime;
  [528, 792].forEach((freq, idx) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now);
    gain.gain.setValueAtTime(idx === 0 ? 0.11 : 0.045, now);
    gain.gain.exponentialRampToValueAtTime(0.0008, now + 1.8);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 1.85);
  });
}

// ==================== DOM REFERENCES ====================
const els = {
  viewSetup: document.getElementById('view-setup'),
  viewPlay: document.getElementById('view-play'),
  viewPrint: document.getElementById('view-print'),
  btnHome: document.getElementById('btn-home'),
  btnSoundToggle: document.getElementById('btn-sound-toggle'),
  btnOpenPrint: document.getElementById('btn-open-print'),
  btnBackSetup: document.getElementById('btn-back-setup'),
  btnStartGame: document.getElementById('btn-start-game'),
  playersList: document.getElementById('players-list'),
  playerCountBtns: document.querySelectorAll('#player-count-selector .seg-btn'),
  tierPills: document.querySelectorAll('.tier-pill'),
  penaltySegBtns: document.querySelectorAll('#penalty-mode-toggle .seg-btn'),
  penaltyDeckInfo: document.getElementById('penalty-deck-info'),
  penaltyCustomBox: document.getElementById('penalty-custom-box'),
  inputCustomPenalty: document.getElementById('input-custom-penalty'),
  chkPassCurtain: document.getElementById('chk-pass-curtain'),

  // Play table
  activePlayerName: document.getElementById('active-player-name'),
  btnCycleTarget: document.getElementById('btn-cycle-target'),
  targetPlayerName: document.getElementById('target-player-name'),
  targetSwapIcon: document.getElementById('target-swap-icon'),
  liveTierBtns: document.querySelectorAll('.mini-tier'),
  progressiveStatus: document.getElementById('progressive-status'),
  die: document.getElementById('die'),
  dieIcon: document.getElementById('die-icon'),
  dieLabel: document.getElementById('die-label'),
  btnRoll: document.getElementById('btn-roll'),
  wildChoice: document.getElementById('wild-choice'),
  wildPickBtns: document.querySelectorAll('[data-wild-pick]'),

  // Command Token
  commandToken: document.getElementById('command-token'),
  tokenPlayerName: document.getElementById('token-player-name'),
  tokenStatus: document.getElementById('token-status'),
  btnRedeemToken: document.getElementById('btn-redeem-token'),

  // Card
  playingCard: document.getElementById('playing-card'),
  cardBackIcon: document.getElementById('card-back-icon'),
  cardBackLabel: document.getElementById('card-back-label'),
  cardBackHint: document.getElementById('card-back-hint'),
  cardFront: document.getElementById('card-front'),
  cardTierTag: document.getElementById('card-tier-tag'),
  cardFrontIcon: document.getElementById('card-front-icon'),
  cardTypeText: document.getElementById('card-type-text'),
  cardTitle: document.getElementById('card-title'),
  cardPrompt: document.getElementById('card-prompt'),
  cardCue: document.getElementById('card-cue'),

  // Timer & Actions
  timerBar: document.getElementById('timer-bar'),
  timerDisplay: document.getElementById('timer-display'),
  btnTimerToggle: document.getElementById('btn-timer-toggle'),
  btnTimerReset: document.getElementById('btn-timer-reset'),
  cardActions: document.getElementById('card-actions'),
  btnPassPenalty: document.getElementById('btn-pass-penalty'),
  btnNextTurn: document.getElementById('btn-next-turn'),

  // Curtain
  turnCurtain: document.getElementById('turn-curtain'),
  curtainPlayerName: document.getElementById('curtain-player-name'),
  btnCurtainReady: document.getElementById('btn-curtain-ready'),

  // Print
  chkIncludeBacks: document.getElementById('chk-include-backs'),
  btnClosePrint: document.getElementById('btn-close-print'),
  btnTriggerPrint: document.getElementById('btn-trigger-print'),
  printPreviewGrid: document.getElementById('print-preview-grid'),
  printSheet: document.getElementById('print-sheet'),
};

function showView(viewId) {
  [els.viewSetup, els.viewPlay, els.viewPrint].forEach((v) => v.classList.remove('active'));
  document.getElementById(viewId).classList.add('active');
  els.btnBackSetup.classList.toggle('hidden', viewId !== 'view-play');
}

function setSvgUse(svgEl, iconName) {
  svgEl.innerHTML = `<use href="#icon-${iconName}"></use>`;
}

// ==================== PROGRESSIVE RITUAL ====================
function getTurnsPerStage() {
  return Math.max(4, state.players.length * 2);
}

function getEffectiveTier() {
  if (state.mode !== 'progressive') return state.mode;
  const perStage = getTurnsPerStage();
  if (state.progressiveTurnCount < perStage) return 'allure';
  if (state.progressiveTurnCount < perStage * 2) return 'erotic';
  return 'naughty';
}

function updateProgressiveStatus() {
  if (state.mode !== 'progressive') {
    els.progressiveStatus.classList.add('hidden');
    return;
  }
  const perStage = getTurnsPerStage();
  const tier = getEffectiveTier();
  els.progressiveStatus.classList.remove('hidden');

  if (tier === 'allure') {
    const left = perStage - state.progressiveTurnCount;
    els.progressiveStatus.textContent = `Stage I · Allure (${left} ${left === 1 ? 'turn' : 'turns'} to Erotic)`;
  } else if (tier === 'erotic') {
    const left = perStage * 2 - state.progressiveTurnCount;
    els.progressiveStatus.textContent = `Stage II · Erotic (${left} ${left === 1 ? 'turn' : 'turns'} to Naughty)`;
  } else {
    els.progressiveStatus.textContent = 'Stage III · Naughty Unlocked';
  }
}

function syncLiveTierButtons() {
  els.liveTierBtns.forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.liveMode === state.mode);
  });
  updateProgressiveStatus();
}

// ==================== PLAYER & TARGET MANAGEMENT ====================
function pickRandomTarget() {
  const others = state.players
    .map((_, idx) => idx)
    .filter((idx) => idx !== state.currentPlayerIndex);
  state.targetPlayerIndex = others[Math.floor(Math.random() * others.length)];
}

function cycleTarget() {
  if (state.players.length <= 2) return;
  let next = (state.targetPlayerIndex + 1) % state.players.length;
  if (next === state.currentPlayerIndex) {
    next = (next + 1) % state.players.length;
  }
  state.targetPlayerIndex = next;
  updatePlayerDisplay();
  if (state.currentCard) {
    els.cardPrompt.textContent = formatPrompt(state.currentCard.prompt);
  }
}

function updatePlayerDisplay() {
  els.activePlayerName.textContent = state.players[state.currentPlayerIndex];
  els.targetPlayerName.textContent = state.players[state.targetPlayerIndex];
  els.targetSwapIcon.classList.toggle('hidden', state.players.length <= 2);
  renderCommandToken();
}

function renderCommandToken() {
  const playerIdx = state.currentPlayerIndex;
  const playerName = state.players[playerIdx];
  const isRedeemed = state.redeemedTokens.has(playerIdx);

  els.tokenPlayerName.textContent = playerName;
  els.commandToken.classList.toggle('redeemed', isRedeemed);
  els.tokenStatus.textContent = isRedeemed
    ? 'Redeemed · Command issued'
    : 'Available · Issue one command';
  els.btnRedeemToken.textContent = isRedeemed ? 'Restore' : 'Redeem';
}

function toggleCommandToken() {
  const playerIdx = state.currentPlayerIndex;
  if (state.redeemedTokens.has(playerIdx)) {
    state.redeemedTokens.delete(playerIdx);
  } else {
    state.redeemedTokens.add(playerIdx);
    playTimerChime();
    els.commandToken.classList.remove('just-redeemed');
    void els.commandToken.offsetWidth;
    els.commandToken.classList.add('just-redeemed');
  }
  renderCommandToken();
}

function formatPrompt(template, forPrint = false) {
  const replacement = forPrint
    ? 'your partner'
    : state.players[state.targetPlayerIndex] || 'your partner';
  return template.replaceAll('{target}', replacement);
}

// ==================== DECK DRAW LOGIC ====================
function drawCard(type) {
  if (type === 'penalty') {
    if (state.penaltyMode === 'custom') {
      return {
        id: 'custom-penalty',
        tier: 'penalty',
        type: 'penalty',
        title: 'House Penalty',
        prompt: state.customPenaltyText || 'Honor your agreed house penalty.',
        cue: 'Agreed House Rule',
        durationSeconds: 0,
      };
    }
    return pickFromPool(PENALTY_CARDS);
  }

  const activeTier = getEffectiveTier();
  let pool = TIER_CARDS.filter((c) => c.tier === activeTier && c.type === type);
  if (pool.length === 0) {
    pool = TIER_CARDS.filter((c) => c.type === type);
  }
  return pickFromPool(pool);
}

function pickFromPool(pool) {
  let available = pool.filter((c) => !state.usedIds.has(c.id));
  if (available.length === 0) {
    pool.forEach((c) => state.usedIds.delete(c.id));
    available = pool;
  }
  const chosen = available[Math.floor(Math.random() * available.length)];
  state.usedIds.add(chosen.id);
  return chosen;
}

// ==================== CARD & TIMER RENDERING ====================
function prepareCardOnTable(card) {
  stopTimer();
  state.currentCard = card;
  state.isFlipped = false;
  els.playingCard.classList.remove('flipped');
  els.cardActions.classList.add('hidden');
  els.timerBar.classList.add('hidden');

  const typeMeta = CARD_TYPES[card.type];
  setSvgUse(els.cardBackIcon, typeMeta.icon);
  els.cardBackLabel.textContent = typeMeta.label;
  els.cardBackHint.textContent = 'Tap card to reveal';

  els.cardFront.dataset.tier = card.tier;
  if (card.tier === 'penalty') {
    els.cardTierTag.textContent = 'Penalty · ✦';
  } else {
    const t = TIERS[card.tier];
    els.cardTierTag.textContent = `${t.name} · ${'✦'.repeat(t.spice)}`;
  }

  setSvgUse(els.cardFrontIcon, typeMeta.icon);
  els.cardTypeText.textContent = typeMeta.label;
  els.cardTitle.textContent = card.title;
  els.cardPrompt.textContent = formatPrompt(card.prompt);
  els.cardCue.textContent = card.cue || '';
}

function flipCurrentCard() {
  if (!state.currentCard || state.isFlipped) return;
  state.isFlipped = true;
  playCardFlip();
  els.playingCard.classList.add('flipped');
  els.cardActions.classList.remove('hidden');

  els.btnPassPenalty.classList.toggle('hidden', state.currentCard.type === 'penalty');

  if (state.currentCard.durationSeconds > 0) {
    setupTimer(state.currentCard.durationSeconds);
    els.timerBar.classList.remove('hidden');
  }
}

function resetCardToIdle() {
  stopTimer();
  state.currentCard = null;
  state.isFlipped = false;
  els.playingCard.classList.remove('flipped');
  els.cardActions.classList.add('hidden');
  els.timerBar.classList.add('hidden');
  els.wildChoice.classList.add('hidden');
  setSvgUse(els.cardBackIcon, 'wild');
  els.cardBackLabel.textContent = 'Roll to Draw';
  els.cardBackHint.textContent = 'Roll the die to reveal your card';
}

// ==================== TIMER ====================
function formatTime(sec) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function setupTimer(seconds) {
  stopTimer();
  state.timer.total = seconds;
  state.timer.remaining = seconds;
  els.timerDisplay.textContent = formatTime(seconds);
  els.btnTimerToggle.textContent = 'Start';
}

function stopTimer() {
  if (state.timer.intervalId) {
    clearInterval(state.timer.intervalId);
    state.timer.intervalId = null;
  }
}

function toggleTimer() {
  if (state.timer.intervalId) {
    stopTimer();
    els.btnTimerToggle.textContent = 'Resume';
    return;
  }
  if (state.timer.remaining <= 0) {
    state.timer.remaining = state.timer.total;
  }
  els.btnTimerToggle.textContent = 'Pause';
  state.timer.intervalId = setInterval(() => {
    state.timer.remaining -= 1;
    els.timerDisplay.textContent = formatTime(Math.max(0, state.timer.remaining));
    if (state.timer.remaining <= 0) {
      stopTimer();
      els.btnTimerToggle.textContent = 'Done';
      playTimerChime();
    }
  }, 1000);
}

// ==================== DIE ROLL ====================
function rollDie() {
  if (state.isRolling) return;
  state.isRolling = true;
  els.btnRoll.disabled = true;
  els.wildChoice.classList.add('hidden');
  resetCardToIdle();
  els.die.classList.add('rolling');

  let ticks = 0;
  const previewInterval = setInterval(() => {
    const face = DIE_FACES[ticks % DIE_FACES.length];
    const meta = CARD_TYPES[face];
    setSvgUse(els.dieIcon, meta.icon);
    els.dieLabel.textContent = meta.label;
    playDiceTick();
    ticks += 1;
  }, 95);

  setTimeout(() => {
    clearInterval(previewInterval);
    els.die.classList.remove('rolling');
    const result = DIE_FACES[Math.floor(Math.random() * DIE_FACES.length)];
    const meta = CARD_TYPES[result];
    setSvgUse(els.dieIcon, meta.icon);
    els.dieLabel.textContent = meta.label;
    playDiceLand();
    state.isRolling = false;
    els.btnRoll.disabled = false;

    if (result === 'wild') {
      els.wildChoice.classList.remove('hidden');
    } else {
      const card = drawCard(result);
      prepareCardOnTable(card);
    }
  }, 850);
}

// ==================== PRINT DECK RENDERING ====================
function buildPrintCardHtml(card) {
  const typeMeta = CARD_TYPES[card.type];
  const tierLabel =
    card.tier === 'penalty'
      ? 'Penalty'
      : `${TIERS[card.tier].name} · ${'✦'.repeat(TIERS[card.tier].spice)}`;

  return `
    <article class="p-card">
      <div class="p-card-inner">
        <div class="p-card-top">
          <span>${tierLabel}</span>
          <span>${typeMeta.label}</span>
        </div>
        <div>
          <h3 class="p-card-title">${card.title}</h3>
          <p class="p-card-prompt">${formatPrompt(card.prompt, true)}</p>
        </div>
        <div class="p-card-cue">${card.cue || ''}</div>
      </div>
    </article>
  `;
}

function buildPrintBackHtml(card) {
  const typeMeta = CARD_TYPES[card.type];
  return `
    <article class="p-card">
      <div class="p-card-inner" style="justify-content:center; align-items:center; gap:0.5rem;">
        <svg style="width:42px;height:42px;color:#C59F7B;"><use href="#icon-${typeMeta.icon}"></use></svg>
        <div style="font-family:var(--font-display);font-size:0.8rem;letter-spacing:0.2em;text-transform:uppercase;color:#f3efea;">
          ${typeMeta.label}
        </div>
        <div style="font-family:var(--font-wordmark);font-size:0.88rem;letter-spacing:0.06em;color:#BCB29E;">
          skaam. play.
        </div>
      </div>
    </article>
  `;
}

function renderPrintDeck() {
  const allCards = [...TIER_CARDS, ...PENALTY_CARDS];
  const includeBacks = els.chkIncludeBacks.checked;
  let html = allCards.map(buildPrintCardHtml).join('');
  if (includeBacks) {
    html += allCards.map(buildPrintBackHtml).join('');
  }
  els.printPreviewGrid.innerHTML = html;
  els.printSheet.innerHTML = html;
}

// ==================== SETUP PLAYERS ====================
function setPlayerCount(count) {
  while (state.players.length < count) {
    state.players.push(`Player ${state.players.length + 1}`);
  }
  if (state.players.length > count) {
    state.players.length = count;
  }
  els.playerCountBtns.forEach((btn) => {
    btn.classList.toggle('active', Number(btn.dataset.count) === count);
  });
  renderPlayerInputs();
}

function renderPlayerInputs() {
  els.playersList.innerHTML = '';
  state.players.forEach((name, idx) => {
    const row = document.createElement('div');
    row.className = 'player-row';

    const input = document.createElement('input');
    input.type = 'text';
    input.maxLength = 24;
    input.value = name;
    input.placeholder = `Player ${idx + 1}`;
    input.setAttribute('aria-label', `Player ${idx + 1} name`);
    input.addEventListener('input', (e) => {
      state.players[idx] = e.target.value;
    });
    row.appendChild(input);
    els.playersList.appendChild(row);
  });
}

// ==================== EVENT LISTENERS ====================
els.playerCountBtns.forEach((btn) => {
  btn.addEventListener('click', () => setPlayerCount(Number(btn.dataset.count)));
});
renderPlayerInputs();

els.btnSoundToggle.addEventListener('click', () => {
  state.soundEnabled = !state.soundEnabled;
  els.btnSoundToggle.textContent = state.soundEnabled ? 'Sound: On' : 'Sound: Off';
  els.btnSoundToggle.setAttribute('aria-pressed', String(state.soundEnabled));
});

els.tierPills.forEach((pill) => {
  pill.addEventListener('click', () => {
    els.tierPills.forEach((p) => p.classList.remove('active'));
    pill.classList.add('active');
    state.mode = pill.dataset.mode;
  });
});

els.penaltySegBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    els.penaltySegBtns.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    state.penaltyMode = btn.dataset.pmode;
    els.penaltyDeckInfo.classList.toggle('hidden', state.penaltyMode !== 'deck');
    els.penaltyCustomBox.classList.toggle('hidden', state.penaltyMode !== 'custom');
  });
});

els.btnStartGame.addEventListener('click', () => {
  state.players = state.players.map((p, i) => p.trim() || `Player ${i + 1}`);
  state.customPenaltyText = els.inputCustomPenalty.value.trim();
  state.passCurtainEnabled = els.chkPassCurtain.checked;
  state.currentPlayerIndex = 0;
  state.progressiveTurnCount = 0;
  state.redeemedTokens.clear();
  pickRandomTarget();
  updatePlayerDisplay();
  syncLiveTierButtons();
  resetCardToIdle();
  showView('view-play');
});

els.btnCycleTarget.addEventListener('click', cycleTarget);

els.liveTierBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    state.mode = btn.dataset.liveMode;
    syncLiveTierButtons();
  });
});

els.btnRoll.addEventListener('click', rollDie);
els.btnRedeemToken.addEventListener('click', toggleCommandToken);

els.wildPickBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const pick = btn.dataset.wildPick;
    els.wildChoice.classList.add('hidden');
    const card = drawCard(pick);
    prepareCardOnTable(card);
  });
});

els.playingCard.addEventListener('click', flipCurrentCard);
els.playingCard.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    flipCurrentCard();
  }
});

els.btnTimerToggle.addEventListener('click', toggleTimer);
els.btnTimerReset.addEventListener('click', () => {
  if (state.currentCard?.durationSeconds) {
    setupTimer(state.currentCard.durationSeconds);
  }
});

els.btnPassPenalty.addEventListener('click', () => {
  const penaltyCard = drawCard('penalty');
  prepareCardOnTable(penaltyCard);
  setTimeout(flipCurrentCard, 120);
});

els.btnNextTurn.addEventListener('click', () => {
  if (state.mode === 'progressive') {
    state.progressiveTurnCount += 1;
  }
  state.currentPlayerIndex = (state.currentPlayerIndex + 1) % state.players.length;
  pickRandomTarget();
  updatePlayerDisplay();
  updateProgressiveStatus();
  resetCardToIdle();

  if (state.passCurtainEnabled) {
    els.curtainPlayerName.textContent = state.players[state.currentPlayerIndex];
    els.turnCurtain.classList.remove('hidden');
  }
});

els.btnCurtainReady.addEventListener('click', () => {
  els.turnCurtain.classList.add('hidden');
});

els.btnHome.addEventListener('click', () => showView('view-setup'));
els.btnBackSetup.addEventListener('click', () => showView('view-setup'));

els.btnOpenPrint.addEventListener('click', () => {
  state.lastViewBeforePrint = els.viewPlay.classList.contains('active')
    ? 'view-play'
    : 'view-setup';
  renderPrintDeck();
  showView('view-print');
});

els.btnClosePrint.addEventListener('click', () => showView(state.lastViewBeforePrint));
els.chkIncludeBacks.addEventListener('change', renderPrintDeck);
els.btnTriggerPrint.addEventListener('click', () => window.print());
