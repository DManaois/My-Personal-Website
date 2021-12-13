$(document).ready(function()
{
    $(window).scroll(function()
    {
        if(this.scrollY > 20)
        {
            $('.navbar').addClass("sticky")
        }else
        {
            $('.navbar').removeClass("sticky")
        }
    })
});

var form = document.getElementById("form");
    
async function handleSubmit(event) {
    console.log("handleSubmit", handleSubmit);
  event.preventDefault();
  var status = document.getElementById("status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    status.classList.add('success');
    status.innerHTML = "Success";
    console.log("status", status);
    console.log("data", data);
    form.reset();
  }).catch(error => {
    status.classList.add('error');
    status.innerHTML = "Oops! There was a problem submitting your form"
    console.log("status", status);
    console.log("data", data);
  });
}
form.addEventListener("submit", handleSubmit)