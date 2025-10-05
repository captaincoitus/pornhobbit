const videos = [
    "21 NATURALS - Gorgeous Sybil Takes a Break from a Photoshoot to Suck and Fuck a Big Cock.webm",
    "Adriana Chechik sucks big cock and fucked in the ass.webm",
    "Adriana Squirts All Over Megan While Lesbian Scissoring- HOT!.webm",
    "BLACKED Brunette Adriana Chechik Takes Trio of BBCs.webm",
    "BLACKED Girlfriend Adriana Chechick Cheats With a Huge Black Cock.webm",
    "BLACKED Shy & sexy Sybil seduces her celebrity crush.webm",
    "EvilAngel Adriana Chechiks Sloppy Anal Fucking(1).webm",
    "EvilAngel Adriana Chechiks Sloppy Anal Fucking(2).webm",
    "EvilAngel Adriana Chechiks Sloppy Anal Fucking.webm",
    "Fake Taxi Sybil Kailena gets her perfect boobs out for a hard rough sex encounter.webm",
    "FootsieBabes Sybil Oils her French Pedicured Feet 4 Jizz.webm",
    "LATENIGHT HARD FUCK WITH CHRISTIAN CLAY... HE FUCKED ME HARD AND  SWALLOWED ALL HIS CUM  SYBILRAW.webm",
    "LUBED - Brunette Anya Olsen hardcore lubed up fuck.webm",
    "Private com - Busty Clea Gaultier Bangs Young Sybil In 3Some.webm",
    "Sexy brunettes eat each other's hot pussy to intense orgasms.webm",
    "TUSHY Beautiful Model’s Incredible First Anal(1).webm",
    "TUSHY Beautiful Model’s Incredible First Anal.webm",
    "WhiteBoxxx - BEST OF 2020 COMPILATION! Hot Girls Getting Their Asses And Pussies Fucked - LETSDOEIT.webm",
    "WhiteBoxxx - Caprice And Sybil Czech Babe Erotic Lesbian Fantasy With Her Girlfriend - LETSDOEIT.webm",
    "WhiteBoxxx - Sybil Hot Ass Ukrainian Babe Fetish Fantasy With Dominant Boyfriend.webm",
]

const disclaimer = document.querySelector("#disclaimer");
const root = document.querySelector("#root");
const videobg = document.querySelector("#videobg");
const soundToggle = document.querySelector("#volume");
const volumeOff = document.querySelector("#volume_off");
const volumeDown = document.querySelector("#volume_down");
const volumeUp = document.querySelector("#volume_up");
const controls = document.querySelector("#controls");

const INIT_VOLUME = 5;
let INDEX = 0;

var computedStyle = getComputedStyle(root)

let width = root.clientWidth // width with padding
let height = root.clientHeight // height with padding

height -= parseFloat(computedStyle.paddingTop) + parseFloat(computedStyle.paddingBottom)
width -= parseFloat(computedStyle.paddingLeft) + parseFloat(computedStyle.paddingRight)

videobg.style.width = `${width}px`;

// let randomIndex = Math.floor(Math.random() * (videos.length - 0)) + 0;
// document.body.style.backgroundImage = `url('/pornhobbit/static/${backgrounds[randomIndex]}')`;
videobg.setAttribute('src', `/pornhobbit/static/${videos[INDEX]}`)

