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
}