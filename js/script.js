// Find the "Name" input element
var nameInput = document.getElementById("name");

// Log the variable to the console to ensure the correct element is being referenced
console.log(nameInput);

// Set the focus on the "Name" input field
nameInput.focus();

// Create variables to reference the elements
var jobRoleSelect = document.getElementById("title");
var otherJobRoleInput = document.getElementById("other-job-role");

// Log the variables to the console to ensure the correct elements are being referenced
console.log(jobRoleSelect);
console.log(otherJobRoleInput);

// Hide the "Other job role" field by default
otherJobRoleInput.style.display = "none";

// Add an event listener to the "Job Role" select element
jobRoleSelect.addEventListener("change", function(event) {
  // Check the value of the selected option
  if (event.target.value === "other") {
    // Display the "Other job role" field
    otherJobRoleInput.style.display = "block";
  } else {
    // Hide the "Other job role" field
    otherJobRoleInput.style.display = "none";
  }
  // Log the condition and the value to the console
  console.log(event.target.value === "other");
  console.log(event.target.value);
});

// Create variables to reference the elements
let designSelect = document.getElementById("design");
let colorSelect = document.getElementById("color");
let colorOptions = colorSelect.children;

//Log the variables to the console to ensure the correct elements are being referenced
console.log(designSelect);
console.log(colorSelect);

//Disable the Color menu by default
colorSelect.disabled = true;

//Add an eventlistener to the Design select element
designSelect.addEventListener("change", function(event) {
  //Enable the Color select element
  colorSelect.disabled = false;

  //Loop over the color option
  for (let i = 0; i < colorOptions.length; i++) {
    //Create variables to reference the value of the design select and the data-theme attribite of the current option
    let selectedDesign = event.target.value;
    let optionTheme = colorOptions[i].getAttribute("data-theme");

    //Log the variables to the console to inspect them
    console.log(selectedDesign);
    console.log(optionTheme);

    //Conditionally display or hide the color options based on the selected theme
    if(selectedDesign === optionTheme) {
      colorOptions[i].hidden = false;
      colorOptions[i].setAttribute("selected", true);
    }else {
      colorOptions[i].hidden = true;
      colorOptions[i].removeAttribute("selected");
    }
  }
});

// Create variables to reference the "Register for Activities" <fieldset> element, the "Total: $" <p> element, and the hint element
const activitiesFieldset = document.getElementById('activities');
const activitiesElements = document.querySelectorAll('#activities input');
const activitiesTotalCost = document.getElementById('activities-cost');
const activitiesHint = document.getElementById('activities-hint');

// Log the variables to the console to ensure the correct elements are being referenced
console.log(activitiesFieldset);
console.log(activitiesTotalCost);
console.log(activitiesHint);

// Create another variable to store the total cost of the activities and give it an initial value of 0
let totalCost = 0;

// Use the variable for the "Register for Activities" section to listen for the change event on this element
activitiesFieldset.addEventListener('change', (event) => {
  // Create a variable to store a reference to the "data-cost" attribute of the event.target
  const activityCost = +event.target.getAttribute('data-cost');
  
  // Set focus on the checkbox that triggered the change event
  event.target.focus();

  // Create a conditional to determine if the event.target was checked or unchecked
  if (event.target.checked) {
    // If the event.target was checked, add the "data-cost" of the event.target to the total variable
    totalCost += activityCost;
  } else {
    // If the event.target was unchecked, subtract the "data-cost" from the total variable
    totalCost -= activityCost;
  }

  // Update the innerHTML of the "Total: $" <p> element with the new total cost
  activitiesTotalCost.innerHTML = `Total: $${totalCost}`;

  // Show or hide the hint based on the total cost
  if (totalCost === 0) {
    activitiesHint.style.display = 'block'; // Show the hint
  } else {
    activitiesHint.style.display = 'none'; // Hide the hint
  }
});

// Set focus styling on Activities when focused
activitiesElements.forEach( element => {
  element.addEventListener('focus', e => element.parentElement.classList.add('focus'));
  element.addEventListener('blur', e => {
      const active = document.querySelector('.focus');
      if (active) active.classList.remove('focus');
  })
});

