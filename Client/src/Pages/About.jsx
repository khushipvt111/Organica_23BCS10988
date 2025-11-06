import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Header } from '../Component/Header'
import { Footer } from '../Component/Footer'

export const About = () => {
  const navigate = useNavigate();
  useEffect(() => { window.scrollTo(0, 0) }, []);

  return (
    <>
      <Header/>
      <main>
        {/* Hero Section / Mission Statement */}
        <section className="section" style={{background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', paddingTop: '80px', paddingBottom: '60px'}}>
          <div className="container">
            <div style={{textAlign: 'center', maxWidth: '800px', margin: '0 auto'}}>
              <h1 className="h2 section-title" style={{fontSize: '3.5rem', marginBottom: '20px', color: '#2c3e50'}}>
                Welcome to Organica
              </h1>
              <p style={{fontSize: '1.8rem', lineHeight: '1.8', color: '#555', marginBottom: '30px'}}>
                At Organica, we believe healthy living starts with what we consume. Our mission is to bring you fresh, sustainable, and chemical-free organic products straight from local farms.
              </p>
              <button 
                className="btn btn-primary" 
                onClick={() => navigate('/shop')}
                style={{marginTop: '20px'}}
              >
                Shop Now
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </button>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="section" style={{paddingTop: '60px', paddingBottom: '60px'}}>
          <div className="container">
            <h2 className="h2 section-title" style={{marginBottom: '40px'}}>Our Story</h2>
            <div style={{maxWidth: '900px', margin: '0 auto'}}>
              <div style={{display: 'grid', gridTemplateColumns: '1fr', gap: '30px', alignItems: 'center'}}>
                <div>
                  <p style={{fontSize: '1.7rem', lineHeight: '1.9', color: '#444', marginBottom: '20px'}}>
                    Founded in 2025, Organica was created to connect people with nature through pure, organic products sourced responsibly. What started as a small initiative to support local farmers has grown into a trusted platform for organic living.
                  </p>
                  <p style={{fontSize: '1.7rem', lineHeight: '1.9', color: '#444', marginBottom: '20px'}}>
                    We work directly with certified organic farmers who share our commitment to sustainable agriculture. Every product in our catalog is carefully selected to ensure it meets our strict quality standards for purity, freshness, and environmental responsibility.
                  </p>
                  <p style={{fontSize: '1.7rem', lineHeight: '1.9', color: '#444'}}>
                    Our journey is driven by a simple belief: everyone deserves access to healthy, chemical-free food that nourishes the body and supports the planet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Offer Section */}
        <section className="section" style={{background: '#f8f9fa', paddingTop: '60px', paddingBottom: '60px'}}>
          <div className="container">
            <h2 className="h2 section-title" style={{marginBottom: '40px'}}>What We Offer</h2>
            <div style={{maxWidth: '1000px', margin: '0 auto'}}>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', marginBottom: '40px'}}>
                <div style={{background: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', textAlign: 'center'}}>
                  <div style={{fontSize: '4rem', marginBottom: '15px'}}>🥬</div>
                  <h3 style={{fontSize: '2rem', marginBottom: '15px', color: '#2c3e50'}}>Fresh Vegetables</h3>
                  <p style={{color: '#666', lineHeight: '1.6'}}>Farm-fresh organic vegetables, free from pesticides and chemicals</p>
                </div>
                <div style={{background: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', textAlign: 'center'}}>
                  <div style={{fontSize: '4rem', marginBottom: '15px'}}>🍎</div>
                  <h3 style={{fontSize: '2rem', marginBottom: '15px', color: '#2c3e50'}}>Healthy Fruits</h3>
                  <p style={{color: '#666', lineHeight: '1.6'}}>Seasonal organic fruits packed with natural vitamins and nutrients</p>
                </div>
                <div style={{background: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', textAlign: 'center'}}>
                  <div style={{fontSize: '4rem', marginBottom: '15px'}}>🥛</div>
                  <h3 style={{fontSize: '2rem', marginBottom: '15px', color: '#2c3e50'}}>Dairy Products</h3>
                  <p style={{color: '#666', lineHeight: '1.6'}}>Pure organic dairy from grass-fed, hormone-free animals</p>
                </div>
                <div style={{background: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', textAlign: 'center'}}>
                  <div style={{fontSize: '4rem', marginBottom: '15px'}}>🐟</div>
                  <h3 style={{fontSize: '2rem', marginBottom: '15px', color: '#2c3e50'}}>Fish & Meat</h3>
                  <p style={{color: '#666', lineHeight: '1.6'}}>Sustainably sourced organic fish and free-range meat</p>
                </div>
              </div>
              <div style={{background: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', textAlign: 'center', maxWidth: '800px', margin: '0 auto'}}>
                <h3 style={{fontSize: '2.2rem', marginBottom: '20px', color: '#2c3e50'}}>Quality Assurance</h3>
                <p style={{fontSize: '1.6rem', lineHeight: '1.8', color: '#555'}}>
                  Every product undergoes rigorous testing to ensure it meets organic certification standards. We guarantee freshness, purity, and traceability from farm to your table.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="section" style={{paddingTop: '60px', paddingBottom: '60px'}}>
          <div className="container">
            <h2 className="h2 section-title" style={{marginBottom: '40px'}}>Our Values</h2>
            <div style={{maxWidth: '1000px', margin: '0 auto'}}>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px'}}>
                <div style={{padding: '25px', borderLeft: '4px solid #27ae60', background: '#f8f9fa', borderRadius: '5px'}}>
                  <h3 style={{fontSize: '2rem', marginBottom: '15px', color: '#2c3e50'}}>🌱 Transparency</h3>
                  <p style={{color: '#666', lineHeight: '1.7', fontSize: '1.6rem'}}>
                    We believe in complete transparency about our sourcing, farming practices, and product origins. Every item has a story you can trust.
                  </p>
                </div>
                <div style={{padding: '25px', borderLeft: '4px solid #27ae60', background: '#f8f9fa', borderRadius: '5px'}}>
                  <h3 style={{fontSize: '2rem', marginBottom: '15px', color: '#2c3e50'}}>🌍 Sustainability</h3>
                  <p style={{color: '#666', lineHeight: '1.7', fontSize: '1.6rem'}}>
                    We're committed to environmental stewardship through sustainable farming practices that protect our planet for future generations.
                  </p>
                </div>
                <div style={{padding: '25px', borderLeft: '4px solid #27ae60', background: '#f8f9fa', borderRadius: '5px'}}>
                  <h3 style={{fontSize: '2rem', marginBottom: '15px', color: '#2c3e50'}}>🤝 Ethical Sourcing</h3>
                  <p style={{color: '#666', lineHeight: '1.7', fontSize: '1.6rem'}}>
                    We partner only with farmers who practice ethical agriculture, ensuring fair wages and humane treatment throughout the supply chain.
                  </p>
                </div>
                <div style={{padding: '25px', borderLeft: '4px solid #27ae60', background: '#f8f9fa', borderRadius: '5px'}}>
                  <h3 style={{fontSize: '2rem', marginBottom: '15px', color: '#2c3e50'}}>❤️ Community Support</h3>
                  <p style={{color: '#666', lineHeight: '1.7', fontSize: '1.6rem'}}>
                    We support local farming communities and contribute to initiatives that make organic food accessible to everyone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meet the Team Section */}
        <section className="section" style={{background: '#f8f9fa', paddingTop: '60px', paddingBottom: '60px'}}>
          <div className="container">
            <h2 className="h2 section-title" style={{marginBottom: '40px'}}>Meet the Team</h2>
            <div style={{maxWidth: '1000px', margin: '0 auto'}}>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px'}}>
                <div style={{background: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', textAlign: 'center'}}>
                  <div style={{width: '120px', height: '120px', borderRadius: '50%', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem'}}>
                    👨‍💼
                  </div>
                  <h3 style={{fontSize: '2rem', marginBottom: '10px', color: '#2c3e50'}}>John Smith</h3>
                  <p style={{color: '#27ae60', marginBottom: '15px', fontWeight: '600'}}>Founder & CEO</p>
                  <p style={{color: '#666', lineHeight: '1.6', fontSize: '1.5rem'}}>
                    Passionate about organic living and sustainable agriculture with 15+ years of experience.
                  </p>
                </div>
                <div style={{background: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', textAlign: 'center'}}>
                  <div style={{width: '120px', height: '120px', borderRadius: '50%', background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem'}}>
                    👩‍💼
                  </div>
                  <h3 style={{fontSize: '2rem', marginBottom: '10px', color: '#2c3e50'}}>Sarah Johnson</h3>
                  <p style={{color: '#27ae60', marginBottom: '15px', fontWeight: '600'}}>Head of Quality</p>
                  <p style={{color: '#666', lineHeight: '1.6', fontSize: '1.5rem'}}>
                    Ensures all products meet the highest organic certification standards.
                  </p>
                </div>
                <div style={{background: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', textAlign: 'center'}}>
                  <div style={{width: '120px', height: '120px', borderRadius: '50%', background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem'}}>
                    👨‍🌾
                  </div>
                  <h3 style={{fontSize: '2rem', marginBottom: '10px', color: '#2c3e50'}}>Mike Chen</h3>
                  <p style={{color: '#27ae60', marginBottom: '15px', fontWeight: '600'}}>Farm Relations</p>
                  <p style={{color: '#666', lineHeight: '1.6', fontSize: '1.5rem'}}>
                    Builds partnerships with organic farmers and manages our supply chain.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="section" style={{paddingTop: '60px', paddingBottom: '60px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white'}}>
          <div className="container">
            <div style={{textAlign: 'center', maxWidth: '700px', margin: '0 auto'}}>
              <h2 style={{fontSize: '3rem', marginBottom: '20px'}}>Ready to Start Your Organic Journey?</h2>
              <p style={{fontSize: '1.8rem', lineHeight: '1.8', marginBottom: '30px', opacity: 0.95}}>
                Explore our wide range of organic products and experience the difference that quality makes.
              </p>
              <div style={{display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap'}}>
                <button 
                  className="btn btn-primary" 
                  onClick={() => navigate('/shop')}
                  style={{background: 'white', color: '#667eea', padding: '18px 40px', fontSize: '1.8rem'}}
                >
                  Shop Now
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </button>
                <button 
                  className="btn" 
                  onClick={() => navigate('/contact')}
                  style={{background: 'transparent', border: '2px solid white', color: 'white', padding: '18px 40px', fontSize: '1.8rem'}}
                >
                  Contact Us
                  <ion-icon name="mail-outline"></ion-icon>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  )
}
