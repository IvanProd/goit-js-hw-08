// Add imports above this line
import { galleryItems } from './gallery-items';
import {createGalleryItem, makeGallery, divGallery} from './creation-module';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"
// Change code below this line

divGallery.addEventListener('click', clickingOnTheImage);

function clickingOnTheImage(event){

  if(event.target.nodeName !== "IMG"){
    return;
  };
    event.preventDefault();
};

createGalleryItem
makeGallery(galleryItems);
clickingOnTheImage
let lightbox = new SimpleLightbox('.gallery__item', { captionDelay: 250, showCounter: true});