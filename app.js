  // Initialize EmailJS with your user ID

  function bookAppointment() {
    emailjs.init("OCY6hz66RGnclmM4Q");
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var date = document.getElementById('date').value;

    // Validate input
    if (!name || !email || !date) {
      alert('Please fill in all fields');
      return;
    }

    // Send email using EmailJS
    var templateParams = {
      name: name,
      email: email,
      date: date,
    };

    emailjs.send("service_sgsv3d7", "template_05gcbwn", templateParams)
      .then(function(response) {
        console.log("Email sent successfully:", response);
        // Display confirmation
        alert("Appointment booked successfully. Confirmation email sent.");
      }, function(error) {
        console.error("Error sending email:", error);
        // Display error message
        alert("Error booking appointment. Please try again later.");
      });

    // Clear form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('date').value = '';
  }