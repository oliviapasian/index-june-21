/*
let hs = $('.grid-container');

// An array to define a color palette
let cp = ['darkblue', 'DarkTurquoise', 'dodgerblue', 'greenyellow', 'fuchsia'];

//generating a random color from the predefined color palette
let randColor = Math.floor(Math.random() * cp.length);

//Look at console to see how many indexes there are in the array for the colour palette
//console.log(cp.length);


//For loop to create 26 div elements
for (let i = 0; i <= 30; i++) {
    hs.append('<div class="griditem"></div>');
}
//variable to select even div elements
let stripes = $('.griditem:nth-child(even');

//update background colour of stripes
stripes.css('background-color', cp[randColor]);

//When cursor is over stripe is changes colour
stripes.mouseenter(function () {
    let randColor = Math.floor(Math.random() * cp.length);
    $(this).css('background-color', cp[randColor])
});

*/