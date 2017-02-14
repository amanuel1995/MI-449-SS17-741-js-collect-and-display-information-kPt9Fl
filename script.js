// get elements by ID and assign it to variables
var fnameInput = document.getElementById('firstName')
var lnameInput = document.getElementById('lastName')
var bioInput = document.getElementById('user-bio')
var emailInput = document.getElementById('email')
var phoneInput = document.getElementById('phone')
var rawHtml = document.getElementById('live-code')
var preview = document.getElementById('live-preview')
// Refactored code for updating live-code/preview
function updateRefactor () {
  var firstName = fnameInput.value
  var lastName = lnameInput.value
  var bio = bioInput.value
  var email = emailInput.value
  var phone = phoneInput.value

  preview.innerHTML = '<h3>Hi, my name is ' + firstName + ' ' + lastName + '</h3>' + '\n' + '<p>' + bio + '</p>' + '\n' + '<p>' + 'If you\'re interested in a date, you can email me at ' + '<a href="mailto:' + email + '" target="_blank">' + email + '</a>' + ' or give me a call at <a href="tel:' + phone + '" target="_blank">' + phone + '</a>' + '</p>'

  rawHtml.textContent = '<h3>Hi, my name is ' + firstName + ' ' + lastName + '</h3>' + '\n' + '<p>' + bio + '</p>' + '\n' + '<p>' + 'If you\'re interested in a date, you can email me at ' + '<a href="mailto:' + email + '" target="_blank">' + email + '</a>' + ' or give me a call at <a href="tel:' + phone + '" target="_blank">' + phone + '</a>' + '</p>'
}
// first name updater
fnameInput.addEventListener('input', updateRefactor)
// last name updater
lnameInput.addEventListener('input', updateRefactor)
// user bio updater
bioInput.addEventListener('input', updateRefactor)
// email updater
emailInput.addEventListener('input', updateRefactor)
// phone updater
phoneInput.addEventListener('input', updateRefactor)
