// script.js
document.getElementById("btn-imagen").addEventListener("click", function() {
    const imagenContainer = document.getElementById("imagen");
    
    // Lista de archivos JPG en la carpeta
    const imagenes = [
        'imagen1.jpg',
        'imagen2.jpg',
        'imagen3.jpg', // Agrega más imágenes si tienes más
        'imagen4.jpg'   // Recuerda que todas deben estar en la misma carpeta
    ];

    // Escoge una imagen aleatoria
    const randomIndex = Math.floor(Math.random() * imagenes.length);
    const imagenSeleccionada = imagenes[randomIndex];
    
    // Crea un elemento <img> y lo inserta en el contenedor
    const imgElement = document.createElement("img");
    imgElement.src = imagenSeleccionada;
    imgElement.alt = "Imagen aleatoria";
    
    // Limpia cualquier imagen previa y muestra la nueva
    imagenContainer.innerHTML = "";
    imagenContainer.appendChild(imgElement);
    imagenContainer.style.display = "flex"; // Mostrar la imagen
});
