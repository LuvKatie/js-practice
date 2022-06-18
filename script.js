const btns = document.querySelectorAll('button');


// itterate through each element passed in our case All Buttons
btns.forEach((button) => {

    // assigning a 'click' event listener to each button
    button.addEventListener('click', () => alert(button.id));

});