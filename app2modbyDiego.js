
// Arreglos de datos base para formar dominios

const pronoun = ['the', 'our'];
const adj = ['great', 'big'];
const noun = ['jogger', 'racoon'];
const extensions = ['.com', '.net', '.us', '.io', '.es']; 

// Definición de "domain hacks" que permiten partir un nombre y usar parte del nombre como extensión.

const domainHacks = {
  'jogger': ['.ger'],  // "jogger" se puede dividir en "jogg.er"
  'racoon': ['.co', '.on'] // "racoon" se puede dividir en "racoo.n"
};

// Función para generar nombres de dominio
function generateDomains() {
  const domains = [];

  //Uso de forEach: Esto mejora la legibilidad, eliminando los bucles for...of y haciéndolo más declarativo.
  pronoun.forEach(p => {
    adj.forEach(a => {
      noun.forEach(n => {
        extensions.forEach(ext => {
          domains.push(`${p}${a}${n}${ext}`);
        });
      });
    });
  });

  // Generar combinaciones usando "domain hacks" si están disponibles para el nombre
  
  pronoun.forEach(p => {
    adj.forEach(a => {
      noun.forEach(n => {
        const hacks = domainHacks[n];
        if (hacks) {  // Solo si existen hacks para el nombre en cuestión
          hacks.forEach(hack => {
            // Crear el dominio utilizando parte del nombre y el hack
            domains.push(`${p}${a}${n.slice(0, n.length - hack.length)}${hack}`);
          });
        }
      });
    });
  });

  return domains;
}

// Generar e imprimir todos los dominios posibles
generateDomains().forEach(domain => console.log(domain));