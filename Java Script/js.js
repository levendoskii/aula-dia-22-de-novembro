function criarCarro(marca, modelo, ano) {
    return{marca, modelo, ano
    };
};

const carro1=criarCarro("Fiat", "Uno", 2018);
const carro2=criarCarro("Toyota", "Corolla", 2022);
const carro3=criarCarro("Ford", "Ka", 2019);

console.log(carro1.marca, carro1.modelo, carro1.ano);
console.log(carro2.marca, carro2.modelo, carro2.ano);
console.log(carro3.marca, carro3.modelo, carro3.ano);