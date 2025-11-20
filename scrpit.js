document.addEventListener('DOMContentLoaded', () => {
    
    // =======================================================
    // I. POPUP/MODAL HANDLING AND FORMSPREE SUBMISSION (SAFE MODE)
    // =======================================================

    // Selectors को Try-Catch ब्लॉक के बाहर रखा गया है
    const modal = document.getElementById("welcomeModal");
    const closeSpan = document.querySelector(".modal-header-popup .close-btn");
    const skipButton = document.getElementById("skipButton");
    const form = document.getElementById("leadForm");

    // Formspree URL 
    const formspreeUrl = "https://formspree.io/f/mvgvwygg"; 

    // Pop-up Visibility Function
    const closeModal = () => {
        if (modal) {
             modal.style.display = "none";
        }
    };

    // 1. Pop-up दिखाएँ (Error Handling के साथ)
    try {
        if (modal) {
            setTimeout(() => {
                modal.style.display = "block";
            }, 1500); 
        }
    } catch (e) {
        console.error("Popup Display Error:", e);
    }

    // 2. Pop-up बंद करने के हैंडलर (Error Handling के साथ)
    try {
        if (closeSpan) {
            closeSpan.onclick = closeModal;
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
    } catch (e) {
        console.error("Popup Close Handler Error:", e);
    }


    // 3. Form Submit Handler (Error Handling के साथ)
    try {
        if (form) {
            form.onsubmit = async function(e) {
                e.preventDefault(); 
                const name = document.getElementById("custName").value;
                const mobile = document.getElementById("custMobile").value;
                
                // डेटा भेजने की प्रक्रिया
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
            };
        }
    } catch (e) {
        alert("Form submission failed due to an error.");
        console.error("Form Submission Logic Error:", e);
    }


    // =======================================================
    // II. MOBILE MENU TOGGLE HANDLER (तीन लाइनों के लिए)
    // =======================================================

    try {
        const menuToggle = document.querySelector('.menu-toggle');
        const mainNav = document.querySelector('.main-nav'); 

        if (menuToggle && mainNav) {
            menuToggle.addEventListener('click', () => { 
                mainNav.classList.toggle('active-mobile');
            });
        }
    } catch (e) {
        console.error("Mobile Menu Error:", e);
    }
    
    // =======================================================
    // III. SLIDER/CAROUSEL (Slider के लिए)
    // =======================================================

    // अगर आप Bootstrap Carousel का इस्तेमाल कर रहे हैं, तो वह अपने आप काम करेगा 
    // क्योंकि आपने Bootstrap JS लिंक किया हुआ है। इस सेक्शन में कोई JS की ज़रूरत नहीं है। 
    
});
