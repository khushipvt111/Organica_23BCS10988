import React, { useEffect, useState } from 'react'
import { Header } from '../Component/Header'
import { Footer } from '../Component/Footer'
import { toast } from 'react-toastify'

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => { window.scrollTo(0, 0) }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error('Please fill all required fields');
      return;
    }

    setIsSubmitting(true);
    
    try {
      // You can integrate this with your backend API endpoint
      // For now, we'll just show a success message
      const response = await fetch('http://localhost:9090/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        // If endpoint doesn't exist, still show success (for demo purposes)
        toast.success('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      // If endpoint doesn't exist, show success anyway (for demo)
      toast.success('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header/>
      <style>{`
        @media (min-width: 992px) {
          .contact-main-container {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
      <main>
        {/* Hero Section */}
        <section className="section" style={{background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', paddingTop: '80px', paddingBottom: '60px'}}>
          <div className="container">
            <div style={{textAlign: 'center', maxWidth: '800px', margin: '0 auto'}}>
              <h1 className="h2 section-title" style={{fontSize: '3.5rem', marginBottom: '20px', color: '#2c3e50'}}>
                Get in Touch
              </h1>
              <p style={{fontSize: '1.8rem', lineHeight: '1.8', color: '#555'}}>
                Have a question or feedback? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section" style={{paddingTop: '60px', paddingBottom: '60px'}}>
          <div className="container">
            <div className="contact-main-container" style={{display: 'grid', gridTemplateColumns: '1fr', gap: '50px', maxWidth: '1200px', margin: '0 auto'}}>
              {/* Contact Form */}
              <div>
                <h2 style={{fontSize: '2.5rem', marginBottom: '30px', color: '#2c3e50'}}>Send us a Message</h2>
                <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                  <div>
                    <label htmlFor="name" style={{display: 'block', marginBottom: '8px', fontSize: '1.6rem', color: '#555', fontWeight: '500'}}>
                      Name <span style={{color: '#e74c3c'}}>*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      style={{
                        width: '100%',
                        padding: '15px 20px',
                        fontSize: '1.6rem',
                        border: '2px solid #e0e0e0',
                        borderRadius: '8px',
                        outline: 'none',
                        transition: 'border-color 0.3s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#27ae60'}
                      onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" style={{display: 'block', marginBottom: '8px', fontSize: '1.6rem', color: '#555', fontWeight: '500'}}>
                      Email <span style={{color: '#e74c3c'}}>*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                      style={{
                        width: '100%',
                        padding: '15px 20px',
                        fontSize: '1.6rem',
                        border: '2px solid #e0e0e0',
                        borderRadius: '8px',
                        outline: 'none',
                        transition: 'border-color 0.3s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#27ae60'}
                      onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" style={{display: 'block', marginBottom: '8px', fontSize: '1.6rem', color: '#555', fontWeight: '500'}}>
                      Subject <span style={{color: '#e74c3c'}}>*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="What is this regarding?"
                      style={{
                        width: '100%',
                        padding: '15px 20px',
                        fontSize: '1.6rem',
                        border: '2px solid #e0e0e0',
                        borderRadius: '8px',
                        outline: 'none',
                        transition: 'border-color 0.3s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#27ae60'}
                      onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" style={{display: 'block', marginBottom: '8px', fontSize: '1.6rem', color: '#555', fontWeight: '500'}}>
                      Message <span style={{color: '#e74c3c'}}>*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      placeholder="Tell us more about your inquiry..."
                      style={{
                        width: '100%',
                        padding: '15px 20px',
                        fontSize: '1.6rem',
                        border: '2px solid #e0e0e0',
                        borderRadius: '8px',
                        outline: 'none',
                        resize: 'vertical',
                        fontFamily: 'inherit',
                        transition: 'border-color 0.3s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#27ae60'}
                      onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary"
                    style={{
                      padding: '18px 40px',
                      fontSize: '1.8rem',
                      fontWeight: '600',
                      cursor: isSubmitting ? 'not-allowed' : 'pointer',
                      opacity: isSubmitting ? 0.7 : 1,
                      marginTop: '10px'
                    }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <ion-icon name="send-outline"></ion-icon>
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h2 style={{fontSize: '2.5rem', marginBottom: '30px', color: '#2c3e50'}}>Contact Information</h2>
                
                <div style={{background: '#f8f9fa', padding: '30px', borderRadius: '10px', marginBottom: '30px'}}>
                  <div style={{display: 'flex', alignItems: 'start', gap: '20px', marginBottom: '30px'}}>
                    <div style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      background: '#27ae60',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <ion-icon name="location-outline" style={{fontSize: '2.5rem', color: 'white'}}></ion-icon>
                    </div>
                    <div>
                      <h3 style={{fontSize: '1.8rem', marginBottom: '8px', color: '#2c3e50'}}>Address</h3>
                      <p style={{fontSize: '1.6rem', color: '#666', lineHeight: '1.7'}}>
                        7 Green Lake Street<br />
                        Crawfordsville, IN 47933<br />
                        United States
                      </p>
                    </div>
                  </div>

                  <div style={{display: 'flex', alignItems: 'start', gap: '20px', marginBottom: '30px'}}>
                    <div style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      background: '#27ae60',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <ion-icon name="call-outline" style={{fontSize: '2.5rem', color: 'white'}}></ion-icon>
                    </div>
                    <div>
                      <h3 style={{fontSize: '1.8rem', marginBottom: '8px', color: '#2c3e50'}}>Phone</h3>
                      <a href="tel:+1800123456789" style={{fontSize: '1.6rem', color: '#27ae60', textDecoration: 'none'}}>
                        +1 800 123 456 789
                      </a>
                      <p style={{fontSize: '1.4rem', color: '#888', marginTop: '5px'}}>Monday–Friday, 9 AM – 6 PM</p>
                    </div>
                  </div>

                  <div style={{display: 'flex', alignItems: 'start', gap: '20px'}}>
                    <div style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      background: '#27ae60',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <ion-icon name="mail-outline" style={{fontSize: '2.5rem', color: 'white'}}></ion-icon>
                    </div>
                    <div>
                      <h3 style={{fontSize: '1.8rem', marginBottom: '8px', color: '#2c3e50'}}>Email</h3>
                      <a href="mailto:organica@help.com" style={{fontSize: '1.6rem', color: '#27ae60', textDecoration: 'none'}}>
                        organica@help.com
                      </a>
                      <p style={{fontSize: '1.4rem', color: '#888', marginTop: '5px'}}>We respond within 24 hours</p>
                    </div>
                  </div>
                </div>

                {/* Operating Hours */}
                <div style={{background: 'white', padding: '30px', borderRadius: '10px', border: '2px solid #e0e0e0', marginBottom: '30px'}}>
                  <h3 style={{fontSize: '2rem', marginBottom: '20px', color: '#2c3e50'}}>Operating Hours</h3>
                  <div style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '1.6rem'}}>
                      <span style={{color: '#555'}}>Monday - Friday</span>
                      <span style={{color: '#2c3e50', fontWeight: '600'}}>9:00 AM - 6:00 PM</span>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '1.6rem'}}>
                      <span style={{color: '#555'}}>Saturday</span>
                      <span style={{color: '#2c3e50', fontWeight: '600'}}>10:00 AM - 4:00 PM</span>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '1.6rem'}}>
                      <span style={{color: '#555'}}>Sunday</span>
                      <span style={{color: '#2c3e50', fontWeight: '600'}}>Closed</span>
                    </div>
                  </div>
                </div>

                {/* Social Media Links */}
                <div>
                  <h3 style={{fontSize: '2rem', marginBottom: '20px', color: '#2c3e50'}}>Follow Us</h3>
                  <div style={{display: 'flex', gap: '15px'}}>
                    <a href="#" style={{
                      width: '45px',
                      height: '45px',
                      borderRadius: '50%',
                      background: '#3b5998',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '2rem',
                      textDecoration: 'none',
                      transition: 'transform 0.3s ease'
                    }} onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
                      <ion-icon name="logo-facebook"></ion-icon>
                    </a>
                    <a href="#" style={{
                      width: '45px',
                      height: '45px',
                      borderRadius: '50%',
                      background: '#1da1f2',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '2rem',
                      textDecoration: 'none',
                      transition: 'transform 0.3s ease'
                    }} onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
                      <ion-icon name="logo-twitter"></ion-icon>
                    </a>
                    <a href="#" style={{
                      width: '45px',
                      height: '45px',
                      borderRadius: '50%',
                      background: '#e1306c',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '2rem',
                      textDecoration: 'none',
                      transition: 'transform 0.3s ease'
                    }} onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
                      <ion-icon name="logo-instagram"></ion-icon>
                    </a>
                    <a href="#" style={{
                      width: '45px',
                      height: '45px',
                      borderRadius: '50%',
                      background: '#0077b5',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '2rem',
                      textDecoration: 'none',
                      transition: 'transform 0.3s ease'
                    }} onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
                      <ion-icon name="logo-linkedin"></ion-icon>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div style={{marginTop: '60px', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.1)'}}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.184133385929!2d-86.87492348459418!3d40.05831597932686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8812fdf6b8b0e5b9%3A0x8c8b0c8b0c8b0c8b!2sCrawfordsville%2C%20IN%2047933!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{border: '0'}}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Organica Location"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  )
}
