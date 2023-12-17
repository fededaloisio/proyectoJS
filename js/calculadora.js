    const calcularBtn = document.getElementById("btnCalculadora")
    const salida = document.getElementById("outputForm")

    calcularBtn.addEventListener('click', calcularPresupuesto)

    function calcularPresupuesto() {
        console.log("La función calcularPresupuesto se está ejecutando.")
        const valor0km = parseInt(document.getElementById("km0").value) || 0;
        const dineroDisponible = parseInt(document.getElementById("presupuesto").value) || 0;
        const valCuotas = parseInt(document.getElementById("cuotaValor").value) || 0;

        const diferencia = dineroDisponible >= 0 ? valor0km - dineroDisponible: valor0km;

        const cuotasTotales = (diferencia / valCuotas).toFixed(2)

        const valCuotasPuntos = valCuotas.toLocaleString();

        outputForm.textContent = `Cuotas Totales: ${cuotasTotales} de $${valCuotasPuntos}`
        
}