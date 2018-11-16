const data = {
    "circular": {
        "solids": {
            "regular":
                [
                    'assets/circular-solid-regular-images/circular-solid-regular-image-1.jpg',
                    'assets/circular-solid-regular-images/circular-solid-regular-image-2.jpg',
                    'assets/circular-solid-regular-images/circular-solid-regular-image-3.jpg',
                    'assets/circular-solid-regular-images/circular-solid-regular-image-4.jpg'
                ],

            "oversized":
                [
                    'assets/circular-solid-oversized-images/circular-solid-oversized-image-1.jpg',
                    'assets/circular-solid-oversized-images/circular-solid-oversized-image-2.jpg',
                    'assets/circular-solid-oversized-images/circular-solid-oversized-image-3.jpg',
                    'assets/circular-solid-oversized-images/circular-solid-oversized-image-4.jpg'
                ]
        },
        "metals": {
            "regular":
                [
                    'assets/circular-metal-regular-images/circular-metal-regular-image-1.jpg',
                    'assets/circular-metal-regular-images/circular-metal-regular-image-2.jpg',
                    'assets/circular-metal-regular-images/circular-metal-regular-image-3.jpg',
                    'assets/circular-metal-regular-images/circular-metal-regular-image-4.jpg',
                    'assets/circular-metal-regular-images/circular-metal-regular-image-5.jpg'
                ],

            "oversized":
                [
                    'assets/circular-metal-oversized-images/circular-metal-oversized-image-1.jpg',
                    'assets/circular-metal-oversized-images/circular-metal-oversized-image-2.jpg',
                    'assets/circular-metal-oversized-images/circular-metal-oversized-image-3.jpg',
                    'assets/circular-metal-oversized-images/circular-metal-oversized-image-4.jpg'
                ],
        },

        "patterns": {
            "regular":
                [
                    'assets/circular-pattern-regular-images/circular-pattern-regular-image-1.jpg',
                    'assets/circular-pattern-regular-images/circular-pattern-regular-image-2.jpg',
                    'assets/circular-pattern-regular-images/circular-pattern-regular-image-3.jpg'
                ],

            "oversized":
                [
                    'assets/circular-pattern-oversized-images/circular-pattern-oversized-image-1.jpg',
                    'assets/circular-pattern-oversized-images/circular-pattern-oversized-image-2.jpg',
                    'assets/circular-pattern-oversized-images/circular-pattern-oversized-image-3.jpg',
                    'assets/circular-pattern-oversized-images/circular-pattern-oversized-image-4.jpg'
                ],
        },

        "transparent": {
            "regular": [],
            "oversized":
                [
                    'assets/circular-transparent-oversized-images/circular-transparent-oversized-image-1.jpg',
                    'assets/circular-transparent-oversized-images/circular-transparent-oversized-image-2.jpg',
                    'assets/circular-transparent-oversized-images/circular-transparent-oversized-image-3.jpg',
                    'assets/circular-transparent-oversized-images/circular-transparent-oversized-image-4.jpg'
                ],
        }
    },
    "rectangular": {
        "solids": {
            "regular": 
                [
                    'assets/rectangular-solid-regular-images/rectangular-solid-regular-image-1.jpg',
                    'assets/rectangular-solid-regular-images/rectangular-solid-regular-image-2.jpg',
                    'assets/rectangular-solid-regular-images/rectangular-solid-regular-image-3.jpg'
                ],

            "oversized":
                [
                    'assets/rectangular-solid-oversized-images/rectangular-solid-oversized-image-1.jpg',
                    'assets/rectangular-solid-oversized-images/rectangular-solid-oversized-image-2.jpg', 'assets/rectangular-solid-oversized-images/rectangular-solid-oversized-image-3.jpg',
                    'assets/rectangular-solid-oversized-images/rectangular-solid-oversized-image-4.jpg'
                ],
        },
        "metals": {
            "regular":
                [
                'assets/rectangular/metal-regular-images/rectangular-metal-regular-image-1.jpg'
                ],
            "oversized": [],
        },

        "patterns": {
            "regular": [],
            "oversized":
                ['assets/rectangular-pattern-oversized-images/rectangular-pattern-oversized-image-1.jpg',
                    'assets/rectangular-pattern-oversized-images/rectangular-pattern-oversized-image-2.jpg'],
        },

        "transparent": {
            "regular":
                [
                    'assets/rectangular-transparent-regular-images/rectangular-transparent-regular-image-1.jpg',
                    'assets/rectangular-transparent-regular-images/rectangular-transparent-regular-image-2.jpg',
                    'assets/rectangular-transparent-regular-images/rectangular-transparent-regular-image-3.jpg',
                    'assets/rectangular-transparent-regular-images/rectangular-transparent-regular-image-4.jpg'
                ],
            "oversized": 
                [
                    'assets/rectangular-transparent-oversized-images/rectangular-transparent-oversized-image-1.jpg',
                    'assets/rectangular-transparent-oversized-images/rectangular-transparent-oversized-image-2.jpg',
                    'assets/rectangular-transparent-oversized-images/rectangular-transparent-oversized-image-3.jpg',
                    'assets/rectangular-transparent-oversized-images/rectangular-transparent-oversized-image-4.jpg'

                ],
        }
    },
    "whatever":
        [
            'assets/whatever-images/whatever-image-1.jpg', 'assets/whatever-images/whatever-image-2.jpg', 'assets/whatever-images/whatever-image-3.jpg', 'assets/whatever-images/whatever-image-4.jpg', 'assets/whatever-images/whatever-image-5.jpg', 'assets/whatever-images/whatever-image-6.jpg'
    ]



};


$(function () {

    // figure out submit button on click 
    // save responses for each question 
    // write function to push all user responses to an array save into userPreferences 
    // dynamic ? filter function to get the results we want before concating the desired arrays 
    // take their repsective arrays and concatenate into their options array 
    // userGlasses function will take a tailored array ( array that combines all the glasses option that'll potentailly fit the user) it will return a random pair of glasses 
    //go back to submit button event --> link the url of the selected option to the displayed img to show user their glasses suggestion 


    const userPreferences = []


    $('form').on('submit', function (event) {
        const userShape = $("input[name='shape']:checked").val();
        const userVibe = $("input[name='vibe']:checked").val();
        const userPersonality = $("input[name='personality']:checked").val();
        const userCare = $("input[name='care']:checked").val();
        event.preventDefault();
        userPreferences.push(userShape, userVibe, userPersonality, userCare);
        console.log(userPreferences);
        let glassesChoices = getGlassesChoices(userShape, userVibe, userPersonality); //getGlasses returns an array

        let glasses = getGlasses(glassesChoices);
        showResults(userCare, glasses);

    }); //end of onSubmit function 

    function getGlassesChoices(userShape, userVibe, userPersonality) {
        if (userPersonality === 'whatever') {
            return data.whatever;
        }

        let glassesShape, glassesSize, glassesFinish = userVibe;

        if (userPersonality === "adventurous") {
            glassesSize = 'oversized';
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


    const getGlasses = function (glassesChoices) {
        return glassesChoices[Math.floor(Math.random() * glassesChoices.length)]
    };


    const showResults = function (userCare, glasses) {
        if (userCare === 'yes-care') {
            $('.yourGlasses').html(`<img src="${glasses}" alt="picture of glasses"><img>`);

        } else {
            $('.yourGlasses').html(`<img src="assets/no-care-image.png" alt="picture of pickachu"></img>`)
        }

    }

});//document ready ends