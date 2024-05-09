function validateForm() {
    if (document.getElementById('bookNow').checkValidity()) {
        sendEmail();
    } else {
        alert('Please fill out all required fields.');
    }
}
function sendEmail() {
    var formData = {
        first_name: document.getElementById('inputfname').value,
        last_name: document.getElementById('inputLname').value,
        mobile: document.getElementById('mobile').value,
        email: document.getElementById('email').value,
        event_name: document.getElementById('Ename').value,
        event_date: document.getElementById('edate').value,
        event_place: document.getElementById('eplace').value,
        event_about: document.getElementById('eabout').value
    };
    

    emailjs.send('service_sruthilaya', 'template_aeuatwo',formData)
        .then(function(response) { 
            console.log('Email sent successfully:', response);
            alert('Booking request sent successfully. We\'ll get back to you shortly.');
            document.getElementById("bookNow").reset();
        },
        function(error) {
            console.error('Email sending failed:', error);
            alert('Failed to send booking request. Please try again later.');
        });
}

// contact us

function contactSubmit() {
    var formDetails = {
        name: document.getElementById('name').value,
        mobile: document.getElementById('mobile').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    

    emailjs.send('service_sruthilaya', 'template_jfrhzes',formDetails)
        .then(function(response) { 
            console.log('Email sent successfully:', response);
            alert('Thank You for contact us');
            document.getElementById("Contact").reset();
        },
        function(error) {
            console.error('Email sending failed:', error);
            alert('Failed to send your details. Please try again later');
        });
}