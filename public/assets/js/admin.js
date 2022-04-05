document.addEventListener("DOMContentLoaded", function (event) {
    const showNavbar = (toggleId, navId, bodyId, headerId) => {
        const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId),
            bodypd = document.getElementById(bodyId),
            headerpd = document.getElementById(headerId);

        // Validate that all variables exist
        if (toggle && nav && bodypd && headerpd) {
            toggle.addEventListener("click", () => {
                // show navbar
                nav.classList.toggle("admin_show");
                // change icon
                toggle.classList.toggle("bx-x");
                // add padding to body
                bodypd.classList.toggle("admin_container-pd");
                // add padding to header
                headerpd.classList.toggle("admin_header-pd");
            });
        }
    };

    showNavbar(
        "admin_header-toggle",
        "admin_nav-bar",
        "admin_body-pd",
        "admin_header"
    );

    /*===== LINK ACTIVE =====*/
    const linkColor = document.querySelectorAll(".admin_nav_link");

    function colorLink() {
        if (linkColor) {
            linkColor.forEach((l) => l.classList.remove("admin_active"));
            this.classList.add("admin_active");
        }
    }
    linkColor.forEach((l) => l.addEventListener("click", colorLink));

    // Your code to run since DOM is loaded and ready

    function openLink(event, animName) {
        var i, x;
        x = document.getElementsByClassName("tab");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        document.getElementById(animName).style.display = "block";
    }

});