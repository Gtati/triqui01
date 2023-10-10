//Coger un selector
const options = document.querySelectorAll('button')
//Declarar variable 
let shift = 0;
//Crear arreglo vacio
const board = []
//Evento que mira cuando presionen el boton
window.addEventListener('DOMContentLoaded', pressButton)
//Recorrer el arreglo de botones y con vcada click va a hacer algo
function pressButton(){
    options.forEach((item, idx)=>
    item.addEventListener('click', (event) => pressedButton(event, idx)));
}
//El event.target guarda a que boton le di click

function pressedButton(event, pos){
    let x = 'x';
    let o = 'o';
    let currentBtn = event.target;
    
    if(shift % 2 === 0){
        currentBtn.style.backgroundColor = '#3ec98d'
        currentBtn.textContent= x;
        board[pos] = x;
        shift++
        }else{
            currentBtn.style.backgroundColor = '#95c9b3'
            currentBtn.textContent = o;
            board[pos] = o;
            shift++
        }
       if(validateGame()){
        Swal.fire ({
          title: 'Ganador ' + event.target.textContent,
          width: 400,
          padding: '3rem',
          color: '8fdce7'
        })
       } else if (shift === 9){
        Swal.fire ({
          title: 'Empate',
          width: 300,
          height: 300,
          padding: '3rem',
          color: '8fdce7'
        })
       }

function validateGame() {
  if (board[0] === board[1] && board[0] === board[2] && board[0]) {
    return board[0];
  } else if (board[3] === board[4] && board[3] === board[5] && board[3]) {
    return board[3];
  } else if (board[6] === board[7] && board[6] === board[8] && board[6]) {
    return board[6];
  } else if (board[0] === board[3] && board[0] === board[6] && board[0]) {
    return board[0];
  } else if (board[1] === board[4] && board[1] === board[7] && board[1]) {
    return board[1];
  } else if (board[2] === board[5] && board[2] === board[8] && board[2]) {
    return board[2];
  } else if (board[0] === board[4] && board[0] === board[8] && board[0]) {
    return board[0];
  } else if (board[2] === board[4] && board[2] === board[6] && board[2]) {
    return board[2];
  } else return false
}
}
console.log(options)
