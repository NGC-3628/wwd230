document.addEventListener("DOMContentLoaded", function() {
    const cardContainer = document.getElementById('lottery-card');
    const generateButton = document.getElementById('generate-card-btn');
    
    generateButton.addEventListener('click', generateCard);

    function generateCard() {
        // Limpiar carta existente
        cardContainer.innerHTML = '';

        // Obtener imágenes aleatorias del JSON
        fetch('imagesJSON.json')
            .then(response => response.json())
            .then(data => {
                // Mezclar las imágenes
                const shuffledImages = shuffleArray(data.images);

                // Crear la carta de lotería con 3x3 imágenes
                for (let i = 0; i < 9; i++) {
                    const img = document.createElement('img');
                    img.src = shuffledImages[i].imageurl; // Acceder a la URL de la imagen en el JSON
                    cardContainer.appendChild(img);
                }
            })
            .catch(error => console.error('Error fetching images:', error));
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    
    // Generar carta inicial al cargar la página
    generateCard();
});
