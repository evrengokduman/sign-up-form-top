document.addEventListener('DOMContentLoaded', function () {
  let PASSWORD = document.querySelector('#password'.value)
  let CONFRIRM_PASSWORD = document.querySelector('#confirmPassword').value

  let error = document.querySelector('#error')
  if (PASSWORD == !CONFRIRM_PASSWORD) {
    error.innerHTML = '*passwords do not match!'

    console.log('error')
  }

  console.log('ok')
})
