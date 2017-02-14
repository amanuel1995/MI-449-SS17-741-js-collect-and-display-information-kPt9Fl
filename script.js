// get elements by ID and assign it to variables
var fnameInput = document.getElementById('firstName')
var lnameInput = document.getElementById('lastName')
var bioInput = document.getElementById('user-bio')
var emailInput = document.getElementById('email')
var phoneInput = document.getElementById('phone')
var rawHtml = document.getElementById('live-code')
var preview = document.getElementById('live-preview')
// Concatenate content from the input and produce output
fnameInput.addEventListener('input', function () {
  var firstName = fnameInput.value

  preview.innerHTML = '<h3> Hi, my name is ' + firstName

  rawHtml.textContent = '<h3> Hi, my name is ' + firstName
})

lnameInput.addEventListener('input', function () {
  var firstName = fnameInput.value
  var lastName = lnameInput.value

  preview.innerHTML = '<h3>Hi, my name is ' + firstName + ' ' + lastName + '</h3>'

  rawHtml.textContent = '<h3>Hi, my name is ' + firstName + ' ' + lastName + '</h3>'
})

bioInput.addEventListener('input', function () {
  var firstName = fnameInput.value
  var lastName = lnameInput.value
  var bio = bioInput.value

  preview.innerHTML = '<h3>Hi, my name is ' + firstName + ' ' + lastName + '</h3>' + '\n' + '<p>' + bio + '</p>'

  rawHtml.textContent = '<h3>Hi, my name is ' + firstName + ' ' + lastName + '</h3>' + '\n' + '<p>' + bio + '</p>'
})

emailInput.addEventListener('input', function () {
  var firstName = fnameInput.value
  var lastName = lnameInput.value
  var bio = bioInput.value
  var email = emailInput.value

  preview.innerHTML = '<h3>Hi, my name is ' + firstName + ' ' + lastName + '</h3>' + '\n' + '<p>' + bio + '</p>' + '\n' + '<p>' + 'If you\'re interested in a date, you can email me at ' + '<a href="mailto:' + email + '"target="_blank">' + email + '</a>'

  rawHtml.textContent = '<h3>Hi, my name is ' + firstName + ' ' + lastName + '</h3>' + '\n' + '<p>' + bio + '</p>' + '\n' + '<p>' + 'If you\'re interested in a date, you can email me at ' + '<a href="mailto:' + email + '" target="_blank">' + email + '</a>'
})

phoneInput.addEventListener('input', function () {
  var firstName = fnameInput.value
  var lastName = lnameInput.value
  var bio = bioInput.value
  var email = emailInput.value
  var phone = phoneInput.value

  preview.innerHTML = '<h3>Hi, my name is ' + firstName + ' ' + lastName + '</h3>' + '\n' + '<p>' + bio + '</p>' + '\n' + '<p>' + 'If you\'re interested in a date, you can email me at ' + '<a href="mailto:' + email + '" target="_blank">' + email + '</a>' + ' or give me a call at <a href="tel:' + phone + '" target="_blank">' + phone + '</a>' + '</p>'

  rawHtml.textContent = '<h3>Hi, my name is ' + firstName + ' ' + lastName + '</h3>' + '\n' + '<p>' + bio + '</p>' + '\n' + '<p>' + 'If you\'re interested in a date, you can email me at ' + '<a href="mailto:' + email + '" target="_blank">' + email + '</a>' + ' or give me a call at <a href="tel:' + phone + '" target="_blank">' + phone + '</a>' + '</p>'
})
