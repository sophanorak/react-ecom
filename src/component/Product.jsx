import React, { useState, useEffect } from "react";
import axios from "axios"; // Or use fetch
import Header from "./Header";
import Footer from "./Footer";
const Product = () => {
  const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(true);

  // Fetch products from Fake Store API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div>
      <Header/>
      {/* Header Section */}
      <section className="inner_page_head">
        <div className="container_fuild">
          <div className="row">
            <div className="col-md-12">
              <div className="full">
                <h3>Product Grid</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="product_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>
              Our <span>Products</span>
            </h2>
          </div>
          <div className="row">
            {products.map((product) => (
              <div className="col-sm-6 col-md-4 col-lg-3 box-size" key={product.id}>
                <div className="box">
                  <div className="option_container">
                    <div className="options">
                      <a href="" className="option1">
                        Add To Cart
                      </a>
                      <a href="" className="option2">
                        Buy Now
                      </a>
                    </div>
                  </div>
                  <div className="img-box">
                    <img src={product.image} alt={product.title} />
                  </div>
                  <div className="detail-box">
                    <h5>{product.title}</h5>
                    <h6>${product.price}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="btn-box">
            <a href="">View All Products</a>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
  
};

export default Product;
