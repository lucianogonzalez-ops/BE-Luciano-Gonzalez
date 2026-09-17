function calcularPrecioFInal(precioBase , esVip){
    let precioFinal=precioBase
    esVip ? precioFinal = precioFinal* 0.90 : precioFinal=precioFinal* 1.21
    
    return {precioBase,precioFinal}

    }


const resultado=calcularPrecioFInal(1500,true)
console.log(resultado.precioBase)
console.log(resultado.precioFinal)

const resultado2=calcularPrecioFInal(1500,false)
console.log(resultado2.precioBase)
console.log(resultado2.precioFinal)