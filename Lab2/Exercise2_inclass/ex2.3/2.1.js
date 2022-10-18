const button = document.createElement('button')
button.innerText = 'Submit'

button.id = 'mainButton'
function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}
button.addEventListener('click', () => {
    let text = document.getElementById("textId").value;
        navigator.clipboard.writeText(text)
        .then(() => {
            text= document.getElementById("textId").value;
            alert('Text changed');
        })
        .catch(err => {
            alert('Error in changed text: ', err);
        });
  })


document.body.appendChild(button)