// Create variables to reference the payment select element and the payment method sections
const paymentSelect = document.getElementById('payment');
const creditCardSection = document.getElementById('credit-card');
const paypalSection = document.getElementById('paypal');
const bitcoinSection = document.getElementById('bitcoin');

// Log the variables to confirm their identity
console.log(paymentSelect);
console.log(creditCardSection);
console.log(paypalSection);
console.log(bitcoinSection);

// Hide the paypal and bitcoin sections initially
paypalSection.style.display = 'none';
bitcoinSection.style.display = 'none';

// Set the preferred payment method and display the corresponding section by default
paymentSelect.children[1].setAttribute('selected', 'selected');
creditCardSection.style.display = 'block';

// Listen for the change event on the payment select element
paymentSelect.addEventListener('change', (event) => {
  // Hide all payment method sections
  creditCardSection.style.display = 'none';
  paypalSection.style.display = 'none';
  bitcoinSection.style.display = 'none';

  // Get the value of the selected payment option
  selectedPaymentMethod = event.target.value;

  // Show the corresponding payment method section based on the selected option
 if(selectedPaymentMethod === 'credit-card') {
    creditCardSection.style.display = 'block';
  } else if(selectedPaymentMethod === 'paypal') {
      paypalSection.style.display = 'block';
  } else if(selectedPaymentMethod === 'bitcoin') {
    bitcoinSection.style.display = 'block';
  }
});

//Creating variables for each input and logging them in the console
console.log('Name Input:', nameInput);

var emailInput = document.getElementById("email");
console.log('Email Input:', emailInput);

console.log('Activities Fieldset:', activitiesFieldset);

var ccNumInput = document.getElementById('cc-num');

var zipCodeInput = document.getElementById('zip');

var cvvInput = document.getElementById('cvv');

var form = document.querySelector('form');
console.log('Form:', form);


//Variables for hint of different input fields
var nameHint = document.getElementById('name-hint');
var emailHint = document.getElementById('email-hint');
var ccHint = document.getElementById('cc-hint');
var zipCodeHint = document.getElementById('zip-hint');
var cvvHint = document.getElementById('cvv-hint');


