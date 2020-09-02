/* globals $ */

/*
Make cards on screen
When clicked on it registers that more than one object is being selected 
Have images under cards 
When clicked either fade away:
jQuery fadeIn()
Demonstrates the jQuery fadeIn() method.

jQuery fadeOut()
Demonstrates the jQuery fadeOut() method.

jQuery fadeToggle()
Demonstrates the jQuery fadeToggle() method.

jQuery fadeTo()
Demonstrates the jQuery fadeTo() method.

Atleast 10 cards 

Making a function on how to know if 2 cards are the same or arent the same 

Make it where the person cant click more than 2 options 

*/

$(document).ready(function(){
    console.log('ready!')
 })

 $( window ).on( "load", function(){
    $('#card-deck')
        .append("<div id='card-1' class='cards'></div>")
        .append("<div id='card-2' class='cards'></div>")
        .append("<div id='card-3' class='cards'></div>")
        .append("<div id='card-4' class='cards'></div>")
        .append("<div id='card-5' class='cards'></div>")
        .append("<div id='card-6' class='cards'></div>")
        .append("<div id='card-7' class='cards'></div>")
        .append("<div id='card-8' class='cards'></div>")
        .append("<div id='card-9' class='cards'></div>")
        .append("<div id='card-10' class='cards'></div>")

        cards.addEventListener('click', function(){
            cards.classList.toggle('flip')
        })


        // $('.cards').on('click', function (event){
        //     $(event.target).toggleClass('flip')

        //     if($('.flip').length < 2){
        //         ('flip'). ++
        //     }  
 })


let cardinfo =[  
    {name:"weatheredcog", image:"weatheredcog.png"},
    {name:"weatheredcog", image:"weatheredcog.png"},
    {name:"alliancelogo", image:"alliancelogo.png"},
    {name:"alliancelogo", image:"alliancelogo.png"},
    {name:"emileskull", image:"emileskull.png"},
    {name:"emileskull", image:"emileskull.png"},
    {name:"hordelogo", image:"hordelogo.png"},
    {name:"hordelogo", image:"hordelogo.png"},
    {name:"younglink", image:"younglink.jpg"},
    {name:"younglink", image:"younglink.jpg"}
]








// $(window).on(function createEl(){
//     //divs
//     $("<div class='card-deck'></div>")
//     $("<div class='cards'></div")

//     //attaching them
//     .appendTo("body")
//     .appendTo("card-deck")
// })
