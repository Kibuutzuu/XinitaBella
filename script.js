document.getElementById("btn-imagen").addEventListener("click", function() {
    const imagenContainer = document.getElementById("imagen");
    
    const imagenes = [
        'ohyeah.jpg',
        'wohyeah.jpg',
        'unknown-2.png',
        'image.jpg',
        'IMG-20211223-WA0055.jpeg.jpg',
        'IMG-20211223-WA0059.jpeg.jpg',
        'IMG_20211223_093928_384.jpg',
        'IMG_20211223_100856_114.jpg',
        'IMG_20251202_113347.jpg',
        'dis.jpg',
        'ñau.jpg',
        'youknow.jpg',
        'random.jpg'
    ];

    const randomIndex = Math.floor(Math.random() * imagenes.length);
    const imagenSeleccionada = imagenes[randomIndex];
    
    const imgElement = document.createElement("img");
    imgElement.src = imagenSeleccionada;
    imgElement.alt = "Imagen aleatoria";
    
    imagenContainer.innerHTML = "";
    imagenContainer.appendChild(imgElement);
    imagenContainer.style.display = "flex";
});

