// ********************* Sidebar Variable
const menuItems = document.querySelectorAll('.menu-item');

// ********************* Messages Variable
const messagesNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const message = document.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

// ********************** Recommended Variable
const recommended = document.querySelector('#explore');
const recommendation = document.querySelector('.recommended');

// *****************Theme Popup
const theme = document.querySelectorAll('.theme-popup');
const lightTheme = document.querySelector('#theme-light');
const darkTheme = document.querySelector('#theme-dark');

// *******************Profile Popup
const profile = document.querySelector('.profile');

// ********************* Sidebar *********************************************************
// active function only for selected one
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}


menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');

        if(item.id != 'notifications'){
            document.querySelector('.notifications-popup').
            style.display = 'none';
        }

        else{
            document.querySelector('.notifications-popup').
            style.display = 'block';
            document.querySelector('#notifications .notification-count').
            style.display = 'none';
        }
    })
})

// ********************* Messages*****************************************************

messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').
    style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
})


// ***************** Reccommended*************************************

recommended.addEventListener('click', () => {
    recommendation.style.boxShadow = '0 0 1rem var(--color-grey)';
    setTimeout(() => {
        recommendation.style.boxShadow = 'none';
    }, 2000);
})

// **********************Theme Popup

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');

        if(item.id != 'theme'){
            document.querySelector('.theme-popup').
            style.display = 'none';
        }

        else{
            document.querySelector('.theme-popup').
            style.display = 'flex';
        }
    })
})

// ************************* Dark Theme

let lightColorLightness;
let darkColorLightness;
let whiteColorLightness;

const changeBG = () => {
    document.documentElement.style.setProperty('--light-color-lightness', lightColorLightness);
    document.documentElement.style.setProperty('--white-color-lightness', whiteColorLightness);
    document.documentElement.style.setProperty('--dark-color-lightness', darkColorLightness);
    
}


darkTheme.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    changeBG();
});

lightTheme.addEventListener('click', () => {
    darkColorLightness = '0%';
    whiteColorLightness = '100%';
    lightColorLightness = '95%';

    changeBG();
})

// ***************** Profile Popup

profile.addEventListener('click', () => {
    document.querySelector('.profile-popup').
    style.display = "block";
    setTimeout(() => {
        document.querySelector('.profile-popup').
    style.display = 'none';
    }, 5000);
});

