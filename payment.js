const totalAmount = document.querySelector('.total-amount');

// Sample products array (same as the one used on the previous page)
const products = [
    {
        id: 1,
        category: 'instagram',
        price: 89,
        image: '89RS.001.jpeg',
        title: 'Premium 1080 x 566 px Instagram Post Design',
        description: 'Enhance your Instagram feed with our professionally crafted 1080 x 566 px post design. Perfect for creating visually stunning content that stands out.'
    },
    {
        id: 2,
        category: 'instagram',
        price: 149,
        image: '89RS.002.jpeg',
        title: 'Premium 1:1 Ratio Instagram Post Design',
        description: 'Boost your Instagram presence with our premium 1:1 ratio post design. This template is tailored to help you create eye-catching posts that draw attention.'
    },
    {
        id: 3,
        category: 'instagram',
        price: 249,
        image: '89RS.003.jpeg',
        title: 'Premium 1:1 Ratio Instagram Logo Design',
        description: 'Elevate your brand with our premium 1:1 ratio Instagram logo design. Perfectly designed to represent your brand identity in a sleek and professional manner.'
    },
    {
        id: 4,
        category: 'instagram',
        price: 399,
        image: '89RS.004.jpeg',
        title: 'Premium Instagram Ads',
        description: 'Drive more engagement with our premium Instagram ads. These professionally designed ads are crafted to attract attention and increase your reach on social media.'
    },
    {
        id: 5,
        category: 'facebook',
        price: 89,
        image: '89RS.005.jpeg',
        title: 'Premium 1:1 Ratio Facebook Post Design',
        description: 'Make your Facebook posts stand out with our premium 1:1 ratio post design. Ideal for creating engaging content that resonates with your audience.'
    },
    {
        id: 6,
        category: 'facebook',
        price: 149,
        image: '89RS.006.jpeg',
        title: 'Premium 1200 x 630 px Facebook Post Design',
        description: 'Enhance your Facebook page with our premium 1200 x 630 px post design. Perfect for sharing visually appealing content that captivates your followers.'
    },
    {
        id: 7,
        category: 'facebook',
        price: 249,
        image: '89RS.007.jpeg',
        title: 'Premium 1:1 Ratio Facebook Logo Design',
        description: 'Strengthen your brand presence on Facebook with our premium 1:1 ratio logo design. Professionally crafted to ensure your logo looks great on all devices.'
    },
    {
        id: 8,
        category: 'facebook',
        price: 399,
        image: '89RS.008.jpeg',
        title: 'Premium Facebook Ads',
        description: 'Increase your reach with our premium Facebook ads. These ads are designed to be visually compelling and effective in driving engagement and conversions.'
    },
    {
        id: 9,
        category: 'youtube',
        price: 89,
        image: '89RS.009.jpeg',
        title: 'Premium 1:1 Ratio YouTube Post Design',
        description: 'Create stunning YouTube posts with our premium 1:1 ratio post design. Perfect for sharing updates and engaging with your audience on your channel.'
    },
    {
        id: 10,
        category: 'youtube',
        price: 149,
        image: '89RS.010.jpeg',
        title: 'Premium 2048 x 1152 px YouTube Banner Design',
        description: 'Make your YouTube channel visually appealing with our premium 2048 x 1152 px banner design. Professionally crafted to enhance your channel\'s look and feel.'
    },
    {
        id: 11,
        category: 'youtube',
        price: 249,
        image: '89RS.011.jpeg',
        title: 'Premium 1280 x 720 px YouTube Thumbnail Design',
        description: 'Capture viewers\' attention with our premium 1280 x 720 px YouTube thumbnail design. Designed to make your videos stand out in the crowded YouTube landscape.'
    },
    {
        id: 12,
        category: 'youtube',
        price: 249,
        image: '89RS.012.jpeg',
        title: 'Premium 1:1 Ratio YouTube Logo Design',
        description: 'Elevate your YouTube channel with our premium 1:1 ratio logo design. A perfect representation of your brand identity, crafted to look great on all screens.'
    },
    {
        id: 13,
        category: 'youtube',
        price: 399,
        image: '89RS.013.jpeg',
        title: 'Premium YouTube Ads',
        description: 'Boost your channel\'s visibility with our premium YouTube ads. Designed to attract attention and increase engagement with your content.'
    }
];




function getProductIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

function displayProductInfo(product) {
    if (product) {
        totalAmount.innerText = `₹ ${product.price}`;
    } else {
    }
}

// Main execution
const productId = getProductIdFromUrl();
const product = products.find(p => p.id == productId);
displayProductInfo(product);


