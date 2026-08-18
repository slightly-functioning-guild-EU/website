"use client";
import { FormEvent, useState } from "react";

const activities = [
  { icon: "⚔", title: "Saturday raids", copy: "Every Saturday with Chill Streak, Group 2. Join when life allows; attendance is never compulsory but ilvl is. We always hit AOTC before each season ends.", image: "/chill-streak-group-2-raid.png", alt: "Chill Streak Group 2 gathered for a Saturday raid" },
  { icon: "✦", title: "Mythic+", copy: "Keys happen when people fancy them. Push, learn, or come along for the questionable route choices." },
  { icon: "♜", title: "A bit of PvP", copy: "Occasional battlegrounds, accidental heroics, no promises about our reaction times." },
  { icon: "⌂", title: "Housing & hanging out", copy: "An active public neighbourhood with Horde and Alliance neighbours, and always room for a chat. The guild houses are always open and we always hit our endeavour goals before the next reset. We share ideas and blueprints too!" },
];

const faqs = [
  ["Do I need to raid to join?", "No. Raiding is one thing we do, not a requirement."],
  ["What is the loot system?", "We go by the in-game loot system. We do not use DKPs, parse KPIs or priorities. This is how we raid with Chill Streak. In Mythic+, we always share when the person who wins the loot has another item in that slot that is as good as or better than the drop."],
  ["Is there a guild bank? How does it work?", "Yes, there is one. Members have limited daily access to items, but the GM tries to keep things full and rotate items from previous expansions, especially now with decor making."],
  ["What if I disappear for a few weeks?", "We hope you disappear for a holiday, or because you decided to play another game, and that everything is great with your health. You are more than welcome to take time off whenever you feel like it. Like we say, it is your subscription, your time. But please tell us if you go on holiday. We love to hear all about adventures! We are all Azeroth adventurers, after all."],
  ["Do you take alts?", "Our GM has 18 alts. We are sure we can fit all of your alts in the guild too. Yes, of course we take alts."],
  ["How fast will I hear back after applying?", "Usually it takes around 48 hours at most, since the GM is on a very demanding toddler-focused schedule. Unless she is on holiday, then a mini-master will reply within 72 hours. Please be patient."],
];

