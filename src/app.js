$(() => {
    // Initialize the carousel

    var html = "";

    const names = ["Rayhan", "Sara M.", "John D.", "Lamia K.", "Asif R.", "Nusrat J.", "Tanvir H.", "Mehedi S.", "Sabina Y.", "Rafi U.", "Zara N.", "Emran H.", "Tania F."];
    const universities = ["BUBT", "UIU", "DU", "NSU", "BRAC", "AIUB", "RUET", "KUET", "EWU", "SUST", "IUT", "BUET"];
    const subjects = ["Physics", "Mathematics", "Chemistry", "Biology", "CSE", "English", "EEE", "Civil Eng.", "Economics", "Sociology", "Statistics", "Philosophy"];
    const locations = ["Dhaka", "Chittagong", "Khulna", "Sylhet", "Rajshahi", "Barishal", "Cumilla", "Rangpur", "Gazipur", "Mymensingh"];

    function getRandomItem(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    const profiles = Array.from({ length: 10 }, () => ({
        name: getRandomItem(names),
        university: getRandomItem(universities),
        subject: getRandomItem(subjects),
        location: getRandomItem(locations),
        rating: Math.floor(Math.random() * 5) + 1
    }));

    profiles.map((item, index) => {

        const profile = profiles[index];
        const filledStars = profile.rating;
        const emptyStars = 5 - filledStars;

        let starsHtml = "";
        for (let j = 0; j < filledStars; j++) {
            starsHtml += `<img src="./images/rating_block.png" class="h-5 w-auto" />`;
        }
        for (let j = 0; j < emptyStars; j++) {
            starsHtml += `<img src="./images/rating.png" class="h-5 w-auto" />`;
        }

        html += ` <div class="item">
                <div class="bg-white cursor-pointer hover:bg-gray-100 w-64 sm:w-full mx-auto item rounded-2xl border border-gray-400 h-full         shadow-md flex flex-col justify-center items-center space-y-3">
                    <div class="flex justify-center items-center py-5 w-3xs">
                        <img src="./images/user_profile_logo.png" class="h-5 w-5"/>
                    </div>
                    <div class="px-2 py-1 flex flex-col justify-center space-y-1 items-center">
                        <h1 class="font-inter font-bold text-2xl">${profile.name}</h1>
                        <h2 class="text-gray-400 font-semibold text-xs">${profile.university}</h2>
                        <h3 class="text-black font-medium text-sm">${profile.subject}</h3>
                        <div class="flex justify-center items-center space-x-1">
                            ${starsHtml}
                        </div>
                        <h4 class="text-black flex justify-center items-center font-medium text-sm sm:text-xl py-2">
                            <img src="./images/location.png" class="px-1" />
                            <span class="text-xs">${profile.location}</span>
                        </h4>
                    </div>
                    <div class="py-2 px-5 flex justify-center items-center space-x-2 w-full">
                        <button class="border-1 cursor-pointer border-red-600 w-full px-2 sm:px-4 text-xs sm:text-sm py-2 rounded-2xl       text-red-600 hover:text-white hover:bg-red-600 font-medium transition-all duration-300 ease-in-out">
                            View Profile
                        </button>
                    </div>
                </div>
                </div>`;
    });


    var container = `<div class="owl-carousel owl-theme home_nearest_tutors">${html}</div>`;
    $(".home_nearest_tutor_container").html(container);

    const home_nearest_tutors = $('.home_nearest_tutors').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            100: {
                items: 1
            },
            500: {
                items: 2
            },
            800: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });

    $('.home_nearest_tutors_prev').click(function () {
        home_nearest_tutors.trigger('prev.owl.carousel', [300]);
    });

    $('.home_nearest_tutors_next').click(function () {
        home_nearest_tutors.trigger('next.owl.carousel', [300]);
    });

    $(".owl-dots button").html("");




});

