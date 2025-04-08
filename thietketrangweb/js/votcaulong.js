const scrollBar = document.getElementById("scrollBar");
const productRow = document.getElementById("productRow");
let isDragging = false;

scrollBar.addEventListener("mousedown", (event) => {
    isDragging = true;
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
});

function onMouseMove(event) {
    if (isDragging) {
        let newLeft = event.clientX - scrollBar.parentElement.offsetLeft;
        let maxLeft = scrollBar.parentElement.offsetWidth - scrollBar.offsetWidth;
        newLeft = Math.max(0, Math.min(newLeft, maxLeft));
        scrollBar.style.left = newLeft + "px";

        // Di chuyển hàng sản phẩm dựa trên thanh trượt
        const scrollPercentage = newLeft / maxLeft;
        const maxScroll = productRow.scrollWidth - productRow.offsetWidth;
        productRow.scrollLeft = scrollPercentage * maxScroll;
    }
}

function onMouseUp() {
    isDragging = false;
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
}