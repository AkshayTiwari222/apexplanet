
  document.querySelector('.contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name) {
      alert('Name is required.');
      return;
    }

    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    alert('Form submitted successfully!');
  });
