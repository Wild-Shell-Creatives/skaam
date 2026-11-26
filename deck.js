/**
 * SKAAM. PLAY. — Expanded Curated Deck (102 Cards)
 * 24 Allure · 24 Erotic · 24 Naughty · 15 Penalty Suggestions · 15 Shots & Sips
 * Supports {target} placeholder for seamless 2-player and 3–6 player group play.
 */

export const CARD_BACK_QUOTES = [
  'Silence is where desire begins.',
  'Take your time—the night is unhurried.',
  'A glance held a second too long says everything.',
  'Anticipation is the finest kind of touch.',
  'Lean closer; the best secrets are whispered.',
  'Let the fire burn slow.',
  'Softness is its own kind of surrender.',
  'Every pause is an invitation.',
  'Warmth lingers longer than haste.',
  'In the quiet, every breath speaks.',
  'Curiosity is the spark; patience is the flame.',
  'Some things are better felt than explained.',
];

export const TIERS = {
  allure: {
    id: 'allure',
    name: 'Allure',
    subtitle: 'The Spark',
    description: 'Atmosphere, eye contact, subtle touch, and magnetic curiosity.',
    spice: 1,
    accent: '#BCB29E',
  },
  erotic: {
    id: 'erotic',
    name: 'Erotic',
    subtitle: 'The Slow Burn',
    description: 'Sensory play, anticipation, breath, and literary intimacy.',
    spice: 2,
    accent: '#BDA182',
  },
  naughty: {
    id: 'naughty',
    name: 'Naughty',
    subtitle: 'The Surrender',
    description: 'Boldness, playful power dynamics, and unhurried indulgence.',
    spice: 3,
    accent: '#C59F7B',
  },
};

export const CARD_TYPES = {
  truth: { id: 'truth', label: 'Truth', icon: 'keyhole' },
  dare: { id: 'dare', label: 'Dare', icon: 'flame' },
  penalty: { id: 'penalty', label: 'Penalty', icon: 'hourglass' },
  wild: { id: 'wild', label: "Curator's Choice", icon: 'wild' },
};

