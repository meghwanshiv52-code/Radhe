document.addEventListener('DOMContentLoaded', () => { 
    // 1. मोबाइल मेनू बटन (&#9776;) KO SILECT KRNA
    const menuToggle = document.querySelector('.menu-toggle');

    // 2. negivesn baar ko silect krna
    const mainNav = document.querySelector('.main-nav');

    //menu btn pr cilik lisnr jodna
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => { 
            // jb btn pr cilik hota h to active mobile namk css class ko togl krna
            // yh class css ko btati h kimenu ko dihkana h ya ni
            mainNav.classList.toggle('active-mobile');
        });
    }
});

​
document.addEventListener('DOMContentLoaded', (event) => {
    // ज़रूरी DOM तत्वों को चुनना
    const modal = document.getElementById("welcomeModal");
    const closeSpan = document.getElementsByClassName("close-btn")[0];
    const skipButton = document.getElementById("skipButton");
    const form = document.getElementById("leadForm");

    // Formspree Endpoint (ज़रूरी: इसे अपने असली Formspree URL से बदलें!)
    const formspreeUrl = "YOUR_FORMSPREE_ENDPOINT"; 

    // 1. पेज लोड होने पर Popup दिखाएँ
    modal.style.display = "block"; 

    // 2. Popup बंद करने के फ़ंक्शन
    const closeModal = () => {
        modal.style.display = "none";
    };

    closeSpan.onclick = closeModal;
    skipButton.onclick = closeModal;
    
    // 3. Popup के बाहर क्लिक होने पर बंद करें
    window.onclick = function(event) {
        if (event.target === modal) {
            closeModal();
        }
    };

    // 4. Form Submit होने पर क्या करना है (Formspree AJAX)
    form.onsubmit = async function(e) {
        e.preventDefault(); // पेज को रीलोड होने से रोकें

        // फॉर्म से डेटा लेना
        const name = document.getElementById("custName").value;
        const mobile = document.getElementById("custMobile").value;

        // डेटा को Formspree पर भेजना
        try {
            const response = await fetch(formspreeUrl, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    Name: name,
                    Mobile: mobile,
                    Source: 'Popup on Home Page' // यह आपको बताएगा कि लीड कहाँ से आई
                })
            });

            if (response.ok) {
                // सफलता पर
                alert("धन्यवाद, " + name + "! आपका नंबर हमें मिल गया है। लीड आपकी Gmail पर भेज दी गई है।");
                closeModal();
                form.reset(); // फॉर्म को खाली करें
            } else {
                // अगर Formspree से कोई एरर आए
                alert("माफ़ करें, डेटा भेजने में कोई समस्या आई। कृपया बाद में प्रयास करें।");
            }
        } catch (error) {
            // अगर नेटवर्क एरर हो
            alert("नेटवर्क त्रुटि। कृपया अपना इंटरनेट कनेक्शन जाँचें।");
            console.error(error);
        }
    };
});


आप}}$ $\mathbf{\text{Formspree}}$ $\mathbf{\text{से}}$ $\mathbf{\text{अपना}}$ $\mathbf{\text{Endpoint}}$ $\mathbf{\text{URL}}$ $\mathbf{\text{लेकर}}$ $\mathbf{\text{इस}}$ $\mathbf{\text{कोड}}$ $\mathbf{\text{को}}$ $\mathbf{\text{​script.js}}$ $\mathbf{\text{फ़ाइल}}$ $\mathbf{\text{में}}$ $\mathbf{\text{अपडेट}}$ $\mathbf{\text{करेंगे}}$?​
