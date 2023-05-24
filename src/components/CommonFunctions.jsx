export function DidMount() {
    window.scroll({ top: 0, left: 0, behavior: "instant" });
    // hide mobile menu
    let element = document.getElementById("mobile-menu");
    if (element) {
        if (element.classList.contains("hidden")) {
        } else {
            element.classList.add("hidden");
        }
    }
}

export function hideMenu() {
    // hide mobile menu
    let element = document.getElementById("mobile-menu");
    if (element) {
        if (element.classList.contains("hidden")) {
        } else {
            element.classList.add("hidden");
        }
    }
}
