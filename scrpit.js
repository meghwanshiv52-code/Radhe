document.addEventListener('DOMContentLoaded', () => {
    
    // =======================================================
    // I. POPUP/MODAL HANDLING AND FORMSPREE SUBMISSION
    // =======================================================

    const modal = document.getElementById("welcomeModal");
    const closeSpan = document.querySelector(".modal-header-popup .close-btn");
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

    // 2. Pop-up बंद करने के हैंडलर (onclick का उपयोग ताकि Error न आए)
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

    // 3. Form Submit Handler (यहां कोई बदलाव नहीं किया गया है)
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
    // III. SLIDER/CAROUSEL LOGIC (Slider के लिए)
    // =======================================================
    
    // अगर आपने Carousel/Slider के लिए Bootstrap का इस्तेमाल किया है, तो यह कोड काम करेगा।
    // अगर आपने कोई कस्टम JS लिखा है, तो वह यहां जोड़ना होगा। 
    // फिलहाल, हम मान रहे हैं कि Bootstrap इसे हैंडल कर रहा है।
    
});


