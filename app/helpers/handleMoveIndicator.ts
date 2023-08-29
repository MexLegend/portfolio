export const handleMoveIndicator = (navLinkElement: HTMLAnchorElement, reset?: boolean) => {
    const indicator = document.getElementById('indicator');
    let indicatorWidth: number = 0;
    let indicatorTranslate: number = 0;

    if (reset) {
        const homeNavLinkElement = document.getElementById("link-home");
        homeNavLinkElement!.style.color = "white";
        indicatorWidth = 59;
        indicatorTranslate = 0;
    } else {
        indicatorWidth = navLinkElement.offsetWidth
        indicatorTranslate = navLinkElement.offsetLeft;
    }

    indicator?.style.setProperty('--width', `${indicatorWidth}px`);
    indicator?.style.setProperty('--translate-x', `${indicatorTranslate}px`);
}