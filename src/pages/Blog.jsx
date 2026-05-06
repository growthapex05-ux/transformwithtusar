import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './Blog.module.css';

export const blogPosts = [
  {
    id: 1,
    img: '/images/blog_nutrition.png',
    cat: 'Nutrition',
    date: 'May 2, 2026',
    read: '6 min read',
    title: 'The Ultimate Guide to Mindful Eating (And Why It Works)',
    excerpt: 'Discover how slowing down and paying attention to your meals can transform your relationship with food forever.',
    tags: ['Mindful Eating', 'Nutrition', 'Wellness'],
    content: `Mindful eating is one of the most powerful yet underutilised tools in the wellness toolkit. In a world of rushed lunches, screen-time dinners, and eating on the go, we've largely disconnected from one of the most fundamental human experiences: nourishing our bodies.

**What is Mindful Eating?**

Mindful eating is the practice of bringing full, non-judgmental awareness to the experience of eating. It's not a diet. It's not about restriction. It's about reconnecting with your body's natural hunger and fullness signals — and finding genuine pleasure in food again.

**The Science Behind It**

Research consistently shows that mindful eating can help reduce binge eating, improve digestion, support healthy weight management, and even reduce anxiety around food. When we eat slowly and attentively, we:

- Give our gut time to signal fullness to our brain (this takes about 20 minutes)
- Digest food more effectively (chewing properly breaks down food for optimal nutrient absorption)
- Make food choices aligned with what our bodies actually need

**How to Start Practising Mindful Eating**

1. **Eliminate distractions** — Put your phone away. Turn off the TV. Create a calm eating environment.
2. **Engage your senses** — Notice the colours, smells, textures, and flavours of your food before taking a bite.
3. **Eat slowly** — Put your fork down between bites. Aim to chew each mouthful 20-30 times.
4. **Check in with hunger** — Before eating, rate your hunger on a scale of 1-10. Aim to start eating at a 6-7 and stop at a 7-8.
5. **Practice gratitude** — Take a moment to appreciate where your food came from and who prepared it.

**A 7-Day Challenge**

Try this: for the next 7 days, commit to eating at least one meal per day without any distractions. No phone, no laptop, no TV. Just you and your food. Notice what comes up — the flavours you've never noticed, the moments when you're actually full, the enjoyment that was always there but hidden under the noise.

This single practice, done consistently, can fundamentally shift your relationship with food. Give it a try and let me know what you discover. 🌿`,
  },
  {
    id: 2,
    img: '/images/blog_mindfulness.png',
    cat: 'Mindfulness',
    date: 'Apr 24, 2026',
    read: '5 min read',
    title: 'Build a Morning Routine That Actually Sticks',
    excerpt: 'A step-by-step guide to designing a morning ritual that energises your body and grounds your mind for the day ahead.',
    tags: ['Morning Routine', 'Mindfulness', 'Habits'],
    content: `The way you start your morning sets the tone for the entire day. But here's the thing — most morning routine advice fails because it's not designed for real human beings with real lives.

**Why Most Morning Routines Fail**

The internet is full of "5AM miracle morning" routines that sound inspiring but are completely unsustainable for most people. They require you to wake up hours earlier, do 47 different things, and still somehow make it to work on time.

The result? You try it for 3 days, feel overwhelmed, give up, and feel worse than before.

**The Sustainable Morning Routine Formula**

A morning routine that sticks has three qualities:
1. **It's short enough to be realistic** (15-30 minutes is enough)
2. **It serves your specific needs** (not what works for a CEO in California)
3. **It has low activation energy** (easy to start, even when you're tired)

**Building Your Perfect Morning**

Start with just three anchors:

**Anchor 1: Move your body** (5-10 mins)
This doesn't have to be a full workout. A few sun salutations, a brisk walk around the block, or even 5 minutes of stretching gets blood flowing to your brain and signals to your body that it's time to wake up.

**Anchor 2: Nourish your mind** (5-10 mins)
Journaling, meditation, reading, gratitude practice — pick one. The goal is to spend a few minutes in intentional reflection before the reactive demands of the day take over.

**Anchor 3: Fuel your body** (whenever hunger arrives)
Don't force breakfast if you're not hungry. But do make your first meal intentional — something that nourishes rather than spikes your blood sugar.

**The Secret Ingredient: Consistency Over Perfection**

A "mediocre" morning routine done every day beats a "perfect" one done occasionally every time. Start with 15 minutes. Get consistent. Then expand.

What does your ideal morning look like? I'd love to help you design one. 🌅`,
  },
  {
    id: 3,
    img: '/images/blog_fitness.png',
    cat: 'Fitness',
    date: 'Apr 15, 2026',
    read: '7 min read',
    title: '5 Fitness Myths Debunked by Science',
    excerpt: 'From "no pain no gain" to spot reduction — we bust the most common fitness myths so you can train smarter.',
    tags: ['Fitness', 'Science', 'Training'],
    content: `The fitness industry is plagued by misinformation. Social media is full of "fitness influencers" sharing advice that is, at best, ineffective, and at worst, dangerous. Let's set the record straight on 5 of the most common fitness myths.

**Myth 1: "No Pain, No Gain"**

This one has caused more injuries than almost any other fitness myth. There is a critical difference between the *discomfort* of a challenging workout (good) and *pain* (bad).

Muscle soreness after a new workout? Normal. Sharp pain during exercise? Stop immediately. Pain is your body's warning system — ignoring it leads to injury and setbacks.

The truth: progressive overload (gradually increasing the challenge) is the key to results. You should feel challenged, not agonised.

**Myth 2: You Can "Spot Reduce" Fat**

Want to lose belly fat? Do 1,000 crunches a day! Except... that's not how fat loss works.

When your body burns fat for energy, it draws from fat stores throughout your entire body — not specifically from the area you're training. A crunch works your abdominal muscles, but it doesn't preferentially burn fat from your belly.

The truth: overall fat loss through a calorie deficit and consistent exercise will eventually reveal the muscles underneath. Spot reduction is physiologically impossible.

**Myth 3: Cardio Is the Best Way to Lose Weight**

Cardio burns calories, yes. But it's far from the complete picture. Resistance training builds muscle, and muscle tissue burns more calories at rest than fat tissue.

A body with more muscle has a higher resting metabolic rate — meaning you burn more calories even when you're not exercising.

The truth: a combination of resistance training and moderate cardio, alongside good nutrition, produces the best and most sustainable body composition results.

**Myth 4: Women Shouldn't Lift Heavy (They'll Get "Bulky")**

This myth has kept countless women from the most effective form of exercise for body transformation, bone density, and metabolic health.

The truth: women don't produce nearly enough testosterone to build the kind of muscle mass that looks "bulky." Lifting heavy weights will make you lean, strong, defined, and powerful — not bulky.

**Myth 5: You Need to Exercise Every Day**

Rest is not laziness. Rest is where growth happens.

When you exercise, you create tiny tears in muscle fibres. Recovery — sleep, nutrition, rest days — is when your body repairs these tears and builds them back stronger. Without adequate recovery, you plateau, overtrain, and increase injury risk.

The truth: 3-5 days of quality, intentional training with proper rest is significantly more effective than 7 days of mediocre effort.

Train smart, not just hard. 💪`,
  },
  {
    id: 4,
    img: '/images/hero_wellness.png',
    cat: 'Wellness',
    date: 'Apr 5, 2026',
    read: '4 min read',
    title: 'The Power of Sleep: Why Rest is Your Secret Weapon',
    excerpt: 'Sleep is the most underrated wellness tool available. Learn why prioritising rest is non-negotiable for transformation.',
    tags: ['Sleep', 'Recovery', 'Wellness'],
    content: `Sleep is not a luxury. It is a biological necessity — and arguably the single most powerful lever you can pull for your health.`,
  },
  {
    id: 5,
    img: '/images/blog_nutrition.png',
    cat: 'Nutrition',
    date: 'Mar 28, 2026',
    read: '5 min read',
    title: 'Hydration 101: How Much Water Do You Actually Need?',
    excerpt: 'Is the "8 glasses a day" rule accurate? We explore the science of optimal hydration and how to make it effortless.',
    tags: ['Hydration', 'Nutrition', 'Health'],
    content: `The "8 glasses a day" rule is one of the most pervasive health myths. Here's what the science actually says about hydration.`,
  },
  {
    id: 6,
    img: '/images/blog_mindfulness.png',
    cat: 'Mindfulness',
    date: 'Mar 18, 2026',
    read: '6 min read',
    title: 'Managing Stress Before It Manages You',
    excerpt: 'Chronic stress silently destroys your health. Discover the evidence-based techniques that actually work for stress reduction.',
    tags: ['Stress', 'Mindfulness', 'Mental Health'],
    content: `Chronic stress is one of the most damaging forces to the human body. Here's how to manage it before it manages you.`,
  },
];

