import { galleryItems } from "./gallery-items.js";
// Change code below this line

// description: "Hokkaido Flower";
// original: "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg";
// preview: "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg";

const container = document.querySelector(".gallery");

function createMarkup(array) {
  return array
    .map(
      ({ description, original, preview }) =>
        `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`
    )
    .join("");
}

createMarkup(galleryItems);

container.insertAdjacentHTML("beforeend", createMarkup(galleryItems));

container.addEventListener("click", itemsClickHandler);

function itemsClickHandler(event) {
  event.preventDefault();
  if (event.currentTarget === event.target) {
    return;
  }
  const urlEl = event.target.dataset.source;
  console.log(urlEl);

  const galleryItem = galleryItems.find(
    (element) => element.original === urlEl
  );
  console.log(galleryItem);

  const modalOpen = basicLightbox.create(`
    <li class="gallery__item">
      <a class="gallery__link" href="${galleryItem.original}">
        <img
          class="gallery__image"
          src="${galleryItem.original}"
          data-source="${galleryItem.original}"
          alt="${galleryItem.description}"
        />
      </a>
    </li>`);
  modalOpen.show();

  if (modalOpen) {
    document.addEventListener("keydown", onEscPress);
    function onEscPress(event) {
      if (event.code === "Escape") {
        modalOpen.close();
        document.removeEventListener("keydown", onEscPress);
      }
    }
  }
}
