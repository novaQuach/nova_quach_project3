const data = {
    "circular": {
        "solids": {
            "regular":[],
            "oversized-polygon":[],
        },
        "metals": {
            "regular":[],
            "oversized-polygon":[],
        },

        "patterns": {
            "regular": [],
            "oversized-polygon": [],
        },

        "transparent": {
            "regular": [],
            "oversized-polygon": [],    
        }
    },
    "rectangular": {
        "solids": {
            "regular": [],
            "oversized-polygon": [],
        },
        "metals": {
            "regular": [],
            "oversized-polygon": [],
        },

        "patterns": {
            "regular": [],
            "oversized-polygon": [],
        },

        "transparent": {
            "regular": [],
            "oversized-polygon": [],   
        } 
    },
    "whatever": ['assets/whatever-image-1.jpg']
    

};


$(function(){

// figure out submit button on click 
// save responses for each question 
// write function to push all user responses to an array save into userPreferences 
// dynamic ? filter function to get the results we want before concating the desired arrays 
// take their repsective arrays and concatenate into their options array 
// userGlasses function will take a tailored array ( array that combines all the glasses option that'll potentailly fit the user) it will return a random pair of glasses 
//go back to submit button event --> link the url of the selected option to the displayed img to show user their glasses suggestion 


    const userPreferences=[]


    $('form').on('submit',function(event){
        const userShape = $("input[name='shape']:checked").val();
        const userVibe = $("input[name='vibe']:checked").val();
        const userPersonality = $("input[name='personality']:checked").val();
        const userCare = $("input[name='care']:checked").val();
        event.preventDefault();
        userPreferences.push(userShape, userVibe, userPersonality,userCare);
        console.log(userPreferences);
        let glassesChoices = getGlassesChoices(userShape,userVibe,userPersonality); //getGlasses returns an array

        let glasses = getGlasses(glassesChoices);
        showResults(userCare,glasses);

    }); //end of onSubmit function 

    function getGlassesChoices(userShape, userVibe, userPersonality) {
        if (userPersonality === 'whatever') {
            return data.whatever;
        }

        let glassesShape, glassesSize, glassesFinish = userVibe;

        if (userPersonality === "adventurous") {
            glassesSize = 'oversized-polygon';
        } else {
            glassesSize = 'regular';
        };

        if (userShape === 'round') {
            return data.rectangular[glassesFinish][glassesSize];
        } else if (userShape === 'square') {
            return data.circular[glassesFinish][glassesSize];
        } else {
            return data.rectangular[glassesFinish][glassesSize]
                .concat(data.circular[glassesFinish][glassesSize]);

        }
    };


    const getGlasses = function (glassesChoices){
        return glassesChoices[Math.floor(Math.random()*glassesChoices.length)]
    };

    
    const showResults = function (userCare,glasses){
        if (userCare === "yes-care") {
            console.log('you get glasses');
        } else {
            console.log("you get this pickachu instead");
        }

    }

});//document ready ends