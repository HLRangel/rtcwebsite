async function online() {
    let res = await fetch("http://127.0.0.1:3000/miscellaneous", 
        {
            method: "GET",
        }
    );

    return res.ok;
}