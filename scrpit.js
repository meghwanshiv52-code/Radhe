​document.addEventListener('DOMContentLoaded', () => {
    
    // =======================================================
    // I. POPUP/MODAL HANDLING AND FORMSPREE SUBMISSION
    // =======================================================

    // पॉपअप के लिए ज़रूरी तत्वों को चुनना
    const modal = document.getElementById("welcomeModal");
    const closeSpan = document.getElementsByClassName("close-btn")[0];
    const skipButton = document.getElementById("skipButton");
    const form = document.getElementById("leadForm");

    
    const formspreeUrl = "https://formspree.io/f/mvgvwygg"; 

    // फंक्शन जो पॉपअप को बंद करता है
    const closeModal = () => {
        if (modal) {
             modal.style.display = "none";
        }
    };

    // 1. पेज लोड होने पर Popup दिखाएँ
    if (modal) {
        modal.style.display = "block";
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
        // सुनिश्चित करें कि event.target, modal element ही हो
        if (event.target === modal) {
            closeModal();
        }
    };

    // 3. Form Submit Handler (Formspree पर डेटा भेजने के लिए)
    if (form) {
        form.onsubmit = async function(e) {
            e.preventDefault(); // पेज को रीलोड होने से रोकें

            // फॉर्म से डेटा लेना
            const name = document.getElementById("custName").value;
            const mobile = document.getElementById("custMobile").value;

            // Formspree पर डेटा भेजने की प्रक्रिया
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
                        Source: 'Popup on Home Page' // लीड कहाँ से आई, यह जानने के लिए
                    })
                });

                if (response.ok) {
                    // सफलता पर संदेश
                    alert("धन्यवाद, " + name + "! आपका नंबर हमें मिल गया है और लीड आपकी Gmail पर भेज दी गई है।");
                    closeModal();
                    form.reset(); // फॉर्म फ़ील्ड्स को खाली करें
                } else {
                    // अगर Formspree से कोई एरर आए
                    alert("माफ़ करें, डेटा भेजने में कोई समस्या आई। कृपया Formspree URL जाँचें या बाद में प्रयास करें।");
                }
            } catch (error) {
                // अगर कोई नेटवर्क एरर हो
                alert("नेटवर्क त्रुटि। कृपया अपना इंटरनेट कनेक्शन जाँचें।");
                console.error(error);
            }
        };
    }


    // =======================================================
    // II. MOBILE MENU TOGGLE HANDLER
    // =======================================================

    // 1. मोबाइल मेनू बटन (&#9776;) को चुनना
    const menuToggle = document.querySelector('.menu-toggle');

    // 2. नेविगेशन बार को चुनना
    const mainNav = document.querySelector('.main-nav');

    // 3. मेनू बटन पर क्लिक लिसनर जोड़ना
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => { 
            // 'active-mobile' CSS क्लास को टॉगल करना (जो मेनू को दिखाता/छिपाता है)
            mainNav.classList.toggle('active-mobile');
        });
    }
});

