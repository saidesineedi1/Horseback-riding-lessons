/* ==========================================================================
   SILVER HOOF STABLES - LESSON DETAIL PAGE DYNAMIC SCRIPT
   ========================================================================== */

// 6 LESSONS BESPOKE DATA DICTIONARY WITH RICH EXTENDED CONTENT
const LESSONS_DATA = {
  'beginner-foundations': {
    id: 'beginner-foundations',
    title: 'Beginner Riding Foundations',
    subtitle: 'Master fundamental posture, rein controls, walk-trot transitions, and safe grooming etiquette.',
    badge: 'BEGINNER FRIENDLY',
    price: '$65',
    duration: '60 Minutes',
    group: 'Max 4 Riders',
    level: 'Beginner Level',
    heroImage: 'images/lesson_beginner_foundations.jpg',
    instName: 'Coach Marcus Vance & Eleanor Vance',
    instBio: 'Certified master riding instructors dedicated to building confidence, balance, and calm horsemanship skills.',
    instImg: 'images/instructor_marcus.jpg',
    overview: `
      <p>Our Beginner Riding Foundations program is tailored specifically for first-time riders, children, and adults returning to horseback riding after a hiatus. We focus on establishing proper seat alignment, confidence, and gentle rein communication in a controlled environment.</p>
      <p>Under the supervision of our patient certified instructors, you will learn mounting, dismounting, the posting trot, basic ring figures, and essential horse safety rituals both in the saddle and on the ground.</p>
      <p>Building a strong, comfortable connection with your horse early on creates a lifelong foundation of joy and skill. Every lesson takes place in our cushioned arena, ensuring a safe, supportive setting from your very first mounting.</p>
    `,
    curriculum: [
      { num: '01', title: 'Mounting & Balanced Seat Alignment', desc: 'Proper stirrup length adjustments, erect upper body posture, and relaxed heel positioning.' },
      { num: '02', title: 'Rein Signals & Steering Control', desc: 'Direct rein cues, steering through ring cones, and smooth walk-to-stop transitions.' },
      { num: '03', title: 'Posting Trot Rhythm & Balance', desc: 'Learning diagonal rhythms, rising trot balance, and holding steady contact.' },
      { num: '04', title: 'Tack Care & Stable Safety Rituals', desc: 'Bridling, saddling, post-ride grooming, and feeding healthy treats.' }
    ],
    timeline: [
      { time: 'Min 0-15', title: 'Safety Greeting & Tack Fitting', desc: 'Helmet inspection, horse introduction, lead rope handling, and mounting box entry.' },
      { time: 'Min 15-30', title: 'Arena Steering & Walk Calibration', desc: 'Practicing straight lines, 20m circles, diagonal reins, and gentle halt cues.' },
      { time: 'Min 30-50', title: 'Posting Trot Drills & Rhythm', desc: 'Rising and sitting trot practice with direct instructor guidance and seat balance feedback.' },
      { time: 'Min 50-60', title: 'Dismounting & Gratitude Grooming', desc: 'Proper dismounting technique, curry combing, hoof picking, and reward treats.' }
    ],
    equine: [
      {
        name: 'Whisper',
        breed: 'Quarter Horse Cross',
        tag: 'PATIENT & CALM',
        img: 'images/hero2_rider_portrait.jpg',
        desc: 'A gentle 12-year-old gelding with a slow, forgiving stride. Whisper loves first-time riders and responds effortlessly to light rein cues.'
      },
      {
        name: 'Barnaby',
        breed: 'Irish Sport Horse',
        tag: 'STEADY PACE',
        img: 'images/hero2_ranch_sunset.jpg',
        desc: 'Known for his affectionate demeanor, Barnaby provides a smooth, reliable posting trot rhythm that builds beginner confidence.'
      }
    ],
    included: [
      'Complimentary ASTM/SEI-certified helmet rental',
      '1-on-1 ring supervision with dedicated lesson horse',
      'Post-ride grooming and treat-reward practice',
      'Access to rider progress tracker handbook',
      'Hydration station and clubhouse access'
    ],
    gear: [
      'Fitted long pants (breeches or sturdy denim jeans)',
      'Closed-toe boots with a 1-inch heel (no sneakers/sandals)',
      'Fitted equestrian gloves (recommended for grip)',
      'Comfortable moisture-wicking top'
    ],
    milestones: [
      { num: '1', title: 'Independent Mounting & Dismounting', desc: 'Demonstrate safe mounting block usage and proper stirrup check.' },
      { num: '2', title: 'Walk Steering & Halt Control', desc: 'Navigate figure-8 ring patterns without instructor lead assistance.' },
      { num: '3', title: 'Consistent Posting Trot Rhythm', desc: 'Maintain correct diagonal posting trot for 3 consecutive laps.' },
      { num: '4', title: 'Ground Tack & Grooming Certification', desc: 'Saddle, bridle, and groom lesson horse independently before class.' }
    ],
    faqs: [
      { q: 'Is prior experience needed for Beginner Foundations?', a: 'No prior experience is necessary! This program is engineered specifically for absolute beginners and timid riders.' },
      { q: 'What age groups can participate?', a: 'Riders aged 8 and up are welcome in our adult and youth beginner tracks.' },
      { q: 'Can I bring my own helmet?', a: 'Yes, provided it is an ASTM/SEI equestrian certified helmet manufactured within the last 5 years.' }
    ]
  },

  'hunter-jumper': {
    id: 'hunter-jumper',
    title: 'Hunter & Show Jumping Mastery',
    subtitle: 'Refine two-point position, course navigation rhythm, stride counting, and jumping technical barriers up to 1.20m.',
    badge: 'POPULAR / ADVANCED',
    price: '$110',
    duration: '75 Minutes',
    group: 'Max 3 Riders',
    level: 'Intermediate - Advanced',
    heroImage: 'images/lesson_hunter_jumper.jpg',
    instName: 'Coach Marcus Vance',
    instBio: 'Grand Prix show jumping champion with over 20 years of competitive course design and jump coaching experience.',
    instImg: 'images/instructor_marcus.jpg',
    overview: `
      <p>Designed for intermediate and advanced riders looking to excel over fences. Our Hunter & Show Jumping Mastery program focuses on rhythm over courses, precise distance judgment, and clean athletic jump execution.</p>
      <p>Riders navigate technical jump combinations, verticals, oxers, and tight turn lines in our outdoor regulation jumping arena while receiving video-analyzed critique from Grand Prix coach Marcus Vance.</p>
      <p>Emphasis is placed on maintaining an athletic 2-point stance, reading distance lines in stride count, and developing smooth crest releases over obstacles up to 1.20m.</p>
    `,
    curriculum: [
      { num: '01', title: 'Two-Point Position & Crest Release', desc: 'Strengthening leg stability, releases over fences, and maintaining fluid rhythm.' },
      { num: '02', title: 'Stride Counting & Distance Judgment', desc: 'Reading distances between fences, adjustability in canter strides, and half-halts.' },
      { num: '03', title: 'Course Navigation & Combination Jumps', desc: 'Riding 8-to-12 fence courses, in-and-out combinations, and rollbacks.' },
      { num: '04', title: 'Ring Etiquette & Show Preparation', desc: 'Warm-up routine strategies, course memorization, and competitive judge scoring criteria.' }
    ],
    timeline: [
      { time: 'Min 0-15', title: 'Flatwork Warm-Up & Lengthening', desc: 'Canter adjustability, half-halts, leg-yields, and pole work to calibrate stride lengths.' },
      { time: 'Min 15-35', title: 'Single Fence & Gymnastic Grid Work', desc: 'Bouncing through 2-point gymnastic lines, oxers, and rhythm building.' },
      { time: 'Min 35-60', title: 'Full Jump Course Execution', desc: 'Navigating 8-to-10 barrier courses with tight turns and timed jump-off lines.' },
      { time: 'Min 60-75', title: 'Cool Down & Video Playback Analysis', desc: 'Instant tablet video playback review of jumping form and stride counts.' }
    ],
    equine: [
      {
        name: 'Zeus',
        breed: 'Dutch Warmblood',
        tag: 'GRAND PRIX BLOODLINE',
        img: 'images/hero2_gallop_meadow.jpg',
        desc: 'A powerhouse 16.3h jumper with incredible scope over fences. Zeus is responsive, agile, and eager to clear 1.20m lines.'
      },
      {
        name: 'Caspian',
        breed: 'Holsteiner',
        tag: 'HUNTER CHAMPION',
        img: 'images/gallery_jumping.jpg',
        desc: 'Caspian delivers textbook hunter form with effortless knees-to-chin jumping mechanics and rhythm.'
      }
    ],
    included: [
      'Use of warmblood jumpers trained for competition',
      'High-speed video analysis & feedback session',
      'Course walk-through and strategy coaching',
      'Specialized jump boots & tendon guard tack',
      'Jumping clinic completion certificate'
    ],
    gear: [
      'Tailored riding coat & white/tan breeches',
      'Tall leather jumping boots with spur studs',
      'Approved jumping helmet with 4-point harness',
      'Non-slip leather riding gloves'
    ],
    milestones: [
      { num: '1', title: 'Solid Two-Point Balance Over Poles', desc: 'Clear 4-stride pole lines without disturbing upper body alignment.' },
      { num: '2', title: 'Gymnastic Grid Mastery', desc: 'Navigate 3-bounce fence combinations at 0.90m height.' },
      { num: '3', title: 'Course Distance Adjustment', desc: 'Adjust canter stride count smoothly between 5 and 6 strides in lines.' },
      { num: '4', title: '1.20m Competition Ready', desc: 'Complete full 10-barrier jump course within designated time allowed.' }
    ],
    faqs: [
      { q: 'What jumping height experience is required?', a: 'Riders should be comfortable at a trot and canter over poles or small cross-rails (0.60m+).' },
      { q: 'Do you provide video analysis?', a: 'Yes! Every session includes high-speed video recording and tablet review with Coach Marcus.' }
    ]
  },

  'dressage-precision': {
    id: 'dressage-precision',
    title: 'Classical Dressage & Precision',
    subtitle: 'Elevate seat sensitivity, collection, lateral movements, half-halts, and expressive trots inside our regulation indoor arena.',
    badge: 'ADVANCED CLINIC',
    price: '$145',
    duration: '60 Minutes',
    group: 'Private 1-on-1',
    level: 'Advanced Level',
    heroImage: 'images/lesson_dressage_precision.jpg',
    instName: 'Eleanor Vance',
    instBio: 'Certified European dressage clinician specializing in classical seat mechanics, harmony, and Grand Prix movements.',
    instImg: 'images/instructor_eleanor.jpg',
    overview: `
      <p>Rooted in European classical dressage tradition, this private 1-on-1 intensive focuses on subtle weight aids, biomechanical harmony, and high-level movement execution. Lessons take place inside our climate-controlled indoor arena with mirrored walls.</p>
      <p>Whether preparing for USDF tests or seeking a deeper, harmonious dialogue with your horse, Clinician Eleanor Vance guides you through shoulder-in, half-pass, flying changes, and extended gait transitions.</p>
      <p>Precision ring geometry and exact aid timing allow riders to unlock incredible suppleness and lightness in contact.</p>
    `,
    curriculum: [
      { num: '01', title: 'Independent Seat & Weight Aids', desc: 'Refining seat bone pressure, core engagement, and subtle rein-hand contact.' },
      { num: '02', title: 'Lateral Work & Suppleness', desc: 'Leg-yields, shoulder-in, travers, and tight 10-meter circle geometry.' },
      { num: '03', title: 'Collection & Extended Gaits', desc: 'Developing impulsion, half-halts, collected trot/canter, and medium extensions.' },
      { num: '04', title: 'Dressage Test Choreography', desc: 'Practicing USDF/FEI test patterns, ring geometry, and musical freestyle timing.' }
    ],
    timeline: [
      { time: 'Min 0-15', title: 'Supple Bending & Ring Mirror Warm-Up', desc: 'Checking seat symmetry in wall mirrors, serpentines, and leg yields at the walk.' },
      { time: 'Min 15-35', title: 'Collection & Half-Halt Calibration', desc: 'Building impulsion, half-halts, collected trot, and shoulder-in movements.' },
      { time: 'Min 35-50', title: 'Canter Half-Pass & Flying Lead Changes', desc: 'Executing lateral half-pass across diagonal and clean 3-stride lead changes.' },
      { time: 'Min 50-60', title: 'Stretchy Trot Cool-Down & Biomechanics Review', desc: 'Long-and-low trot relaxation and biomechanics seat critique.' }
    ],
    equine: [
      {
        name: 'Rubinstein',
        breed: 'Hanoverian',
        tag: 'FEI DRESSAGE MASTER',
        img: 'images/lesson_dressage_precision.jpg',
        desc: 'Imported Hanoverian gelding with expressive cadence and sensitive response to seat pressure.'
      },
      {
        name: 'Dante',
        breed: 'Oldenburg',
        tag: 'LIGHTNESS & ELEGANCE',
        img: 'images/hero2_ranch_sunset.jpg',
        desc: 'Specialized in high-collection movements, half-pass, and smooth flying lead transitions.'
      }
    ],
    included: [
      'Private 1-on-1 instruction with Eleanor Vance',
      'Use of mirrors for real-time visual alignment',
      'Full video review & movement breakdown',
      'Custom dressage whip & double bridle fitting'
    ],
    gear: [
      'Formal dressage coat or dark fitted jacket',
      'Tall black leather dressage boots',
      'White or dark breeches & leather gloves',
      'SEI/ASTM certified velvet riding helmet'
    ],
    milestones: [
      { num: '1', title: 'Independent Seat Alignment', desc: 'Maintain neutral spine and soft elbows in all 3 gaits.' },
      { num: '2', title: 'Shoulder-In & Leg Yield', desc: 'Perform smooth 3-track shoulder-in along wall.' },
      { num: '3', title: 'Collected Trot & Half-Halts', desc: 'Demonstrate clear half-halt transition from medium to collected gait.' },
      { num: '4', title: 'USDF Test Execution', desc: 'Score 68%+ on USDF First/Second Level test patterns.' }
    ],
    faqs: [
      { q: 'Is this lesson strictly private?', a: 'Yes! Dressage Precision is a private 1-on-1 session to guarantee full individual focus.' },
      { q: 'Can I bring my own dressage horse?', a: 'Absolutely! Trailered-in horses are welcomed with complimentary day-stall access.' }
    ]
  },

  'equine-horsemanship': {
    id: 'equine-horsemanship',
    title: 'Groundwork & Equine Horsemanship',
    subtitle: 'Master round-pen lunging, horse psychology, halter control, desensitization techniques, and grooming bond rituals.',
    badge: 'ALL SKILL LEVELS',
    price: '$75',
    duration: '60 Minutes',
    group: 'Max 5 Riders',
    level: 'All Skill Levels',
    heroImage: 'images/lesson_horsemanship.jpg',
    instName: 'Sophia Martinez & Dr. Julian Hayes',
    instBio: 'Equine behavioral specialists focusing on natural horsemanship, ground communication, and stress-free handling.',
    instImg: 'images/hero2_rider_portrait.jpg',
    overview: `
      <p>True horsemanship begins on the ground. This program teaches you how horses think, communicate, and react using body language, ear positions, and energy cues in our round pens and grooming bays.</p>
      <p>Ideal for riders who want to deepen mutual trust with horses, overcome anxiety, or learn proper stable management, veterinary health checks, and natural horsemanship methods.</p>
    `,
    curriculum: [
      { num: '01', title: 'Equine Psychology & Body Language', desc: 'Decoding ear movements, tailswishes, eye softness, and herd hierarchy dynamic.' },
      { num: '02', title: 'Halter Control & Space Respect', desc: 'Leading techniques, yields to pressure, backing up, and personal space boundaries.' },
      { num: '03', title: 'Round-Pen Lunging & Join-Up', desc: 'Connecting through energy, direction changes, and achieving calm voluntary join-up.' },
      { num: '04', title: 'Health Inspections & Grooming Rituals', desc: 'Vital sign checks, leg wrapping, curry combing, and hoof care procedures.' }
    ],
    timeline: [
      { time: 'Min 0-15', title: 'Paddock Behavior & Body Language Reading', desc: 'Observing horse posture, ear tilt, and herd dynamics in open paddocks.' },
      { time: 'Min 15-30', title: 'Lead Rope Pressure & Yield Exercises', desc: 'Yielding hindquarters, shoulder pressure moves, and polite leading distance.' },
      { time: 'Min 30-45', title: 'Round-Pen Join-Up Demonstration', desc: 'Using body orientation and eye contact to establish voluntary partnership.' },
      { time: 'Min 45-60', title: 'Vital Signs Check & Massage Care', desc: 'Checking TPR (temperature, pulse, respiration) and equine massage strokes.' }
    ],
    equine: [
      {
        name: 'Willow',
        breed: 'Mustang Rescue',
        tag: 'EMPATHY LEADER',
        img: 'images/lesson_horsemanship.jpg',
        desc: 'Incredibly sensitive to human emotion and body language, making her the perfect teacher for natural groundwork.'
      },
      {
        name: 'Apollo',
        breed: 'Percheron Cross',
        tag: 'GENTLE GIANT',
        img: 'images/gallery_stable_bonding.jpg',
        desc: 'A calm, majestic draft cross who loves grooming massages and responds wonderfully to quiet energy.'
      }
    ],
    included: [
      'Round-pen natural horsemanship practice',
      'All grooming kits, lead ropes, and lunge reins',
      'Equine anatomy & health checklist handbook',
      'Post-class Q&A with Equine Health Director'
    ],
    gear: [
      'Sturdy closed-toe leather work boots',
      'Fitted work pants or durable denim jeans',
      'Flexible leather work gloves',
      'Comfortable outdoor clothing'
    ],
    milestones: [
      { num: '1', title: 'Halter Fitting & Space Boundary', desc: 'Halter horse safely in stall and lead through obstacle gates.' },
      { num: '2', title: 'Yield to Pressure Mastery', desc: 'Yield front and hind quarters smoothly with light rope pressure.' },
      { num: '3', title: 'Round-Pen Join-Up Success', desc: 'Achieve voluntary follow-me join-up without lead rope.' },
      { num: '4', title: 'Equine First Aid Certification', desc: 'Pass practical TPR check, leg wrapping, and wound care exam.' }
    ],
    faqs: [
      { q: 'Is riding involved in Horsemanship sessions?', a: 'This session is focused 100% on ground handling, body language, and bond-building.' },
      { q: 'Is this good for people afraid of horses?', a: 'Yes! It is the single best program to overcome equine fear in a safe, unmounted setting.' }
    ]
  },

  'sunset-trail': {
    id: 'sunset-trail',
    title: 'Guided Wilderness & Sunset Trails',
    subtitle: 'Ride along pine-lined forest streams and open meadow pastures during golden hour with certified trail guides.',
    badge: 'MOST POPULAR',
    price: '$95',
    duration: '90 Minutes',
    group: 'Outdoor Trail Group',
    level: 'Beginner - Intermediate',
    heroImage: 'images/lesson_sunset_trail.jpg',
    instName: 'Sophia Martinez',
    instBio: 'Certified wilderness trail guide with 10+ years leading scenic backcountry excursions and trail safety.',
    instImg: 'images/gallery_stable_bonding.jpg',
    overview: `
      <p>Experience the sheer magic of horseback riding in open nature. Our Guided Wilderness Trail Ride takes you across 150 acres of rolling green pastures, shaded pine forests, and gentle creek crossings during golden sunset hour.</p>
      <p>Led by certified trail guides, this relaxed 90-minute excursion is suitable for families, couples, and individual riders looking for a memorable outdoor adventure with steady trail-tested horses.</p>
    `,
    curriculum: [
      { num: '01', title: 'Trail Orientation & Stirrup Fitting', desc: 'Pre-ride safety walk, reins adjustment, and trail horse pairing.' },
      { num: '02', title: 'Terrain Balance & Hill Riding', desc: 'Leaning forward on inclines, weight distribution downhill, and obstacle clearing.' },
      { num: '03', title: 'Stream Crossings & Single-File Spacing', desc: 'Navigating shallow creek beds, maintaining safe horse intervals, and group pacing.' },
      { num: '04', title: 'Sunset Photography & Refreshment Stop', desc: 'Panoramic scenic view photo break and complimentary herbal tea/cider.' }
    ],
    timeline: [
      { time: 'Min 0-15', title: 'Stirrup Check & Trail Safety Briefing', desc: 'Matching riders to trail horses, fitting saddlebags, and riding posture rules.' },
      { time: 'Min 15-45', title: 'Pine Forest & Valley Stream Ascent', desc: 'Riding single-file along shaded creek beds and soft pine needle paths.' },
      { time: 'Min 45-70', title: 'Golden Hour Hilltop Summit', desc: 'Reaching high meadow lookout point for 360-degree sunset panorama photos.' },
      { time: 'Min 70-90', title: 'Meadow Return & Apple Treat Reward', desc: 'Gentle descent back to stable courtyard and feeding horses fresh apples.' }
    ],
    equine: [
      {
        name: 'Dakota',
        breed: 'Appaloosa Trail Veteran',
        tag: 'TRAIL EXPERT',
        img: 'images/lesson_sunset_trail.jpg',
        desc: 'Sure-footed, calm, and loves exploring forest paths. Dakota knows the trail routes inside and out.'
      },
      {
        name: 'Sierra',
        breed: 'Golden Palomino',
        tag: 'PHOTOGENIC STAR',
        img: 'images/hero2_ranch_sunset.jpg',
        desc: 'A gorgeous Palomino with a smooth walk, perfect for sunset photos atop the meadow lookout.'
      }
    ],
    included: [
      '90-minute guided trail excursion',
      'Steady, trail-experienced warmblood/quarter horse',
      'Complimentary helmet rental & trail saddlebags',
      'Sunset photo keepsake session'
    ],
    gear: [
      'Comfortable long pants or riding breeches',
      'Sturdy riding boots with a small heel',
      'Sunglasses & light jacket for evening cool',
      'Camera or phone with secure lanyard'
    ],
    milestones: [
      { num: '1', title: 'Trail Safety Alignment', desc: 'Maintain 1-horse length spacing and clear voice commands on trails.' },
      { num: '2', title: 'Slope Weight Distribution', desc: 'Demonstrate proper forward lean on uphills and heels-down posture on downhills.' },
      { num: '3', title: 'Water Crossing Confidence', desc: 'Guide horse smoothly through shallow stream bed without hesitation.' },
      { num: '4', title: 'Wilderness Trail Certification', desc: 'Complete 5-mile backcountry trail loop with zero safety interventions.' }
    ],
    faqs: [
      { q: 'What happens if it rains?', a: 'In case of severe rain, trail rides can be rescheduled or converted to an indoor lesson.' },
      { q: 'Can beginners take the trail ride?', a: 'Yes! Trail horses are gentle, steady, and follow expert guides.' }
    ]
  },

  'youth-academy': {
    id: 'youth-academy',
    title: 'Youth & Junior Equestrian Academy',
    subtitle: 'Fun, supportive, safety-first riding instruction on gentle ponies, building balance, responsibility, and horsemanship skills.',
    badge: 'AGES 6 - 15',
    price: '$80',
    duration: '60 Minutes',
    group: 'Junior Group',
    level: 'Youth / Beginner',
    heroImage: 'images/lesson_youth_academy.jpg',
    instName: 'Sophia Martinez & Junior Coaching Staff',
    instBio: 'Youth horsemanship leads dedicated to safe, encouraging, and joyful equestrian education for young riders.',
    instImg: 'images/gallery_stable_bonding.jpg',
    overview: `
      <p>Our Youth Equestrian Academy introduces young riders aged 6 to 15 to the wonderful world of horses in a safe, nurturing environment. Lessons combine core riding balance with fun arena obstacle games and pony grooming rituals.</p>
      <p>Children build self-confidence, motor skills, emotional empathy, and teamwork while progressing through our junior skill badge rewards system under constant instructor supervision.</p>
    `,
    curriculum: [
      { num: '01', title: 'Pony Safety & Helmet Fitting', desc: 'Understanding pony behavior, approach rules, and 4-point helmet safety checks.' },
      { num: '02', title: 'Balance Games & Ring Navigation', desc: 'Fun ring exercises, holding reins correctly, and walk-trot balance.' },
      { num: '03', title: 'Obstacle Courses & Skill Badges', desc: 'Navigating fun cone courses, poles on the ground, and earning achievement badges.' },
      { num: '04', title: 'Pony Grooming & Treat Rewards', desc: 'Combing pony manes, washing hooves, and feeding healthy apple treats.' }
    ],
    timeline: [
      { time: 'Min 0-15', title: 'Pony Match & Helmet Check', desc: 'Fitting child-sized helmets, matching pony partner, and safety ground rules.' },
      { time: 'Min 15-35', title: 'Arena Steering & Cone Slalom', desc: 'Fun steering exercises around colorful cones and ring games.' },
      { time: 'Min 35-50', title: 'Ground Pole Trot Challenge', desc: 'Learning posting trot rhythm over soft ground poles with instructor encouragement.' },
      { time: 'Min 50-60', title: 'Pony Mane Braiding & Treats', desc: 'Combing pony manes, adding colorful ribbon clips, and apple slice treats.' }
    ],
    equine: [
      {
        name: 'Peanut',
        breed: 'Welsh Pony',
        tag: 'KIDS FAVORITE',
        img: 'images/lesson_youth_academy.jpg',
        desc: 'Adored by young riders for his sweet nature, Peanut loves gentle grooming and obstacle games.'
      },
      {
        name: 'Muffin',
        breed: 'Shetland Cross',
        tag: 'SUPER GENTLE',
        img: 'images/hero2_rider_portrait.jpg',
        desc: 'Patient, calm, and small in stature, Muffin gives youngest riders complete confidence.'
      }
    ],
    included: [
      'Gentle, child-tested ponies and lesson horses',
      'Youth-sized ASTM safety helmets & body protectors',
      'Junior Equestrian Skill Badge progress booklet',
      'Family spectator seating in warm clubhouse'
    ],
    gear: [
      'Comfortable long pants or youth breeches',
      'Boots with a small heel (no open shoes)',
      'Fitted youth riding gloves',
      'Water bottle & positive smile!'
    ],
    milestones: [
      { num: '1', title: 'Pony Helper Badge', desc: 'Demonstrate safe pony approach and halter holding.' },
      { num: '2', title: 'Steering Champion Badge', desc: 'Navigate 5-cone slalom ring pattern without assistance.' },
      { num: '3', title: 'Trot Star Badge', desc: 'Post to trot rhythm for 1 full lap around ring.' },
      { num: '4', title: 'Junior Horsemanship Master', desc: 'Earn all 4 junior badges and lead pony safely to paddock.' }
    ],
    faqs: [
      { q: 'Can parents watch the lesson?', a: 'Yes! We have cozy spectator seating overlooking both indoor and outdoor arenas.' },
      { q: 'What is the minimum age?', a: 'Children aged 6 and up can join our Junior Equestrian Academy.' }
    ]
  }
};

