// Shared layout template function to wrap pages with unified header/footer
function getPageLayout(title, content, activeNav = '') {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} | United Baptist Missionary Convention</title>
    <style>
        :root {
            --primary: #1e3a8a;
            --secondary: #0d9488;
            --dark: #1f2937;
            --light: #f3f4f6;
            --white: #ffffff;
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: var(--dark); line-height: 1.6; background-color: #fafafa; }
        
        /* Header & Navigation */
        header { background: var(--primary); padding: 1rem 2rem; position: sticky; top: 0; z-index: 1000; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .header-container { max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; }
        .logo-area { display: flex; align-items: center; gap: 1rem; text-decoration: none; color: var(--white); }
        .logo-img { height: 50px; width: auto; filter: brightness(0) invert(1); }
        .logo-text h1 { font-size: 1.25rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; }
        .logo-text p { font-size: 0.8rem; color: #93c5fd; }
        
        nav { display: flex; gap: 1.5rem; align-items: center; }
        nav a { color: #e0f2fe; text-decoration: none; font-weight: 500; font-size: 0.95rem; padding: 0.5rem 0.75rem; border-radius: 4px; transition: all 0.3s ease; }
        nav a:hover, nav a.active { color: var(--white); background: rgba(255,255,255,0.1); }
        
        /* Dropdown Menu */
        .dropdown { position: relative; display: inline-block; }
        .dropdown-content { display: none; position: absolute; background-color: var(--white); min-width: 200px; box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.15); border-radius: 4px; overflow: hidden; z-index: 1; top: 100%; left: 0; }
        .dropdown-content a { color: var(--dark); padding: 12px 16px; text-decoration: none; display: block; font-size: 0.9rem; }
        .dropdown-content a:hover { background-color: var(--light); color: var(--primary); }
        .dropdown:hover .dropdown-content { display: block; }
        
        /* Layout Blocks */
        .hero { background: linear-gradient(rgba(30, 58, 138, 0.85), rgba(30, 58, 138, 0.85)), url('https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=1200&q=80') no-repeat center center/cover; color: var(--white); padding: 5rem 2rem; text-align: center; }
        .hero h2 { font-size: 2.5rem; margin-bottom: 1rem; }
        .hero p { font-size: 1.2rem; max-width: 800px; margin: 0 auto; color: #bfdbfe; }
        
        main { max-width: 1200px; margin: 2rem auto; padding: 0 1.5rem; min-height: 60vh; }
        .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-top: 2rem; }
        .card { background: var(--white); padding: 2rem; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); border-top: 4px solid var(--primary); }
        .card h3 { margin-bottom: 1rem; color: var(--primary); }
        
        /* Footer */
        footer { background: var(--dark); color: #9ca3af; padding: 3rem 2rem 1.5rem; margin-top: 4rem; border-top: 4px solid var(--secondary); }
        .footer-container { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; padding-bottom: 2rem; border-bottom: 1px solid #374151; }
        .footer-col h4 { color: var(--white); margin-bottom: 1.2rem; font-size: 1.1rem; }
        .footer-col ul { list-style: none; }
        .footer-col ul li { margin-bottom: 0.75rem; }
        .footer-col ul li a { color: #9ca3af; text-decoration: none; transition: color 0.2s; }
        .footer-col ul li a:hover { color: var(--white); }
        .footer-bottom { text-align: center; padding-top: 1.5rem; font-size: 0.85rem; }
        
        /* Mobile Responsive adjustments */
        @media (max-width: 768px) {
            .header-container { flex-direction: column; gap: 1rem; text-align: center; }
            nav { flex-wrap: wrap; justify-content: center; gap: 0.75rem; }
        }
    </style>
</head>
<body>

    <header>
        <div class="header-container">
            <a href="/" class="logo-area">
                <img src="https://images.unsplash.com/photo-1544427920-c49ccfb85579?auto=format&fit=crop&w=100&q=80" alt="UBMC Logo" class="logo-img">
                <div class="logo-text">
                    <h1>UBMC</h1>
                    <p>United Baptist Missionary Convention</p>
                </div>
            </a>
            <nav>
                <a href="/" class="${activeNav === 'home' ? 'active' : ''}">Home</a>
                <a href="/about" class="${activeNav === 'about' ? 'active' : ''}">About</a>
                <div class="dropdown">
                    <a href="#" class="${activeNav === 'auxiliaries' ? 'active' : ''}">Auxiliaries ▼</a>
                    <div class="dropdown-content">
                        <a href="/auxiliaries/women">Women's Department</a>
                        <a href="/auxiliaries/laymen">Laymen's League</a>
                        <a href="/auxiliaries/generation-now">Generation Now (Youth)</a>
                        <a href="/auxiliaries/bcce">BCCE</a>
                    </div>
                </div>
                <a href="/events" class="${activeNav === 'events' ? 'active' : ''}">Events</a>
                <a href="/contact" class="${activeNav === 'contact' ? 'active' : ''}">Contact</a>
            </nav>
        </div>
    </header>

    ${content}

    <footer>
        <div class="footer-container">
            <div class="footer-col">
                <h4>About UBMC</h4>
                <p>We are a network of like-minded and mission-driven individuals, churches, and organizations, headquartered in Baltimore, Maryland, working together to impact our state and beyond with the Good News Gospel of Jesus Christ.</p>
            </div>
            <div class="footer-col">
                <h4>Mailing Address</h4>
                <p>PO Box 23742</p>
                <p>Baltimore, MD 21203, USA</p>
            </div>
            <div class="footer-col">
                <h4>Contact Us</h4>
                <p>Phone: (410) 523-2950</p>
                <p>Email: UBMCMD@gmail.com</p>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2026 United Baptist Missionary Convention. All Rights Reserved.</p>
        </div>
    </footer>

</body>
</html>`;
}

// Route handler dictionary containing unique page content blocks
const pages = {
  home: () => getPageLayout(
    'Home', 
    `<section class="hero">
        <h2>About UBMC:</h2>
        <p>We are a network of like-minded and mission-driven individuals, churches, and organizations, headquartered in Baltimore, Maryland, working together to impact our state and beyond with the Good News Gospel of Jesus Christ.</p>
     </section>
     <main>
        <div class="grid">
            <div class="card">
                <h3>Our Mission</h3>
                <p>To support local ministries, encourage spiritual growth, and coordinate impactful missionary outreach across our member congregations.</p>
            </div>
            <div class="card">
                <h3>Mailing Address</h3>
                <p>PO Box 23742</p>
                <p>Baltimore, MD 21203, USA</p>
            </div>
            <div class="card">
                <h3>Contact</h3>
                <p>Phone: (410) 523-2950</p>
                <p>Email: UBMCMD@gmail.com</p>
            </div>
        </div>
     </main>`, 
    'home'
  ),

  about: () => getPageLayout(
    'About Us',
    `<main>
        <h2 style="color:var(--primary); margin-bottom:1rem; font-size:2rem;">About UBMC</h2>
        <p style="font-size:1.1rem; margin-bottom:1.5rem;">We are a network of like-minded and mission-driven individuals, churches, and organizations, headquartered in Baltimore, Maryland, working together to impact our state and beyond with the Good News Gospel of Jesus Christ.</p>
        <div class="card" style="margin-bottom:2rem;">
            <h3>Our Core Values</h3>
            <p>We are built upon the foundational pillars of scriptural sound education, intentional missionary outreach, and fostering strong collaborative leadership among pastors and lay members alike.</p>
        </div>
     </main>`,
    'about'
  ),

  events: () => getPageLayout(
    'Events',
    `<main>
        <h2 style="color:var(--primary); margin-bottom:1rem; font-size:2rem;">Upcoming Calendar & Assemblies</h2>
        <div class="grid">
            <div class="card">
                <span style="color:var(--secondary); font-weight:bold; text-transform:uppercase;">Annual Session</span>
                <h3 style="margin-top:0.5rem;">Statewide Annual Fellowship</h3>
                <p>Join our parent convention body and auxiliary units for programmatic updates, structural meetings, and combined fellowship worship.</p>
            </div>
            <div class="card">
                <span style="color:var(--secondary); font-weight:bold; text-transform:uppercase;">Leadership Congress</span>
                <h3 style="margin-top:0.5rem;">Christian Education Training</h3>
                <p>Interactive educational workshops specifically structured for workers, church staff, deacons, and leadership developers.</p>
            </div>
        </div>
     </main>`,
    'events'
  ),

  contact: () => getPageLayout(
    'Contact Us',
    `<main>
        <h2 style="color:var(--primary); margin-bottom:1rem; font-size:2rem;">Get in Touch</h2>
        <p style="margin-bottom:2rem;">Have questions about auxiliary schedules, affiliation, or event details? Send us a message.</p>
        <div class="card" style="max-width:600px;">
            <h3 style="margin-bottom:1.5rem;">Contact Directory</h3>
            <p><strong>Mailing Address:</strong></p>
            <p>PO Box 23742</p>
            <p style="margin-bottom:1rem;">Baltimore, MD 21203, USA</p>
            <p><strong>Phone:</strong> (410) 523-2950</p>
            <p><strong>Email:</strong> UBMCMD@gmail.com</p>
        </div>
     </main>`,
    'contact'
  ),

  // Auxiliaries Sub-Routes
  women: () => getPageLayout("Women's Department", `<main><h2>Women's Department</h2><p>Organizing missions, community engagement, and empowerment networks for women throughout our sister churches.</p></main>`, 'auxiliaries'),
  laymen: () => getPageLayout("Laymen's League", `<main><h2>Laymen's League</h2><p>Building strong relationships, Christian service, and mentorship programs for men within our member communities.</p></main>`, 'auxiliaries'),
  generationNow: () => getPageLayout("Generation Now", `<main><h2>Generation Now (Youth)</h2><p>Cultivating young leaders, modern spiritual development, and vibrant service projects for our youth groups.</p></main>`, 'auxiliaries'),
  bcce: () => getPageLayout("BCCE", `<main><h2>Board of Christian Education (BCCE)</h2><p>Providing standardized curricula, church infrastructure support, and teacher certifications across ministries.</p></main>`, 'auxiliaries')
};

// "Traffic Cop" Server Pipeline Entrypoint
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname.toLowerCase();

    // Setup HTTP content security response headers
    const headers = { 'Content-Type': 'text/html;charset=UTF-8' };

    // Router Switching Logic
    if (path === '/' || path === '/home') {
      return new Response(pages.home(), { headers });
    } else if (path === '/about') {
      return new Response(pages.about(), { headers });
    } else if (path === '/events') {
      return new Response(pages.events(), { headers });
    } else if (path === '/contact') {
      return new Response(pages.contact(), { headers });
    } else if (path === '/auxiliaries/women') {
      return new Response(pages.women(), { headers });
    } else if (path === '/auxiliaries/laymen') {
      return new Response(pages.laymen(), { headers });
    } else if (path === '/auxiliaries/generation-now') {
      return new Response(pages.generationNow(), { headers });
    } else if (path === '/auxiliaries/bcce') {
      return new Response(pages.bcce(), { headers });
    }

    // Fallback 404 handler inside layout if resource doesn't explicitly match
    return new Response(
      getPageLayout('Page Not Found', `<main><h2>404 Page Not Found</h2><p>The requested page could not be located. Use the links above to return safely.</p></main>`), 
      { status: 404, headers }
    );
  }
};
