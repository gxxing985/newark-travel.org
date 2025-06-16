document.addEventListener('DOMContentLoaded', function() {
    // 控制台初始化日志
    console.log("New Ark Travel website loaded!");

    // 主按钮点击效果
    document.querySelector('.cta-button').addEventListener('click', function() {
        alert('我们的旅行顾问将在24小时内联系您！');
    });

    // 套餐折叠功能
    const packageCards = document.querySelectorAll('.package-card');
    
    packageCards.forEach(card => {
        const header = card.querySelector('.package-header');
        const toggleBtn = card.querySelector('.toggle-btn');
        
        header.addEventListener('click', function() {
            // 关闭其他打开的卡片
            packageCards.forEach(otherCard => {
                if (otherCard !== card && otherCard.classList.contains('active')) {
                    otherCard.classList.remove('active');
                    otherCard.querySelector('.toggle-btn i').style.transform = 'rotate(0deg)';
                }
            });
            
            // 切换当前卡片
            card.classList.toggle('active');
            const icon = this.querySelector('i');
            if (card.classList.contains('active')) {
                icon.style.transform = 'rotate(180deg)';
            } else {
                icon.style.transform = 'rotate(0deg)';
            }
        });
        
        // 阻止按钮点击事件冒泡
        toggleBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            card.classList.toggle('active');
            const icon = this.querySelector('i');
            if (card.classList.contains('active')) {
                icon.style.transform = 'rotate(180deg)';
            } else {
                icon.style.transform = 'rotate(0deg)';
            }
        });
    });
    
    // 预订按钮功能
    document.querySelectorAll('.book-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const packageTitle = this.closest('.package-card').querySelector('.package-header h3').textContent;
            const packagePrice = this.closest('.price-section').querySelector('.price').textContent;
            alert(`您将预订：${packageTitle}\n价格：${packagePrice}\n请填写后续预订信息`);
        });
    });
    
    // 默认展开第一个套餐
    if (packageCards.length > 0) {
        packageCards[0].classList.add('active');
        packageCards[0].querySelector('.toggle-btn i').style.transform = 'rotate(180deg)';
    }
});// Main JavaScript File for New Ark Travel

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav ul');
    
    mobileMenuToggle.addEventListener('click', function() {
        mainNav.style.display = mainNav.style.display === 'flex' ? 'none' : 'flex';
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            mainNav.style.display = 'flex';
        } else {
            mainNav.style.display = 'none';
        }
    });
    
    // Smooth scrolling for all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Button hover effects
    const buttons = document.querySelectorAll('.explore-button, .view-tour-button, .view-all-button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
            this.style.boxShadow = '0 6px 12px rgba(0,0,0,0.2)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
        });
    });
    
    // Tour card hover effects
    const tourCards = document.querySelectorAll('.tour-card');
    tourCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const image = this.querySelector('.tour-image img');
            image.style.transform = 'scale(1.05)';
        });
        
        card.addEventListener('mouseleave', function() {
            const image = this.querySelector('.tour-image img');
            image.style.transform = 'scale(1)';
        });
    });
    
    // Initialize the mobile menu display
    if (window.innerWidth <= 768) {
        mainNav.style.display = 'none';
    }
    
    console.log('New Ark Travel website initialized successfully');
});

// Tour Page Specific Functionality
if (document.querySelector('.tour-detail-page')) {
    // Gallery image zoom functionality
    const galleryImages = document.querySelectorAll('.gallery-thumbnail');
    const mainGalleryImage = document.querySelector('.gallery-main-image');
    
    galleryImages.forEach(image => {
        image.addEventListener('click', function() {
            const newSrc = this.getAttribute('data-fullsize');
            mainGalleryImage.src = newSrc;
            
            // Update active thumbnail
            document.querySelector('.gallery-thumbnail.active').classList.remove('active');
            this.classList.add('active');
        });
    });
    
    // Booking form validation
    const bookingForm = document.querySelector('.booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate form fields
            const nameInput = this.querySelector('input[name="name"]');
            const emailInput = this.querySelector('input[name="email"]');
            const dateInput = this.querySelector('input[name="date"]');
            
            if (!nameInput.value || !emailInput.value || !dateInput.value) {
                alert('Please fill in all required fields');
                return;
            }
            
            // Submit form (in a real app, this would be AJAX)
            this.submit();
        });
    }
}