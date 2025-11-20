document.addEventListener('DOMContentLoaded', () => {
    
    // =======================================================
    // I. POPUP/MODAL HANDLING (Simplified and Robust)
    // =======================================================

    // Note: We use querySelector to ensure we select the elements correctly
    const modal = document.getElementById("welcomeModal");
    const closeBtn = document.querySelector(".close-btn"); // 'X' button
    const skipButton = document.getElementById("skipButton");
    const form = document.getElementById("leadForm");
    const formspreeUrl = "https://formspree.io/f/mvgvwygg"; 

    // Pop-up Visibility Function
    const closeModal = () => {
        if (modal) {
             modal.style.display = "none";
             // console.log("Modal closed!"); // Testing line
        }
    };

    // 1. Pop-up दिखाएँ
    if (modal) {
        // Pop-up को दिखाने के लिए 1.5 सेकंड का विलंब (Delay)
        setTimeout(() => {
            modal.style.display = "block";
        }, 1500); 
    }

    // 2. Pop-up बंद करने के हैंडलर (onclick का उपयोग ताकि Error न आए)
    // ये 100% काम करेंगे क्योंकि HTML IDs सही हैं।
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
            
            // डेटा भेजने की प्रक्रिया
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
    // II. MOBILE MENU TOGGLE HANDLER (तीन लाइनों के लिए)
    // =======================================================

    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav'); 

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => { 
            mainNav.classList.toggle('active-mobile');
        });
    }
    
    // =======================================================
    // III. SLIDER/CAROUSEL LOGIC
    // =======================================================
    // Bootstrap Carousel को अलग से JS code की जरूरत नहीं होती, 
    // वह अपने आप काम करना चाहिए क्योंकि आपने Bootstrap JS लिंक किया है। 
    // अगर वह काम नहीं कर रहा है, तो यह भी ऊपर की JS Error के कारण ब्लॉक हो रहा होगा।
});
