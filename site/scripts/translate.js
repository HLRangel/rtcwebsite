async function translate_tolang(id) {
    let translations = await fetch(`/translations/${id}.json`);

    if(translations.ok) {
        translations = await translations.json();

        for(let tag of document.getElementsByTagName("*")) {
            let trans = tag.getAttribute("data-trans");

            if(trans != null) {
                tag.innerHTML = await translations[trans].text;
            }
        } 
    }

    if(id == "br") {
        document.getElementById("lang-shower").innerHTML = `<a href="#" id="lang-shower">🌏︎&nbsp;<span style="font-size: 10pt;">(<span style="color:gray;">EN</span>/PT-BR)</span></a>`;
    }
}

function deleteLanguage() {
    document.cookie = "lang=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

function setLanguage(id) {
    document.cookie = `lang=${id}`;

    translate_tolang(id);
}

function getLangCookie() {
    let cookies = document.cookie;
    cookies = cookies.split(";");

    for(let cookie of cookies) {

        console.log(cookie);
        cookie = cookie.split("=");
        
        if(cookie[0] == "lang") {
            return cookie[1];
        }
    }

    return null;
}

function findLanguage() {
    let lang = getLangCookie();

    if(lang != null) {
        translate_tolang(lang);
    }
}

function switchLanguage() {
    let lang = getLangCookie();

    if(lang != null) {
        deleteLanguage();
        location.reload()
    } else {
        setLanguage("br");
    }
}

findLanguage();