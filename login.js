document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert('Login successful!');
        localStorage.setItem('token', data.token);
        // Redirect to dashboard or homepage
        window.location.href = '/dashboard.html';
      } else {
        alert(data.message);
      }
    } catch (err) {
      alert('Error logging in. Please try again later.');
    }
  });
  