const data = {
    "metals": {
        "round": [],
        "square": [],
        "oversized": []
    },

    "transparent": {
        "round": [],
        "square": [],
        "oversized": []
    },

    "patterns": {
        "round": [],
        "square": [],
        "oversized": []
    },
    "whatever": []
};


$(function(){

// figure out submit button on click 
// save responses for each question 
// compare/ combine the combo responses --> take their repsective arrays and concatenate into their options array 
// write function to return a random (dyanmic one that takes any array) glasses from their options array 
//go back to submit button event --> link the url of the selected option to the displayed img to show user their glasses suggestion 

    $('form').on('submit',function(event){
        event.preventDefault();
        console.log('form submitted');

        const userShape = $("input[name='shape']").val();
        console.log(userShape);

});








});//document ready ends