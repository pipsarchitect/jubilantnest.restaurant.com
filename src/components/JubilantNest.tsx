"use client";

import React, { useEffect, useRef, useState } from 'react';

export default function JubilantNest() {
  const [showPrompt, setShowPrompt] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({ name: '', price: '' });
  const reviewsRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reviews = reviewsRef.current;
    if (!reviews) return;

    let scrollPos = 0;
    const interval = setInterval(() => {
      scrollPos += 320;
      if (scrollPos > reviews.scrollWidth - reviews.clientWidth) {
        scrollPos = 0;
      }
      reviews.scrollTo({ left: scrollPos, behavior: 'smooth' });
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;

    let index = 0;
    const cards = menu.children;
    const totalCards = cards.length;

    const interval = setInterval(() => {
      index = (index + 1) % totalCards;
      const targetCard = cards[index] as HTMLElement;
      if (targetCard) {
        menu.scrollTo({
          top: targetCard.offsetTop - menu.offsetTop - 20, // Adjusted for padding
          behavior: 'smooth'
        });
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const openReserve = () => {
    const datetimeInput = document.getElementById('datetime') as HTMLInputElement;
    if (datetimeInput) {
      datetimeInput.focus();
    }
    window.location.hash = '#contact';
  };

    const callNumber = "254745314048";
    const paymentNumber = "254101274621";
    const displayCallPhone = "+254 745314048";
    const displayPaymentPhone = "+254 101274621";

    const handleBook = (name: string, price: string) => {
      setBookingDetails({ name, price });
      setShowPrompt(true);
    };

    const confirmBooking = () => {
      const waMessage = encodeURIComponent(`*New Booking Inquiry*\n\nI am interested in:\n*Item:* ${bookingDetails.name}\n*Price:* ${bookingDetails.price}\n\nI'll be making the payment of ${bookingDetails.price} to ${displayPaymentPhone}.`);
      window.location.href = `https://wa.me/${paymentNumber}?text=${waMessage}`;
      setShowPrompt(false);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const name = formData.get('name') as string;
      const phone = formData.get('phone') as string;
      const datetime = formData.get('datetime') as string;
      const people = formData.get('people') as string;
      const notes = formData.get('notes') as string;

      const body = `Name: ${name}\nPhone: ${phone}\nDate/Time: ${datetime}\nPax: ${people}\nNotes: ${notes}`;
      
      const waMessage = encodeURIComponent(`*New Reservation Inquiry*\n\n${body}\n\nI understand payments are made to ${displayPaymentPhone}.`);
      window.location.href = `https://wa.me/${paymentNumber}?text=${waMessage}`;
    };

    const IMAGES = {
      LOGO: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1d7c0fb2-48f5-4a1a-a29b-ef7690a00e5d/logo-1772192824947.jpeg?width=8000&height=8000&resize=contain",
      EXTERIOR: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1d7c0fb2-48f5-4a1a-a29b-ef7690a00e5d/6-1772192392393.jpeg",

    COCKTAILS: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1d7c0fb2-48f5-4a1a-a29b-ef7690a00e5d/1-1772192595272.jpeg?width=8000&height=8000&resize=contain",
    GRILL: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1d7c0fb2-48f5-4a1a-a29b-ef7690a00e5d/WhatsApp-Image-2026-02-27-at-3.40.33-AM-1772192595271.jpeg?width=8000&height=8000&resize=contain",
    GRILL_SERVED: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1d7c0fb2-48f5-4a1a-a29b-ef7690a00e5d/3-1772192595276.jpeg?width=8000&height=8000&resize=contain",
    BREAKFAST_1: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1d7c0fb2-48f5-4a1a-a29b-ef7690a00e5d/2-1772192595255.jpeg?width=8000&height=8000&resize=contain",
    BREAKFAST_2: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1d7c0fb2-48f5-4a1a-a29b-ef7690a00e5d/5-1772192595258.jpeg?width=8000&height=8000&resize=contain",
    LOUNGE: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1d7c0fb2-48f5-4a1a-a29b-ef7690a00e5d/7-1772192392397.jpeg",
    ROOM_1: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1d7c0fb2-48f5-4a1a-a29b-ef7690a00e5d/2-1772192392397.jpeg",
    ROOM_2: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1d7c0fb2-48f5-4a1a-a29b-ef7690a00e5d/5-1772192392392.jpeg"
  };

  return (
    <div className="container">
      <header className="nav-header">
          <div className="nav-bar">
            <div className="brand" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ background: '#fff', padding: '4px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={IMAGES.LOGO} alt="Jubilant Nest Logo" style={{ height: '42px', width: 'auto' }} />
              </div>
              <div>
                <div className="site-title">Jubilant Nest</div>
                <div className="text-small text-muted" style={{ letterSpacing: '0.05em', textTransform: 'uppercase', fontSize: '10px', fontWeight: 600 }}>Restaurant & Accommodation</div>
              </div>
            </div>

          <nav className="nav-links">
            <a href="#about">The Nest</a>
            <a href="#menu">Our Menu</a>
            <a href="#stay">Stay</a>
            <a href="#gallery">Atmosphere</a>
            <a href="#contact" className="cta">Book Now</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero-section container">
          <div className="hero-left">
            <span className="kicker">An Oasis Along the Nyeri–Nairobi Highway</span>
            <h1>Where calm meets <br /><span style={{ color: 'var(--accent)' }}>jubilation</span>.</h1>
            <p>Experience a cozy sanctuary designed for the discerning traveler. From soulful nyama choma to our signature Uji Power breakfast, we offer a private garden setting and premium accommodation.</p>
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={openReserve}>Reserve a Table</button>
              <a href="#stay" className="btn btn-ghost">View Rooms</a>
            </div>
            <div className="stat-grid">
              <div className="stat">
                <div className="num">4.3★</div>
                <div className="label">Google Rating</div>
              </div>
              <div className="stat">
                <div className="num">Private</div>
                <div className="label">Garden Seating</div>
              </div>
              <div className="stat">
                <div className="num">Premium</div>
                <div className="label">Accommodation</div>
              </div>
            </div>
          </div>
          <div className="hero-right" style={{ backgroundImage: `url(${IMAGES.EXTERIOR})` }}>
            <div className="hero-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '12px' }}>
                <div>
                  <div className="text-small text-muted" style={{ textTransform: 'uppercase', marginBottom: '4px' }}>Chef&apos;s Signature</div>
                  <div style={{ fontWeight: 700, fontSize: '24px', fontFamily: 'var(--font-playfair)' }}>Nyama Choma Platter</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontWeight: 700, color: 'var(--accent)', fontSize: '20px' }}>KES 1,800</div>
                  <div className="text-small text-muted">Serves 2–3</div>
                </div>
              </div>
              <div className="text-muted" style={{ fontSize: '0.95rem', lineHeight: 1.6 }}>
                Our pride: slow-smoked, charcoal-grilled beef with secret house gravy. Best enjoyed under the shade of our private garden.
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section-pad container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '80px', alignItems: 'center' }}>
            <div>
              <span className="kicker" style={{ marginBottom: '16px' }}>Our Story</span>
              <h2 style={{ fontSize: '3rem', fontFamily: 'var(--font-playfair)', marginBottom: '24px' }}>The sanctuary you&apos;ve <br />been searching for.</h2>
              <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '24px' }}>
                Located near Gatitu center, Jubilant Nest is more than just a rest-stop. It&apos;s a destination for those who value privacy and authentic Kenyan hospitality. Whether you&apos;re stopping for our famous &quot;Uji Power&quot; or settling in for an evening of grilled specialties, our garden corners offer the perfect escape from the highway hum.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                <div className="text-muted">
                  <div style={{ fontWeight: 700, color: '#fff', marginBottom: '8px' }}>Private Dining</div>
                  Secret garden corners for intimate gatherings and business meetings.
                </div>
                <div className="text-muted">
                  <div style={{ fontWeight: 700, color: '#fff', marginBottom: '8px' }}>Restful Stays</div>
                  Cozy, well-appointed rooms for travelers looking for a peaceful night.
                </div>
              </div>
            </div>
            <div className="restaurant-card" style={{ background: 'rgba(176, 141, 62, 0.05)', borderColor: 'rgba(176, 141, 62, 0.2)' }}>
              <h3 style={{ marginBottom: '20px' }}>At a Glance</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }} className="text-muted">
                <li style={{ padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between' }}>
                  <span>Opening Hours</span>
                  <span style={{ color: '#fff' }}>07:00 — 22:00</span>
                </li>
                  <li style={{ padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between' }}>
                    <span>Location</span>
                    <span style={{ color: '#fff' }}>Kiamuiru, Nyeri</span>
                  </li>

                <li style={{ padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between' }}>
                  <span>Specialty</span>
                  <span style={{ color: '#fff' }}>Nyama Choma</span>
                </li>
              </ul>
              <div style={{ marginTop: '32px', display: 'grid', gap: '12px' }}>
                <button className="btn btn-primary" onClick={openReserve}>Secure a Table</button>
                <a className="btn btn-ghost" href="#contact" style={{ textAlign: 'center' }}>Contact Concierge</a>
              </div>
            </div>
          </div>
        </section>

              <section id="menu" className="section-pad container">
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                  <span className="kicker">Curated Flavours</span>
                  <h2 className="section-title">Menu Highlights</h2>
                </div>
                <div className="menu-slider-vertical" ref={menuRef}>
                  {/* Individual Dish Cards for "One by One" feel */}
                  <div className="restaurant-card dish-slide">
                    <div className="kicker" style={{ marginBottom: '12px', fontSize: '10px' }}>Tropical Breakfast</div>
                    <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
                      <img src={IMAGES.BREAKFAST_1} alt="Tropical Breakfast" style={{ width: '240px', height: '280px', objectFit: 'cover', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }} />
                        <div style={{ flex: 1 }}>
                          <h3 style={{ fontSize: '2rem', marginBottom: '8px' }}>The Tropical Nest</h3>
                          <div style={{ color: 'var(--accent)', fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px' }}>From KES 450</div>
                          <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: 1.6 }}>Authentic Uji Power, fresh tropical juices, sausages and local greens. A vibrant start to your day.</p>
                          <button className="btn btn-ghost" onClick={() => handleBook("Tropical Breakfast", "KES 450")} style={{ marginTop: '24px' }}>Order Now</button>
                        </div>
                      </div>
                    </div>

                  <div className="restaurant-card dish-slide">
                    <div className="kicker" style={{ marginBottom: '12px', fontSize: '10px' }}>English Breakfast</div>
                    <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
                      <img src={IMAGES.BREAKFAST_2} alt="English Breakfast" style={{ width: '240px', height: '280px', objectFit: 'cover', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }} />
                      <div style={{ flex: 1 }}>
                        <h3 style={{ fontSize: '2rem', marginBottom: '8px' }}>Classic English Breakfast</h3>
                        <div style={{ color: 'var(--accent)', fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px' }}>KES 550</div>
                        <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: 1.6 }}>Golden toast, crispy bacon, eggs cooked to perfection & seasonal fruit. The ultimate morning comfort.</p>
                        <button className="btn btn-ghost" onClick={() => handleBook("English Breakfast", "KES 550")} style={{ marginTop: '24px' }}>Order Now</button>
                      </div>
                    </div>
                  </div>

                    <div className="restaurant-card dish-slide">
                      <div className="kicker" style={{ marginBottom: '12px', fontSize: '10px' }}>Flame & Ember</div>
                      <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
                        <img src={IMAGES.GRILL_SERVED} alt="Choma & Fries" style={{ width: '240px', height: '280px', objectFit: 'cover', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }} />
                        <div style={{ flex: 1 }}>
                          <h3 style={{ fontSize: '2rem', marginBottom: '8px' }}>Choma & Fries</h3>
                          <div style={{ color: 'var(--accent)', fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px' }}>KES 1,200</div>
                          <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: 1.6 }}>Slow-smoked, charcoal-grilled beef served with a side of perfectly crisp chips and kachumbari.</p>
                          <button className="btn btn-ghost" onClick={() => handleBook("Choma & Fries", "KES 1,200")} style={{ marginTop: '24px' }}>Order Now</button>
                        </div>
                      </div>
                    </div>

                    <div className="restaurant-card dish-slide">
                      <div className="kicker" style={{ marginBottom: '12px', fontSize: '10px' }}>Flame & Ember</div>
                      <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
                        <img src={IMAGES.GRILL} alt="The Platter" style={{ width: '240px', height: '280px', objectFit: 'cover', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }} />
                        <div style={{ flex: 1 }}>
                          <h3 style={{ fontSize: '2rem', marginBottom: '8px' }}>The Signature Platter</h3>
                          <div style={{ color: 'var(--accent)', fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px' }}>KES 1,800</div>
                          <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: 1.6 }}>The Chef&apos;s pride. A generous selection of our finest charcoal-grilled specialties, perfect for sharing.</p>
                          <button className="btn btn-ghost" onClick={() => handleBook("The Signature Platter", "KES 1,800")} style={{ marginTop: '24px' }}>Order Now</button>
                        </div>
                      </div>
                    </div>

                    <div className="restaurant-card dish-slide">
                      <div className="kicker" style={{ marginBottom: '12px', fontSize: '10px' }}>Artisanal Sips</div>
                      <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
                        <img src={IMAGES.COCKTAILS} alt="Garden Refreshers" style={{ width: '240px', height: '280px', objectFit: 'cover', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }} />
                        <div style={{ flex: 1 }}>
                          <h3 style={{ fontSize: '2rem', marginBottom: '8px' }}>Garden Cocktails</h3>
                          <div style={{ color: 'var(--accent)', fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px' }}>From KES 600</div>
                          <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: 1.6 }}>Hand-crafted cocktails mixed with seasonal garden fruit. Refreshing, elegant and modern.</p>
                          <button className="btn btn-ghost" onClick={() => handleBook("Artisanal Sips", "From KES 600")} style={{ marginTop: '24px' }}>Order Now</button>
                        </div>
                      </div>
                    </div>
                </div>
              </section>


        <section id="stay" className="section-pad container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="kicker">Restful Nights</span>
            <h2 className="section-title">Accommodation</h2>
          </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
              <div className="restaurant-card" style={{ padding: 0, overflow: 'hidden' }}>
                <img src={IMAGES.ROOM_1} alt="Room 1" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                <div style={{ padding: '32px' }}>
                  <h3>Deluxe Sanctuary</h3>
                  <p className="text-muted">Cozy rooms featuring warm mustard tones and hand-crafted wooden furniture. Designed for ultimate peace.</p>
                  <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontWeight: 700, fontSize: '1.2rem', color: 'var(--accent)' }}>KES 3,500 / night</span>
                    <button className="btn btn-primary" onClick={() => handleBook("Deluxe Sanctuary Room", "KES 3,500")}>Inquire</button>
                  </div>
                </div>
              </div>
              <div className="restaurant-card" style={{ padding: 0, overflow: 'hidden' }}>
                <img src={IMAGES.ROOM_2} alt="Room 2" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                <div style={{ padding: '32px' }}>
                  <h3>Executive Nest</h3>
                  <p className="text-muted">Spacious en-suite rooms with elegant finishes, perfect for business travelers or weekend getaways.</p>
                  <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontWeight: 700, fontSize: '1.2rem', color: 'var(--accent)' }}>KES 4,500 / night</span>
                    <button className="btn btn-primary" onClick={() => handleBook("Executive Nest Room", "KES 4,500")}>Inquire</button>
                  </div>
                </div>
              </div>
            </div>
        </section>

        <section id="gallery" className="section-pad container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="kicker">The Vibe</span>
            <h2 className="section-title">Atmosphere</h2>
          </div>
          <div className="gallery-grid">
            <img src={IMAGES.LOUNGE} alt="interior lounge" />
            <div style={{ display: 'grid', gridTemplateRows: '1fr', gap: '20px' }}>
              <img src={IMAGES.EXTERIOR} alt="exterior vibe" />
            </div>
          </div>
        </section>

        <section id="reviews" className="section-pad container">
          <h2 className="section-title">Guest Reflections</h2>
          <div className="reviews-container" ref={reviewsRef}>
            <div className="review-item">
              <div className="name">Charity Migwi</div>
              <div className="text-small text-muted" style={{ marginBottom: '16px' }}>Verified Local Guide</div>
              <p className="text-muted" style={{ fontStyle: 'italic', lineHeight: 1.7 }}>
                &quot;I had the pleasure of dining at Jubilant Nest... the ambience is calm, inviting and remarkably well organized. Service by Manu was outstanding.&quot;
              </p>
            </div>
            <div className="review-item">
              <div className="name">Martin Wanjohi</div>
              <div className="text-small text-muted" style={{ marginBottom: '16px' }}>Highway Traveler</div>
              <p className="text-muted" style={{ fontStyle: 'italic', lineHeight: 1.7 }}>
                &quot;Just the right stop-over joint along Marua-Nyeri road... The &apos;Uji Power&apos; is legitimate and provides real fuel for the long drive ahead.&quot;
              </p>
            </div>
            <div className="review-item">
              <div className="name">Jaymer Agencies</div>
              <div className="text-small text-muted" style={{ marginBottom: '16px' }}>Business Booking</div>
              <p className="text-muted" style={{ fontStyle: 'italic', lineHeight: 1.7 }}>
                &quot;A truly cozy getaway where privacy, quiet and peaceful moments can be enjoyed just steps away from the highway buzz.&quot;
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="section-pad container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="kicker">Reservations</span>
            <h2 className="section-title">Book Your Experience</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '40px', alignItems: 'start' }}>
            <div>
              <form className="reserve-form" onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <input type="text" name="name" placeholder="Full Name" required />
                  <input type="tel" name="phone" placeholder="Phone Number" required />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '16px' }}>
                  <input type="datetime-local" id="datetime" name="datetime" required />
                  <select name="people">
                    <option>1 Person</option>
                    <option>2 People</option>
                    <option>3-4 People</option>
                    <option>5+ People</option>
                    <option>Room Booking</option>
                  </select>
                </div>
                <textarea name="notes" rows={4} placeholder="Special requests (e.g., quiet garden table, room preferences, corporate event)"></textarea>
                      <div style={{ display: 'flex', gap: '16px' }}>
                        <button className="btn btn-primary" type="submit" style={{ flex: 1 }}>Send Inquiry</button>
                        <button className="btn btn-ghost" type="button" onClick={() => window.location.href=`tel:${displayCallPhone}`}>Call Directly</button>
                      </div>

                    <p className="text-muted" style={{ textAlign: 'center', marginTop: '16px' }}>
                      We usually confirm all inquiries within 30 minutes.
                    </p>
                  </form>
                </div>
                <div className="restaurant-card" style={{ background: 'rgba(255,255,255,0.01)' }}>
                  <h3 style={{ marginBottom: '24px' }}>Visit Us</h3>
                  <div className="text-muted" style={{ marginBottom: '24px' }}>
                    <div style={{ fontWeight: 700, color: '#fff', marginBottom: '4px' }}>Location</div>
                    Kiamuiru, past Gatitu <br />
                    along Nyeri-Nairobi Highway
                  </div>
                  <div className="text-muted" style={{ marginBottom: '24px' }}>
                    <div style={{ fontWeight: 700, color: '#fff', marginBottom: '4px' }}>Reservations & Calls</div>
                    {displayCallPhone}
                  </div>
                  <div className="text-muted" style={{ marginBottom: '24px' }}>
                    <div style={{ fontWeight: 700, color: '#fff', marginBottom: '4px' }}>Payments (WhatsApp)</div>
                    <a href={`https://wa.me/${paymentNumber}`} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', textDecoration: 'none' }}>
                      {displayPaymentPhone}
                    </a>
                    <div style={{ marginTop: '8px', fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 600 }}>
                      * Pay all bookings to this number
                    </div>
                  </div>
                  <div className="text-muted" style={{ marginBottom: '32px' }}>
                    <div style={{ fontWeight: 700, color: '#fff', marginBottom: '4px' }}>Socials</div>
                    <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
                       <a href="#" className="text-small" style={{ color: '#fff' }}>FB: @Jubilant Nest Restaurant-Nyeri</a>
                    </div>
                    <div style={{ display: 'flex', gap: '12px', marginTop: '4px' }}>
                       <a href="#" className="text-small" style={{ color: '#fff' }}>IG: @nestjubilant</a>
                    </div>
                  </div>
                  <a href="https://www.google.com/maps/search/Jubilant+Nest+Restaurant+Gatitu" target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ display: 'block', textAlign: 'center' }}>
                    Get Directions
                  </a>
                </div>
              </div>
            </section>
          </main>

          <footer className="site-footer container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <div style={{ background: '#fff', padding: '2px', borderRadius: '4px', display: 'flex' }}>
                    <img src={IMAGES.LOGO} alt="logo" style={{ height: '30px', width: 'auto' }} />
                  </div>
                  <div className="site-title" style={{ fontSize: '1.2rem' }}>Jubilant Nest</div>
                </div>
                <div className="text-muted" style={{ fontSize: '0.9rem' }}>
                  Kiamuiru, past Gatitu along Nyeri-Nairobi Highway <br />
                  Call: {displayCallPhone} | Pay: {displayPaymentPhone}
                </div>
              </div>
                <div style={{ textAlign: 'right' }}>
                  <div className="text-muted" style={{ marginBottom: '8px' }}>2026 . All Rights Reserved . Jubilant Nest</div>
                  <div className="text-small text-muted">Official Restaurant & Accommodation Partner</div>
                </div>
            </div>
          </footer>

          {showPrompt && (
            <div style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0,0,0,0.85)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 9999,
              padding: '20px'
            }}>
              <div className="restaurant-card" style={{ maxWidth: '400px', textAlign: 'center', border: '1px solid var(--accent)' }}>
                <span className="kicker" style={{ marginBottom: '16px' }}>Booking Confirmation</span>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '12px' }}>{bookingDetails.name}</h3>
                <div style={{ fontSize: '2rem', color: 'var(--accent)', fontWeight: 700, marginBottom: '24px' }}>
                  {bookingDetails.price}
                </div>
                <p className="text-muted" style={{ marginBottom: '32px', fontSize: '1rem', lineHeight: 1.6 }}>
                  To secure your booking, please proceed to WhatsApp. <br />
                  <strong>Payment should be made to:</strong><br />
                  <span style={{ color: '#fff', fontSize: '1.2rem' }}>{displayPaymentPhone}</span>
                </p>
                <div style={{ display: 'grid', gap: '12px' }}>
                  <button className="btn btn-primary" onClick={confirmBooking}>Proceed to WhatsApp</button>
                  <button className="btn btn-ghost" onClick={() => setShowPrompt(false)}>Cancel</button>
                </div>
              </div>
            </div>
          )}
      </div>
    );
  }