export const TIER_CARDS = [
  // ==========================================
  // TIER I: ALLURE — THE SPARK (15 cards)
  // ==========================================
  {
    id: 'allure-1',
    tier: 'allure',
    type: 'truth',
    title: 'First Impressions',
    prompt:
      'Describe the exact moment you first felt drawn to {target}—not just what you saw, but what you noticed that no one else in the room would have.',
    cue: 'Spoken slowly',
    durationSeconds: 0,
  },
  {
    id: 'allure-2',
    tier: 'allure',
    type: 'dare',
    title: 'The Unspoken Minute',
    prompt:
      'Sit facing {target}, knees touching. Hold eye contact in complete silence for 60 seconds. Neither of you may speak, laugh, or look away.',
    cue: '60 seconds · Silence',
    durationSeconds: 60,
  },
  {
    id: 'allure-3',
    tier: 'allure',
    type: 'truth',
    title: 'The Underrated Sense',
    prompt:
      'What is one small, non-obvious thing {target} does—a sound, a scent, a gesture—that quietly turns you on more than they realize?',
    cue: 'Honest confession',
    durationSeconds: 0,
  },
  {
    id: 'allure-4',
    tier: 'allure',
    type: 'dare',
    title: 'Trace the Silhouette',
    prompt:
      'Using only the back of your fingers, slowly trace from {target}’s collarbone down to their fingertips. Take your time; they must keep their eyes closed.',
    cue: 'Eyes closed · Slow touch',
    durationSeconds: 60,
  },
  {
    id: 'allure-5',
    tier: 'allure',
    type: 'dare',
    title: 'The Whispered Invitation',
    prompt:
      'Lean in close enough that your lips nearly brush {target}’s ear and tell them one thing you want to do to them before the night is over.',
    cue: 'Whispered',
    durationSeconds: 0,
  },
  {
    id: 'allure-6',
    tier: 'allure',
    type: 'truth',
    title: 'Velvet Memory',
    prompt:
      'Recall the most cinematic, unforgettable kiss you have ever experienced—what made the timing, the setting, or the tension electric?',
    cue: 'Set the scene',
    durationSeconds: 0,
  },
  {
    id: 'allure-7',
    tier: 'allure',
    type: 'dare',
    title: 'The Pulse Check',
    prompt:
      'Place two fingers gently against {target}’s wrist or neck to feel their pulse. Stay there for 30 seconds while describing what you find most magnetic about them.',
    cue: '30 seconds · Intimate',
    durationSeconds: 30,
  },
  {
    id: 'allure-8',
    tier: 'allure',
    type: 'truth',
    title: 'The Art of Seduction',
    prompt:
      'What seduces you faster: a lingering gaze across a crowded room, a well-chosen compliment, or an unexpected touch on the small of your back?',
    cue: 'Be honest',
    durationSeconds: 0,
  },
  {
    id: 'allure-9',
    tier: 'allure',
    type: 'dare',
    title: 'Scent & Shadow',
    prompt:
      'Close your eyes and lean in to breathe in {target}’s scent at their neck or collar. Describe it in three evocative words—no clichés allowed.',
    cue: 'Eyes closed',
    durationSeconds: 0,
  },
  {
    id: 'allure-10',
    tier: 'allure',
    type: 'truth',
    title: 'Midnight Confession',
    prompt:
      'What is a subtle boundary you used to have that you’ve recently become curious about crossing?',
    cue: 'Curiosity',
    durationSeconds: 0,
  },
  {
    id: 'allure-11',
    tier: 'allure',
    type: 'dare',
    title: 'The Slow Toast',
    prompt:
      'Raise your glass to {target} and offer a genuine, slightly dangerous toast to what might happen later tonight. Hold their gaze as you both drink.',
    cue: 'Eye contact',
    durationSeconds: 0,
  },
  {
    id: 'allure-12',
    tier: 'allure',
    type: 'truth',
    title: 'The Favorite Detail',
    prompt:
      'If you were a painter commissioned to capture {target}, which single feature or curve would you spend the most time perfecting?',
    cue: 'Artistic eye',
    durationSeconds: 0,
  },
  {
    id: 'allure-13',
    tier: 'allure',
    type: 'dare',
    title: 'Palm to Palm',
    prompt:
      'Press your open palm against {target}’s palm and slowly interlace your fingers. Hold that connection until your next turn begins.',
    cue: 'Sustained touch',
    durationSeconds: 0,
  },
  {
    id: 'allure-14',
    tier: 'allure',
    type: 'truth',
    title: 'Anticipation',
    prompt:
      'Do you enjoy the slow build-up of an evening more, or the exact moment the tension finally breaks? Tell the table why.',
    cue: 'Slow burn',
    durationSeconds: 0,
  },
  {
    id: 'allure-15',
    tier: 'allure',
    type: 'dare',
    title: 'The Hairline Brush',
    prompt:
      'Gently tuck a strand of hair behind {target}’s ear—or let your fingertips linger along their jawline—and tell them the one word that best describes their energy tonight.',
    cue: 'Gentle & deliberate',
    durationSeconds: 0,
  },
  {
    id: 'allure-16',
    tier: 'allure',
    type: 'truth',
    title: 'The Quiet Detail',
    prompt:
      'What is something {target} wears—or does effortlessly—that always makes you look twice?',
    cue: 'Observant & warm',
    durationSeconds: 0,
  },
  {
    id: 'allure-17',
    tier: 'allure',
    type: 'dare',
    title: 'Warmth of the Palm',
    prompt:
      'Interlace your fingers with {target}’s and rest your forehead lightly against theirs for 30 seconds. Breathe in sync.',
    cue: '30 seconds · Synced breath',
    durationSeconds: 30,
  },
  {
    id: 'allure-18',
    tier: 'allure',
    type: 'truth',
    title: 'The Ideal Setting',
    prompt:
      'If you could design the most seductive evening imaginable with {target}—lighting, music, scent, and pace—what would it feel like?',
    cue: 'Paint the mood',
    durationSeconds: 0,
  },
  {
    id: 'allure-19',
    tier: 'allure',
    type: 'dare',
    title: 'The Wrist Kiss',
    prompt:
      'Take {target}’s hand, turn their wrist upward, and press one slow, unhurried kiss directly over their pulse.',
    cue: 'Unhurried',
    durationSeconds: 0,
  },
  {
    id: 'allure-20',
    tier: 'allure',
    type: 'truth',
    title: 'Unspoken Compliment',
    prompt:
      'Share one deeply flattering thought you’ve had about {target} recently that you kept to yourself.',
    cue: 'Spoken with eye contact',
    durationSeconds: 0,
  },
  {
    id: 'allure-21',
    tier: 'allure',
    type: 'dare',
    title: 'Shoulder Trace',
    prompt:
      'Stand behind {target} and slowly trace both hands from their shoulders down their arms to their wrists. Repeat three times, slower each time.',
    cue: 'Slow & grounding',
    durationSeconds: 45,
  },
  {
    id: 'allure-22',
    tier: 'allure',
    type: 'truth',
    title: 'Magnetic Voice',
    prompt:
      'What is one phrase you’d love to hear {target} whisper to you when the room goes quiet?',
    cue: 'Confession',
    durationSeconds: 0,
  },
  {
    id: 'allure-23',
    tier: 'allure',
    type: 'dare',
    title: 'The Lingering Look',
    prompt:
      'Let {target} choose any song—or sit in silence—while you study their face for 30 seconds, then name the three features you’re most drawn to.',
    cue: '30 seconds · Attentive',
    durationSeconds: 30,
  },
  {
    id: 'allure-24',
    tier: 'allure',
    type: 'truth',
    title: 'First Spark',
    prompt:
      'When did you first realize there was real chemistry with {target}—and what gave it away?',
    cue: 'Honest & warm',
    durationSeconds: 0,
  },

  // ==========================================
  // TIER II: EROTIC — THE SLOW BURN (15 cards)
  // ==========================================
  {
    id: 'erotic-1',
    tier: 'erotic',
    type: 'truth',
    title: 'The Unwritten Scene',
    prompt:
      'If you were writing an erotic scene starring you and {target} in a foreign city, where would it take place, what would the atmosphere be, and how does it begin?',
    cue: 'Paint the scene',
    durationSeconds: 0,
  },
  {
    id: 'erotic-2',
    tier: 'erotic',
    type: 'dare',
    title: 'Breath & Pulse',
    prompt:
      'Kiss {target} slowly from the hollow of their throat up to just behind their ear—without touching their lips. Pause at their pulse point for three slow breaths.',
    cue: 'No lip contact',
    durationSeconds: 60,
  },
  {
    id: 'erotic-3',
    tier: 'erotic',
    type: 'dare',
    title: 'Blindfolded Curiosity',
    prompt:
      '{target} closes their eyes (or uses a blindfold). Choose three different places on their body to kiss or caress—one expected, two unexpected. They must guess your next move before you make it.',
    cue: 'Eyes closed · 3 touches',
    durationSeconds: 90,
  },
  {
    id: 'erotic-4',
    tier: 'erotic',
    type: 'truth',
    title: 'The Hidden Craving',
    prompt:
      'Share a fantasy or dynamic you’ve thought about in private but haven’t yet asked for out loud. Describe how it makes you feel, not just what happens.',
    cue: 'No judgment',
    durationSeconds: 0,
  },
  {
    id: 'erotic-5',
    tier: 'erotic',
    type: 'dare',
    title: 'Hands Off',
    prompt:
      'Spend two full minutes teasing {target} using only your lips, breath, and voice. Your hands must stay behind your back the entire time.',
    cue: '2 minutes · Hands behind back',
    durationSeconds: 120,
  },
  {
    id: 'erotic-6',
    tier: 'erotic',
    type: 'truth',
    title: 'The Trigger',
    prompt:
      'Where on your body does a slow, unexpected touch instantly undo your composure? Be as specific as possible.',
    cue: 'Sensory map',
    durationSeconds: 0,
  },
  {
    id: 'erotic-7',
    tier: 'erotic',
    type: 'dare',
    title: 'The Almost Kiss',
    prompt:
      'Bring your lips within a breath of {target}’s mouth and hold there for 30 seconds without actually kissing. Only when the timer ends may you close the distance.',
    cue: '30 seconds · Tension',
    durationSeconds: 30,
  },
  {
    id: 'erotic-8',
    tier: 'erotic',
    type: 'truth',
    title: 'Voice in the Dark',
    prompt:
      'What kind of words whispered in your ear turn you on the most—praise, quiet commands, or vivid descriptions of what’s about to happen?',
    cue: 'Spoken softly',
    durationSeconds: 0,
  },
  {
    id: 'erotic-9',
    tier: 'erotic',
    type: 'dare',
    title: 'Silk & Ice',
    prompt:
      'Take a sip of a cold drink (or use an ice cube), then immediately trail your cool lips along {target}’s neck, collarbone, or inner wrist.',
    cue: 'Temperature play',
    durationSeconds: 45,
  },
  {
    id: 'erotic-10',
    tier: 'erotic',
    type: 'truth',
    title: 'The Secret Audience',
    prompt:
      'Have you ever been turned on somewhere you absolutely weren’t supposed to be? Tell the story without leaving out the tension.',
    cue: 'Confession',
    durationSeconds: 0,
  },
  {
    id: 'erotic-11',
    tier: 'erotic',
    type: 'dare',
    title: 'Guided Hands',
    prompt:
      'Take {target}’s hand and place it exactly where you want to be touched right now. Guide their pace and pressure for 60 seconds without speaking.',
    cue: '60 seconds · Silent guide',
    durationSeconds: 60,
  },
  {
    id: 'erotic-12',
    tier: 'erotic',
    type: 'truth',
    title: 'Slow vs. Urgent',
    prompt:
      'Tonight, are you craving slow, worshipful, unhurried devotion—or breathless, can’t-wait-another-second urgency?',
    cue: 'Mood check',
    durationSeconds: 0,
  },
  {
    id: 'erotic-13',
    tier: 'erotic',
    type: 'dare',
    title: 'The Lap Portrait',
    prompt:
      'Sit close enough to {target} (or across their lap) so they can feel your warmth. Spend 60 seconds kissing their jaw, ear, and neck while they keep their hands on your waist.',
    cue: '60 seconds · Close contact',
    durationSeconds: 60,
  },
  {
    id: 'erotic-14',
    tier: 'erotic',
    type: 'truth',
    title: 'The Sound of Desire',
    prompt:
      'What sound does someone make in an intimate moment that immediately makes you lose focus?',
    cue: 'Intimate detail',
    durationSeconds: 0,
  },
  {
    id: 'erotic-15',
    tier: 'erotic',
    type: 'dare',
    title: 'Read Between the Lines',
    prompt:
      'Whisper a three-sentence story into {target}’s ear describing what you’d like to happen the moment the lights go out.',
    cue: 'Whispered · 3 sentences',
    durationSeconds: 0,
  },
  {
    id: 'erotic-16',
    tier: 'erotic',
    type: 'truth',
    title: 'The Slowest Turn-On',
    prompt:
      'What kind of touch—where and at what pressure—makes you completely lose your train of thought?',
    cue: 'Be specific',
    durationSeconds: 0,
  },
  {
    id: 'erotic-17',
    tier: 'erotic',
    type: 'dare',
    title: 'Collarbone Trail',
    prompt:
      'Kiss a slow, unhurried trail from behind {target}’s ear down to the hollow of their collarbone. Take a full 45 seconds.',
    cue: '45 seconds · Slow',
    durationSeconds: 45,
  },
  {
    id: 'erotic-18',
    tier: 'erotic',
    type: 'truth',
    title: 'The Hidden Fantasy',
    prompt:
      'Describe a scenario you’ve imagined with {target} that you’ve never said out loud until tonight.',
    cue: 'Low voice',
    durationSeconds: 0,
  },
  {
    id: 'erotic-19',
    tier: 'erotic',
    type: 'dare',
    title: 'Breath on Skin',
    prompt:
      'With {target}’s eyes closed, hover your lips a millimeter above their neck and jawline for 30 seconds—let them feel your warmth without quite touching.',
    cue: '30 seconds · Anticipation',
    durationSeconds: 30,
  },
  {
    id: 'erotic-20',
    tier: 'erotic',
    type: 'truth',
    title: 'Sound & Rhythm',
    prompt:
      'What sound or breath from {target} instantly raises the temperature for you?',
    cue: 'Confession',
    durationSeconds: 0,
  },
  {
    id: 'erotic-21',
    tier: 'erotic',
    type: 'dare',
    title: 'Guided Hands',
    prompt:
      'Take {target}’s hands and place them exactly where you want to be held for the next 45 seconds. Show them the pace you like.',
    cue: '45 seconds · Lead',
    durationSeconds: 45,
  },
  {
    id: 'erotic-22',
    tier: 'erotic',
    type: 'truth',
    title: 'The Tension Point',
    prompt:
      'Do you prefer the slow build of anticipation or the moment control finally slips—and how can {target} get you there faster?',
    cue: 'Honest answer',
    durationSeconds: 0,
  },
  {
    id: 'erotic-23',
    tier: 'erotic',
    type: 'dare',
    title: 'The Blindfold Tease',
    prompt:
      'Have {target} close their eyes while you kiss them softly in three different places of your choosing—pausing five seconds between each.',
    cue: 'Eyes closed · 3 kisses',
    durationSeconds: 30,
  },
  {
    id: 'erotic-24',
    tier: 'erotic',
    type: 'truth',
    title: 'Midnight Memory',
    prompt:
      'Recall the most electric physical moment you’ve ever shared with someone—what made it unforgettable?',
    cue: 'Unfiltered',
    durationSeconds: 0,
  },

  // ==========================================
  // TIER III: NAUGHTY — THE SURRENDER (15 cards)
  // ==========================================
  {
    id: 'naughty-1',
    tier: 'naughty',
    type: 'dare',
    title: 'The Director’s Chair',
    prompt:
      'For the next three minutes, {target} cannot move or initiate touch. Guide their hands and body exactly where you want them, using only whispered instructions.',
    cue: '3 minutes · Whispered',
    durationSeconds: 180,
  },
  {
    id: 'naughty-2',
    tier: 'naughty',
    type: 'truth',
    title: 'The Edge of Control',
    prompt:
      'Do you prefer being completely in command, or surrendering control entirely? Describe in detail what your ideal version of that looks like tonight.',
    cue: 'Be specific',
    durationSeconds: 0,
  },
  {
    id: 'naughty-3',
    tier: 'naughty',
    type: 'dare',
    title: 'Slow Undressing',
    prompt:
      'Remove one piece of {target}’s clothing as slowly as possible—using only your teeth, or with your hands while maintaining unbroken eye contact.',
    cue: 'Unbroken eye contact',
    durationSeconds: 60,
  },
  {
    id: 'naughty-4',
    tier: 'naughty',
    type: 'dare',
    title: 'The Forbidden Zone',
    prompt:
      'Touch or kiss {target} everywhere except where they want it most for two full minutes. If they ask you to move closer, the timer resets by 30 seconds.',
    cue: '2 minutes · Pure anticipation',
    durationSeconds: 120,
  },
  {
    id: 'naughty-5',
    tier: 'naughty',
    type: 'truth',
    title: 'No Filter',
    prompt:
      'Tell {target} the most vivid, unfiltered thought you’ve had about them recently—down to the exact detail you’ve been replaying in your mind.',
    cue: 'Unfiltered',
    durationSeconds: 0,
  },
  {
    id: 'naughty-6',
    tier: 'naughty',
    type: 'dare',
    title: 'Silk Restraint',
    prompt:
      'Hold {target}’s wrists gently together above their head (or behind their back) with one hand. Use your free hand and lips to tease them for 90 seconds.',
    cue: '90 seconds · Consensual control',
    durationSeconds: 90,
  },
  {
    id: 'naughty-7',
    tier: 'naughty',
    type: 'truth',
    title: 'The Unspoken Rule',
    prompt:
      'What is one daring thing you’ve always wanted to try in the bedroom—or outside of it—that you’ve never actually confessed until right now?',
    cue: 'Bold honesty',
    durationSeconds: 0,
  },
  {
    id: 'naughty-8',
    tier: 'naughty',
    type: 'dare',
    title: 'The Private Show',
    prompt:
      'Stand or sit in front of {target} and remove one item of your own clothing as seductively and deliberately as possible—they are not allowed to touch you while they watch.',
    cue: 'Look, don’t touch',
    durationSeconds: 60,
  },
  {
    id: 'naughty-9',
    tier: 'naughty',
    type: 'truth',
    title: 'The Art of Surrender',
    prompt:
      'If {target} had complete, consensual permission to orchestrate the next 20 minutes without you saying a word, what would you secretly hope they choose first?',
    cue: 'Surrender',
    durationSeconds: 0,
  },
  {
    id: 'naughty-10',
    tier: 'naughty',
    type: 'dare',
    title: 'Trace the Line',
    prompt:
      'Use your lips to trace a slow path from {target}’s waist up to their mouth, pausing wherever you feel their breath catch.',
    cue: '90 seconds · Unhurried',
    durationSeconds: 90,
  },
  {
    id: 'naughty-11',
    tier: 'naughty',
    type: 'truth',
    title: 'The Midnight Replay',
    prompt:
      'Describe the best intimate encounter you’ve ever had—not just what happened, but the exact moment it became unforgettable.',
    cue: 'No holding back',
    durationSeconds: 0,
  },
  {
    id: 'naughty-12',
    tier: 'naughty',
    type: 'dare',
    title: 'Two-Minute Devotion',
    prompt:
      'For two full minutes, your sole purpose is {target}’s pleasure—using only your hands, mouth, and breath. They may give you one-word directions.',
    cue: '2 minutes · Devotion',
    durationSeconds: 120,
  },
  {
    id: 'naughty-13',
    tier: 'naughty',
    type: 'truth',
    title: 'The Boldest Request',
    prompt:
      'Ask {target} for one specific, indulgent thing you want them to do to you tonight. No hinting—say it clearly.',
    cue: 'Direct desire',
    durationSeconds: 0,
  },
  {
    id: 'naughty-14',
    tier: 'naughty',
    type: 'dare',
    title: 'The Blindfold Command',
    prompt:
      'Close your eyes and let {target} position you however they please for 90 seconds. You must stay completely still and simply receive.',
    cue: '90 seconds · Receive',
    durationSeconds: 90,
  },
  {
    id: 'naughty-15',
    tier: 'naughty',
    type: 'dare',
    title: 'The Encore',
    prompt:
      'Recreate the most intense kiss you’ve ever imagined with {target}—start impossibly slow, and let it build for a full minute.',
    cue: '60 seconds · Crescendo',
    durationSeconds: 60,
  },
  {
    id: 'naughty-16',
    tier: 'naughty',
    type: 'truth',
    title: 'No-Filter Desire',
    prompt:
      'Tell {target} the boldest thing you want them to do to you tonight—leave nothing vague.',
    cue: 'Direct & bold',
    durationSeconds: 0,
  },
  {
    id: 'naughty-17',
    tier: 'naughty',
    type: 'dare',
    title: 'One-Minute Devotion',
    prompt:
      '{target} leans back and does nothing for 60 seconds while you kiss and tease them wherever you choose, as slowly or boldly as you like.',
    cue: '60 seconds · Hands off for {target}',
    durationSeconds: 60,
  },
  {
    id: 'naughty-18',
    tier: 'naughty',
    type: 'truth',
    title: 'Power Play',
    prompt:
      'Tonight, would you rather be completely in command of {target} or completely at their mercy—and what is the first thing you’d want to happen?',
    cue: 'Confession',
    durationSeconds: 0,
  },
  {
    id: 'naughty-19',
    tier: 'naughty',
    type: 'dare',
    title: 'The Slow Reveal',
    prompt:
      'Remove one piece of clothing—or have {target} remove it for you—taking at least 30 seconds and never breaking eye contact.',
    cue: '30 seconds · Unhurried',
    durationSeconds: 30,
  },
  {
    id: 'naughty-20',
    tier: 'naughty',
    type: 'truth',
    title: 'Secret Limit',
    prompt:
      'What is one daring thing you’ve always been curious to try with {target} that you haven’t suggested yet?',
    cue: 'Honest & curious',
    durationSeconds: 0,
  },
  {
    id: 'naughty-21',
    tier: 'naughty',
    type: 'dare',
    title: 'Lap Seat',
    prompt:
      'Sit in {target}’s lap facing them for the next full minute. Whisper what you’re thinking while they keep their hands on your waist.',
    cue: '60 seconds · Close',
    durationSeconds: 60,
  },
  {
    id: 'naughty-22',
    tier: 'naughty',
    type: 'truth',
    title: 'The After-Hours Wish',
    prompt:
      'If this game ended right now and the two of you were completely alone, what would the first five minutes look like?',
    cue: 'Paint the scene',
    durationSeconds: 0,
  },
  {
    id: 'naughty-23',
    tier: 'naughty',
    type: 'dare',
    title: 'Hands Pinned',
    prompt:
      'Gently pin {target}’s wrists above their head (or against the couch) and kiss them slowly for 30 seconds. They may only respond with their lips.',
    cue: '30 seconds · Controlled',
    durationSeconds: 30,
  },
  {
    id: 'naughty-24',
    tier: 'naughty',
    type: 'truth',
    title: 'The Undoing',
    prompt:
      'What is the single fastest way {target} can make you lose all composure?',
    cue: 'Total honesty',
    durationSeconds: 0,
  },
];

