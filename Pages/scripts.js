// Function to handle placing the order
function placeOrder() {
    const fullName = document.getElementById('fullName').value;
    const mobileNumber = document.getElementById('mobileNumber').value;
    const emailAddress = document.getElementById('emailAddress').value;
    const state = document.getElementById('state').value;
    const city = document.getElementById('city').value;
    const zipCode = document.getElementById('zipCode').value;
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
    const orderNumber = '0001ECA0S322325'; // Example order number

    // Store data in localStorage
    localStorage.setItem('fullName', fullName);
    localStorage.setItem('mobileNumber', mobileNumber);
    localStorage.setItem('emailAddress', emailAddress);
    localStorage.setItem('state', state);
    localStorage.setItem('city', city);
    localStorage.setItem('zipCode', zipCode);
    localStorage.setItem('paymentMethod', paymentMethod);
    localStorage.setItem('orderNumber', orderNumber);

    // Navigate to confirmation page
    window.location.href = 'confirmation.html';
}

// Function to display cart items
function displayCartItems() {
    const cartItems = [
        { name: 'Amul Milk', price: 68 },
        { name: 'Amul Milk', price: 68 },
        { name: 'Amul Milk', price: 68 }
    ];

    const cartItemsContainer = document.getElementById('cartItems');
    let subtotal = 0;

    cartItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `<p>1 x ${item.name}</p><p>₹${item.price}</p>`;
        cartItemsContainer.appendChild(itemElement);
        subtotal += item.price;
    });

    document.getElementById('subtotal').innerText = `₹${subtotal}`;
}

// Function to display order details on confirmation page
function displayOrderDetails() {
    const fullName = localStorage.getItem('fullName');
    const mobileNumber = localStorage.getItem('mobileNumber');
    const emailAddress = localStorage.getItem('emailAddress');
    const state = localStorage.getItem('state');
    const city = localStorage.getItem('city');
    const zipCode = localStorage.getItem('zipCode');
    const paymentMethod = localStorage.getItem('paymentMethod');
    const orderNumber = localStorage.getItem('orderNumber');

    document.getElementById('customerName').innerText = fullName;
    document.getElementById('orderNumber').innerText = orderNumber;
    document.getElementById('paymentMethod').innerText = paymentMethod;
    document.getElementById('shippingAddress').innerText = `${fullName}, ${emailAddress}, ${mobileNumber}, ${city}, ${state}, ${zipCode}`;
}

// Function to continue shopping
function continueShopping() {
    // Clear localStorage
    localStorage.clear();
    // Navigate to shopping page (or home page)
    window.location.href = 'index.html';
}

// Load the cart items on the checkout page
if (window.location.pathname.includes('checkout.html')) {
    displayCartItems();
}

// Load the order details on the confirmation page
if (window.location.pathname.includes('confirmation.html')) {
    displayOrderDetails();
}
