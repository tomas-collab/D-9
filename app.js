document.addEventListener('DOMContentLoaded', () => {

    const grid = document.querySelector('div')
    

    function creatCells(){

    
        for (let i = 1; i < 76; i++){
            let card = document.createElement('img')
            card.classList.add('cell')
            card.setAttribute('src','dinosaur.png')
            card.setAttribute('data-id', i)
            //card.addEventListener('click', flipcard)
            grid.appendChild(card)      
    
        
        }
    }

  function randomizeNum(){
      
  }





    creatCells()

})


