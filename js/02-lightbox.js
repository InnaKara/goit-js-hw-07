import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const container = document.querySelector(".gallery");
console.log(SimpleLightbox);

function createMarkup(array) {
  return array
    .map(
      ({ description, original, preview }) =>
        `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
    )
    .join("");
}

createMarkup(galleryItems);
container.insertAdjacentHTML("beforeend", createMarkup(galleryItems));

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
