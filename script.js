const data = {
    circular: {
        solids: {
            regular: [
                'assets/circular-solid-regular-images/circular-solid-regular-image-1.jpg',
                'assets/circular-solid-regular-images/circular-solid-regular-image-2.jpg',
                'assets/circular-solid-regular-images/circular-solid-regular-image-3.jpg',
            ],

            oversized: [
                'assets/circular-solid-oversized-images/circular-solid-oversized-image-1.jpg',
                'assets/circular-solid-oversized-images/circular-solid-oversized-image-2.jpg',
                'assets/circular-solid-oversized-images/circular-solid-oversized-image-3.jpg',
            ],
        },
        metals: {
            regular: [
                'assets/circular-metal-regular-images/circular-metal-regular-image-1.jpg',
                'assets/circular-metal-regular-images/circular-metal-regular-image-2.jpg',
                'assets/circular-metal-regular-images/circular-metal-regular-image-3.jpg',
            ],

            oversized: [
                'assets/circular-metal-oversized-images/circular-metal-oversized-image-1.jpg',
                'assets/circular-metal-oversized-images/circular-metal-oversized-image-2.jpg',
                'assets/circular-metal-oversized-images/circular-metal-oversized-image-3.jpg',
            ],
        },

        patterns: {
            regular: [
                'assets/circular-pattern-regular-images/circular-pattern-regular-image-1.jpg',
                'assets/circular-pattern-regular-images/circular-pattern-regular-image-2.jpg',
            ],

            oversized: [
                'assets/circular-pattern-oversized-images/circular-pattern-oversized-image-1.jpg',
                'assets/circular-pattern-oversized-images/circular-pattern-oversized-image-2.jpg',
                'assets/circular-pattern-oversized-images/circular-pattern-oversized-image-3.jpg',
            ],
        },

        transparent: {
            regular: [
                'assets/circular-transparent-regular-images/circular-transparent-regular-image-1.jpg',
                'assets/circular-transparent-regular-images/circular-transparent-regular-image-2.jpg',
            ],
            oversized: [
                'assets/circular-transparent-oversized-images/circular-transparent-oversized-image-1.jpg',
                'assets/circular-transparent-oversized-images/circular-transparent-oversized-image-2.jpg',
                'assets/circular-transparent-oversized-images/circular-transparent-oversized-image-3.jpg',
            ],
        },
    },
    rectangular: {
        solids: {
            regular: [
                'assets/rectangular-solid-regular-images/rectangular-solid-regular-image-1.jpg',
                'assets/rectangular-solid-regular-images/rectangular-solid-regular-image-2.jpg',
            ],

            oversized: [
                'assets/rectangular-solid-oversized-images/rectangular-solid-oversized-image-1.jpg',
                'assets/rectangular-solid-oversized-images/rectangular-solid-oversized-image-2.jpg',
                'assets/rectangular-solid-oversized-images/rectangular-solid-oversized-image-3.jpg',
                'assets/rectangular-solid-oversized-images/rectangular-solid-oversized-image-4.jpg',
            ],
        },
        metals: {
            regular: [
                'assets/rectangular-metal-regular-images/rectangular-metal-regular-image-1.jpg',
                'assets/rectangular-metal-regular-images/rectangular-metal-regular-image-2.jpg',
            ],
            oversized: [
                'assets/rectangular-metal-oversized-images/rectangular-metal-oversized-image-1.png',
                'assets/rectangular-metal-oversized-images/rectangular-metal-oversized-image-2.png',
            ],
        },

        patterns: {
            regular: [
                'assets/rectangular-pattern-regular-images/rectangular-pattern-regular-image-1.jpg',
                'assets/rectangular-pattern-regular-images/rectangular-pattern-regular-image-2.jpg',
            ],
            oversized: [
                'assets/rectangular-pattern-oversized-images/rectangular-pattern-oversized-image-1.jpg',
                'assets/rectangular-pattern-oversized-images/rectangular-pattern-oversized-image-2.jpg',
            ],
        },

        transparent: {
            regular: [
                'assets/rectangular-transparent-regular-images/rectangular-transparent-regular-image-1.jpg',
                'assets/rectangular-transparent-regular-images/rectangular-transparent-regular-image-2.jpg',
                'assets/rectangular-transparent-regular-images/rectangular-transparent-regular-image-3.jpg',
            ],
            oversized: [
                'assets/rectangular-transparent-oversized-images/rectangular-transparent-oversized-image-1.jpg',
                'assets/rectangular-transparent-oversized-images/rectangular-transparent-oversized-image-2.jpg',
                'assets/rectangular-transparent-oversized-images/rectangular-transparent-oversized-image-3.jpg',
            ],
        },
    },
    whatever: [
        'assets/whatever-images/whatever-image-1.jpg',
        'assets/whatever-images/whatever-image-2.jpg',
        'assets/whatever-images/whatever-image-3.jpg',
        'assets/whatever-images/whatever-image-4.jpg',
    ],
};

