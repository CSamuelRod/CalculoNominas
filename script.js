function calcularSalario() {
    const salarioBase = parseFloat(document.getElementById('salarioBase').value) || 0;

    // Obtener valores de los pluses
    const plusNocturnidad = parseFloat(document.getElementById('plusNocturnidad').value) || 0;
    const plusVestuario = parseFloat(document.getElementById('plusVestuario').value) || 0;
    const plusProductividad = parseFloat(document.getElementById('plusProductividad').value) || 0;
    const plusPeligrosidad = parseFloat(document.getElementById('plusPeligrosidad').value) || 0;
    const plusQuebrantoMoneda = parseFloat(document.getElementById('plusQuebrantoMoneda').value) || 0;
    const plusHerramientas = parseFloat(document.getElementById('plusHerramientas').value) || 0;
    const plusConvenio = parseFloat(document.getElementById('plusConvenio').value) || 0;

    // Obtener valores de las horas extra
    const horasExtraEstructurales = parseFloat(document.getElementById('horasExtraEstructurales').value) || 0;
    const horasExtraFuerzaMayor = parseFloat(document.getElementById('horasExtraFuerzaMayor').value) || 0;

    // Obtener valores de pagas extras
    const pagasExtras = parseFloat(document.getElementById('pagasExtras').value) || 0;

    // Obtener valores de IRPF
    const irpf = parseFloat(document.getElementById('irpf').value) || 0;

    // Calcular devengos
    const totalPluses = plusNocturnidad + plusVestuario + plusProductividad +
                        plusPeligrosidad + plusQuebrantoMoneda + plusHerramientas + plusConvenio;
    
    const devengos = salarioBase + totalPluses + horasExtraEstructurales + horasExtraFuerzaMayor;

    // Calcular deducciones
    const bcc = salarioBase + totalPluses + (pagasExtras * 2) / 12; // Incluye la parte proporcional de pagas extras
    const bcp = bcc + horasExtraEstructurales + horasExtraFuerzaMayor; // Base de cotización por contingencias profesionales

    const contingenciasComunes = bcc * 0.048; // 4.8% de la base de cotización por contingencias comunes
    const formacionProfesional = bcp * 0.001; // 0.1% de la base de cotización por contingencias profesionales
    const desempleo = bcp * 0.0155; // 1.55% de la base de cotización por desempleo
    const hEstructurales = horasExtraEstructurales * 0.047; // 4.7% de la base de horas extras estructurales
    const hFuerzaMayor = horasExtraFuerzaMayor * 0.02; // 2% de la base de horas extra por fuerza mayor

    const seguridadSocial = contingenciasComunes + formacionProfesional + desempleo + hEstructurales + hFuerzaMayor;
    const deducciones = (irpf / 100) * devengos;

    // Calcular salario neto
    const salarioLiquido = devengos - deducciones - seguridadSocial;
    
    console.log(contingenciasComunes.toFixed(2));
    console.log(formacionProfesional.toFixed(2));
    console.log(desempleo.toFixed(2));
    console.log(hEstructurales.toFixed(2));
    console.log(hFuerzaMayor.toFixed(2));
    console.log(seguridadSocial.toFixed(2));
    console.log(deducciones.toFixed(2));

    document.getElementById('resultado').innerText = `Salario Neto a Percibir: ${salarioLiquido.toFixed(2)} €`;
}
