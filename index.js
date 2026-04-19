const strike3network = [
    'blacked', 'blackedraw', 'tushy', 'tushyraw',
    'deeper', 'slayed', 'wifey', 'milfy', 'vixen'
];

const wikifeet = ['wikifeet', 'wikifeetx']

const brazzers = ['brazzers','brazzersnetwork']

const iafd = ['iafd']

const bangbros = ['bangbros','bangbrosnetwork']

const root = document.querySelector("#root");

document.addEventListener('DOMContentLoaded', () => {
    // Select all forms on the page
    const form = document.searchForm;
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', e => {
            e.preventDefault();

            let site = getSiteName(e);
            let searchTerm = form.searchterm.value.toLowerCase().trim();
            let searchType = form.searchtype.value.toLowerCase().trim();

            if (strike3network.includes(site))
                window.open(`https://${getSiteName(e)}.com/${form.searchtype.value}/${searchTerm.replaceAll(" ", "-")}`, "_blank");

            if (wikifeet.includes(site))
                window.open(`https://${getSiteName(e)}.com/${searchTerm.replaceAll(" ", "_")}`, "_blank");

            if (brazzers.includes(site))
                window.open(`https://${getSiteName(e)}.com/${searchType === 'performers' ? 'pornstars' : 'videos'}?q=${searchTerm}`, "_blank");

            if (iafd.includes(site))
                window.open(`https://www.iafd.com/results.asp?searchtype=comprehensive&searchstring=${searchTerm}`, "_blank");

            if (bangbros.includes(site))
                open(`https://bangbros.com/${searchType === 'performers' ? 'searchmodels' : 'searchvideos'}?q=${searchTerm}`)
        })
    })
});

const getSiteName = (e) => {
    return e.target.dataset.site;
}

const open = (url) => window.open(url,'_blank')

//----------------------------------------------------

if (getCookie("consent") == null || getCookie("consent") == "") {

    document.querySelector("#disclaimer-enter").addEventListener('click', (e) => {
        const date = new Date();
        date.setTime(date.getTime() + (2 * 60 * 60 * 1000)); // Calculate future date in milliseconds
        expires = "; expires=" + date.toUTCString();
        document.cookie = `consent=true ${expires}; path=/; samesite=Lax`;
        root.style.display = "flex";
        disclaimer.style.display = "none";
    });

    document.querySelector("#disclaimer-exit").addEventListener('click', (e) => {
        window.location.href = "https://www.google.com";
    });
} else {
    root.style.display = "flex";
    disclaimer.style.display = "none";
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