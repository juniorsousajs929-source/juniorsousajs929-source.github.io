const fs = require('fs');
let text = fs.readFileSync('assets/index-EKBqwSm3.js', 'utf8');

const targetStr = '[{img:pM,quote:"Bizarro... Perdi 7kg em 3 semanas!",name:"Giovanna, 34 - São Paulo"},{img:mM,quote:"Minha barriga sumiu! Não acredito!",name:"Sandra, 39 - Rio de Janeiro"},{img:gM,quote:"Voltei a usar minhas roupas antigas!",name:"Cláudia, 35 - Belo Horizonte"},{img:yM,quote:"Quem usa tem resultado 😍🙌",name:"Patrícia, 31 - Curitiba"}]';
const replacement = '[{img:"assets/media__1772077139255.png",quote:"Incrível! Veja as transformações reais!",name:"Resultados de nossas clientes"}]';

if (text.includes(targetStr)) {
    text = text.replace(targetStr, replacement);
    fs.writeFileSync('assets/index-EKBqwSm3.js', text);
    console.log('Testimonials replaced successfully.');
} else {
    console.log('Target string not found in JS file!');
}
