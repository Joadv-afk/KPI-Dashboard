function toggleNav() {
    const sidenav = document.getElementById("mySidenav");
    const main = document.getElementById("main");
    const iframeContainer = document.getElementById("iframeContainer");
    const togglebtn = document.querySelector('.togglebtn');
    
    if (sidenav.style.width === "250px") {
        sidenav.style.width = "0";
        main.style.marginLeft = "0";
        togglebtn.style.left = "0px";
        iframeContainer.style.width = "100%";
    } else {
        sidenav.style.width = "250px";
        main.style.marginLeft = "250px";
        togglebtn.style.left = "250px";
        iframeContainer.style.width = "100%";
    }
}

function iframeLoaded() {
    const sidenav = document.getElementById("mySidenav");
    const main = document.getElementById("main");
    const togglebtn = document.querySelector('.togglebtn');
    
    sidenav.style.width = "250px";
    main.style.marginLeft = "250px";
    togglebtn.style.left = "250px";
}

function showMainContent() {
    setTimeout(() => {
        document.body.classList.add('show-content');
    }, 100);
}
