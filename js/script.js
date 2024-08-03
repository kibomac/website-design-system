document.addEventListener("DOMContentLoaded", () => {
    const modal = document.querySelector(".modal");
    const closeBtn = document.querySelector(".close-btn");

    if (modal && closeBtn) {
        closeBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });

        window.addEventListener("click", (event) => {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        });
    }
});
