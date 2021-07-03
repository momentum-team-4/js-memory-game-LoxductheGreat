
 let carddeck = document.querySelector('#carddeck')




window.addEventListener('load', function(){
    createEl()

})


function createEl(){
    for (i of cardinfo){
        let card = document.createElement('div')
        card.classList.add('cards')
        carddeck.appendChild(card)
    }
}

carddeck.addEventListener('click', function(event){
    let first = ''
    let second = ''
    let chosen = event.target
    chosen.classList.toggle('clicked')
    let count = 0
    if (count < 2){
        count++
        if (count === 1){
            first = chosen.dataset.name
            chosen.classlist.add('clicked')
        } else{
            second = chosen.dataset.name
            chosen.classlist.add('clicked')
        }
            if (first !== '' && second !== ''){
                if (first === second){

                }
            }

        } 
})

let compare = () => {
    let clicked = document.querySelectorAll('.clicked')
    clicked.forEach((card) => {
        card.classList.add('compare')
    })


}




let cardinfo = [
    {name:"weatheredcog", image:"weatheredcog.png"},
    {name:"weatheredcog", image:"weatheredcog.png"},
    {name:"alliancelogo", image:"alliancelogo.png"},
    {name:"alliancelogo", image:"alliancelogo.png"},
    {name:"emileskull", image:"emileskull.png"},
    {name:"emileskull", image:"emileskull.png"},
    {name:"hordelogo", image:"hordelogo.png"},
    {name:"hordelogo", image:"hordelogo.png"},
    {name:"younglink", image:"younglink.jpg"},
    {name:"younglink", image:"younglink.jpg"},
    {name:"shadowcompany", image:"shadowcompany.jpg"},
    {name:"shadowcompany", image:"shadowcompany.jpg"}
]