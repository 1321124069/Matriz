function mostrarDatos() {
    var nivelAcademico;
    var carrera;
    var generacion;
    var periodoIngreso;
    var anoIngreso;
    var numeroConsecutivo;
    var matriculaInput = document.getElementById("matricula");
    var matricula = matriculaInput.value.trim();
    
        if (/^\d{10}$/.test(matricula)) {
            if (matricula[0] == 1) {
                nivelAcademico = "Licenciatura";
            } else if (matricula[0] == 2) {
                nivelAcademico = "Maestría";
            } else if (matricula[0] == 3) {
                nivelAcademico = "Doctorado";
            } else {
                nivelAcademico = "Nivel Académico Desconocido";
            }
            if(matricula[1] == 1){
                periodoIngreso = "Enero";
            }
            else if(matricula[1] == 2){
                periodoIngreso = "Mayo";
            }
            else if(matricula[1] == 3){
                periodoIngreso = "Septiembre";
            }
            else{
                periodoIngreso = "Periodo Desconocido";
            }
            anoIngreso = matricula.substring(2,4);
            generacion = matricula.substring(4,6);
            if(matricula[6] == 1){
                carrera = "Licenciatura en Negociones Internacionales";
            }
            else if(matricula[6] == 2){
                carrera = "Ingeneria en Mecanica Automotriz";
            }
            else if(matricula[6] == 3){
                carrera = "Ingeneria en Manufactura";
            }
            else if(matricula[6] == 4){
                carrera = "Ingeneria en Software";
            }
            else if(matricula[6] == 5){
                carrera = "Ingeneria en Finanzas";
            }
            else{
                carrera = "Carrera Desconocida";
            }
            numeroConsecutivo = matricula.substring(7,10);
            document.getElementById("resultados").innerHTML = `
                <div>Nivel Académico: ${nivelAcademico}</div>
                <div>Periodo de Ingreso: ${periodoIngreso}</div>
                <div>Año de Ingreso: ${anoIngreso}</div>
                <div>Generación: ${generacion}</div>
                <div>Carrera: ${carrera}</div>
                <div>Número Consecutivo: ${numeroConsecutivo}</div>
            `;
        } else {
            document.getElementById("resultados").innerHTML = `
        <div>Matrícula inválida</div>
    `;
        }
}