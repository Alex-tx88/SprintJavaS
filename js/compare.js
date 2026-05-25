//car
let carArr = [];

class Car {
    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image){
       this.nome = nome;
       this.preco = preco;
       this.alturaCacamba = alturaCacamba;
       this.alturaVeiculo = alturaVeiculo;
       this.alturaSolo = alturaSolo;
       this.capacidadeCarga = capacidadeCarga;
       this.motor = motor;
       this.potencia = potencia;
       this.volumeCacamba = volumeCacamba;
       this.roda = roda;
       this.image = image;    
    }
} 

function GetCarArrPosition(arr, carClass) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].nome === carClass.nome)
            return i;
    }
    return -1;
}

function SetCarToCompare(el, carClass) {
    if(carClass instanceof Car){       
        if(el.checked){
            if (GetCarArrPosition(carArr, carClass) === -1) {
               if(carArr.length < 2) {
                    carArr.push(carClass);
               } else {
                    
                    alert("Você só pode comparar 2 carros, remova um para adicionar outro");
                    el.checked = false;
               }
            }
            
        } else {
            let index = GetCarArrPosition(carArr, carClass);
            if(index !== -1) {
                // Remove o carro da lista se for desmarcado
                carArr.splice(index, 1);
            }   
        } 
    } else {
        throw "You need set a Car Class";
    }
}

function ShowCompare() {
    if(carArr.length !== 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    // Preenche as informações primeiro
    UpdateCompareTable();
    
    // Abre o pop-up na tela
    document.getElementById("compare").style.display = "block";
}

function HideCompare(){
    document.getElementById("compare").style.display = "none"; 
}

function UpdateCompareTable() {
    let carro1 = carArr[0];
    let carro2 = carArr[1];

    // Imagens
    document.getElementById("compare_image_0").innerHTML = `<img src="${carro1.image}" width="150" />`;
    document.getElementById("compare_image_1").innerHTML = `<img src="${carro2.image}" width="150" />`;

    // Modelo
    document.getElementById("compare_modelo_0").innerHTML = carro1.nome;
    document.getElementById("compare_modelo_1").innerHTML = carro2.nome;

    // Altura da caçamba 
    document.getElementById("compare_alturacacamba_0").innerHTML = carro1.alturaCacamba + " mm";
    document.getElementById("compare_alturacacamba_1").innerHTML = carro2.alturaCacamba + " mm";

    // Altura do veículo 
    document.getElementById("compare_alturaveiculo_0").innerHTML = carro1.alturaVeiculo + " mm";
    document.getElementById("compare_alturaveiculo_1").innerHTML = carro2.alturaVeiculo + " mm";

    // Altura livre do solo 
    document.getElementById("compare_alturasolo_0").innerHTML = carro1.alturaSolo + " mm";
    document.getElementById("compare_alturasolo_1").innerHTML = carro2.alturaSolo + " mm";

    // Capacidade de carga 
    document.getElementById("compare_capacidadecarga_0").innerHTML = carro1.capacidadeCarga + " Kg";
    document.getElementById("compare_capacidadecarga_1").innerHTML = carro2.capacidadeCarga + " Kg";

    // Motor
    document.getElementById("compare_motor_0").innerHTML = carro1.motor;
    document.getElementById("compare_motor_1").innerHTML = carro2.motor;

    // Potência 
    document.getElementById("compare_potencia_0").innerHTML = carro1.potencia + " cv";
    document.getElementById("compare_potencia_1").innerHTML = carro2.potencia + " cv";

    // Volume de caçamba 
    document.getElementById("compare_volumecacamba_0").innerHTML = carro1.volumeCacamba + " L";
    document.getElementById("compare_volumecacamba_1").innerHTML = carro2.volumeCacamba + " L";

    // Roda
    document.getElementById("compare_roda_0").innerHTML = carro1.roda;
    document.getElementById("compare_roda_1").innerHTML = carro2.roda;

    // Preço 
    document.getElementById("compare_preco_0").innerHTML = "R$ " + carro1.preco.toLocaleString('pt-BR');
    document.getElementById("compare_preco_1").innerHTML = "R$ " + carro2.preco.toLocaleString('pt-BR');
}