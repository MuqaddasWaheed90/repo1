let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = ()=>
{
  searchForm.classList.toggle('active');
  shoppingCart.classList.remove('active');
  loginForm.classList.remove('active');
  navbar.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = ()=>
{
  shoppingCart.classList.toggle('active');
  searchForm.classList.remove('active');
  loginForm.classList.remove('active');
  navbar.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = ()=>
{
  loginForm.classList.toggle('active');
  shoppingCart.classList.remove('active');
  searchForm.classList.remove('active');
  navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = ()=>
{
  navbar.classList.toggle('active');
  loginForm.classList.remove('active');
  shoppingCart.classList.remove('active');
  searchForm.classList.remove('active');
}



window.onscroll = ()=>
{
  searchForm.classList.remove('active'); 
  shoppingCart.classList.remove('active');
  loginForm.classList.remove('active');
  navbar.classList.remove('active');
}




var swiper = new Swiper(".product-slider", {
  loop:true,
  spaceBetween: 20,
  

  autoplay:
  {
    delay:7500,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      
    },
    768: {
      slidesPerView: 2,
      
    },
    1020: {
      slidesPerView: 3,
      
    },
  },
});


var swiper = new Swiper(".reveiw-slider", {
  loop:true,
  spaceBetween: 20,
  

  autoplay:
  {
    delay:7500,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      
    },
    768: {
      slidesPerView: 2,
      
    },
    1020: {
      slidesPerView: 3,
      
    },
  },
});

// document.querySelector(".login-form").addEventListener("submit", function(event) {
  // event.preventDefault(); // Prevent form submission

  // Get form values
  // var email = document.querySelector(".login-form input[type='email']").value;
  // var password = document.querySelector(".login-form input[type='password']").value;

  // Validation checks
  // if (email === "") {
  //     alert("Please fill in the email field.");
  //     return;
  // } else if (!email.includes("@") || !email.includes(".") || email.indexOf(".") < email.indexOf("@")) {
  //     alert("Please enter a valid email address.");
  //     return;
  // }

  // if (password === "") {
  //     alert("Please fill in the password field.");
  //     return;
  // } else if (password.length < 8 || !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password) || !/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
  //     alert("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character.");
  //     return;
  // }

  // If all validations pass, log the values
  // console.log("Email: " + email);
  // console.log("Password: " + password);

  // Here you can send the data to the server using AJAX or any other method
  // For this example, let's just show an alert
  // alert("Login successful!");
  // window.location.href = "index.html"; // Redirect to dashboard
// });