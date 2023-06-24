// script.js

document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Form validation
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username.trim() === '') {
      showError('Please enter your username');
    } else if (password.trim() === '') {
      showError('Please enter your password');
    } else {
      // Perform login authentication and redirect
      // Code for login authentication...
      window.location.href = 'dashboard.html'; // Redirect to dashboard
    }
  });
  
  document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Form validation
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    if (username.trim() === '') {
      showError('Please enter a username');
      animateButton('register-btn');
    } else if (email.trim() === '') {
      showError('Please enter an email');
      animateButton('register-btn');
    } else if (!isValidEmail(email)) {
      showError('Please enter a valid email');
      animateButton('register-btn');
    } else if (password.trim() === '') {
      showError('Please enter a password');
      animateButton('register-btn');
    } else if (confirmPassword.trim() === '') {
      showError('Please confirm your password');
      animateButton('register-btn');
    } else if (password !== confirmPassword) {
      showError('Passwords do not match');
      animateButton('register-btn');
    } else {
      // Perform registration and redirect
      // Code for registration...
      window.location.href = 'dashboard.html'; // Redirect to dashboard
    }
  });
  
  // Mouseover animation for buttons
  const buttons = document.querySelectorAll('button');
  buttons.forEach(function(button) {
    button.addEventListener('mouseover', function() {
      if (!isFormValid()) {
        button.style.transform = 'translateY(-8px)';
      }
    });
  
    button.addEventListener('mouseout', function() {
      button.style.transform = 'translateY(0)';
    });
  });
  
  function isFormValid() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    return (
      username.trim() !== '' &&
      email.trim() !== '' &&
      isValidEmail(email) &&
      password.trim() !== '' &&
      confirmPassword.trim() !== '' &&
      password === confirmPassword
    );
  }
  
  function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error';
    errorDiv.textContent = message;
    
    const container = document.querySelector('.container');
    const form = document.querySelector('form');
    
    container.insertBefore(errorDiv, form);
    
    // Remove error after 3 seconds
    setTimeout(function() {
      errorDiv.remove();
    }, 3000);
  }
  
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  function animateButton(buttonId) {
    const button = document.getElementById(buttonId);
    button.style.transform = 'translateY(-8px)';
    setTimeout(function() {
      button.style.transform = 'translateY(0)';
    }, 500);
  }
  
  
  
  