document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('productList');
    const categoryFilter = document.getElementById('category');
    const sortFilter = document.getElementById('sort');
  
    const products = [
      { name: 'Laptop', category: 'electronics', price: 1200, rating: 4.5 },
      { name: 'T-Shirt', category: 'clothing', price: 20, rating: 3.8 },
      { name: 'Smartphone', category: 'electronics', price: 800, rating: 4.7 },
      { name: 'Jeans', category: 'clothing', price: 50, rating: 4.2 },
    ];
  
    function renderProducts(filteredProducts) {
      productList.innerHTML = '';
      filteredProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
          <h3>${product.name}</h3>
          <p>Category: ${product.category}</p>
          <p>Price: $${product.price}</p>
          <p>Rating: ${product.rating}</p>
        `;
        productList.appendChild(productDiv);
      });
    }
  
    function filterAndSortProducts() {
      const category = categoryFilter.value;
      const sortBy = sortFilter.value;
  
      let filteredProducts = products.filter(product => 
        category === 'all' || product.category === category
      );
  
      if (sortBy === 'rating') {
        filteredProducts.sort((a, b) => b.rating - a.rating);
      } else if (sortBy === 'price') {
        filteredProducts.sort((a, b) => a.price - b.price);
      }
  
      renderProducts(filteredProducts);
    }
  
    categoryFilter.addEventListener('change', filterAndSortProducts);
    sortFilter.addEventListener('change', filterAndSortProducts);
  
    // Initial render
    filterAndSortProducts();
  });