function big_box_style() {
    const stylesheet = document.createElement("style");
    stylesheet.textContent = `
        .rtc-big-box {
            position: fixed;
            
            bottom: 0;
            left:0;

            background-color: white;

            width: 90%;

            border-radius: 15px;

            border-color: black;

            border-width: 2px;

            border-style: solid;

            padding: 10px 20px 30px 20px;
        }

        .rtc-box-button {
            padding: 7px 10px 7px 10px;

            background-color: green;

            color: white;

            text-decoration: none;

            border-radius: 5px;

            margin-top: 20px;
        }

        .rtc-box-buttonsmenu {
            padding-top: 15px;
        }

        .red {
            background-color: red;
        }

        .rtc-top-logos-flex {
            display: flex;
            align-items: center;

            width: 100%;
        }

        .rtc-box-logo {
            margin-left: auto;
        }

        .rtc-box-logo h3 {
            margin: 0 0 0 0;
            padding: 0 0 0 0;

            font-family: "Work Sans", "Atkinson Hyperlegible", sans-serif;
            font-weight: 700;

            color: #D22B2B;
        }

        .rtc-top-logos hr {
            width: 100%;
            border-color: black;
            background-color: black;
            color: black;
        }
    `;

    document.head.appendChild(stylesheet);
}

function big_box_close() {
    const box = document.getElementById("id-rtc-big-box");

    if(box != null) {
        box.style.display = "none";
    }
}

function big_box() {
    const box = document.createElement("div");
    box.classList.add("rtc-big-box");
    box.id = "id-rtc-big-box";

    var datestr = "10th of January, 2026";

    var reasonstr = "The root domain of the site will hold a services page for the RTC's hosting service.";

    var newurlstr = "https://rtc.comrades.sbs";

    box.innerHTML = `
        <div class="rtc-box-inner">
            <div class="rtc-top-logos">
                <div class="rtc-top-logos-flex">
                    <div class="rtc-box-user-logo">
                        <img src="/assets/images/rtclogobluishgrey.png" height="30">
                    </div>

                    <div class="rtc-box-logo">
                        <h3>The Center</h3>
                    </div>
                </div>

                <hr>
            </div>

            <h1>This domain name is deprecated.</h1>

            <p>The page administrator has announced the deprecation of this domain name. It will start to redirect to another page on the <b>${datestr}</b> and may soon be replaced by other content.</p>

            <p>Stated reason: ${reasonstr}</p>

            <div class="rtc-box-buttonsmenu">
                <a href="${newurlstr}" class="rtc-box-button"><b>Go there now</b></a>

                <a href="#" onclick="big_box_close();" class="rtc-box-button red"><b>Close</b></a>
            </div>
        </div>
    `;

    document.body.append(box);
    big_box_style();
}

function show_box_or_redir(url, date) {
    if(window.location.host != "rtc.comrades.sbs") {
        var today = new Date(Date.now());

        if((today.getTime() / 1000) > 1768100399) {
            window.location.href = "https://rtc.comrades.sbs";
        } else {
            big_box();
        }
    }
}

// <meta property="revtc:redirect" content="https://rtc.comrades.sbs">
// <meta property="revtc:redirect:date" content="1768100399">
// <meta property="rectc:redirect:reason" content="The root domain of the site will hold a services page for the RTC's hosting service.">

/*
function revtc() {
    var metas = document.getElementsByName("meta");

    for(const meta of metas) {
        var prop = meta.getAttribute("property");
        var cont = meta.getAttribute("content");

        if(prop != null && cont != null) {
            
        }
    }
}*/

show_box_or_redir();