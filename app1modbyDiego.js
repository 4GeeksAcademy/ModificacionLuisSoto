
// Array que contiene un corazón en arte ASCII, línea por línea
const asciiHeart = [
    "⣠⣤⣶⣶⣦⣄⡀  ⠀⢀⣤⣴⣶⣶⣤⣀",
    "⣼⣿⣿⣿⣿⣿⣿⣷⣤⣾⣿⣿⣿⣿⣿⣿⣧",
    "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
    "⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏",
    " ⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠋ ",
    "   ⠙⢿⣿⣿⣿⣿⣿⣿⣿⡿⠛⠁⠀",
    "     ⠉⢿⣿⣿⣿⠟⠋⠀",
    "⠀      ⠙⠻⠁"
];

/**
 * Función que anima la impresión del corazón ASCII línea por línea.
 * @param {number} ms - Tiempo en milisegundos entre cada línea impresa.
 */

const animateByLine = (ms) => {
    // Función recursiva que imprime cada línea de asciiHeart
    asciiHeart.forEach((line, index) => {
        // Usa setTimeout para retrasar la impresión de cada línea según el índice
        setTimeout(() => console.log(line), index * ms);
    });
};

// Inicia la animación con un intervalo de 500 milisegundos entre líneas
animateByLine(500);