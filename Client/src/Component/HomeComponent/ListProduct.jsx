import React, { useEffect, useMemo, useState } from "react";
import { ProductCard } from "../ShopComponent/ProductCard";
import axiosFetch from "../../Helper/Axios";

export const ListProduct = ({ showSearch = true, showSorting = true }) => {
  const[token,setToken]=useState(sessionStorage.getItem("token"));
  const [allProducts, setAllProducts] = useState([]);
  const [data,setData]=useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");

  const fatchData = async () => {
    const response = await axiosFetch({
      "url":"product/",
      "method":"GET",
    });
    
    console.log(response?.data);
    const next = response && response.data ? response.data : [];
    const normalized = Array.isArray(next) ? next : [];
    if (normalized.length === 0) {
      // Fallback demo products so the page is usable without backend data
      const demo = [
        { productid: 1, productName: 'Organic Apple', category: 'fruit', description: 'Crisp and sweet apples', price: 120, img: '/images/top-product-1.png' },
        { productid: 2, productName: 'Fresh Orange', category: 'fruit', description: 'Rich in Vitamin C', price: 90, img: '/images/top-product-2.png' },
        { productid: 3, productName: 'Green Grapes', category: 'fruit', description: 'Seedless and juicy', price: 150, img: '/images/top-product-3.png' },
        { productid: 4, productName: 'Tomatoes', category: 'vegetable', description: 'Farm fresh', price: 60, img: '/images/top-product-4.png' },
        { productid: 5, productName: 'Salmon Fillet', category: 'fish', description: 'Omega-3 rich', price: 450, img: '/images/top-product-5.png' },
        { productid: 6, productName: 'Chicken Breast', category: 'meat', description: 'Lean protein', price: 320, img: '/images/top-product-6.png' },
        { productid: 7, productName: 'Milk 1L', category: 'dairy', description: 'Pure and fresh', price: 55, img: '/images/top-product-7.png' },
        { productid: 8, productName: 'Cheese Block', category: 'dairy', description: 'Aged cheddar', price: 230, img: '/images/top-product-8.png' }
      ];
      setAllProducts(demo);
      setData(demo);
    } else {
      // If backend provides category, use it; otherwise infer from name keywords
      const withCategory = normalized.map(p => ({
        ...p,
        category: p.category || (/milk|cheese|curd|yogurt/i.test(p.productName||'') ? 'dairy' : /fish|salmon|meat|chicken/i.test(p.productName||'') ? 'fish' : /apple|orange|grape|banana/i.test(p.productName||'') ? 'fruit' : 'vegetable')
      }));
      setAllProducts(withCategory);
      setData(withCategory);
    }
  };

  useEffect(() => {
    fatchData();
  }, []);

  // Filter and search logic
  useEffect(() => {
    let filtered = [...allProducts];

    // Apply category filter
    if (activeFilter !== 'all') {
      if (activeFilter === 'vegetable') {
        filtered = filtered.filter(p => (p.category||'').includes('vegetable'));
      } else if (activeFilter === 'fish') {
        filtered = filtered.filter(p => (p.category||'')==='fish' || (p.category||'')==='meat');
      } else if (activeFilter === 'fruit') {
        filtered = filtered.filter(p => (p.category||'')==='fruit');
      } else if (activeFilter === 'dairy') {
        filtered = filtered.filter(p => (p.category||'')==='dairy');
      }
    }

    // Apply search filter
    if (searchQuery.trim()) {
      filtered = filtered.filter(p => 
        (p.productName || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
        (p.description || '').toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply sorting
    if (sortBy === 'price-low') {
      filtered.sort((a, b) => (a.price || 0) - (b.price || 0));
    } else if (sortBy === 'price-high') {
      filtered.sort((a, b) => (b.price || 0) - (a.price || 0));
    } else if (sortBy === 'name-asc') {
      filtered.sort((a, b) => (a.productName || '').localeCompare(b.productName || ''));
    } else if (sortBy === 'name-desc') {
      filtered.sort((a, b) => (b.productName || '').localeCompare(a.productName || ''));
    }

    setData(filtered);
  }, [allProducts, activeFilter, searchQuery, sortBy]);

  const handleFilter = (key) => {
    setActiveFilter(key);
  };

  return (
    <>
      <section id="products" className="section product">
        <div className="container">
          <p className="section-subtitle"> -- Organic Products --</p>
          <h2 className="h2 section-title">All Organic Products</h2>
          
          {/* Search Bar */}
          {showSearch && (
            <div style={{marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px'}}>
              <div style={{position: 'relative'}}>
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '15px 50px 15px 20px',
                    fontSize: '1.6rem',
                    border: '2px solid #e0e0e0',
                    borderRadius: '50px',
                    outline: 'none',
                    transition: 'border-color 0.3s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#27ae60'}
                  onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                />
                <ion-icon 
                  name="search-outline" 
                  style={{
                    position: 'absolute',
                    right: '20px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    fontSize: '2rem',
                    color: '#888'
                  }}
                />
              </div>
            </div>
          )}

          {/* Sorting */}
          {showSorting && (
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', flexWrap: 'wrap', gap: '15px'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '15px', flexWrap: 'wrap'}}>
                <span style={{fontSize: '1.6rem', color: '#555', fontWeight: '500'}}>Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  style={{
                    padding: '10px 20px',
                    fontSize: '1.5rem',
                    border: '2px solid #e0e0e0',
                    borderRadius: '50px',
                    outline: 'none',
                    cursor: 'pointer',
                    background: 'white'
                  }}
                >
                  <option value="default">Default</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name-asc">Name: A to Z</option>
                  <option value="name-desc">Name: Z to A</option>
                </select>
              </div>
              <div style={{fontSize: '1.5rem', color: '#888'}}>
                Showing {data.length} product{data.length !== 1 ? 's' : ''}
              </div>
            </div>
          )}

          {/* Category Filters */}
          <ul className="filter-list">
            <li>
              <button className={`filter-btn ${activeFilter==='all' ? 'active' : ''}`} onClick={()=>handleFilter('all')}>
                <img
                  src="./images/filter-1.png"
                  width={20}
                  alt=""
                  className="default"
                />
                <img
                  src="./images/filter-1-active.png"
                  width={20}
                  alt=""
                  className="color"
                />
                <p className="filter-text">All Products</p>
              </button>
            </li>
            <li>
              <button className={`filter-btn ${activeFilter==='vegetable' ? 'active' : ''}`} onClick={()=>handleFilter('vegetable')}>
                <img
                  src="./images/filter-1.png"
                  width={20}
                  alt=""
                  className="default"
                />
                <img
                  src="./images/filter-1-active.png"
                  width={20}
                  alt=""
                  className="color"
                />
                <p className="filter-text">Fresh Vegetables</p>
              </button>
            </li>
            <li>
              <button className={`filter-btn ${activeFilter==='fish' ? 'active' : ''}`} onClick={()=>handleFilter('fish')}>
                <img
                  src="./images/filter-2.png"
                  width={20}
                  alt=""
                  className="default"
                />
                <img
                  src="./images/filter-2-active.png"
                  width={20}
                  alt=""
                  className="color"
                />
                <p className="filter-text">Fish &amp; Meat</p>
              </button>
            </li>
            <li>
              <button className={`filter-btn ${activeFilter==='fruit' ? 'active' : ''}`} onClick={()=>handleFilter('fruit')}>
                <img
                  src="./images/filter-3.png"
                  width={20}
                  alt=""
                  className="default"
                />
                <img
                  src="./images/filter-3-active.png"
                  width={20}
                  alt=""
                  className="color"
                />
                <p className="filter-text">Healthy Fruit</p>
              </button>
            </li>
            <li>
              <button className={`filter-btn ${activeFilter==='dairy' ? 'active' : ''}`} onClick={()=>handleFilter('dairy')}>
                <img
                  src="./images/filter-1.png"
                  width={20}
                  alt=""
                  className="default"
                />
                <img
                  src="./images/filter-1-active.png"
                  width={20}
                  alt=""
                  className="color"
                />
                <p className="filter-text">Dairy Products</p>
              </button>
            </li>
          </ul>

          {/* Products Grid */}
          {data.length > 0 ? (
            <ul className="grid-list">
              {data.map((item) => (
                <ProductCard 
                  key={item.productid} 
                  id={item.productid} 
                  name={item.productName} 
                  description={item.description} 
                  price={item.price} 
                  img={item.img} 
                />
              ))}
            </ul>
          ) : (
            <div style={{textAlign: 'center', padding: '60px 20px', color: '#888'}}>
              <p style={{fontSize: '2rem', marginBottom: '10px'}}>No products found</p>
              <p style={{fontSize: '1.6rem'}}>Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};
