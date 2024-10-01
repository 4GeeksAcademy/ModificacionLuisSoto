let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extensions = ['.com', '.net', '.us', '.io', '.es']; 
let domainHacks = {
  'jogger': ['.ger'],  // Por ejemplo, para "jogger" puedes usar "jogg.er"
  'racoon': ['.co', '.on'] // "racoon" podría usar "racoo.n"
};

function generateDomains() {
  let domains = [];

  // Generar combinaciones normales con extensiones
  for (let p of pronoun) {
    for (let a of adj) {
      for (let n of noun) {
        for (let ext of extensions) {
          domains.push(`${p}${a}${n}${ext}`);
        }
      }
    }
  }

  // Generar combinaciones con domain hacks
  for (let p of pronoun) {
    for (let a of adj) {
      for (let n of noun) {
        if (domainHacks[n]) {
          for (let hack of domainHacks[n]) {
            domains.push(`${p}${a}${n.slice(0, n.length - hack.length)}${hack}`);
          }
        }
      }
    }
  }

  return domains;
}

// Imprimir los dominios generados
let allDomains = generateDomains();
allDomains.forEach(domain => console.log(domain));