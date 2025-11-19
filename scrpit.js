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
