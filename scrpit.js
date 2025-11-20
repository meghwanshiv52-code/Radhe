document.addEventListener('DOMContentLoaded', () => {
    
    // =======================================================
    // I. POPUP/MODAL HANDLING AND FORMSPREE SUBMISSION
    // =======================================================

    const modal = document.getElementById("welcomeModal");
    const closeSpan = document.getElementsByClassName("close-btn")[0];
    const skipButton = document.getElementById("skipButton");
    const form = document.getElementById("leadForm");

    // सुनिश्चित करें कि यह URL सही है
    const formspreeUrl = "https://formspree.io/f/mvgvwygg"; 

    // --- Pop-up Visibility Functions ---
    const closeModal = () => {
        if (modal) {
             modal.style.display = "none";
        }
    };

    // 1. Pop-up दिखाएँ
    // यह चेक करता है कि हम Home Page पर हैं या नहीं। Pop-up केवल index.html पर दिखना चाहिए।
    // अगर आप चाहते हैं कि यह सभी पेजों पर दिखे, तो इस 'if' कंडीशन को हटा दें।
    if (modal && window.location.pathname.includes('index.html') || window.location.pathname === '/' ) {
        // Pop-up को दिखाने के लिए 1.5 सेकंड का विलंब (Delay)
        setTimeout(() => {
            modal.style.display = "block";
        }, 1500); 
    }

    // 2. Pop-up बंद करने के हैंडलर
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

    // यह सेक्शन सुनिश्चित करता है कि मेनू ठीक से खुले और बंद हो
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => { 
            // main-nav पर active-mobile क्लास को टॉगल करना
            mainNav.classList.toggle('active-mobile');
        });
    }

    // यह सुनिश्चित करता है कि अन्य पेजों पर जाने के लिए साधारण <a> टैग काम करते रहें।
    // (क्योंकि यह code DOMContentLoaded के अंदर है, यह नेविगेशन को ब्लॉक नहीं करना चाहिए।)
});

