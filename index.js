// --- COMMON VISUAL STYLES (Used on all pages) ---
const sharedStyles = `
  :root {
    --navy: #1a2744;
    --gold: #c9a44c;
    --cream: #faf7f0;
    --text: #2b2b2b;
    --blue-bg: #4a6b8c;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: 'Georgia', 'Times New Roman', serif;
    color: var(--text);
    background: var(--cream);
    line-height: 1.6;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  /* 3-COLUMN PERFECT BALANCE HEADER */
  header {
    background: var(--navy);
    color: white;
    padding: 1.2rem 2rem;
    display: grid;
    grid-template-columns: 180px 1fr 180px;
    align-items: center;
    position: relative;
    z-index: 10;
  }
  .logo-link { display: inline-block; transition: opacity 0.2s; justify-self: start; }
  .logo-link:hover { opacity: 0.85; }
  .header-logo { max-width: 110px; width: 100%; height: auto; display: block; }
  
  nav { display: flex; justify-content: center; }
  nav ul { list-style: none; display: flex; gap: 2.5rem; flex-wrap: wrap; justify-content: center; align-items: center; }
  nav a, .dropdown-btn {
    color: white;
    text-decoration: none;
    font-size: 1.15rem;
    font-weight: 500;
    border-bottom: 2px solid transparent;
    padding-bottom: 2px;
    transition: border-color 0.2s;
    background: none;
    border: none;
    font-family: inherit;
    cursor: pointer;
  }
  nav a:hover, .dropdown:hover .dropdown-btn { border-color: var(--gold); }
  .header-spacer { width: 180px; height: 1px; }

  .dropdown { position: relative; display: inline-block; }
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: white;
    min-width: 200px;
    box-shadow: 0px 8px 16px rgba(0,0,0,0.15);
    border-radius: 4px;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 5px;
    text-align: left;
  }
  .dropdown-content a { color: var(--text); padding: 0.9rem 1.2rem; text-decoration: none; display: block; font-size: 1.05rem; }
  .dropdown-content a:hover { background-color: var(--cream); color: var(--navy); }
  .dropdown:hover .dropdown-content { display: block; }

  .main-content { flex: 1; }
  
  /* HERO BANNER STYLES */
  .hero {
    background: linear-gradient(rgba(26,39,68,0.75), rgba(26,39,68,0.75)), 
                url('https://images.unsplash.com/photo-1438032005730-c779502df39b?w=1600') center/cover;
    color: white;
    text-align: center;
    padding: 6rem 2rem;
  }
  .hero h2 { font-size: 2.3rem; margin-bottom: 1rem; line-height: 1.3; }
  .hero p { font-size: 1.1rem; max-width: 600px; margin: 1.5rem auto 0 auto; opacity: 0.9; }

  .page-title-banner {
    background: var(--navy);
    color: white;
    padding: 4rem 2rem;
    text-align: center;
  }
  .title-card {
    background: white;
    color: var(--navy);
    display: inline-block;
    padding: 2rem 3rem;
    max-width: 900px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  }
  .title-card h2 { font-size: 2.2rem; font-weight: bold; line-height: 1.3; }

  /* ADVANCED ABOUT US PAGE LAYOUT STYLES */
  .about-container { width: 100%; background: white; }
  
  /* President Row Adjustments */
  .president-section { 
    background: #050b14; 
    color: white; 
    display: flex; 
    align-items: center; 
    justify-content: center;
    flex-wrap: wrap; 
    padding: 2rem;
  }
  .president-img-box { 
    flex: 0 1 380px;
    max-width: 380px;
    width: 100%;
    padding: 2rem;
    line-height: 0; 
  }
  .president-img { 
    width: 100%; 
    height: auto; 
    object-fit: contain; 
    display: block; 
    border-radius: 4px;
  }
  .president-text-box { 
    flex: 1 1 450px; 
    min-width: 300px; 
    max-width: 700px;
    padding: 3rem; 
  }
  .president-title { font-style: italic; font-size: 1.5rem; margin-bottom: 0.5rem; opacity: 0.9; font-family: inherit; }
  .president-name { font-size: 2.5rem; font-weight: normal; margin-bottom: 1.5rem; color: white; }
  .president-bio { font-size: 1.1rem; line-height: 1.8; opacity: 0.85; }

  .more-about-banner {
    background: linear-gradient(rgba(26,39,68,0.85), rgba(26,39,68,0.85)), 
                url('https://i.postimg.cc/7hrwBqSw/IMG-6318.jpg') center/cover;
    color: white;
    text-align: center;
    padding: 5rem 2rem;
  }
  .more-about-banner h2 { font-size: 2.5rem; margin-bottom: 2rem; }
  .inner-border-box { border: 1px solid rgba(255,255,255,0.6); max-width: 850px; margin: 0 auto; padding: 3rem 2rem; }
  .inner-border-box p { font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem; }
  .inner-border-box p:last-child { margin-bottom: 0; }

  .faith-hope-section { display: flex; gap: 2rem; max-width: 1100px; margin: 4rem auto; padding: 0 2rem; flex-wrap: wrap; }
  .faith-hope-card { flex: 1; min-width: 300px; background: white; text-align: center; }
  .card-img-frame { border: 4px solid #4a6b8c; padding: 0.5rem; margin-bottom: 1.5rem; background: white; }
  .card-img-frame img { width: 100%; height: auto; display: block; filter: grayscale(100%); }
  .faith-hope-card h3 { font-size: 2.2rem; margin-bottom: 1rem; color: black; font-weight: bold; }
  .faith-hope-card p { color: #555; line-height: 1.7; font-size: 1.05rem; padding: 0 1rem; }

  .values-section { background: #4a6b8c; color: white; text-align: center; padding: 4rem 2rem; }
  .values-section h2 { font-size: 2.8rem; margin-bottom: 3rem; font-weight: bold; }
  .values-grid { display: flex; max-width: 1200px; margin: 0 auto; gap: 1rem; flex-wrap: wrap; }
  .value-column { flex: 1; min-width: 220px; padding: 0 1.5rem; border-left: 1px solid rgba(255,255,255,0.3); text-align: center; }
  .value-column:first-child { border-left: none; }
  .value-column h3 { font-size: 2rem; margin-bottom: 1.5rem; font-weight: normal; border-bottom: none; color: white; display: block; }
  .value-column p { font-size: 1.05rem; opacity: 0.9; line-height: 1.6; }

  .team-section { max-width: 1100px; margin: 5rem auto; padding: 0 2rem; text-align: center; }
  .team-section h2 { font-size: 2.5rem; margin-bottom: 3rem; text-align: left; color: black; font-weight: normal; }
  .team-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 2rem; }
  .team-member { text-align: center; }
  .team-photo-box { background: #e0e0e0; margin-bottom: 1rem; line-height: 0; }
  .team-photo { width: 100%; height: auto; display: block; }
  .team-member h4 { font-size: 1.25rem; color: black; font-weight: bold; margin-bottom: 0.3rem; }
  .team-member p { font-size: 1rem; color: #666; font-style: italic; }

  section { max-width: 1000px; margin: 0 auto; padding: 3rem 2rem; }
  section h3 { color: var(--navy); font-size: 1.8rem; margin-bottom: 1rem; border-bottom: 3px solid var(--gold); display: inline-block; padding-bottom: 0.3rem; }
  .content-box { background: white; padding: 2.5rem; border-radius: 4px; box-shadow: 0 2px 5px rgba(0,0,0,0.05); }
  footer { background: var(--navy); color: white; text-align: center; padding: 2rem; margin-top: auto; font-size: 0.9rem; }
  
  @media (max-width: 768px) {
    header { display: flex; flex-direction: column; gap: 1rem; padding: 1.5rem; }
    .header-spacer { display: none; }
    nav ul { gap: 1.2rem; }
    .hero h2 { font-size: 1.6rem; }
    .president-img-box { max-width: 100%; padding: 1rem; }
    .president-text-box { padding: 1.5rem; text-align: center; }
    .value-column { border-left: none; border-bottom: 1px solid rgba(255,255,255,0.2); padding-bottom: 2rem; margin-bottom: 2rem; }
    .value-column:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
  }
`;

