
let jugadas = ['piedra', 'papel', 'tijera']
let puntajePLAYER=0;
let puntajeCPU =0;

let numeroJuagadas = parseInt(prompt('Cuantas veces deseas jugar en este torneo?'))

for(let i = 0; i < numeroJuagadas; i++) {
    let jugadaPLAYER = prompt('Ingrese la jugada que deseas jugar (piedra ✊, papel🖐, tijera✌): ').toLowerCase()
    if(!jugadas.includes(jugadaPLAYER)) {
        alert('opcion no valida')
    }
    
    let indiceCPU= Math.floor(Math.random() * jugadas.length)
    
    let opcionCPU = jugadas[indiceCPU]

    if(jugadaPLAYER === opcionCPU) {
        alert(`Empate - La maquina elige ${opcionCPU} y tu elegiste ${jugadaPLAYER}`)
    } else if (
        (jugadaPLAYER === 'piedra✊' && opcionCPU === 'tijera✌') ||
        (jugadaPLAYER === 'papel🖐' && opcionCPU === 'piedra✊') ||
        (jugadaPLAYER === 'tijera✌' && opcionCPU === 'papel🖐')
    ){
        puntajePLAYER +=1;
        alert(`🎉Ganaste - La maquina elige ${opcionCPU} y tu elegiste ${jugadaPLAYER}`)
    } else {
        puntajeCPU +=1;
        alert(`😥Perdiste - La maquina elige ${opcionCPU} y tu elegiste ${jugadaPLAYER}`)
    }
}

if(puntajePLAYER === puntajeCPU) {
    alert('Empate')
}else if(puntajePLAYER > puntajeCPU){
    alert(`🎉Ganaste el Torneo puntajes: Jugador ${puntajePLAYER} - Maquina ${puntajeCPU}`)
}else {
    alert(`😥Perdiste el Torneo puntajes: Jugador ${puntajePLAYER} - Maquina ${puntajeCPU}`)
}
