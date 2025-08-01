import React from 'react';
import productsData from '../../assets/text/products.json';
import './_products.scss';

const Products = () => {
  const getImagePath = (imagePath) => {
    try {
      return require(`../../assets/img/indicators/${imagePath}`);
    } catch (error) {
      console.error(`Error loading image: ${imagePath}`);
      return 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'; // GIF de 1x1px como placeholder
    }
  };

  return (
    <section className="featured-products">
      <h2 className="featured-products__title">{productsData.title}</h2>
      <div className="products-grid">
        {productsData.products.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-card__image">
              <img 
                src={getImagePath(product.image)} 
                alt={product.title}
                loading="lazy"
                onError={(e) => {
                  e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
                }}
              />
            </div>
            <div className="product-card__content">
              <h3 className="product-card__title">{product.title}</h3>
              <p className="product-card__description">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