// ==========================================
// PENALTY SUGGESTION CARDS (10 cards)
// ==========================================
export const PENALTY_CARDS = [
  {
    id: 'penalty-1',
    tier: 'penalty',
    type: 'penalty',
    title: 'The Slow Strip',
    prompt:
      'Remove one article of clothing of {target}’s choosing—slowly, as if putting on a private show.',
    cue: 'Penalty · Unhurried',
    durationSeconds: 0,
  },
  {
    id: 'penalty-2',
    tier: 'penalty',
    type: 'penalty',
    title: 'The Velvet Veto',
    prompt:
      '{target} earns a "Free Command" token they can redeem at any point during the rest of the game (within your agreed boundaries).',
    cue: 'Penalty · Redeemable',
    durationSeconds: 0,
  },
  {
    id: 'penalty-3',
    tier: 'penalty',
    type: 'penalty',
    title: 'The Sensory Tax',
    prompt:
      '{target} gets 60 uninterrupted seconds to kiss, tease, or touch you anywhere they choose while you stay completely still.',
    cue: 'Penalty · 60 seconds',
    durationSeconds: 60,
  },
  {
    id: 'penalty-4',
    tier: 'penalty',
    type: 'penalty',
    title: 'The Pour & Toast',
    prompt:
      'Pour a drink for {target}, hand it to them, and deliver a genuinely seductive, improvised toast before taking a sip.',
    cue: 'Penalty · Toast',
    durationSeconds: 0,
  },
  {
    id: 'penalty-5',
    tier: 'penalty',
    type: 'penalty',
    title: 'The Confession',
    prompt:
      'Instead of a physical penalty, answer any question of {target}’s own choosing—with complete honesty.',
    cue: 'Penalty · Honest',
    durationSeconds: 0,
  },
  {
    id: 'penalty-6',
    tier: 'penalty',
    type: 'penalty',
    title: 'The Blindfolded Minute',
    prompt:
      'Keep your eyes closed for the entire next round while {target} whispers commentary in your ear.',
    cue: 'Penalty · Next round',
    durationSeconds: 0,
  },
  {
    id: 'penalty-7',
    tier: 'penalty',
    type: 'penalty',
    title: 'The Whispered Debt',
    prompt:
      'Lean in and whisper one secret you’ve never told {target} before. If they don’t think it’s bold enough, you owe them a kiss of their choosing.',
    cue: 'Penalty · Secret',
    durationSeconds: 0,
  },
  {
    id: 'penalty-8',
    tier: 'penalty',
    type: 'penalty',
    title: 'Hands Tied',
    prompt:
      'Keep your hands behind your back until your next turn begins. If you need a drink, {target} must hold the glass to your lips.',
    cue: 'Penalty · Until next turn',
    durationSeconds: 0,
  },
  {
    id: 'penalty-9',
    tier: 'penalty',
    type: 'penalty',
    title: 'The Slow Tribute',
    prompt:
      'Give {target} a slow, deeply attentive 60-second neck and shoulder massage—no rushing, no talking.',
    cue: 'Penalty · 60 seconds',
    durationSeconds: 60,
  },
  {
    id: 'penalty-10',
    tier: 'penalty',
    type: 'penalty',
    title: 'Dealer’s Mercy',
    prompt:
      'Place yourself at {target}’s mercy: they may choose any single card from the current tier for you to perform—no passing allowed.',
    cue: 'Penalty · No pass',
    durationSeconds: 0,
  },
  {
    id: 'penalty-11',
    tier: 'penalty',
    type: 'penalty',
    title: 'The Silent Gaze',
    prompt:
      'Sit knee-to-knee with {target} and hold unbroken eye contact for 45 seconds without speaking or smiling. If you break first, you owe them a kiss.',
    cue: 'Penalty · 45 seconds',
    durationSeconds: 45,
  },
  {
    id: 'penalty-12',
    tier: 'penalty',
    type: 'penalty',
    title: 'The Stolen Kiss',
    prompt:
      'Close your eyes and let {target} kiss you wherever they choose—once, slowly—while you keep your hands at your sides.',
    cue: 'Penalty · Eyes closed',
    durationSeconds: 0,
  },
  {
    id: 'penalty-13',
    tier: 'penalty',
    type: 'penalty',
    title: 'Three Compliments',
    prompt:
      'Whisper three shamelessly seductive compliments into {target}’s ear—each one bolder than the last.',
    cue: 'Penalty · Whispered',
    durationSeconds: 0,
  },
  {
    id: 'penalty-14',
    tier: 'penalty',
    type: 'penalty',
    title: 'The Footman’s Debt',
    prompt:
      'For the next two rounds, you are on duty for {target}: refill their glass, adjust their cushion, or answer any small request they make.',
    cue: 'Penalty · 2 rounds',
    durationSeconds: 0,
  },
  {
    id: 'penalty-15',
    tier: 'penalty',
    type: 'penalty',
    title: 'Double or Nothing',
    prompt:
      'Draw one card from the next tier up—or let {target} invent a 30-second dare on the spot.',
    cue: 'Penalty · Escalate',
    durationSeconds: 30,
  },
];