// --- TEMPLATE FUNCTION ---
function renderPage(title, bodyContent) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title} | UBMC of Maryland</title>
<style>${sharedStyles}</style>
</head>
<body>
  <header>
    <a href="/" class="logo-link">
      <img src="https://i.postimg.cc/RhSwnxq1/white-logo.png" alt="UBMC of Maryland Logo" class="header-logo">
    </a>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li class="dropdown">
          <button class="dropdown-btn">Auxiliaries ▾</button>
          <div class="dropdown-content">
            <a href="/auxiliaries/women">Women Auxiliary</a>
            <a href="/auxiliaries/laymen">Laymen's League</a>
            <a href="/auxiliaries/generation-now">Generation Now</a>
            <a href="/auxiliaries/bcce">BCCE</a>
          </div>
        </li>
        <li><a href="/events">Events</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
    <div class="header-spacer"></div>
  </header>

  <div class="main-content">
    ${bodyContent}
  </div>

  <footer>
    &copy; 2026 United Baptist Missionary Convention & Auxiliaries of Maryland. All rights reserved.
  </footer>
</body>
</html>`;
}

// --- DEFINE THE PAGES ---

const homePage = renderPage(
  "Home", 
  `<div class="hero">
    <h2>The United Baptist Missionary Convention & Auxiliaries of the State of Maryland</h2>
    <p>Building faith, community, and service together.</p>
  </div>
  <section>
    <h3>Welcome</h3>
    <p>Welcome to our official digital platform. Use the navigation menu above to explore our history, upcoming 2026 convention sessions, and our targeted auxiliary ministries.</p>
  </section>`
);

const aboutPage = renderPage(
  "About Us",
  `<div class="page-title-banner">
     <div class="title-card">
       <h2>UNITED BAPTIST MISSIONARY CONVENTION & Auxiliaries of the State of Maryland, Inc.</h2>
     </div>
   </div>
   
   <div class="about-container">
     <!-- PRESIDENT BIO ROW -->
     <div class="president-section">
       <div class="president-img-box">
         <img src="https://i.postimg.cc/YS47Mv34/MG-5133-(3).jpg" alt="Rev. Dr. Greggory R. Maddox" class="president-img">
       </div>
       <div class="president-text-box">
         <div class="president-title">United Baptist Missionary Convention & Auxiliaries President,</div>
         <h2 class="president-name">Rev. Dr. Greggory R. Maddox</h2>
         <p class="president-bio">Rev. Dr. Greggory Roy Maddox, a native of Pontiac, Michigan, is a graduate of Virginia Union University, where he earned both his B.A. (1984) and Master of Divinity (1987). He serves as Pastor of Faith Baptist Church in Baltimore, Maryland since 1995 and earned his Doctor of Ministry degree in 2003. Pastor Maddox is married to Valorie Marie Thomas and is the father of two sons.</p>
       </div>
     </div>

     <!-- MORE ABOUT PRESIDENT BANNER -->
     <div class="more-about-banner">
       <h2>More About Our President:</h2>
       <div class="inner-border-box">
         <p>Dr. Maddox has completed over 43 years in the Christian preaching ministry including 36 years in the pastoral ministry. Presently, he serves as the pastor of the Faith Baptist Church of Baltimore, MD where he has faithfully served since 1996. Dr. Maddox is a proven leader whose platform to RESTORE the UBMC is comprehensive, robust and attainable.</p>
         <p>Pastor Maddox is married to the former Valorie Marie Thomas of Danville, Virginia and they are the parents of two children, Brice Greggory and Joshua Kyle.</p>
       </div>
     </div>

     <!-- FAITH AND HOPE SIDE BY SIDE CARDS -->
     <div class="faith-hope-section">
       <div class="faith-hope-card">
         <div class="card-img-frame">
           <img src="https://images.unsplash.com/photo-1544427928-c49cd1e4b30a?w=500" alt="Our Faith">
         </div>
         <h3>Our Faith</h3>
         <p>We support the goals and challenges of our membership by providing meaningful involvement in all areas of humanity, Bible study, evangelism, education, and missions.</p>
       </div>
       <div class="faith-hope-card">
         <div class="card-img-frame">
           <img src="https://images.unsplash.com/photo-1438032005730-c779502df39b?w=500" alt="Our Hope">
         </div>
         <h3>Our Hope</h3>
         <p>We offer our experience and willing volunteers to provide comprehensive solutions to meet the unique needs of every Maryland church and ministry. Join us today.</p>
       </div>
     </div>

     <!-- VALUES ROW SECTION -->
     <div class="values-section">
       <h2>Our Shared Values:</h2>
       <div class="values-grid">
         <div class="value-column">
           <h3>Integrity</h3>
           <p>Maintain the highest standards of honesty, authenticity, and respect in all interactions.</p>
         </div>
         <div class="value-column">
           <h3>People</h3>
           <p>Know the difference between when to leverage technology and when to leverage people.</p>
         </div>
         <div class="value-column">
           <h3>Trust</h3>
           <p>Commit within our capabilities to ensure we gain the trust of our members and colleagues.</p>
         </div>
         <div class="value-column">
           <h3>Teamwork</h3>
           <p>Understand that teamwork, and diversity in thought and contribution are critical to our success.</p>
         </div>
       </div>
     </div>

     <!-- EXECUTIVE PRESIDENTIAL DIRECTIONAL TEAM -->
     <div class="team-section">
       <h2>UBMC Presidential Team:</h2>
       <div class="team-grid">
         <div class="team-member">
           <div class="team-photo-box">
             <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300" alt="Pastor Frank. J. Hines Jr." class="team-photo">
           </div>
           <h4>Pastor Frank J. Hines Jr.</h4>
           <p>First Vice President</p>
         </div>
         <div class="team-member">
           <div class="team-photo-box">
             <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300" alt="Pastor M. Jamal Foster" class="team-photo">
           </div>
           <h4>Pastor M. Jamal Foster</h4>
           <p>Second Vice President</p>
         </div>
         <div class="team-member">
           <div class="team-photo-box">
             <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300" alt="Pastor Quinton M. Herbert" class="team-photo">
           </div>
           <h4>Pastor Quinton M. Herbert</h4>
           <p>Third Vice President</p>
         </div>
         <div class="team-member">
           <div class="team-photo-box">
             <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300" alt="Pastor Ayanna L. Franklin" class="team-photo">
           </div>
           <h4>Pastor Ayanna L. Franklin</h4>
           <p>Executive Secretary</p>
         </div>
       </div>
     </div>
   </div>`
);

const womenPage = renderPage(
  "Women Auxiliary",
  `<div class="page-title-banner"><h2>Women Auxiliary</h2></div>
  <section>
    <div class="content-box">
      <h3>Empowering Christian Women</h3>
      <p>Welcome to the dedicated page for the Women Auxiliary. Content detailing upcoming fellowships, missionary circles, and state-wide service initiatives will appear here shortly.</p>
    </div>
  </section>`
);

const laymenPage = renderPage(
  "Laymen's League",
  `<div class="page-title-banner"><h2>Laymen's League</h2></div>
  <section>
    <div class="content-box">
      <h3>Developing Spiritual Leadership</h3>
      <p>Welcome to the Laymen's League webpage. This distinct space will host information regarding our men's brotherhood fellowships, community outreach, and mentorship programs across Maryland.</p>
    </div>
  </section>`
);

const genNowPage = renderPage(
  "Generation Now",
  `<div class="page-title-banner"><h2>Generation Now</h2></div>
  <section>
    <div class="content-box">
      <h3>Youth & Young Adults</h3>
      <p>Welcome to Generation Now. This page is dedicated to highlighting our vibrant youth and young adult conventions, contemporary worship fellowships, and dynamic service networks.</p>
    </div>
  </section>`
);

const bccePage = renderPage(
  "BCCE",
  `<div class="page-title-banner"><h2>BCCE</h2></div>
  <section>
    <div class="content-box" style="text-align: center;">
      <img src="https://i.postimg.cc/RVxjyPyV/BCCE-Logo.png" alt="Baptist Convention Congress of Education Logo" style="max-width: 250px; width: 100%; height: auto; border-radius: 4px; margin-bottom: 2rem;">
      <div style="text-align: left;">
        <h3>Baptist Convention Congress of Education</h3>
        <p>Welcome to the BCCE page. Content coming soon highlighting Christian education courses, leadership training schools, certificates, and academic assemblies for the convention.</p>
      </div>
    </div>
  </section>`
);

const eventsPage = renderPage(
  "Events Calendar",
  `<div class="page-title-banner"><h2>Convention Calendar</h2></div>
  <section>
    <div class="content-box">
      <h3>2026 Scheduled Sessions</h3>
      <p>Our official lineup of events, board meetings, and annual convention schedules will be published here. Check back soon for updates.</p>
    </div>
  </section>`
);

const contactPage = renderPage(
  "Contact",
  `<div class="page-title-banner"><h2>Contact Us</h2></div>
  <section>
    <div class="content-box">
      <h3>Get in Touch</h3>
      <p style="font-size: 1.1rem; margin-bottom: 1rem;">We would love to hear from you. Please reach out via our official communication channels:</p>
      <p><strong>Email:</strong> <a href="mailto:info@ubmcmd.com" style="color:var(--navy)">info@ubmcmd.com</a></p>
      <p><strong>Phone:</strong> <a href="tel:0000000000" style="color:var(--navy)">(000) 000-0000</a></p>
    </div>
  </section>`
);

// --- THE TRAFFIC COP (Cloudflare Routing Logic) ---
export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname;

    if (path === "/" || path === "" || path === "/index.html") {
      return new Response(homePage, { headers: { "content-type": "text/html;charset=UTF-8" } });
    } else if (path === "/about" || path === "/about.html") {
      return new Response(aboutPage, { headers: { "content-type": "text/html;charset=UTF-8" } });
    } else if (path === "/auxiliaries/women" || path === "/women.html") {
      return new Response(womenPage, { headers: { "content-type": "text/html;charset=UTF-8" } });
    } else if (path === "/auxiliaries/laymen" || path === "/laymen.html") {
      return new Response(laymenPage, { headers: { "content-type": "text/html;charset=UTF-8" } });
    } else if (path === "/auxiliaries/generation-now" || path === "/generation-now.html") {
      return new Response(genNowPage, { headers: { "content-type": "text/html;charset=UTF-8" } });
    } else if (path === "/auxiliaries/bcce" || path === "/bcce.html") {
      return new Response(bccePage, { headers: { "content-type": "text/html;charset=UTF-8" } });
    } else if (path === "/events" || path === "/events.html") {
      return new Response(eventsPage, { headers: { "content-type": "text/html;charset=UTF-8" } });
    } else if (path === "/contact" || path === "/contact.html") {
      return new Response(contactPage, { headers: { "content-type": "text/html;charset=UTF-8" } });
    }

    return new Response("<h1>404 Page Not Found</h1><p>Return to <a href='/'>Home</a></p>", {
      status: 404,
      headers: { "content-type": "text/html;charset=UTF-8" },
    });
  },
};
