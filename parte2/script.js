// Arreglo para almacenar los Me gusta de cada publicación
const likes = [9, 12, 9]; // Inicialmente, todas las publicaciones tienen 0 Me gusta

// Función para incrementar los Me gusta
function incrementLike(index) {
    likes[index]++; // Incrementa el contador de Me gusta para la publicación correspondiente
    updateLikeCount(index); // Actualiza la visualización del contador
}

// Función para actualizar el contador de Me gusta en la interfaz de usuario
function updateLikeCount(index) {
    const likeCountElements = document.querySelectorAll(".like-count"); // Selecciona todos los elementos con la clase "like-count"
    likeCountElements[index].textContent = likes[index] + " like(s)"; // Actualiza el texto del contador para la publicación correspondiente
}
