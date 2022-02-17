class App {
    constructor() {
        this.spaceship = null
    }



    start() {
        this.nave()
        let chosenOptions
        do {
            chosenOptions = this.menu()
            this.options(chosenOptions)
        } while (chosenOptions != '3')
            this.Exit()
    }







    menu() {
        const optionsMenu = 'O que você deseja fazer\n' +
            '1-Acelerar \n' +
            '2-Trocar de nave\n' +
            '3-Imprimir e sair\n'

        let chosenOptions = prompt(optionsMenu)
        while(!["1", "2", "3"].includes(chosenOptions)){
            chosenOptions = prompt(optionsMenu)
        }
        return chosenOptions
    }

    nave() {
        let name = prompt('Qual o nome da nave?')
        let crewQuantity = Number(prompt('Qual a quantidade de tripulantes?'))
        const types = 'Qual o tipo de nave?\n' +
            'Batalha\n' +
            'Transporte\n'
        let naveType = prompt(types)
        if (naveType === 'batalha' || naveType === 'Batalha') {
            let quatityArms = Number(prompt('Quantas armas tem a nave?'))
            console.log(this.spaceship = new battleShip(name, crewQuantity, quatityArms))
        } else if (naveType === 'transporte' || naveType === 'Transporte') {
            let crews = Number(prompt('Qual o numero de lugares?'))
            this.spaceship = new transportSpaceShip(name, crewQuantity, crews)
        }
    }
    accelerationSpaceship() {
        let acceleration = Number(prompt('Quanto você gostaria de acelerar?'))
        this.spaceship.speedUp(acceleration)
    }

    options(chosenOptions) {
        switch (chosenOptions) {
            case "1":
                this.accelerationSpaceship()
                break;
            case "2":
                this.nave()
                break;
        }
    }

    Exit() {
        let message = 'Nome: ' + this.spaceship.name + '\n' +
            'Quantidade de tripulantes: ' + this.spaceship.crewQuantity + '\n' +
            'Velocidade atual: ' + this.spaceship.velocity + '\n' 

        alert(message)
    }


}