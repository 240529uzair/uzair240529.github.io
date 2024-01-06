
    document.addEventListener('DOMContentLoaded', function () {
      const form = document.getElementById('contact-form');

      form.addEventListener('submit', function (event) {
        event.preventDefault();
        const formData = new FormData(this);

  
        let formValues = '';
        for (const pair of formData.entries()) {
          formValues += `${pair[0]}: ${pair[1]}\n`;
        }
        alert('Form submitted with the following data:\n\n' + formValues)