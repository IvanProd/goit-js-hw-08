
const divGallery = document.querySelector('.gallery');

const createGalleryItem = (element) => {
  return element.map(item => {
      return `<a class="gallery__item" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" title="${item.description}"/>
    </a>`
  });
};

function makeGallery(massive){
  return divGallery.insertAdjacentHTML('afterbegin', createGalleryItem(massive).join('')
  );
};

export {createGalleryItem, makeGallery, divGallery};