document.addEventListener('DOMContentLoaded', () => {
    // Select all forms on the page
    const forms = document.querySelectorAll('form');

    // soundToggle.checked = false;
    volumeOff.style.display = 'block'
    volumeSlider.disabled = true;
    volumeSlider.value = INIT_VOLUME;

    forms.forEach(form => {
        form.addEventListener('submit', e => {
            e.preventDefault(); // Prevent default submission

            // Identify the form using ID, class, or any attribute
            const formId = form.getAttribute('id');

            switch (formId) {
                case 'Strike3Form':
                    switch (form.searchtype.value) {
                        case "performers":
                            window.open(`https://${getSiteName(e)}.com/${form.searchtype.value}/${(form.searchterm.value).toLowerCase().trim().replaceAll(" ", "-")}`, "_blank")
                            break;

                        case "videos":
                            window.open(`https://${getSiteName(e)}.com/${form.searchtype.value}/${(form.searchterm.value).toLowerCase().trim().replaceAll(" ", "-")}`, "_blank")
                            break;
                    }
                    break;
                case 'WikifeetForm':
                    window.open(`https://${getSiteName(e)}.com/${(form.searchterm.value).toLowerCase().trim().replaceAll(" ", "_")}`, "_blank")
                    break;
                case 'BrazzersForm':
                    window.open(`https://${getSiteName(e)}.com/${getSearchType(e)}?q=${form.searchterm.value}`, "_blank");
                    break;
                case 'reset':
                    document.querySelectorAll('form').forEach(form => form.reset());
                    break;
                default:
                    console.warn(`Unhandled form: ${formId}`);
            }
        });
    });
});

const getSiteName = (e) => {
    return e.submitter.dataset.site;
}

const getSearchType = (e) => {
    return e.submitter.dataset.searchtype;
}

//----------------------------------------------------

if (getCookie("consent") == null || getCookie("consent") == "") {

    document.querySelector("#disclaimer-enter").addEventListener('click', (e) => {
        const date = new Date();
        date.setTime(date.getTime() + (2 * 60 * 60 * 1000)); // Calculate future date in milliseconds
        expires = "; expires=" + date.toUTCString();
        document.cookie = `consent=true ${expires}; path=/; samesite=Lax`;
        root.style.display = "flex";
        controls.style.display = "flex";
        disclaimer.style.display = "none";
    });

    document.querySelector("#disclaimer-exit").addEventListener('click', (e) => {
        window.location.href = "https://www.google.com";
    });
} else {
    root.style.display = "flex";
    controls.style.display = "flex";
    disclaimer.style.display = "none";
}

// const backgroundInterval = setInterval(() => {
//     let randomIndex = Math.floor(Math.random() * (videos.length - 0)) + 0;
//     // document.body.style.backgroundImage = `url('/pornhobbit/static/${backgrounds[randomIndex]}')`;
//     videobg.setAttribute('src',`/pornhobbit/static/${videos[randomIndex]}`)
// }, 120000);

videobg.addEventListener('ended', (e) => {
    if (INDEX < videos.length - 1) {
        INDEX++;
    } else {
        INDEX = 0;
    }
    videobg.setAttribute('src', `/pornhobbit/static/${videos[INDEX]}`);
    videobg.play();
})

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getCookie(name) {
    const cookieName = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie); // Decode URI components
    const cookieArray = decodedCookie.split(';'); // Split into individual cookie strings

    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) === ' ') { // Remove leading spaces
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(cookieName) === 0) { // Check if this is the desired cookie
            return cookie.substring(cookieName.length, cookie.length); // Return the cookie value
        }
    }
    return null; // Return null if the cookie is not found
}

soundToggle.addEventListener('click', (e) => {
    videobg.muted = !videobg.muted;
    volumeSlider.disabled = !volumeSlider.disabled;
    videobg.volume = INIT_VOLUME / 20;
    volumeSlider.value = INIT_VOLUME;

    if (videobg.muted) {
        iconSelector("off")
    } else {
        iconSelector(INIT_VOLUME);
    }

});

volumeSlider.addEventListener('input', (e) => {
    videobg.volume = e.target.value / 20;
    iconSelector(e.target.value);
})

const iconSelector = (value) => {

    volumeDown.style.display = 'none'
    volumeUp.style.display = 'none'
    volumeOff.style.display = 'none'

    if (value === "off" || value == 0) {
        volumeOff.style.display = 'block'
    } else if (value <= 10) {
        volumeDown.style.display = 'block'
    } else {
        volumeUp.style.display = 'block'
    }
}