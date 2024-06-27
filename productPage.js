// const products = [
//     { 
//         id:1,
//         category:'instagram',
//         price:89,
//         image:'89RS.001.jpeg'
//     },
//     {
//         id:2,
//         category:'instagram',
//         title:'Premium 1:1 Ratio Instagram Post Design',
//         price:149,
//         image:'89RS.002.jpeg'
//     },
//     {
//         id:3,
//         category:'instagram',
//         price:249,
//         image:'89RS.003.jpeg'
//     },
//     { 
//         id:4,
//         category:'instagram',
//         price:399,
//         image:'89RS.004.jpeg'
//     },    
//     { 
//         id:1,
//         category:'facebook',
//         price:89,
//         image:'89RS.005.jpeg'
//     },
//     {
//         id:2,
//         category:'facebook',
//         price:149,
//         image:'89RS.006.jpeg'
//     },
//     {
//         id:3,
//         category:'facebook',
//         price:249,
//         image:'89RS.007.jpeg'
//     },
//     { 
//         id:4,
//         category:'facebook',
//         price:399,
//         image:'89RS.008.jpeg'
//     },
//     { 
//         id:1,
//         category:'youtube',
//         price:89,
//         image:'89RS.009.jpeg'
//     },
//     {
//         id:2,
//         category:'youtube',
//         price:149,
//         image:'89RS.010.jpeg'
//     },
//     {
//         id:3,
//         category:'youtube',
//         price:249,
//         image:'89RS.011.jpeg'
//     },
//     { 
//         id:4,
//         category:'youtube',
//         price:249,
//         image:'89RS.012.jpeg'
//     },
//     { 
//         id:5,
//         category:'youtube',
//         price:399,
//         image:'89RS.013.jpeg'
//     }
// ]


// Sample products array (same as the one used on the previous page)
const products = [
    { id: 1, category: 'instagram', price: 89, image: '89RS.001.jpeg', title: 'Instagram Post 1' },
    { id: 2, category: 'instagram', price: 149, image: '89RS.002.jpeg', title: 'Premium 1:1 Ratio Instagram Post Design' },
    { id: 3, category: 'instagram', price: 249, image: '89RS.003.jpeg', title: 'Instagram Post 3' },
    { id: 4, category: 'instagram', price: 399, image: '89RS.004.jpeg', title: 'Instagram Post 4' },
    { id: 5, category: 'facebook', price: 89, image: '89RS.005.jpeg', title: 'Facebook Post 1' },
    { id: 6, category: 'facebook', price: 149, image: '89RS.006.jpeg', title: 'Facebook Post 2' },
    { id: 7, category: 'facebook', price: 249, image: '89RS.007.jpeg', title: 'Facebook Post 3' },
    { id: 8, category: 'facebook', price: 399, image: '89RS.008.jpeg', title: 'Facebook Post 4' },
    { id: 9, category: 'youtube', price: 89, image: '89RS.009.jpeg', title: 'YouTube Video 1' },
    { id: 10, category: 'youtube', price: 149, image: '89RS.010.jpeg', title: 'YouTube Video 2' },
    { id: 11, category: 'youtube', price: 249, image: '89RS.011.jpeg', title: 'YouTube Video 3' },
    { id: 12, category: 'youtube', price: 249, image: '89RS.012.jpeg', title: 'YouTube Video 4' },
    { id: 13, category: 'youtube', price: 399, image: '89RS.013.jpeg', title: 'YouTube Video 5' }
];

const productPage = document.querySelector('.product-page');

// Function to get the product ID from the URL
function getProductIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    console.dir(urlParams);
    return urlParams.get('id');

}

// Function to display the product information
function displayProductInfo(product) {
    if (product) {
        productPage.innerHTML = '';
        productPage.innerHTML =`
        <div class="product-image">
            <img src="${product.image}" alt="Premium 1:1 Ratio Instagram Post Design">
        </div>
        <div class="product-details">
            <h1 class="product-title">${product.title}</h1>
            <h2 class="product-price">Price: ₹ ${product.price}</h2>
            <a href="/payment.html?id=${productId}" class="buy-now">Buy Now</a>
            <p>Enhance your Instagram presence with our <strong>Premium 1:1 Ratio Instagram Post Design</strong>! This professionally crafted template is tailored to help you create stunning, eye-catching posts that stand out in the crowded social media landscape.</p>
        </div>`;
        
        // document.querySelector('.product-image img').style.backgroundImage = url`(${product.image})`;
        // document.querySelector('.product-title').textContent = product.title || 'Product Title';
        // document.querySelector('.product-price').textContent = `Price: ₹ ${product.price}`;
    } else {
        document.querySelector('.container').textContent = 'Product not found.';
    }
}

// Main execution
const productId = getProductIdFromUrl();
const product = products.find(p => p.id == productId);
displayProductInfo(product);
