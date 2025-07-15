function loadNavbar() {
    let origin = window.location.origin;
    if (origin.includes("github.io")) origin += "/sdrc-website";
    let link = document.createElement("link")
    link.rel = "stylesheet";
    link.href = origin + "/assets/css/navbar.css";
    document.head.appendChild(link);

    let navbar = document.createElement("div");
    navbar.id = "nav-placeholder";
    document.body.prepend(navbar);

    let adjustMargins = () => {
        let height = document.getElementById("nav").getBoundingClientRect().height;
        document.getElementById("main-flex").style.marginTop = height + "px";

    }
    fetch(origin + "/assets/html/navbar.html")
        .then(response => response.text())
        .then(data => {
            let e = document.getElementById("nav-placeholder");
            e.innerHTML = data;
            adjustMargins();
        });
}
function nav(addr) {
    let newAddr = window.location.origin;
    if (newAddr.includes("github.io")) newAddr += "/sdrc-website";
    if (addr == "index") {
        newAddr += "/index.html";
    } else {
        newAddr += `/assets/html/${addr}.html`;
    }

    window.location.href = newAddr;
}


loadNavbar();
