function mostrarVista1() {
    document.getElementById('vista-1').style.display = 'block';
    document.getElementById('vista-2').style.display = 'none';
    document.getElementById('vista-3').style.display = 'none';
}

function mostrarVista2() {
    document.getElementById('vista-1').style.display = 'none';
    document.getElementById('vista-2').style.display = 'block';
    document.getElementById('vista-3').style.display = 'none';
}

function mostrarVista3() {
    document.getElementById('vista-1').style.display = 'none';
    document.getElementById('vista-2').style.display = 'none';
    document.getElementById('vista-3').style.display = 'block';
}
