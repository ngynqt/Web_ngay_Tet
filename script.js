function updateCountdown() {
    // Cập nhật đúng ngày Mùng 1 Tết Bính Ngọ 2026
    const tetDate = new Date('2026-02-17T00:00:00').getTime();
    
    const countdownInterval = setInterval(function() {
        const now = new Date().getTime();
        const distance = tetDate - now;
        
        // Nếu đã qua thời điểm giao thừa
        if (distance <= 0) {
            clearInterval(countdownInterval);
            document.getElementById('days').textContent = '00';
            // Bạn có thể đổi tiêu đề thành "Chúc Mừng Năm Mới!"
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
        
    }, 1000);
}

updateCountdown();

// Tab Navigation
function showTab(tabName) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Remove active class from all buttons
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected tab
    document.getElementById(tabName).classList.add('active');
    
    // Add active class to clicked button
    event.target.classList.add('active');
}

// Wishes Carousel
let currentWishIndex = 0;

function showWish(index) {
    const wishes = document.querySelectorAll('.wish-card');
    
    if (index >= wishes.length) {
        currentWishIndex = 0;
    } else if (index < 0) {
        currentWishIndex = wishes.length - 1;
    }
    
    wishes.forEach(wish => {
        wish.classList.remove('active');
    });
    
    wishes[currentWishIndex].classList.add('active');
}

function nextWish() {
    currentWishIndex++;
    showWish(currentWishIndex);
}

function previousWish() {
    currentWishIndex--;
    showWish(currentWishIndex);
}

// Auto-rotate wishes every 5 seconds
function autoRotateWishes() {
    setInterval(() => {
        nextWish();
    }, 5000);
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    updateCountdown();
    showWish(0);
    autoRotateWishes();
    
    // Set first tab as active
    const firstTab = document.querySelector('.tab-button');
    if (firstTab) {
        firstTab.classList.add('active');
    }
    
    // Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Smooth scroll on page load
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
});
