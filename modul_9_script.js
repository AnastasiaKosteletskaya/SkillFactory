document.getElementById('load-images').addEventListener('click', function() {
    fetchImages();
});

async function fetchImages() {
    const apiUrl = 'https://dog.ceo/api/breeds/image/random/20';
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        displayImages(data.message);
    } catch (error) {
        console.error("Ошибка при получении изображений:", error);
    } finally {
        console.log("Запрос изображений завершен");
    }
}

function displayImages(images) {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';
    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image;
        imgElement.classList.add('gallery__image');
        gallery.appendChild(imgElement);
    });
}