export const SHOTS_PENALTY_CARDS = [
  {
    id: 'shots-1',
    tier: 'penalty',
    type: 'penalty',
    title: 'The Slow Shot',
    prompt:
      'Pour a shot and take it while holding unbroken eye contact with {target}. No breaking gaze until the glass is back on the table.',
    cue: 'Shots · Eye contact',
    durationSeconds: 0,
  },
  {
    id: 'shots-2',
    tier: 'penalty',
    type: 'penalty',
    title: 'The Liquid Veto',
    prompt:
      'Take a shot—and {target} earns a "Free Command" token they can redeem at any point during the rest of the game (within your agreed boundaries).',
    cue: 'Shots · Redeemable',
    durationSeconds: 0,
  },
  {
    id: 'shots-3',
    tier: 'penalty',
    type: 'penalty',
    title: 'Shared Pour',
    prompt:
      'Pour two shots—one for yourself and one for {target}. Clink glasses, whisper a toast only they can hear, and drink together.',
    cue: 'Shots · Together',
    durationSeconds: 0,
  },
  {
    id: 'shots-4',
    tier: 'penalty',
    type: 'penalty',
    title: 'The Bartender’s Choice',
    prompt:
      '{target} chooses your next pour—a shot, a generous sip of wine, or a mystery mix from the table. Drink it without flinching.',
    cue: 'Shots · Dealer pours',
    durationSeconds: 0,
  },
  {
    id: 'shots-5',
    tier: 'penalty',
    type: 'penalty',
    title: 'No Hands',
    prompt:
      'Take a slow sip of your drink while {target} holds the glass to your lips. Keep your hands behind your back the entire time.',
    cue: 'Sips · Hands behind back',
    durationSeconds: 0,
  },
  {
    id: 'shots-6',
    tier: 'penalty',
    type: 'penalty',
    title: 'The Confessional Sip',
    prompt:
      'Take two slow sips of your drink, then answer any yes-or-no question of {target}’s own choosing with complete honesty.',
    cue: 'Sips · Honest',
    durationSeconds: 0,
  },
  {
    id: 'shots-7',
    tier: 'penalty',
    type: 'penalty',
    title: 'The Chaser',
    prompt:
      'Take a shot, then let {target} choose your chaser: a slow kiss on the neck, a whispered dare, or a sip from their glass.',
    cue: 'Shots · Chaser',
    durationSeconds: 0,
  },
  {
    id: 'shots-8',
    tier: 'penalty',
    type: 'penalty',
    title: 'Finish the Glass',
    prompt:
      'Finish whatever is left in your glass (or take a full shot if it’s empty) while {target} counts down softly from ten.',
    cue: 'Shots · 10 seconds',
    durationSeconds: 10,
  },
  {
    id: 'shots-9',
    tier: 'penalty',
    type: 'penalty',
    title: 'The Blindfolded Taste',
    prompt:
      'Close your eyes while {target} brings a sip of their choosing to your lips. Guess what it is—if you’re wrong, take a second sip.',
    cue: 'Sips · Eyes closed',
    durationSeconds: 0,
  },
  {
    id: 'shots-10',
    tier: 'penalty',
    type: 'penalty',
    title: 'Toast to the Room',
    prompt:
      'Raise your glass, deliver a shamelessly flattering toast dedicated to {target}, and take a shot to seal it.',
    cue: 'Shots · Toast',
    durationSeconds: 0,
  },
  {
    id: 'shots-11',
    tier: 'penalty',
    type: 'penalty',
    title: 'Interlocked Arms',
    prompt:
      'Lock arms with {target} and drink a shot or generous sip together while maintaining unbroken eye contact.',
    cue: 'Shots · Interlocked',
    durationSeconds: 0,
  },
  {
    id: 'shots-12',
    tier: 'penalty',
    type: 'penalty',
    title: 'The Whispered Sip',
    prompt:
      'Take a slow sip of your drink, then lean in and whisper one bold secret into {target}’s ear before they take a sip of theirs.',
    cue: 'Sips · Whispered',
    durationSeconds: 0,
  },
  {
    id: 'shots-13',
    tier: 'penalty',
    type: 'penalty',
    title: 'Waterfall Gaze',
    prompt:
      'Start sipping your drink—you may only stop when {target} decides to break eye contact (up to 10 seconds).',
    cue: 'Sips · 10 seconds',
    durationSeconds: 10,
  },
  {
    id: 'shots-14',
    tier: 'penalty',
    type: 'penalty',
    title: 'The Slow Pour',
    prompt:
      'Pour a fresh drink for {target} as dramatically and attentively as possible, serve it with a kiss on the hand, then take a shot yourself.',
    cue: 'Shots · Service',
    durationSeconds: 0,
  },
  {
    id: 'shots-15',
    tier: 'penalty',
    type: 'penalty',
    title: 'Truth or Shot',
    prompt:
      'Either take a full shot right now, or let {target} ask you any question of their own choosing—no dodging allowed.',
    cue: 'Shots · Your choice',
    durationSeconds: 0,
  },
];
