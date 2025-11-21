document.addEventListener('DOMContentLoaded', () => {
    
    // =======================================================
    // I. POPUP/MODAL HANDLING
    // =======================================================
    const modal = document.getElementById("welcomeModal");
    const closeBtn = document.querySelector(".close-btn");

    if (modal) {
        // Pop-up 2 सेकंड बाद दिखाएँ (2000 milliseconds)
        setTimeout(() => {
            // केवल होम पेज पर Pop-up दिखाएँ
            if (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/')) {
                modal.style.display = "block";
            }
        }, 2000); 

        // Close button पर क्लिक करने पर Pop-up बंद करें
        closeBtn.onclick = function() {
            modal.style.display = "none";
        }

        // Pop-up के बाहर क्लिक करने पर Pop-up बंद करें
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }


    // =======================================================
    // II. MOBILE MENU TOGGLE HANDLER (Bootstrap handles most of it)
    // =======================================================
});
​
