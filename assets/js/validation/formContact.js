export const validationFormContact = (maxLengthValidation, minLengthValidation, nameValidation, emailValidation) => {

    //contact form
        const formContact = document.querySelector('#form-contact');
    //contact input fields
        const nameField = document.querySelector('#form-contact .row .col-12 .input-group input[name="fullName"]');
        const emailField = document.querySelector('#form-contact .row .col-12 .input-group input[name="email"]');
        const subjectField = document.querySelector('#form-contact .row .col-12 .input-group input[name="subject"]');
        const messageField = document.querySelector('#form-contact .row .col-12 .input-group textarea[name="message"]');
    
    //contact error messages
        const nameErrorMessage = document.getElementById('errorNameContactForm');
        const emailErrorMessage = document.getElementById('errorEmailContactForm');
        const subjectErrorMessage = document.getElementById('errorSubjectContactForm');
        const messageErrorMessage = document.getElementById('errorMessageContactForm');
  
    //all error fields
        const errorMessages = document.getElementsByClassName('error');
  
    //validation for login fields
    formContact.addEventListener("submit", (event) => {

        try {
             
            //prevent submit of form
            event.preventDefault();
    
            //empty all previous error messages
            for (const error of errorMessages) {
                error.classList.add("d-none");
                error.innerText = "";
            }
    
            //check validations for fields
            let isNameValid = nameValidation(nameField, nameErrorMessage);
            let isEmailValid = false;
            let isSubjectValid = false;
            let isMessageValid = false;
    
            if (isNameValid) {
                isEmailValid = emailValidation(emailField, emailErrorMessage);
            }

            if (isNameValid && isEmailValid) {
                isSubjectValid = minLengthValidation(subjectField, subjectErrorMessage, 5, "*el asunto es muy corto");
            
                if (isSubjectValid) {
                    isSubjectValid = maxLengthValidation(subjectField, subjectErrorMessage, 20, "*20 caracteres máximo");
                }
            }

            if (isNameValid && isEmailValid && isSubjectValid) {
                isMessageValid = maxLengthValidation(messageField, messageErrorMessage, 500, "*500 caracteres máximo");
            
                if (isMessageValid) {
                    isMessageValid = minLengthValidation(messageField, messageErrorMessage, 5, "*el mensaje es muy corto");
                }
            }
    
            //submit contact form if all fields are valid
            if(isEmailValid && isNameValid && isSubjectValid && isMessageValid){
    
                //input data
                let data = {
                    name : nameField.value,
                    email : emailField.value,
                    subject : subjectField.value,
                    message : messageField.value
                }
        
                //submit contact form
                let submitForm = () => {

                    //dummy function for submit
                    console.log(data);

                    //Toast notification for success
                    const Toast = Swal.mixin({
                        toast: true,
                        position: "bottom-end",
                        showConfirmButton: false,
                        timer: 3800,
                        timerProgressBar: false,
                        didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                        }
                    });
                    Toast.fire({
                        icon: "success",
                        title: `¡Formulario enviado con éxito! <br><br> ¡Te responderé a la brevedad!`
                    });

                    //reset form fields values
                    formContact.reset();

                    //set focus on first field
                    emailField.focus()
                }
    
                submitForm();
            }

        } catch (error) {

            console.log(error);

            //Toast notification for failure
            const Toast = Swal.mixin({
                toast: true,
                position: "bottom-end",
                showConfirmButton: false,
                timer: 3800,
                timerProgressBar: false,
                didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
                }
            });
            Toast.fire({
                icon: "error",
                title: `¡No se pudo enviar el formulario en este momento! <br><br> Por favor, intente otra vía de comunicación.`
            });
        }

    });
}