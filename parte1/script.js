function incrementLike() {
    const likeCount = document.getElementById('like-count'); // Selecciona el elemento que muestra el contador
    let currentCount = parseInt(likeCount.textContent); // Obtiene el valor actual del contador y lo convierte a número
    currentCount++;     // Incrementa el contador en 1
    likeCount.textContent = `${currentCount} like(s)`; // Actualiza el texto del contador
}