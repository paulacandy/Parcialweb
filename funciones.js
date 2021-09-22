let gusto;

function editar(){
    if(document.getElementById("gusto").value==='')
    {
        alert("Casilla vacía")
    }
    else
    {
        gusto = document.getElementById("gusto").value;
        document.getElementById('tablaprincipal').innerHTML += `<td>${gusto}</td><td>0</td><td><a onclick="transformarEditable(this)">insert</a></td>`;
    }
}



function transformarEditable(fila)
    {
        var editando = false;
        
        if(editando === false)
        {   
            var nodetr= fila.parentNode.parentNode;
            var nodestr= nodetr.getElementsByTagName('td');//
            var form= document.getElementById('index');
            var Gusto=nodestr[0].firstChild.nodeValue;
            var porcentaje=nodestr[1].firstChild.nodeValue
            var codigohtml='<td><input id="editname" type="text" name="gusto"  value="'+Gusto+'"></td>'+
         '<td><input type="text" name="porcentage" id="editprt" value="'+porcentaje+'"></td>'+'<span>En edicion</span></td>'
        }
        nodetr.innerHTML=codigohtml;
        editando=true;
        showTastes()
    

    }

let tst = document.getElementById("oculto");
tst.style.display='none';

function showTastes() {
    var x = document.getElementById("oculto");
    if (x.style.display === "none") {
        x.style.display = "block";
    } 
}
    
function noshowTastes(){
    var x = document.getElementById("oculto");
    if (x.style.display != "none") {
        x.style.display = "none";
    } 
}

function cancelar(){
    location.reload();
}

//PARA EL INDEX 

function enviar(){
    document.form1.submit()
    localStorage.setItem('nm',document.getElementById('nm').value)//name
    localStorage.setItem('email',document.getElementById('email').value)
    localStorage.setItem('telefono',document.getElementById('telefono').value)
    localStorage.setItem('gusto',document.getElementById('editname').value)
    localStorage.setItem('editprt',document.getElementById('editprt').value) 
 }



$("#btn-gustos").on('click',editar);


//PARA EL RECIVIDO
function show() {
    document.getElementById("nombre_2").textContent = localStorage.getItem('nombre')
    document.getElementById("email_2").value = localStorage.getItem('email');
    document.getElementById("telefono_2").value = localStorage.getItem('telefono');
    document.getElementById("gusto_2").value = localStorage.getItem('gusto');
    document.getElementById("prt_2").value = localStorage.getItem('editprt');
}

//show();