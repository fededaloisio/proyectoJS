import {autoAmarok, autoNivus, autoPolo, autoSaveiro, autoTaos, autoTCross, autoVento, autoVirtus} from './objetos.js'

const vehiculoBuscado = $("#vehiculoBuscado");
const output = $("#resultado");
const autos = [autoAmarok, autoNivus, autoPolo, autoSaveiro, autoTaos, autoTCross, autoVento, autoVirtus]
const modelosJSON = `{
    "modelos": {
        "nivus": {
            "modelo": "Nivus",
            "tipo": "SUV",
            "precio": 13000000,
            "financiable": false
        },
        "taos": {
            "modelo": "Taos",
            "tipo": "SUV",
            "precio": 25000000,
            "financiable": true
        },
        "tcross": {
            "modelo": "T-Cross",
            "tipo": "SUV",
            "precio": 13000000,
            "financiable": false
        },
        "amarok": {
            "modelo": "Amarok",
            "tipo": "Pick-Up",
            "precio": 18000000,
            "financiable": true
        },
        "saveiro": {
            "modelo": "Saveiro",
            "tipo": "Pick-Up",
            "precio": 11000000,
            "financiable": false
        },
        "polo": {
            "modelo": "Polo",
            "tipo": "Hatchback",
            "precio": 10000000,
            "financiable": true
        },
        "vento": {
            "modelo": "Vento",
            "tipo": "Sedan",
            "precio": 27000000,
            "financiable": false
        },
        "virtus": {
            "modelo": "Virtus",
            "tipo": "Sedan",
            "precio": 10000000,
            "financiable": true
        }
    }
}`;

const jsonData = JSON.parse(modelosJSON)

$("#boton1").click(function(){
    const modeloBuscado = vehiculoBuscado.val()
    const resultado = buscarAuto(modeloBuscado)
    output.html(resultado)
}) 

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


const input2 = $("#input2");
const output2 = $("#output2");

$("#boton2").click(function () {
    const tipoBuscado = input2.val();
    const resultadoTipo = buscarPorTipo(tipoBuscado);
    output2.html(resultadoTipo);
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

const url = './data/objetos.json';

$("#boton2").click(async function () {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Error al obtener los datos');
        }

        const jsonData = await response.json();

        console.log(jsonData);

    }   catch (error) {
            console.error('Hubo un error:', error.message);
        }
});