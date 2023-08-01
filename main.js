document.addEventListener('DOMContentLoaded', function() {
    const logos = document.querySelectorAll('.logos img');
    
    logos.forEach(logo => {
      logo.addEventListener('click', function() {
        const operation = this.getAttribute('data-operation');
        alert('Ir a la operación: ' + operation); // En lugar de un alert, puedes redirigir a una nueva página o realizar otra acción.
      });
    });
  });
  
  function realizarAritmetica() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const resultado = num1 + num2; // Realiza la operación de suma (puedes cambiar el operador según la operación deseada)
    document.getElementById("resultadoAritmetica").textContent = resultado;
  }
  
  function realizarPotencia() {
    const base = parseFloat(document.getElementById("base").value);
    const exponente = parseFloat(document.getElementById("exponente").value);
    const resultado = Math.pow(base, exponente); // Realiza la operación de potencia usando la función Math.pow()
    document.getElementById("resultadoPotencia").textContent = resultado;
  }

  function calcularRaiz() {
    const numeroRaiz = parseFloat(document.getElementById("numeroRaiz").value);
    const resultado = Math.sqrt(numeroRaiz);
    document.getElementById("resultadoRaiz").textContent = resultado;
  }
  
  function calcularArea() {
    const baseArea = parseFloat(document.getElementById("baseArea").value);
    const alturaArea = parseFloat(document.getElementById("alturaArea").value);
    const resultado = baseArea * alturaArea;
    document.getElementById("resultadoArea").textContent = resultado;
  }
  
  function convertirMasa() {
    const masaGramos = parseFloat(document.getElementById("masaGramos").value);
    const resultado = masaGramos / 1000;
    document.getElementById("resultadoMasa").textContent = resultado;
  }
  
  function convertirVolumen() {
    const volumenLitros = parseFloat(document.getElementById("volumenLitros").value);
    const resultado = volumenLitros * 1000;
    document.getElementById("resultadoVolumen").textContent = resultado;
  }
  
  function convertirLongitud() {
    const longitudMetros = parseFloat(document.getElementById("longitudMetros").value);
    const resultado = longitudMetros * 100;
    document.getElementById("resultadoLongitud").textContent = resultado;
  }
  
  function convertirDensidad() {
    const densidadKgL = parseFloat(document.getElementById("densidadKgL").value);
    const resultado = densidadKgL * 2.20462;
    document.getElementById("resultadoDensidad").textContent = resultado;
  }
  
  function convertirInformatica() {
    const tamañoBytes = parseFloat(document.getElementById("tamañoBytes").value);
    const resultado = tamañoBytes / 1024;
    document.getElementById("resultadoInformatica").textContent = resultado;
  }
  