form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting and refreshing the page

  //Form validation for Name Input
  var nameValue = nameInput.value;
  var nameIsValid = /^[a-zA-Z]+$/.test(nameValue); // Regex test to check if name contains only alphabetic characters
  var nameValue = nameInput.value.trim(); // Remove leading/trailing whitespace

  console.log("Name Value:", nameValue);
  console.log("Name Validation:", nameIsValid);

  if (!nameIsValid) {
    event.preventDefault(); // Prevent form submission if name is invalid
    nameHint.style.display = 'block'; // Show the name hint
  } else {
    nameHint.style.display = 'none'; // Hide the name hint
  }

  if (nameValue.trim() === '') {
    event.preventDefault();
    nameInput.parentNode.classList.add('not-valid');
    nameInput.parentNode.classList.remove('valid');
    nameHint.style.display = 'block';
  } else {
    nameInput.parentNode.classList.add('valid');
    nameInput.parentNode.classList.remove('not-valid');
    nameHint.style.display = 'none';
  }

  //Form validation for Email Input
  var emailValue = email.value;
  var emailIsValid = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(emailValue); // Use regular expression to validate email format

  console.log("Email Value:", emailValue);
  console.log("Email Validation:", emailIsValid);

  if (!emailIsValid) {
    event.preventDefault(); // Prevent form submission if email is invalid
    emailInput.parentNode.classList.add('not-valid');
    emailHint.style.display = 'block'; // Show the email hint
  } else {
    emailInput.parentNode.classList.remove('not-valid');
    emailHint.style.display = 'none'; // Hide the email hint
    emailInput.parentNode.classList.add('valid');
  }


  //Form validation for Register for Activities
  var activitiesChecked = checkActivities(); // Call a helper function to check if at least one activity is selected

  console.log("Activities Checked:", activitiesChecked);

  if (!activitiesChecked) {
    event.preventDefault(); // Prevent form submission if no activity is selected
    activitiesFieldset.classList.add('not-valid');
    activitiesHint.style.display = 'block'; // Show the activities hint
  } else {
    activitiesFieldset.classList.remove('not-valid');
    activitiesHint.style.display = 'none'; // Hide the activities hint
    activitiesFieldset.classList.add('valid');

  }

  //Form validation for Payment Details
 // Check if the payment method is selected
 var selectedPaymentMethod = paymentSelect.value;
 if (selectedPaymentMethod === 'credit-card') {
    var ccNumValue = ccNumInput.value.trim();
    var isCcNumValid = validateCcNum(ccNumValue);
  
    console.log("Card Number Value:", ccNumValue);
    console.log("Card Number Valid:", isCcNumValid);
    //Validate credit card number
    if (!isCcNumValid) {
      event.preventDefault();
      ccNumInput.parentNode.classList.add('not-valid');
      ccNumInput.parentNode.classList.remove('valid');
      ccHint.style.display = 'block';
      ccNumInput.classList.add('error-border');
    } else {
      ccNumInput.parentNode.classList.add('valid');
      ccNumInput.parentNode.classList.remove('not-valid');
      ccHint.style.display = 'none';
      ccNumInput.classList.remove('error-border');
    }

  //Form validation for Zip Code
  var zipCodeValue = zipCodeInput.value.trim();
  var isZipCodeValid = validateZipCode(zipCodeValue);
  console.log("Zip Code Value:", zipCodeValue);
  console.log("Zip Code Valid:", isZipCodeValid);

  if (!isZipCodeValid) {
    event.preventDefault();
    zipCodeInput.parentNode.classList.add('not-valid');
    zipCodeInput.parentNode.classList.remove('valid');
    zipCodeHint.style.display = 'block';
    zipCodeInput.classList.add('error-border');
  } else {
    zipCodeHint.style.display = 'none';
    zipCodeInput.parentNode.classList.add('valid');
    zipCodeInput.parentNode.classList.remove('not-valid');
    zipCodeInput.classList.remove('error-border');
  }
  
  //Form validation for CVV
  var cvvValue = cvvInput.value.trim();
  var isCvvValid = validateCvv(cvvValue);

  console.log("CVV Value:", cvvValue);
  console.log("CVV Valid:", isCvvValid);

  if (!isCvvValid) {
    event.preventDefault();
    cvvHint.style.display = 'block';
    cvvInput.classList.add('error-border');
    cvvInput.parentNode.classList.add('not-valid');
    cvvInput.parentNode.classList.remove('valid');
  } else {
    cvvHint.style.display = 'none';
    cvvInput.classList.remove('error-border');
    cvvInput.parentNode.classList.add('valid');
    cvvInput.parentNode.classList.remove('not-valid');
  }
  
} else if (selectedPaymentMethod === 'paypal') {
} else if (selectedPaymentMethod === 'bitcoin') {
}


  // Validate the form
  if (nameValue.trim() && emailIsValid && activitiesChecked) {
    if (selectedPaymentMethod === 'credit-card' && isCcNumValid && isZipCodeValid && isCvvValid) {
      // If the form is valid for credit card payment, display the form data and submit the form
      form.submit();
    } else if (selectedPaymentMethod === 'paypal') {
      // Handle form submission for PayPal payment
      form.submit();
    } else if(selectedPaymentMethod === 'bitcoin') {
      // Handle form submission for Bitcoin payment
      form.submit();
    }
  }
  
});

//Function for activities checkbox
function checkActivities() {
  var checkboxes = document.querySelectorAll('#activities-box input[type="checkbox"]');
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      return true; // At least one activity is selected
    }
  }
  return false; // No activity is selected
}

//Function to validate credit card number
function validateCcNum(ccNumValue) {
  var ccNumRegex = /^\d{13,16}$/; // Regex pattern for 13-16 digit card numbers
  return ccNumRegex.test(ccNumValue);
}

//Function to validate zip code with regex pattern
function validateZipCode(zipCodeValue) {
  var zipCodeRegex = /^\d{5}$/; // Regex pattern for 5-digit zip codes
  return zipCodeRegex.test(zipCodeValue);
}

//Funciton to validate CVV 
function validateCvv(cvvValue) {
  var cvvRegex = /^\d{3}$/; // Regex pattern for 3-digit CVV
  return cvvRegex.test(cvvValue);
}
