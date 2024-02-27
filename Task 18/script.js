document.addEventListener('DOMContentLoaded', function () {
    const products = [
        { id: 1, name: "Eco-friendly Water Bottle", category: "Home", price: 15, tags: ["eco-friendly", "new"] },
        { id: 2, name: "Organic Cotton T-shirt", category: "Apparel", price: 25, tags: ["eco-friendly"] },
        { id: 3, name: "Wireless Headphones", category: "Electronics", price: 200, tags: ["new", "sale"] },
    ];

    const productList = document.getElementById('product-list');
    const noProductsMessage = document.getElementById('no-products-message');

    function renderProducts(productsToShow) {
        productList.innerHTML = '';
        if (productsToShow.length === 0) {
            noProductsMessage.style.display = 'block';
        } else {
            noProductsMessage.style.display = 'none';
            productsToShow.forEach(product => {
                const productElement = document.createElement('div');
                productElement.innerHTML = `
            <h3>${product.name}</h3>
            <p>Category: ${product.category}</p>
            <p>Price: $${product.price}</p>
            <p>Tags: ${product.tags.join(', ')}</p>
          `;
                productList.appendChild(productElement);
            });
        }
    }

    function applyFilters() {
        const categoryFilter = document.getElementById('category-filter').value;
        const tagsFilter = Array.from(document.querySelectorAll('#tags-filter input[type="checkbox"]:checked')).map(checkbox => checkbox.value);

        let filteredProducts = products;
        if (categoryFilter) {
            filteredProducts = filteredProducts.filter(product => product.category === categoryFilter);
        }
        if (tagsFilter.length > 0) {
            filteredProducts = filteredProducts.filter(product => product.tags.some(tag => tagsFilter.includes(tag)));
        }

        renderProducts(filteredProducts);
    }

    document.getElementById('category-filter').addEventListener('change', applyFilters);
    document.querySelectorAll('#tags-filter input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', applyFilters);
    });

    renderProducts(products);
});