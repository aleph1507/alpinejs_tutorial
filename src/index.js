import './style.css';
import 'alpinejs';

//gallery
window.gallery = {
    images: () => {
        return [
            {
                src: '/img/france-french-alps-megeve.jpg',
                alt: 'image 1'
            },
            {
                src: '/img/French_Alps_banner.jpg',
                alt: 'image 2'
            },
            {
                src: '/img/josiahskeats-tmb3-ig-thumbnail-image-block.jpg',
                alt: 'image 3'
            },
        ]
    },

    selectImage: ($event, displayed, index) => {
        displayed.src = gallery.images()[index].src;
        displayed.alt = gallery.images()[index].alt;
        const thumbs = document.getElementsByClassName('thumbnail');
        for (let i = 0; i<thumbs.length; i++) {
            thumbs[i].classList.remove('border-green-400');
        }
        $event.target.parentNode.classList.add('border-green-400');
    }
};