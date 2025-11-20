document.addEventListener('DOMContentLoaded', () => {
    
    // =======================================================
    // I. POPUP/MODAL HANDLING AND FORMSPREE SUBMISSION
    // =======================================================

    // पॉपअप के लिए ज़रूरी तत्वों को चुनना
    const modal = document.getElementById("welcomeModal");
    const closeSpan = document.getElementsByClassName("close-btn")[0];
    const skipButton = document.getElementById("skipButton");
    const form = document.getElementById("leadForm");

    // Formspree Endpoint (IMPORTANT: अपनी Formspree URL से बदलें)
    const formspreeUrl = "https://formspree.io/f/mvgvwygg"; 

    // फंक्शन जो पॉपअप को बंद करता है
    const closeModal = () => {
        if (modal) {
             modal.style.display = "none";
        }
    };

    // 1. पेज लोड होने पर Popup दिखाएँ
    if (modal) {
        // Pop-up को दिखाने के लिए 1.5 सेकंड का विलंब (Delay)
        setTimeout(() => {
            modal.style.display = "block";
        }, 1500); 
    }

    // 2. 'X' आइकन, 'Skip' बटन और बाहर क्लिक होने पर Popup बंद करें
    if (closeSpan) {
        closeSpan.onclick = closeModal;
    }
    if (skipButton) {
        skipButton.onclick = closeModal;
    }
    
    // Popup के बाहर क्लिक होने पर बंद करें
    window.onclick = function(event) {
        if (event.target === modal) {
            closeModal();
        }
    };

    // 3. Form Submit Handler (Formspree पर डेटा भेजने के लिए)
    if (form) {
        form.onsubmit = async function(e) {
            e.preventDefault(); 
            const name = document.getElementById("custName").value;
            const mobile = document.getElementById("custMobile").value;
            
            // डेटा भेजने की प्रक्रिया
            try {
                const response = await fetch(formspreeUrl, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        Name: name,
                        Mobile: mobile,
                        Source: 'Popup on Home Page' 
                    })
                });

                if (response.ok) {
                    alert("धन्यवाद, " + name + "! आपका नंबर हमें मिल गया है।");
                    closeModal();
                    form.reset(); 
                } else {
                    alert("माफ़ करें, डेटा भेजने में कोई समस्या आई।");
                }
            } catch (error) {
                alert("नेटवर्क त्रुटि।");
                console.error(error);
            }
        };
    }


    // =======================================================
    // II. MOBILE MENU TOGGLE HANDLER
    // =======================================================

    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav'); 

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => { 
            // main-nav पर active-mobile क्लास को टॉगल करना
            mainNav.classList.toggle('active-mobile');
        });
    }
});

