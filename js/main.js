import {autoAmarok, autoNivus, autoPolo, autoSaveiro, autoTaos, autoTCross, autoVento, autoVirtus} from './objetos.js'

const vehiculoBuscado = document.getElementById("vehiculoBuscado")
const output = document.getElementById("resultado")
const autos = [autoAmarok, autoNivus, autoPolo, autoSaveiro, autoTaos, autoTCross, autoVento, autoVirtus]

document.querySelector('button').addEventListener('click', function () {
    const modeloBuscado = vehiculoBuscado.value
    const resultado = buscarAuto(modeloBuscado)
    output.innerHTML = resultado
});

function buscarAuto(modelo) {
    const autos = [autoNivus, autoAmarok, autoPolo, autoSaveiro, autoTCross, autoTaos, autoVento, autoVirtus];
    
    for (const auto of autos) {
        if (auto.modelo.toLowerCase() === modelo.toLowerCase()) {
            return `
                <p>Modelo: ${auto.modelo}</p>
                <p>Tipo: ${auto.tipo}</p>
                <p>Precio: $${auto.precio.toLocaleString()}</p>
                <p>Financiable: ${auto.financiable ? 'Sí' : 'No'}</p>
            `;
        }
    }
    
    return "No contamos con ese modelo"
}


const input2 = document.getElementById("input2");
const boton2 = document.getElementById("boton2");
const output2 = document.getElementById("output2");

boton2.addEventListener("click", function () {
    const tipoBuscado = input2.value;
    const resultadoTipo = buscarPorTipo(tipoBuscado);
    output2.innerHTML = resultadoTipo;
});

function buscarPorTipo(tipo) {
    const autosFiltrados = autos.filter(auto => auto.tipo.toLowerCase() === tipo.toLowerCase());

    if (autosFiltrados.length > 0) {
        const resultadosHTML = autosFiltrados.map(auto => `
            <p>Modelo: ${auto.modelo}</p>
            <p>Precio: $${auto.precio.toLocaleString()}</p>
            <p>Financiable: ${auto.financiable ? 'Sí' : 'No'}</p>
            <hr>
        `).join("");

        return resultadosHTML;
    } else {
        return "No contamos con ese tipo de vehiculos";
    }
}