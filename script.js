document.getElementById('carbonForm').addEventListener('submit', function(event){
    event.preventDefault();
    calculateCarbonFootprint();
});

document.getElementById('startVoice').addEventListener('click', function(){
    startVoiceComand();
})

function startVoiceComand(){
    if (annyang){
        annyang.setlanguage('pt-br');
        var comands = [
            'calcular (pegada) (de) (carbono)' : calculateCarbonFootprint(),
            '*texto': teste 
        ]
        annyang.addComannds(comands);
        annyang.start();
    }
    else{
        alert('O reconhecimento de voz não é suportado neste navegador!.');
    }
};

function teste(texto){
    console.log(texto);
    annyang.pause();
}

function calculateCarbonFootprint(){
    console.log('calculando');
    var fuelAmount = parseFloat(document.getElementById('fuel').value);
    var distance = parseFloat(document.getElementById('distance').value);

    var fuelEmissionFactor = 2.68;
    var distanceEmission = 0.12;

    var calculatedCarbonFootprint = (fuelAmount * fuelEmissionFactor) + (distance * distanceEmission);

    document.getElementById('result').innerHTML = "<p>A Pegada de Carbono é " + calculatedCarbonFootprint.toFixed(2) + " kg CO2</p>";
}
