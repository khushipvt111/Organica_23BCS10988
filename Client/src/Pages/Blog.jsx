import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Header } from '../Component/Header'
import { Footer } from '../Component/Footer'

export const Blog = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  useEffect(() => { window.scrollTo(0, 0) }, []);

  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "5 Benefits of Going Organic",
      category: "health",
      excerpt: "Discover how switching to organic products can improve your health and overall well-being. Learn about the nutritional benefits and reduced exposure to harmful chemicals.",
      image: "/images/blog-1.jpg",
      date: "March 15, 2025",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Organic Smoothie Bowl with Chia Seeds",
      category: "recipes",
      excerpt: "Start your day right with this delicious and nutritious organic smoothie bowl recipe. Packed with vitamins, antioxidants, and natural energy boosters.",
      image: "/images/blog-2.jpg",
      date: "March 10, 2025",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "How Buying Organic Supports Local Farmers",
      category: "sustainability",
      excerpt: "When you choose organic, you're not just making a healthy choice for yourself—you're supporting local farming communities and sustainable agriculture practices.",
      image: "/images/blog-3.jpg",
      date: "March 5, 2025",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Top 10 Organic Products for Your Pantry",
      category: "products",
      excerpt: "Stock your pantry with these essential organic staples that will elevate your cooking and support your health goals. From grains to oils, we've got you covered.",
      image: "/images/product-1.png",
      date: "February 28, 2025",
      readTime: "7 min read"
    },
    {
      id: 5,
      title: "Understanding Organic Certification Labels",
      category: "education",
      excerpt: "Not all organic labels are the same. Learn how to read and understand different organic certification labels to make informed purchasing decisions.",
      image: "/images/product-2.png",
      date: "February 20, 2025",
      readTime: "5 min read"
    },
    {
      id: 6,
      title: "Seasonal Organic Eating: Spring Edition",
      category: "seasonal",
      excerpt: "Embrace spring with these fresh organic vegetables and fruits that are in season. Eating seasonally is not only better for the environment but also for your taste buds.",
      image: "/images/product-3.png",
      date: "February 15, 2025",
      readTime: "6 min read"
    },
    {
      id: 7,
      title: "The Environmental Impact of Organic Farming",
      category: "sustainability",
      excerpt: "Explore how organic farming practices protect soil health, preserve biodiversity, and reduce carbon footprint compared to conventional agriculture.",
      image: "/images/product-4.png",
      date: "February 10, 2025",
      readTime: "8 min read"
    },
    {
      id: 8,
      title: "Organic Meal Prep Ideas for Busy Weekdays",
      category: "recipes",
      excerpt: "Save time and stay healthy with these quick organic meal prep ideas. Prepare nutritious meals in advance without compromising on quality or flavor.",
      image: "/images/product-5.png",
      date: "February 5, 2025",
      readTime: "7 min read"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'health', name: 'Health & Wellness' },
    { id: 'recipes', name: 'Recipes' },
    { id: 'sustainability', name: 'Sustainability' },
    { id: 'products', name: 'Product Highlights' },
    { id: 'education', name: 'Education' },
    { id: 'seasonal', name: 'Seasonal Tips' }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const latestPosts = blogPosts.slice(0, 3);

  return (
    <>
      <Header/>
      <style>{`
        @media (min-width: 992px) {
          .blog-main-container {
            grid-template-columns: 1fr 300px !important;
          }
        }
      `}</style>
      <main>
        {/* Hero Section */}
        <section className="section" style={{background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', paddingTop: '80px', paddingBottom: '60px'}}>
          <div className="container">
            <div style={{textAlign: 'center', maxWidth: '800px', margin: '0 auto'}}>
              <h1 className="h2 section-title" style={{fontSize: '3.5rem', marginBottom: '20px', color: '#2c3e50'}}>
                Our Blog
              </h1>
              <p style={{fontSize: '1.8rem', lineHeight: '1.8', color: '#555'}}>
                Discover tips, recipes, and insights about organic living, healthy eating, and sustainable practices.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="section" style={{paddingTop: '60px', paddingBottom: '60px'}}>
          <div className="container">
            <div className="blog-main-container" style={{display: 'grid', gridTemplateColumns: '1fr', gap: '40px', alignItems: 'start'}}>
              {/* Main Blog Content */}
              <div>
                {/* Search Bar */}
                <div style={{marginBottom: '30px'}}>
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '15px 20px',
                      fontSize: '1.6rem',
                      border: '2px solid #e0e0e0',
                      borderRadius: '50px',
                      outline: 'none'
                    }}
                  />
                </div>

                {/* Category Filter */}
                <div style={{marginBottom: '30px', display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                      style={{
                        padding: '10px 20px',
                        border: selectedCategory === cat.id ? '2px solid #27ae60' : '2px solid #e0e0e0',
                        background: selectedCategory === cat.id ? '#27ae60' : 'white',
                        color: selectedCategory === cat.id ? 'white' : '#333',
                        borderRadius: '50px',
                        cursor: 'pointer',
                        fontSize: '1.4rem',
                        fontWeight: selectedCategory === cat.id ? '600' : '400',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>

                {/* Blog Posts Grid */}
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px'}}>
                  {filteredPosts.length > 0 ? (
                    filteredPosts.map(post => (
                      <article 
                        key={post.id}
                        style={{
                          background: 'white',
                          borderRadius: '10px',
                          overflow: 'hidden',
                          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                          transition: 'transform 0.3s ease',
                          cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                      >
                        <div style={{width: '100%', height: '200px', overflow: 'hidden', background: '#f0f0f0'}}>
                          <img 
                            src={post.image} 
                            alt={post.title}
                            style={{width: '100%', height: '100%', objectFit: 'cover'}}
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.parentElement.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                            }}
                          />
                        </div>
                        <div style={{padding: '25px'}}>
                          <div style={{display: 'flex', gap: '15px', marginBottom: '15px', fontSize: '1.3rem', color: '#888'}}>
                            <span>{post.date}</span>
                            <span>•</span>
                            <span>{post.readTime}</span>
                          </div>
                          <h3 style={{fontSize: '2rem', marginBottom: '15px', color: '#2c3e50', lineHeight: '1.3'}}>
                            {post.title}
                          </h3>
                          <p style={{fontSize: '1.5rem', lineHeight: '1.7', color: '#666', marginBottom: '20px'}}>
                            {post.excerpt}
                          </p>
                          <button
                            style={{
                              background: 'transparent',
                              border: 'none',
                              color: '#27ae60',
                              fontSize: '1.5rem',
                              fontWeight: '600',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px'
                            }}
                          >
                            Read More
                            <ion-icon name="arrow-forward-outline"></ion-icon>
                          </button>
                        </div>
                      </article>
                    ))
                  ) : (
                    <div style={{gridColumn: '1 / -1', textAlign: 'center', padding: '40px', color: '#888'}}>
                      <p style={{fontSize: '1.8rem'}}>No articles found matching your search.</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Sidebar */}
              <aside style={{position: 'sticky', top: '20px'}} className="blog-sidebar">
                <div style={{background: '#f8f9fa', padding: '30px', borderRadius: '10px', marginBottom: '30px'}}>
                  <h3 style={{fontSize: '2rem', marginBottom: '20px', color: '#2c3e50'}}>Latest Posts</h3>
                  <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                    {latestPosts.map(post => (
                      <div key={post.id} style={{display: 'flex', gap: '15px', cursor: 'pointer'}}>
                        <div style={{minWidth: '80px', height: '80px', borderRadius: '8px', overflow: 'hidden', background: '#e0e0e0'}}>
                          <img 
                            src={post.image} 
                            alt={post.title}
                            style={{width: '100%', height: '100%', objectFit: 'cover'}}
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.parentElement.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                            }}
                          />
                        </div>
                        <div>
                          <h4 style={{fontSize: '1.5rem', marginBottom: '5px', color: '#2c3e50', lineHeight: '1.3'}}>
                            {post.title}
                          </h4>
                          <p style={{fontSize: '1.2rem', color: '#888'}}>{post.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '30px', borderRadius: '10px', color: 'white'}}>
                  <h3 style={{fontSize: '2rem', marginBottom: '15px'}}>Subscribe</h3>
                  <p style={{fontSize: '1.5rem', marginBottom: '20px', opacity: 0.9}}>
                    Get the latest articles and updates delivered to your inbox.
                  </p>
                  <form onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing!'); }}>
                    <input
                      type="email"
                      placeholder="Your email address"
                      required
                      style={{
                        width: '100%',
                        padding: '12px 15px',
                        fontSize: '1.5rem',
                        border: 'none',
                        borderRadius: '50px',
                        marginBottom: '15px',
                        outline: 'none'
                      }}
                    />
                    <button
                      type="submit"
                      style={{
                        width: '100%',
                        padding: '12px',
                        fontSize: '1.6rem',
                        background: 'white',
                        color: '#667eea',
                        border: 'none',
                        borderRadius: '50px',
                        fontWeight: '600',
                        cursor: 'pointer'
                      }}
                    >
                      Subscribe Now
                    </button>
                  </form>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  )
}