const cats = ['All', 'Nutrition', 'Mindfulness', 'Fitness', 'Wellness'];

export default function Blog() {
  const [active, setActive] = useState('All');
  const [search, setSearch] = useState('');
  const refs = useRef([]);

  const filtered = blogPosts.filter(p => {
    const matchCat = active === 'All' || p.cat === active;
    const matchSearch = !search || p.title.toLowerCase().includes(search.toLowerCase()) || p.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  useEffect(() => {
    const obs = new IntersectionObserver(e => e.forEach(en => { if (en.isIntersecting) en.target.classList.add(styles.visible); }), { threshold: 0.1 });
    refs.current.forEach(el => el && obs.observe(el));
    return () => obs.disconnect();
  }, [filtered]);
  const ref = el => { if (el && !refs.current.includes(el)) refs.current.push(el); };

  return (
    <main>
      {/* Page Hero */}
      <section className={styles.pageHero}>
        <div className={styles.heroBg} />
        <div className={styles.container}>
          <span className={styles.badge}>Wellness Wisdom</span>
          <h1>The <em>Blog</em></h1>
          <p>Practical tips, evidence-based insights, and soulful stories to inspire your wellness journey.</p>
          <div className={styles.searchBox}>
            <span className={styles.searchIcon}>🔍</span>
            <input type="text" placeholder="Search articles..." value={search} onChange={e => setSearch(e.target.value)} />
          </div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className={styles.blogSection}>
        <div className={styles.container}>
          <div className={styles.filterRow}>
            {cats.map(c => (
              <button key={c} className={`${styles.filterBtn} ${active === c ? styles.filterActive : ''}`} onClick={() => setActive(c)}>{c}</button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className={styles.noResults}>
              <span>🌿</span>
              <h3>No articles found</h3>
              <p>Try a different category or search term.</p>
            </div>
          ) : (
            <div className={styles.blogGrid}>
              {filtered.map((post, i) => (
                <article key={post.id} className={`${styles.blogCard} ${styles.fadeUp}`} ref={ref} style={{ transitionDelay: `${i * 0.08}s` }}>
                  <Link to={`/blog/${post.id}`} className={styles.imgWrap}>
                    <img src={post.img} alt={post.title} />
                    <span className={styles.cat}>{post.cat}</span>
                  </Link>
                  <div className={styles.cardBody}>
                    <div className={styles.meta}>{post.date} · {post.read}</div>
                    <h3><Link to={`/blog/${post.id}`}>{post.title}</Link></h3>
                    <p>{post.excerpt}</p>
                    <div className={styles.tags}>
                      {post.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
                    </div>
                    <Link to={`/blog/${post.id}`} className={styles.readMore}>Read Article →</Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className={styles.nlSection}>
        <div className={styles.container}>
          <div className={styles.nlBox}>
            <span className={styles.nlIcon}>📮</span>
            <h2>Never Miss a Wellness Tip</h2>
            <p>Join 2,000+ subscribers who receive our free weekly wellness insights every Monday morning.</p>
            <div className={styles.nlForm}>
              <input type="email" placeholder="Enter your email address" />
              <button>Subscribe Free ✦</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
