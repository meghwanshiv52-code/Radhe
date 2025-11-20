document.addEventListener('DOMContentLoaded', () => {
    
    // =======================================================
    // I. POPUP/MODAL HANDLING AND FORMSPREE SUBMISSION
    // =======================================================

    const modal = document.getElementById("welcomeModal");
    // ध्यान दें: closeSpan को चुनने का तरीका बदला गया है ताकि यह 100% काम करे
    const closeSpan = document.querySelector(".modal-header-popup .close-btn"); 
    const skipButton = document.getElementById("skipButton");
    const form = document.getElementById("leadForm");

    const formspreeUrl = "https://formspree.io/f/mvgvwygg"; 

    // --- Pop-up Visibility Functions ---
    const closeModal = () => {
        if (modal) {
             modal.style.display = "none";
        }
    };

    // 1. Pop-up दिखाएँ
    if (modal) {
        // Pop-up को दिखाने के लिए 1.5 सेकंड का विलंब (Delay)
        setTimeout(() => {
            modal.style.display = "block";
        }, 1500); 
    }

    // 2. Pop-up बंद करने के हैंडलर (अब ये ठीक से काम करेंगे)
    if (closeSpan) {
        closeSpan.addEventListener('click', closeModal); // Event Listener का उपयोग
    }
    if (skipButton) {
        skipButton.addEventListener('click', closeModal); // Event Listener का उपयोग
    }
    
    // Pop-up के बाहर क्लिक होने पर बंद करें
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
                console.error("Form Submission Error:", error);
            }
        };
    }


    // =======================================================
    // II. MOBILE MENU TOGGLE HANDLER (नेविगेशन के लिए)
    // =======================================================

    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav'); 

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => { 
            mainNav.classList.toggle('active-mobile');
        });
    }
});
