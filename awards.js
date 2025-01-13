window.onload = function () {
    document.getElementById("title").addEventListener("click", function () {
        window.location.href = "index1.html";
    });
    const container = document.getElementsByClassName('container')[0];
    const navbar = document.getElementsByClassName('navbar')[0];
    document.body.appendChild(container);
    const div1 = document.getElementsByClassName('div1')[0];
    //container.appendChild(div1);
    //div1.classList.add('div1');
    const titlu = document.createElement('p');
    const info_titlu = document.createTextNode('Goodbye Fall, Welcome... Awards Season!');
    titlu.appendChild(info_titlu);
    div1.appendChild(titlu);
    div1.style.backgroundColor = '#000a1f';
    div1.style.color = 'white';
    div1.style.textAlign = 'center';
    div1.style.fontSize = '2rem';
    div1.style.paddingTop = '7px';
    div1.style.fontFamily = "Arial, Helvetica, sans-serif";
    const navigare = document.getElementsByClassName("navbar");
    navigare[0].style.backgroundColor = '#000a1f';
    const div2 = document.getElementsByClassName('div2')[0];
    //container.appendChild(div2);
    //div2.classList.add('div2');
    div2.innerHTML = `
<p>With the awards season coming in full swing, critics had already predicted that La La Land was going to receive a great many of nominations. So, when it was announced that the movie got seven nominations at the Golden Globes, it was pretty clear that it did not fall short of its expectations, and that it was just the begging of a long list of nominations and awards.</p> 
`;
    const sliderContainer = document.querySelector('.slider-container');
    const images = [];
    images.push('POZE_SLIDER/image1.jpg');
    images.push('POZE_SLIDER/image2.jpg');
    images.push('POZE_SLIDER/image3.webp');
    images.push('POZE_SLIDER/image4.webp');
    images.push('POZE_SLIDER/image5.webp');
    images.push('POZE_SLIDER/image6.webp');
    images.push('POZE_SLIDER/image7.webp');
    let currentIndex = 0;

    function showImage(index) {
        // Remove the current image
        const currentImage = sliderContainer.querySelector('img');
        if (currentImage) {
            currentImage.classList.remove('active');
            setTimeout(() => {
                sliderContainer.removeChild(currentImage);
            }, 1000); 
        }

        
        const img = document.createElement('img');
        img.src = images[index];
        img.classList.add('active');
        img.style.borderRadius = '5%';


        sliderContainer.appendChild(img);
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }


    showImage(currentIndex);


    setInterval(nextImage, 3000);
    function press_key(event) {
        if (event.key == 't')
            navbar.scrollIntoView({ behavior: 'smooth', block: 'start' });
        else return;
    }
    const scrollToTopButton = document.querySelector('.scroll-to-top');
    scrollToTopButton.addEventListener('click', function () {
        navbar.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    const canvas = document.getElementById('scrollCanvas');
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.arc(10, 10, 10, 0, 2 * Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();
    document.addEventListener('keydown', function () {
        press_key(event);
    });
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color = color + letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    setInterval(function () { scrollToTopButton.style.backgroundColor = getRandomColor(); }, 4000);
    //div2.style.color='white';
    //div2.style.backgroundColor='#000a1f';
    //const data=window.getComputedStyle(div2);
    //console.log(data);
    const div4 = document.querySelector('.div4');
    const div5 = document.querySelector('.div5');
    

    
}
