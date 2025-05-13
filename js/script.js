document.addEventListener('DOMContentLoaded', function() {
    // Efek hover untuk kartu permainan
    const gameCards = document.querySelectorAll('.game-card');
    gameCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Animasi scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.game-card, .learning-item');
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if(elementPosition < screenPosition) {
                element.classList.add('animate__animated', 'animate__fadeInUp');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Jalankan sekali saat load

    // Fungsi suara
    window.playSound = function(soundType) {
        const sounds = {
            'happy-sound': 'https://www.soundjay.com/buttons/sounds/button-09.mp3',
            'click-sound': 'https://www.soundjay.com/buttons/sounds/button-10.mp3',
            'pop-sound': 'https://www.soundjay.com/buttons/sounds/button-21.mp3',
            'magic-sound': 'https://www.soundjay.com/magic/sounds/magic-chime-01.mp3'
        };
        
        if(sounds[soundType]) {
            const audio = new Audio(sounds[soundType]);
            audio.play();
        }
    };

    // Karakter mengikuti cursor (efek sederhana)
    const logoCharacter = document.querySelector('.logo-character');
    if(logoCharacter) {
        document.addEventListener('mousemove', function(e) {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            logoCharacter.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
        });
    }
});

// Inisialisasi carousel (jika menggunakan Owl Carousel)
$(document).ready(function(){
    $(".learning-carousel").owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });
});
