
const carousel = document.querySelector('.carousel');
        let translateValue = 0;

        function nextSlide() {
            translateValue -= 100;
            if (translateValue < -100 * (carousel.children.length - 1)) {
                translateValue = 0;
            }
            carousel.style.transform = `translateX(${translateValue}%)`;
        }

        function prevSlide() {
            translateValue += 100;
            if (translateValue > 0) {
                translateValue = -100 * (carousel.children.length - 1);
            }
            carousel.style.transform = `translateX(${translateValue}%)`;
        }