$(function() {
    const getUserPreferences = function() {
        const userShape = $("input[name='shape']:checked").val();
        const userVibe = $("input[name='vibe']:checked").val();
        console.log(userVibe);
        const userPersonality = $("input[name='personality']:checked").val();
        console.log(userPersonality);
        const userCare = $("input[name='care']:checked").val();
        const userPreferences = [
            userShape,
            userVibe,
            userPersonality,
            userCare,
        ];

        console.log(userPreferences);

        return userPreferences;
    };

    $('.generate').on('click', function(event) {
        const userPreferences = getUserPreferences();
        const [
            userShape,
            userVibe,
            userPersonality,
            userCare,
        ] = userPreferences;

        event.preventDefault();

        if (userCare == null) {
            swal('Pick one please!');
            return;
        }

        let glassesChoices = getGlassesChoices(
            userShape,
            userVibe,
            userPersonality
        ); //getGlasses returns an array

        let glasses = getGlasses(glassesChoices);
        showResults(userCare, glasses);
    }); //end of onSubmit function

    const getGlassesChoices = function getGlassesChoices(
        userShape,
        userVibe,
        userPersonality
    ) {
        if (userPersonality === 'whatever') {
            return data.whatever;
        }

        let //  glassesShape
            glassesSize,
            glassesFinish = userVibe;

        if (userPersonality === 'adventurous') {
            glassesSize = 'oversized';
        } else {
            glassesSize = 'regular';
        }

        if (userShape === 'round') {
            return data.rectangular[glassesFinish][glassesSize];
        } else if (userShape === 'square') {
            return data.circular[glassesFinish][glassesSize];
        } else {
            return data.rectangular[glassesFinish][glassesSize].concat(
                data.circular[glassesFinish][glassesSize]
            );
        }
    };

    const getGlasses = function(glassesChoices) {
        return glassesChoices[
            Math.floor(Math.random() * glassesChoices.length)
        ];
    };

    const showResults = function(userCare, glasses) {
        if (userCare === 'yes-care') {
            $('.your-glasses').show();
            $('.your-glasses').html(
                `<img class="glasses-img" src="${glasses}" alt="picture of glasses"><img>`
            );
        } else {
            $('.your-glasses').html(
                `<img class="pika" src="assets/no-care-image.png" alt="picture of pickachu"></img>`
            );
            $('#change-my-mind').show();
        }

        $('.your-glasses').show();
        $('#refresh').show();

        $('#change-my-mind').on('click', function() {
            showResults('yes-care', glasses);
            $(this).hide();
            $('#refresh').show();
        });
    };

    const questionsArray = $('.question').get();
    // this will select the question divs in an array

    let nextCounter = 0; //reps the question we are on

    $('.next').on('click', function(event) {
        const userPreferences = getUserPreferences();

        if (userPreferences[nextCounter] == null) {
            alert('Pick one please!');
            return;
        }

        nextCounter++;

        $(questionsArray[nextCounter - 1]).hide();
        $(questionsArray[nextCounter]).show();
        console.log(nextCounter, 'this is the question number');
    });
}); //document ready ends
