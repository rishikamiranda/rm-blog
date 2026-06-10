# Updating the website
I want to change the look of the website completely. This a text webpage i created it uses tailwind version 3 so we will have to adapt the styles from this index.html to our global.css. both are attached.

- Go through everything and tell me what you think of these changes

## Things to do
1. Update styles 
```html
<script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            paper: '#F2F0EB',
            ink: '#1A1917',
            orange: '#E06B2E', // primary colour
            muted: '#8C8880',
            warm: '#D4CFC7',
          },
          fontFamily: {
            display: ['"Playfair Display"', 'serif'],
            mono: ['"Space Mono"', 'monospace'], // this should be geist
          },
        }
      }
    }
  </script>

```

2. Updating the homepage

- refer to the attached index.html. here ios what i want to keep 
    - i like the hero section but we will have to come up with a better tag line
    - i like the marquee element but instead of text i want to use illustrative icons based of work like furniture design, architecture, music, events, graphics etc
    - i want to move the introduction to the about section with my image appearing half the way it is now
    - i like the "How i can help section we can keep that
    - i also like the other two sections

## files

1. Index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Solène — Spiritual Entrepreneurship</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            paper: '#F2F0EB',
            ink: '#1A1917',
            orange: '#E06B2E',
            muted: '#8C8880',
            warm: '#D4CFC7',
          },
          fontFamily: {
            display: ['"Playfair Display"', 'serif'],
            mono: ['"Space Mono"', 'monospace'],
          },
        }
      }
    }
  </script>
  <style>
    body { background-color: #F2F0EB; }

    /* Noise texture overlay */
    body::before {
      content: '';
      position: fixed;
      inset: 0;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
      pointer-events: none;
      z-index: 0;
    }

    * { position: relative; z-index: 1; }

    /* Image reveal on hover */
    .image-reveal-desktop {
      clip-path: inset(0 50% 0 0);
      transition: clip-path 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    .image-reveal-desktop:hover {
      clip-path: inset(0 0% 0 0);
    }

    .image-reveal-mobile {
      clip-path: inset(0 0 50% 0);
      transition: clip-path 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    .image-reveal-mobile:hover {
      clip-path: inset(0 0 0% 0);
    }

    /* Orange step lines */
    .step-line {
      display: block;
      height: 3px;
      background-color: #E06B2E;
    }

    /* Blog card hover */
    .blog-card:hover .card-image {
      transform: scale(1.04);
    }
    .card-image {
      transition: transform 0.5s ease;
    }

    /* Nav underline */
    .nav-link::after {
      content: '';
      display: block;
      height: 1.5px;
      background: #E06B2E;
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.3s ease;
    }
    .nav-link:hover::after { transform: scaleX(1); }

    /* Marquee */
    @keyframes marquee {
      from { transform: translateX(0); }
      to { transform: translateX(-50%); }
    }
    .marquee-inner {
      display: flex;
      width: max-content;
      animation: marquee 18s linear infinite;
    }

    /* Scroll fade */
    .fade-up {
      opacity: 0;
      transform: translateY(24px);
      transition: opacity 0.7s ease, transform 0.7s ease;
    }
    .fade-up.visible {
      opacity: 1;
      transform: translateY(0);
    }
  </style>
</head>
<body class="font-mono text-ink">

  <!-- NAV -->
  <nav class="flex items-center justify-between px-8 md:px-16 py-6 border-b border-warm">
    <span class="font-display text-xl tracking-tight italic">Solène</span>
    <ul class="hidden md:flex gap-10 text-xs tracking-widest uppercase text-muted">
      <li><a href="#" class="nav-link">About</a></li>
      <li><a href="#" class="nav-link">Work</a></li>
      <li><a href="blog.html" class="nav-link">Journal</a></li>
      <li><a href="#" class="nav-link">Contact</a></li>
    </ul>
    <button class="md:hidden text-xs tracking-widest uppercase text-muted">Menu</button>
  </nav>

  <!-- HERO -->
  <section class="px-8 md:px-16 pt-20 pb-12 md:pt-32 md:pb-20">
    <div class="max-w-5xl">
      <!-- Orange step line above title -->
      <span class="step-line w-12 mb-8 block"></span>
      <p class="text-xs tracking-widest uppercase text-muted mb-6">Spiritual Entrepreneurship</p>
      <h1 class="font-display text-5xl md:text-8xl leading-none font-medium mb-8 max-w-3xl">
        Chase your<br/>
        <em>dreams,</em><br/>
        together.
      </h1>
      <div class="flex items-center gap-6 mt-10">
        <a href="#" class="text-xs tracking-widest uppercase border border-ink px-6 py-3 hover:bg-ink hover:text-paper transition-colors duration-300">Start Here</a>
        <span class="step-line w-16 inline-block"></span>
        <a href="blog.html" class="text-xs tracking-widest uppercase text-muted hover:text-orange transition-colors duration-300">Read the Journal →</a>
      </div>
    </div>
  </section>

  <!-- MARQUEE BAND -->
  <div class="border-y border-warm py-4 overflow-hidden bg-ink text-paper">
    <div class="marquee-inner text-xs tracking-widest uppercase gap-0">
      <span class="px-8">Believe in Yourself</span>
      <span class="px-2 text-orange">—</span>
      <span class="px-8">Take The Leap</span>
      <span class="px-2 text-orange">—</span>
      <span class="px-8">Chase Your Dreams</span>
      <span class="px-2 text-orange">—</span>
      <span class="px-8">The Universe Is Listening</span>
      <span class="px-2 text-orange">—</span>
      <span class="px-8">Believe in Yourself</span>
      <span class="px-2 text-orange">—</span>
      <span class="px-8">Take The Leap</span>
      <span class="px-2 text-orange">—</span>
      <span class="px-8">Chase Your Dreams</span>
      <span class="px-2 text-orange">—</span>
      <span class="px-8">The Universe Is Listening</span>
      <span class="px-2 text-orange">—</span>
    </div>
  </div>

  <!-- ABOUT / CONTENT BLOCK (content.jpg layout) -->
  <section class="px-8 md:px-16 py-20 md:py-32 fade-up">
    <!-- Mobile: image on top, half-reveal -->
    <div class="block md:hidden mb-10 overflow-hidden">
      <div class="image-reveal-mobile w-full aspect-[3/4]">
        <img
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80"
          alt="Interior space with plant"
          class="w-full h-full object-cover"
        />
      </div>
      <p class="text-xs text-muted mt-2 tracking-widest uppercase">Hover to reveal full image</p>
    </div>

    <!-- Desktop: two-column, image right half-reveal -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
      <!-- Left: text -->
      <div>
        <span class="step-line w-8 mb-6 block"></span>
        <p class="text-xs tracking-widest uppercase text-muted mb-8">001 — About</p>
        <p class="font-mono text-sm leading-relaxed mb-6 text-ink">
          YOU ARE AMAZING. PLEASE START BELIEVING SO AS YOU TRULY ARE. YOU HAVE COME SO FAR AND YOU SHOULD BE SO PROUD OF YOURSELF.
        </p>
        <p class="font-mono text-sm leading-relaxed mb-6 text-ink">
          ARE YOU READY TO TAKE THE NEXT STEP WITHIN YOUR BUSINESS? ARE YOU WANTING TO FINALLY FOLLOW YOUR DREAMS? I AM HERE, READY AND WAITING TO JOIN YOU, HOLDING YOUR HAND ALONG THE WAY.
        </p>
        <p class="font-mono text-sm leading-relaxed mb-6 text-ink">
          LET'S BUILD A BUSINESS IN WHICH CAN CHANGE LIVES, THE PLANET AND OURSELVES ALL AT THE SAME TIME. IT ALL STARTS WITH YOU.
        </p>
        <span class="step-line w-16 mt-2 mb-8 block"></span>
        <p class="font-mono text-sm leading-relaxed text-ink">
          ARE YOU READY TO CHASE YOUR DREAMS? IF SO, LET'S DO THIS — TOGETHER...
        </p>
        <a href="#" class="inline-block mt-10 text-xs tracking-widest uppercase text-orange border-b border-orange pb-1 hover:text-ink hover:border-ink transition-colors duration-300">Learn More →</a>
      </div>

      <!-- Right: image half-reveal (desktop only) -->
      <div class="hidden md:block overflow-hidden">
        <div class="image-reveal-desktop w-full aspect-[3/4]">
          <img
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80"
            alt="Interior space with plant"
            class="w-full h-full object-cover"
          />
        </div>
        <p class="text-xs text-muted mt-2 tracking-widest uppercase">Hover to reveal →</p>
      </div>
    </div>
  </section>

  <!-- ORANGE STEP DIVIDER (orangehighlights.jpg) -->
  <div class="px-8 md:px-16 flex items-center gap-4 py-2">
    <span class="step-line flex-1 max-w-xs"></span>
    <span class="step-line w-8"></span>
    <span class="step-line w-4"></span>
  </div>

  <!-- SERVICES SECTION -->
  <section class="px-8 md:px-16 py-20 md:py-28 fade-up">
    <div class="flex items-start justify-between mb-16 flex-col md:flex-row gap-4">
      <div>
        <span class="step-line w-8 mb-6 block"></span>
        <p class="text-xs tracking-widest uppercase text-muted">002 — How I Can Help</p>
      </div>
      <h2 class="font-display text-3xl md:text-5xl font-medium italic max-w-sm">
        Your next step starts here.
      </h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-px bg-warm">
      <!-- Service 01 -->
      <div class="bg-paper p-10 group">
        <div class="flex items-center gap-4 mb-6">
          <span class="step-line w-10 group-hover:w-16 transition-all duration-300"></span>
          <span class="text-xs tracking-widest uppercase text-muted">01</span>
        </div>
        <h3 class="font-display text-xl font-medium mb-4">Business Coaching</h3>
        <p class="font-mono text-xs leading-relaxed text-muted">One-on-one sessions to align your vision with your values and build something that lasts.</p>
      </div>
      <!-- Service 02 -->
      <div class="bg-paper p-10 group">
        <div class="flex items-center gap-4 mb-6">
          <span class="step-line w-10 group-hover:w-16 transition-all duration-300"></span>
          <span class="text-xs tracking-widest uppercase text-muted">02</span>
        </div>
        <h3 class="font-display text-xl font-medium mb-4">Mindset Work</h3>
        <p class="font-mono text-xs leading-relaxed text-muted">Dissolve the blocks keeping you small. Step into the version of yourself already living the dream.</p>
      </div>
      <!-- Service 03 -->
      <div class="bg-paper p-10 group">
        <div class="flex items-center gap-4 mb-6">
          <span class="step-line w-10 group-hover:w-16 transition-all duration-300"></span>
          <span class="text-xs tracking-widest uppercase text-muted">03</span>
        </div>
        <h3 class="font-display text-xl font-medium mb-4">Brand Strategy</h3>
        <p class="font-mono text-xs leading-relaxed text-muted">Build a brand that reflects the real you — one that attracts the right people and repels the rest.</p>
      </div>
    </div>
  </section>

  <!-- ORANGE STEP DIVIDER -->
  <div class="px-8 md:px-16 flex items-center gap-3 py-2">
    <span class="step-line w-4"></span>
    <span class="step-line w-8"></span>
    <span class="step-line flex-1 max-w-lg"></span>
  </div>

  <!-- RECENT JOURNAL — Blog cards (blogcards.jpg) -->
  <section class="px-8 md:px-16 py-20 md:py-28 fade-up">
    <div class="flex items-end justify-between mb-14">
      <div>
        <span class="step-line w-8 mb-6 block"></span>
        <p class="text-xs tracking-widest uppercase text-muted mb-2">003 — Recent Writing</p>
        <h2 class="font-display text-3xl md:text-4xl font-medium italic">From the Journal</h2>
      </div>
      <a href="blog.html" class="hidden md:block text-xs tracking-widest uppercase text-muted hover:text-orange transition-colors duration-300 border-b border-muted pb-1">All Posts →</a>
    </div>

    <!-- Blog cards grid (moodboard style like blogcards.jpg) -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

      <!-- Card 1 — Large featured -->
      <div class="blog-card md:col-span-2 group cursor-pointer">
        <div class="overflow-hidden aspect-[16/9] mb-5">
          <img
            src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=900&q=80"
            alt="Journal post"
            class="card-image w-full h-full object-cover"
          />
        </div>
        <div class="flex items-center gap-4 mb-3">
          <span class="step-line w-6"></span>
          <span class="text-xs tracking-widest uppercase text-muted">Mindset — 4 min read</span>
        </div>
        <h3 class="font-display text-2xl font-medium group-hover:italic transition-all duration-300 mb-2">
          When the universe aligns: trusting the path you can't yet see
        </h3>
        <p class="font-mono text-xs text-muted leading-relaxed">On learning to surrender control while staying fully committed to the vision.</p>
      </div>

      <!-- Cards 2 & 3 stacked -->
      <div class="flex flex-col gap-8">
        <div class="blog-card group cursor-pointer">
          <div class="overflow-hidden aspect-[4/3] mb-4">
            <img
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&q=80"
              alt="Journal post"
              class="card-image w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div class="flex items-center gap-3 mb-2">
            <span class="step-line w-4"></span>
            <span class="text-xs tracking-widest uppercase text-muted">Business — 6 min</span>
          </div>
          <h3 class="font-display text-lg font-medium group-hover:italic transition-all duration-300">
            You don't need permission to begin
          </h3>
        </div>

        <div class="blog-card group cursor-pointer">
          <div class="overflow-hidden aspect-[4/3] mb-4">
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80"
              alt="Journal post"
              class="card-image w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div class="flex items-center gap-3 mb-2">
            <span class="step-line w-4"></span>
            <span class="text-xs tracking-widest uppercase text-muted">Spirituality — 5 min</span>
          </div>
          <h3 class="font-display text-lg font-medium group-hover:italic transition-all duration-300">
            Purpose over profit: building with your soul
          </h3>
        </div>
      </div>
    </div>

    <!-- Second row of cards — smaller -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
      <div class="blog-card group cursor-pointer">
        <div class="overflow-hidden aspect-[4/3] mb-4">
          <img src="https://images.unsplash.com/photo-1548516173-3cabfa4607e9?w=600&q=80" alt="" class="card-image w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
        </div>
        <div class="flex items-center gap-3 mb-2">
          <span class="step-line w-4"></span>
          <span class="text-xs tracking-widest uppercase text-muted">Mindset — 3 min</span>
        </div>
        <h3 class="font-display text-lg font-medium group-hover:italic transition-all duration-300">The million ideas you haven't acted on yet</h3>
      </div>

      <div class="blog-card group cursor-pointer">
        <div class="overflow-hidden aspect-[4/3] mb-4">
          <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80" alt="" class="card-image w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
        </div>
        <div class="flex items-center gap-3 mb-2">
          <span class="step-line w-4"></span>
          <span class="text-xs tracking-widest uppercase text-muted">Business — 7 min</span>
        </div>
        <h3 class="font-display text-lg font-medium group-hover:italic transition-all duration-300">What it really means to follow your dreams</h3>
      </div>

      <div class="blog-card group cursor-pointer">
        <div class="overflow-hidden aspect-[4/3] mb-4">
          <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&q=80" alt="" class="card-image w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
        </div>
        <div class="flex items-center gap-3 mb-2">
          <span class="step-line w-4"></span>
          <span class="text-xs tracking-widest uppercase text-muted">Spirituality — 4 min</span>
        </div>
        <h3 class="font-display text-lg font-medium group-hover:italic transition-all duration-300">Letting the universe do its part</h3>
      </div>
    </div>

    <div class="mt-10 md:hidden">
      <a href="blog.html" class="text-xs tracking-widest uppercase text-muted hover:text-orange transition-colors duration-300 border-b border-muted pb-1">All Posts →</a>
    </div>
  </section>

  <!-- ORANGE STEP DIVIDER -->
  <div class="px-8 md:px-16 flex items-center gap-4 py-2">
    <span class="step-line flex-1 max-w-sm"></span>
    <span class="step-line w-24"></span>
    <span class="step-line w-6"></span>
  </div>

  <!-- CTA SECTION -->
  <section class="px-8 md:px-16 py-24 md:py-36 fade-up">
    <div class="max-w-2xl">
      <p class="text-xs tracking-widest uppercase text-muted mb-6">004 — Work With Me</p>
      <h2 class="font-display text-4xl md:text-6xl font-medium leading-tight mb-10">
        Ready to take<br/>
        <em>the leap?</em>
      </h2>
      <p class="font-mono text-sm text-muted leading-relaxed mb-12 max-w-md">
        I HAVE FOUND UPON MY SPIRITUAL ENTREPRENEURIAL JOURNEY THAT WHEN YOU ARE FULFILLING YOUR PURPOSE, THE UNIVERSE WILL DO ANYTHING WITHIN ITS POWER TO MAKE IT HAPPEN FOR YOU.
      </p>
      <div class="flex items-center gap-6 flex-wrap">
        <a href="#" class="text-xs tracking-widest uppercase bg-orange text-paper px-8 py-4 hover:bg-ink transition-colors duration-300">Book a Session</a>
        <span class="step-line w-12 inline-block"></span>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="border-t border-warm px-8 md:px-16 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
    <span class="font-display text-lg italic">Solène</span>
    <p class="font-mono text-xs text-muted tracking-widest">© 2026 — Spiritual Entrepreneurship</p>
    <div class="flex gap-6 text-xs tracking-widest uppercase text-muted">
      <a href="#" class="hover:text-orange transition-colors">IG</a>
      <a href="#" class="hover:text-orange transition-colors">Pinterest</a>
      <a href="#" class="hover:text-orange transition-colors">Email</a>
    </div>
  </footer>

  <script>
    // Scroll fade-in
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
  </script>
</body>
</html>
```

2. index.astro current homepage which needs to be modified

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import { getCollection } from 'astro:content';

const allPosts = await getCollection('blog');
// Filter and isolate the 5 most recent posts chronologically
const recentPosts = allPosts
  .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
  .slice(0, 5);
---

<BaseLayout title="Rishika Miranda | Architect & Interior Designer">
  
  <section class="mb-16 space-y-6">
  <div class="space-y-2">
    <h1 class="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
      Rishika Miranda
    </h1>
    <p class="text-sm font-medium text-stone-500 tracking-wide uppercase">
      Co-founder, Kyrah Design Studio &bull; Bengaluru
    </p>
  </div>

  <div class="text-stone-600 leading-relaxed space-y-4 text-base sm:text-[17px]">
    <p>
      I’m a Bangalore-based architect and creative lead working across architecture, interiors, storytelling and experiential design. 
      As a co-founder of Kyrah Design Studio, I lead architectural and interior design projects from concept to execution while also shaping the studio’s creative direction across media, client experience and collaborative processes with teams and artisans. 
      My work focuses on creating highly customised spaces that feel thoughtful, layered and deeply personal to the people using them.
    </p>
    <p>
      I’m deeply drawn to architectural history, craftsmanship traditions, material culture, art, music and the way creativity moves across disciplines. 
      Much of my approach to design comes from observing how people experience spaces emotionally through memory, ritual, texture, light, sound and atmosphere, with a strong focus on clarity of thought and craftsmanship.
    </p>
    <p>
      Alongside my design practice, I enjoy curating intimate creative experiences centred around design, culture, food, music and conversation. 
      I also enjoy designing furniture and products that respond intuitively to the behaviours and rituals of the end user.
    </p>
    <div class="pt-2">
      <a href="/about" class="inline-block text-stone-700 font-medium underline underline-offset-4 hover:text-stone-900 transition">
        Know more about my journey →
      </a>
    </div>
  </div>
</section>

  <section class="pt-8 border-t border-stone-200">
    <div class="flex justify-between items-baseline mb-8">
      <h2 class="text-lg font-semibold tracking-tight text-stone-900">Recent Writing</h2>
      <a href="/blog" class="text-xs font-medium text-stone-500 hover:text-stone-900 transition underline underline-offset-4 decoration-stone-300">
        All Articles
      </a>
    </div>

    <div class="space-y-10">
      {recentPosts.length === 0 ? (
        <p class="text-sm text-stone-400 italic">No articles published yet.</p>
      ) : (
        recentPosts.map((post) => (
          <article class="group relative flex flex-col items-start">
            <h3 class="text-base font-semibold tracking-tight text-stone-900 group-hover:text-stone-600 transition">
              <a href={`/blog/${post.data.slug}`}>
                <span class="absolute -inset-x-4 -inset-y-3 z-0 scale-95 bg-stone-100 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 rounded-xl" />
                <span class="relative z-10">{post.data.title}</span>
              </a>
            </h3>
            <time datetime={post.data.pubDate.toISOString()} class="relative z-10 order-first mb-1 flex items-center text-xs text-stone-400 font-medium">
              {post.data.pubDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
            </time>
            <p class="relative z-10 mt-2 text-sm text-stone-600 line-clamp-2 leading-relaxed">
              {post.data.description}
            </p>
            {post.data.tags && (
              <div class="relative z-10 mt-3 flex gap-2 overflow-hidden">
                {post.data.tags.slice(0, 3).map((tag) => (
                  <span class="inline-flex items-center text-[11px] font-medium text-stone-400">
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </article>
        ))
      )}
    </div>
  </section>
</BaseLayout>

```

3. global.css

```css
@import "tailwindcss";
@plugin "@tailwindcss/typography";

/* Register the custom font families into Tailwind v4's engine */
@theme {
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-sans: "Inter", sans-serif;
}

/* Architectural Horizontal Line Engine */
@utility bg-horizontal-lines {
  background-size: 100% 32px; 
  background-image: linear-gradient(to bottom, rgba(231, 229, 228, 0.5) 1px, transparent 1px);
}

```


