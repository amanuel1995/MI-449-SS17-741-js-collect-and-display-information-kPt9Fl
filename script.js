// get elements by ID and assign it to variables
var fnameInput = document.getElementById('firstName')
var lnameInput = document.getElementById('lastName')
var bioInput = document.getElementById('user-bio')
var emailInput = document.getElementById('email')
var phoneInput = document.getElementById('phone')
var rawHtml = document.getElementById('live-code')
var preview = document.getElementById('live-preview')
// function to refactor code to update live-code/preview
function updateProfile () {
  var firstName = fnameInput.value
  var lastName = lnameInput.value
  var bio = bioInput.value
  var email = emailInput.value
  var phone = phoneInput.value
// create a string variable to hold value to be updated
  var profileString = '<h3>Hi, my name is ' + firstName + ' ' +
  lastName + '</h3>' + '\n' + '<p>' + bio + '</p>' + '\n' + '<p>' +
  'If you\'re interested in a date, you can email me at ' +
  '<a href="mailto:' + email + '" target="_blank">' + email +
  '</a>' + ' or give me a call at <a href="tel:' + phone +
  '" target="_blank">' + phone + '</a>' + '</p>'

  preview.innerHTML = profileString

  rawHtml.textContent = profileString
}
// first name updater
fnameInput.addEventListener('input', updateProfile)
// last name updater
lnameInput.addEventListener('input', updateProfile)
// user bio updater
bioInput.addEventListener('input', updateProfile)
// email updater
emailInput.addEventListener('input', updateProfile)
// phone updater
phoneInput.addEventListener('input', updateProfile)
