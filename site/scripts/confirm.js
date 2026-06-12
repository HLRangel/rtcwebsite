async function confirm_mail(email, auth) {
    let res = await fetch("http://rtcapi.comrades.sbs/mail/registry/confirm", 
        {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(
                {
                    email: email,
                    auth: auth
                }   
            )
        }
    );

    return res;
}

async function confirm() {
    query = new URLSearchParams(window.location.search);

    email = await query.get("mail");
    auth = await query.get("auth");

    console.log(email)
    console.log(auth)

    res = await confirm_mail(
        email, 
        auth
    );
}

confirm();