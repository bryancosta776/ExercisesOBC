class App{
    addProperties() {
        
        let type = document.querySelector('select[name=type]').value
        let area = document.querySelector('input#area').value
        let rented = document.querySelector('input[name=rented]').value

        let imobbile = new Immobile(type, area, rented)

        this.addOnPropertiesList(imobbile)
        this.cleanForm()

    }

    addOnPropertiesList(imobbile){
        let lElement = document.createElement('li')


        let infoImobbile = 'Tipo: ' + imobbile.type + '\n Area: ' +  imobbile.area + ' m²'


        if(imobbile.rented){
            this.rentedOn()
        }else {
            lElement.innerHTML += infoImobbile
            let removeButton = this.removeButton()
            lElement.appendChild(removeButton)
            document.getElementById('properties').appendChild(lElement)
        }
        
    
        
    }

    rentedOn(){
        let aviso = document.createElement('span')
        aviso.style.backgroundColor = 'red'
        aviso.style.color = 'yellow'
        aviso.innerText = 'Alugado'
        return aviso
    }

    removeButton(){
        let buttonRemove = document.createElement('button')
        buttonRemove.setAttribute('onclick', 'app.remove()')
        buttonRemove.innerText = 'Remover'
        return buttonRemove
    }

    cleanForm(){
        document.querySelector('select[name=type]').value = ""
        document.querySelector('input[name=rented]').value = false
    }

    remove(){
        let liRemove = this.event.target.parentNode
        document.getElementById('properties').appendChild(liRemove)
    }

    
}


