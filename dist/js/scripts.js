/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

let validationStates = {
    name: false,
    email: false,
    phone: false,
    message: false,
};
window.addEventListener('DOMContentLoaded', event => {
    checkAll();
    // form parameters validation
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const message = document.getElementById("message");
    

    function checkName() {
        const nameReq = document.getElementById("name-req");
        if (name.value.trim().match("^[A-Za-z ]+$") !== null) {
            console.log("trueses")
            nameReq.style.display = 'none';
            validationStates.name = true;
        }
        else {
            nameReq.style.display = 'block'; 
            validationStates.name = false;
        };
        checkAll();
    }

    function checkEmail() {
        const emailReq = document.getElementById("email-req");
        const emailValid = document.getElementById("email-valid");
        
        if (email.value.trim() == "") {
            emailReq.style.display = 'block';
            emailValid.style.display = 'none';
            return;
        } else {
            emailReq.style.display = 'none';
        }
        if (email.value.trim().match(/^\S+@\S+\.\S+$/) !== null) {
            emailValid.style.display = 'none'
            validationStates.email = true;
        } else {
            emailValid.style.display = 'block';
            validationStates.email = false;
        }
        checkAll();
    }

    function checkPhone() {
        const phoneReq = document.getElementById("phone-req");
        let p = String(phone.value.trim());
        let hasTenDigits = false
        let count = 0
        for (i = 0; i < p.length; i++) {
            if (p.charAt(i).match("[0-9]") !== null) {
                count += 1;
            }
            if (count >= 10) {
                hasTenDigits = true;
                break;
            }
        };
        if (p.length >= 9 && hasTenDigits)  {
            phoneReq.style.display = 'none';
            validationStates.phone = true;
        }
        else {
            phoneReq.style.display = 'block'
            validationStates.phone = false;
        }
        checkAll();
    }

    function checkMessage() {
        const messageReq = document.getElementById("message-req");
        if (message.value.trim().length != 0) {
            messageReq.style.display = 'none';
            validationStates.message = true;
        }
        else {
            messageReq.style.display = 'block';
            validationStates.message = false;
        }
        checkAll();
    }
    function checkAll() {
        console.log(validationStates);
        const submit = document.getElementById("submitButton");
        if (validationStates.name && validationStates.phone && validationStates.email && validationStates.message) {
            console.log("true");
            submit.classList.remove("disabled");
            submit.classList.add("enabled");
            return true;
        } else {
            console.log("false");
            submit.classList.remove("enabled");
            submit.classList.add("disabled");
            return false;
        }
        
    }

    // when loaded, check all too
    checkAll();

    name.addEventListener("input", checkName);
    email.addEventListener("input", checkEmail);
    phone.addEventListener("input", checkPhone);
    message.addEventListener("input", checkMessage);

    
    // form control flow
    const form = document.getElementById("contactForm");
    form.addEventListener("blur", checkAll);
    // prevent enter to post request
    form.onkeydown = function(key) {
        if (key.key == "Enter") {
            key.preventDefault();
            return false;
        }
    }




    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        const title = navbarCollapsible.querySelector('a');
        if (!title) {
            return;
        }
        if (window.scrollY === 0) {   
            navbarCollapsible.classList.remove('navbar-shrink')
            title.text = "Welcome to My Page!"
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
            title.text = "Back to Top"
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
