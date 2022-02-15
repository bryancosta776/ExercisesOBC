function shipData(){
    let name = prompt('Qual o nome da nave?')
    let quantityCrew = Number(prompt('Quantos tripulantes tem a nave?'))
    let typeChip = prompt('A nave é de batalha ou de transporte')

    if(typeChip === 'batalha' || typeChip === 'Batalha'){
        let arms = prompt('Quantas armas tem a nave?')
        let battleChip = new chipBattle(arms)
        console.log(battleChip)
    }
}