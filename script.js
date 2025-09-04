// This would normally be in a separate script.js file
document.addEventListener('DOMContentLoaded', function() {
    // Amount selection
    const amountOptions = document.querySelectorAll('.amount-option');
    amountOptions.forEach(option => {
        option.addEventListener('click', function() {
            amountOptions.forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
    
    // Donation type selection
    const typeOptions = document.querySelectorAll('.donation-type-option');
    typeOptions.forEach(option => {
        option.addEventListener('click', function() {
            typeOptions.forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
    
    // Donate button animation
    const donateButton = document.querySelector('.donate-button');
    donateButton.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Simple form validation
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const card = document.getElementById('card').value;
        const expiry = document.getElementById('expiry').value;
        const cvv = document.getElementById('cvv').value;
        
        if (!name || !email || !card || !expiry || !cvv) {
            alert('Please fill out all payment fields');
            return;
        }
        
        // Get selected amount
        const selectedAmount = document.querySelector('.amount-option.selected').textContent;
        
        // Get donation type
        const donationType = document.querySelector('.donation-type-option.selected').textContent;
        
        // Show processing
        this.textContent = 'Processing...';
        this.style.background = '#2c3180';
        
        // Simulate processing
        setTimeout(() => {
            alert(`Thank you for your ${donationType.toLowerCase()} donation of ${selectedAmount}! This is a mockup page, so no actual payment was processed.`);
            this.textContent = 'Donate Now';
            this.style.background = '#4e54c8';
            
            // Reset form
            document.querySelector('form').reset();
            document.querySelectorAll('.selected').forEach(el => {
                el.classList.remove('selected');
            });
            // Reselect default options
            document.querySelectorAll('.amount-option')[2].classList.add('selected');
            document.querySelectorAll('.donation-type-option')[0].classList.add('selected');
        }, 1500);
    });
    
    // Add input masking for card number
    const cardInput = document.getElementById('card');
    cardInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 0) {
            value = value.match(new RegExp('.{1,4}', 'g')).join(' ');
        }
        e.target.value = value;
    });
    
    // Add input masking for expiry date
    const expiryInput = document.getElementById('expiry');
    expiryInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 2) {
            value = value.substring(0, 2) + '/' + value.substring(2);
        }
        e.target.value = value;
    });
});