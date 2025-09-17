// Kayar Banner (Carousel)
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;

    function showSlide(index) {
        carousel.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        currentIndex = index;
    }

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const index = parseInt(dot.getAttribute('data-index'));
            showSlide(index);
        });
    });

    setInterval(() => {
        currentIndex = (currentIndex + 1) % dots.length;
        showSlide(currentIndex);
    }, 5000);

    // "Detaylı Bilgi" butonları için alert
    document.querySelectorAll('.carousel-btn').forEach(button => {
        button.addEventListener('click', () => {
            const productNames = [
                "Fiber Lazer Kaynak",
                "Kobot",
                "Saç Kesim",
                "Bor Kesim",
                "Saç Büküm"
            ];
            alert(`"${productNames[currentIndex]}" ürünü hakkında detaylı bilgi almak için WhatsApp üzerinden bizimle iletişime geçebilirsiniz.`);
        });
    });
});