export default function Home() {
  const [sent, setSent] = useState(false);
  function apply(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = ["Hello Slightly Functioning!", "", `Character: ${data.get("character")}`, `Realm: ${data.get("realm")}`, `Class / role: ${data.get("role")}`, `Discord: ${data.get("discord")}`, "", "About me:", String(data.get("about"))].join("\n");
    window.location.href = `mailto:hot_ninaki@hotmail.com?subject=${encodeURIComponent("Slightly Functioning guild application")}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return <main>
    <header className="nav-wrap"><nav className="nav" aria-label="Main navigation">
      <a className="brand" href="#top"><span className="brand-mark"><img src="/sf-guild-logo-transparent.png" alt="" /></span><span>Slightly Functioning</span></a>
      <div className="nav-links"><a href="#about">About</a><a href="#activities">What We Do</a><a href="#faq">FAQ</a><a href="#join">Join Us</a></div>
      <a className="small-cta" href="#join">Join us →</a>
    </nav></header>

    <section className="hero" id="top"><div className="hero-inner">
      <p className="eyebrow"><span /> WORLD OF WARCRAFT RETAIL · BURNING LEGION EU</p>
      <h1>Adulting is hard.<br/><em>Gaming should not be.</em></h1>
      <p className="hero-copy">A relaxed, casual WoW guild for over-30s with jobs, kids, and a strong need to chat sh*t after a long day.</p>
      <div className="hero-actions"><a className="primary-cta" href="#join">Join us <span>→</span></a></div>
      <div className="hero-notes"><span><b>✓</b> No attendance requirements</span><span><b>✓</b> All classes & roles</span><span><b>✓</b> English-speaking, EU-wide</span></div>
    </div><div className="crest"><div className="crest-ring"><img src="/cross-faction-crest.png" alt="A unified blue Alliance-inspired lion and red Horde-inspired horned crest" /></div><p>HORDE &amp; ALLIANCE WELCOME</p></div></section>

    <section className="manifesto" id="about">
      <p className="section-kicker">ABOUT US</p>
      <h2>We take the people seriously,<br/><em>not ourselves.</em></h2>
      <div className="about-grid"><p className="lead-copy">We are a social guild based on Burning Legion EU, open to players across realms and factions.</p><div className="body-copy"><p>Some of us raid. Some run keys. Some just pop in to chat. Some sit quietly while the GM talks enough for everyone and that is perfectly fine.</p><p>Our members are scattered across Europe, held together by a shared rule: real life comes first. The guild is led by a working mum who gets that Saturday night raid means nothing if you need to go out and relieve pressure from the week or your kid has got a fever. This is how the vibe stays welcoming, flexible, and low-pressure.</p></div></div>
      <blockquote><p>“Come when you can. Play how you like. Do not be a d*ckhead.”</p><cite>Neniadea, Guild Master</cite></blockquote>
      <div className="guild-stats"><span><strong>200+</strong> members</span><span><strong>10+</strong> years running <small>(est. 2016)</small></span><span><strong>35</strong> Guild average age</span><span><strong>AOTC and Keystone Master</strong> achievers with a relaxed pace</span></div>
    </section>

    <section className="activities" id="activities"><div className="section-heading"><div><p className="section-kicker">WHAT WE DO</p><h2>Something for everyone,<br/><em>pressure for no one.</em></h2></div><p>There is usually something happening but nothing is mandatory. Your subscription, your time.</p></div>
      <div className="activity-grid">{activities.map((activity,i)=><article key={activity.title}><span className="activity-number">0{i+1}</span><span className="activity-icon">{activity.icon}</span><h3>{activity.title}</h3><p>{activity.copy}</p>{activity.image ? <figure className="activity-media"><img src={activity.image} alt={activity.alt} /></figure> : <div className="activity-media activity-placeholder" role="img" aria-label={`${activity.title} image coming soon`}><span>Image coming soon</span></div>}</article>)}</div>
    </section>

    <section className="fit-section"><div><p className="section-kicker">YOU WILL FIT RIGHT IN</p><h2>Real life comes first,<br/><em>but good vibes are always there.</em></h2></div><ul><li><span>01</span>You are 30-ish or over, with a life beyond Azeroth</li><li><span>02</span>You want friendly people, not performance reviews and parses</li><li><span>03</span>You are happy to join in, or quietly lurk</li><li><span>04</span>You can laugh when the pull goes spectacularly wrong or the GM has a fit with her IRL shenanigans</li></ul></section>

    <section className="faq-section" id="faq"><div className="faq-intro"><p className="section-kicker">FAQ</p><h2>Things you might<br/><em>want to know.</em></h2></div><div className="faq-list">{faqs.map(([question, answer], i)=><details key={question} open={i===0}><summary><span>{question}</span><b>+</b></summary><p>{answer}</p></details>)}</div></section>

    <section className="join" id="join"><div className="join-copy"><p className="section-kicker">JOIN US</p><h2>Your seat by the Slightly Functioning campfire is waiting.</h2><p>Every class, spec, role, faction and experience level is welcome. No essays required, a few honest lines will do.</p></div>
      <form onSubmit={apply} className="apply-form"><div className="field-row"><label>Character name<input name="character" required placeholder="Your main"/></label><label>Realm<input name="realm" required placeholder="Where you play"/></label></div><div className="field-row"><label>Class & role<input name="role" required placeholder="Anything is welcome"/></label><label>Discord name<input name="discord" placeholder="Optional"/></label></div><label>Tell us a bit about you<textarea name="about" required rows={5} placeholder="What do you enjoy in WoW? What are you looking for in a guild?"/></label><button type="submit">Prepare my application <span>→</span></button><p className="form-note">{sent ? "Your email app should now be open. Hit send when ready." : "Your answers will open in your email app, ready to send."}</p></form>
    </section>
    <footer className="site-footer">
      <div className="footer-logo-panel"><img src="/sf-guild-logo-transparent.png" alt="Slightly Functioning guild logo" /></div>
      <div className="footer-content">
        <div className="footer-heading"><p className="section-kicker">SLIGHTLY FUNCTIONING</p><h2>Find us in Azeroth.</h2></div>
        <div className="footer-facts"><span><small>HOME REALM</small>Burning Legion EU</span><span><small>GUILD FINDER</small>Slightly Functioning</span><span><small>DISCORD</small>Slightly Functioning</span></div>
        <div className="footer-bottom"><p>World of Warcraft · EU · Established 2016<br/>Not affiliated with Blizzard Entertainment.</p><a href="http://worldofwarcraft.blizzard.com/en-us/guild/eu/burning-legion/slightly-functioning" target="_blank" rel="noreferrer">View on World of Warcraft ↗</a></div>
      </div>
    </footer>
  </main>;
}
