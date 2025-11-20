document.addEventListener('DOMContentLoaded', () => {
    
    // =======================================================
    // I. POPUP/MODAL HANDLING 
    // =======================================================

    const modal = document.getElementById("welcomeModal");
    const closeBtn = document.querySelector(".close-btn");
    const skipButton = document.getElementById("skipButton");
    const form = document.getElementById("leadForm");

    const formspreeUrl = "https://formspree.io/f/mvgvwygg"; 

    // Pop-up Visibility Function
    const closeModal = () => {
        if (modal) {
             modal.style.display = "none";
        }
    };

    // 1. Pop-up दिखाएँ
    if (modal) {
        setTimeout(() => {
            modal.style.display = "block";
        }, 1500); 
    }

    // 2. Pop-up बंद करने के हैंडलर
    if (closeBtn) {
        closeBtn.onclick = closeModal;
    }
    if (skipButton) {
        skipButton.onclick = closeModal;
    }
    
    // Pop-up के बाहर क्लिक होने पर बंद करें
    window.onclick = function(event) {
        if (event.target === modal) {
            closeModal();
        }
    };

    // 3. Form Submit Handler (No major change needed here)
    if (form) {
        form.onsubmit = async function(e) {
            e.preventDefault(); 
            const name = document.getElementById("custName").value;
            const mobile = document.getElementById("custMobile").value;
            
            try {
                const response = await fetch(formspreeUrl, {
                    method: 'POST',
                    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
                    body: JSON.stringify({ Name: name, Mobile: mobile, Source: 'Popup on Home Page' })
                });

                if (response.ok) {
                    alert("Thank you, " + name + "! We have received your number.");
                    closeModal();
                    form.reset(); 
                } else {
                    alert("Sorry, there was a problem sending the data.");
                }
            } catch (error) {
                alert("Network error.");
                console.error("Form Submission Error:", error);
            }
        };
    }


    // =======================================================
    // II. MOBILE MENU TOGGLE HANDLER (Hamburger Menu)
    // =======================================================

    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav'); 

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => { 
            mainNav.classList.toggle('active-mobile');
        });
    }
    
    // Bootstrap Carousel को अलग से JS code की जरूरत नहीं होती।
});

