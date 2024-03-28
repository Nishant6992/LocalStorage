document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get input values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Your authentication logic (replace this with actual authentication)
    if (username === 'sagar@123' && password === '123') {
      alert('Login successful!');
      window.location.href = 'books.html';
      // Redirect to another page or perform other actions upon successful login
    } else {
      var errorMessage = document.getElementById('error-message');
      errorMessage.textContent = 'Invalid username or password';
    }
  });
 