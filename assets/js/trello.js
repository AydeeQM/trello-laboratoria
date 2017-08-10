var listaTarea = [];

function lista (title){
    this.title = title;
};

var columna = [''];
var body = document.body;

var div = document.createElement('div');

var tablero = document.createElement('table');
tablero.border = '1';

var bt_guardar = document.createElement("BUTTON");
bt_guardar.setAttribute('class','guardar');
bt_guardar.setAttribute('onclick','addguardar()');
bt_guardar.innerHTML = "Guardar";

var closeX = document.createElement("BUTTON");
closeX.setAttribute('class','delete');
closeX.innerHTML = "X";

var trs = document.createElement('tr');
var tds = document.createElement('td');

document.getElementById("agregatarea").addEventListener("click", addLista);
function addLista(){
    
    tds.appendChild(bt_guardar);
    tds.appendChild(closeX);
        
    tablero.appendChild(trs);
    trs.appendChild(tds); 
    
    body.appendChild(div);
    div.appendChild(tablero);
}

function addguardar(){
    var obtiene = document.getElementById('agregatarea').value;
    var arrLista = new lista(obtiene);
    listaTarea.push(arrLista);
    
    if(obtiene === ''){
        alert("Usted deberia de escribir una tarea...");
    }else{
            
        for(var i = listaTarea.length - 1; i<listaTarea.length; i++){
            var trx = document.createElement('tr');
            for(var j = 0; j<columna.length; j++){
                var tdx = document.createElement('td');
                tdx.setAttribute('contenteditable','true');
                tdx.setAttribute('width','100%');
                tdx.innerHTML = listaTarea[i].title;                
                
            }
            tablero.appendChild(trx);
            trx.appendChild(tdx);

        }
        body.appendChild(div);
        div.appendChild(tablero);
        obtiene = document.getElementById('agregatarea').value = ""; 
    }
 
}