// INITIALIZATION ON DOM READY
document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  let lessonId = urlParams.get('id');

  // Fallback if missing or invalid
  if (!lessonId || !LESSONS_DATA[lessonId]) {
    lessonId = 'beginner-foundations';
  }

  const lesson = LESSONS_DATA[lessonId];
  renderLessonDetails(lesson);
  highlightActiveTab(lessonId);
});

/**
 * Populate detail page elements dynamically
 */
function renderLessonDetails(lesson) {
  // Page Title & Meta
  document.title = `${lesson.title} | Silver Hoof Stables`;

  // Hero Section Elements
  const heroBg = document.getElementById('detail-hero-bg');
  if (heroBg) heroBg.style.backgroundImage = `url('${lesson.heroImage}')`;

  const crumbTitle = document.getElementById('crumb-lesson-title');
  if (crumbTitle) crumbTitle.textContent = lesson.title;

  const badge = document.getElementById('detail-badge');
  if (badge) badge.textContent = lesson.badge;

  const title = document.getElementById('detail-title');
  if (title) title.textContent = lesson.title;

  const subtitle = document.getElementById('detail-subtitle');
  if (subtitle) subtitle.textContent = lesson.subtitle;

  // Showcase Image
  const mainImg = document.getElementById('detail-main-img');
  if (mainImg) mainImg.src = lesson.heroImage;

  const imgCaption = document.getElementById('detail-img-caption');
  if (imgCaption) imgCaption.textContent = `${lesson.title} Session at Silver Hoof Stables`;

  // Overview Text
  const overviewText = document.getElementById('detail-overview-text');
  if (overviewText) overviewText.innerHTML = lesson.overview;

  // Curriculum Grid
  const currGrid = document.getElementById('detail-curriculum-grid');
  if (currGrid && lesson.curriculum) {
    currGrid.innerHTML = lesson.curriculum.map(item => `
      <div class="curr-card">
        <span class="curr-num">${item.num}</span>
        <h4 class="curr-title">${item.title}</h4>
        <p class="curr-desc">${item.desc}</p>
      </div>
    `).join('');
  }

  // Session Timeline Breakdown
  const timelineEl = document.getElementById('detail-session-timeline');
  if (timelineEl && lesson.timeline) {
    timelineEl.innerHTML = lesson.timeline.map(item => `
      <div class="timeline-step">
        <span class="timeline-time">${item.time}</span>
        <div class="timeline-content">
          <h4>${item.title}</h4>
          <p>${item.desc}</p>
        </div>
      </div>
    `).join('');
  }

  // Equine Partners Grid
  const equineGrid = document.getElementById('detail-equine-grid');
  if (equineGrid && lesson.equine) {
    equineGrid.innerHTML = lesson.equine.map(eq => `
      <div class="equine-card">
        <div class="equine-img-wrap">
          <img src="${eq.img}" alt="${eq.name}">
          <span class="equine-tag">${eq.tag}</span>
        </div>
        <div class="equine-info">
          <h4 class="equine-title">${eq.name}</h4>
          <span class="equine-meta">${eq.breed}</span>
          <p class="equine-desc">${eq.desc}</p>
        </div>
      </div>
    `).join('');
  }

  // What's Included List
  const incList = document.getElementById('detail-included-list');
  if (incList && lesson.included) {
    incList.innerHTML = lesson.included.map(item => `
      <li><i class="fa-solid fa-circle-check icon-gold"></i> ${item}</li>
    `).join('');
  }

  // Gear Needed List
  const gearList = document.getElementById('detail-gear-list');
  if (gearList && lesson.gear) {
    gearList.innerHTML = lesson.gear.map(item => `
      <li><i class="fa-solid fa-shirt icon-gold"></i> ${item}</li>
    `).join('');
  }

  // Milestones Progress Roadmap
  const milestonesList = document.getElementById('detail-milestones-list');
  if (milestonesList && lesson.milestones) {
    milestonesList.innerHTML = lesson.milestones.map(m => `
      <div class="milestone-item">
        <div class="milestone-badge">#${m.num}</div>
        <div class="milestone-text">
          <h4>${m.title}</h4>
          <p>${m.desc}</p>
        </div>
      </div>
    `).join('');
  }

  // FAQs List
  const faqList = document.getElementById('detail-faq-list');
  if (faqList && lesson.faqs) {
    faqList.innerHTML = lesson.faqs.map(faq => `
      <div class="detail-faq-item">
        <button class="detail-faq-q">
          <span>${faq.q}</span>
          <i class="fa-solid fa-chevron-down"></i>
        </button>
        <div class="detail-faq-a">
          <p>${faq.a}</p>
        </div>
      </div>
    `).join('');

    // Setup interactive accordion click events
    const faqQuestions = faqList.querySelectorAll('.detail-faq-q');
    faqQuestions.forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.closest('.detail-faq-item');
        const isActive = item.classList.contains('active');
        // Close others
        faqList.querySelectorAll('.detail-faq-item').forEach(i => i.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    });
  }

  // Instructor Info
  const instName = document.getElementById('detail-inst-name');
  if (instName) instName.textContent = lesson.instName;

  const instBio = document.getElementById('detail-inst-bio');
  if (instBio) instBio.textContent = lesson.instBio;

  const instImg = document.getElementById('detail-inst-img');
  if (instImg) instImg.src = lesson.instImg;

  // Sticky Widget Specs
  const priceVal = document.getElementById('widget-price-val');
  if (priceVal) priceVal.textContent = lesson.price;

  const duration = document.getElementById('widget-duration');
  if (duration) duration.textContent = lesson.duration;

  const group = document.getElementById('widget-group');
  if (group) group.textContent = lesson.group;

  const level = document.getElementById('widget-level');
  if (level) level.textContent = lesson.level;

  // Booking button onclick
  const bookBtn = document.getElementById('widget-book-btn');
  if (bookBtn) {
    bookBtn.onclick = () => {
      if (typeof openBookingWithProgram === 'function') {
        openBookingWithProgram(lesson.title);
      } else if (typeof openBookingModal === 'function') {
        openBookingModal();
      }
    };
  }
}

/**
 * Highlight active program switcher tab
 */
function highlightActiveTab(activeId) {
  const tabs = document.querySelectorAll('.switcher-tab');
  tabs.forEach(tab => {
    if (tab.getAttribute('data-id') === activeId) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });
}
