export function expandElement(el) {
    if (el != null) {
        el.style.height =
            Array.prototype.reduce.call(
                el.children,
                (prev, next) => {
                    return prev + getAbsoluteHeight(next, "bottom");
                },
                0
            ) + "px";
    }
}

export function collapseElement(el) {
    if (el != null) {
        el.style.height = "0px";
    }
}

function getAbsoluteHeight(el) {
    el = typeof el === "string" ? document.querySelector(el) : el;

    const styles = window.getComputedStyle(el);
    const margin =
        parseFloat(styles["marginTop"]) + parseFloat(styles["marginBottom"]);

    return parseFloat(styles.height) + margin;
}
