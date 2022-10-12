const button = document.createElement('button')
button.innerText = 'Submit'

button.id = 'mainButton'

button.addEventListener('click', () => {
    let text = document.getElementById("textId").value;
        navigator.clipboard.writeText(text)
        .then(() => {
            text= document.getElementById("textId").value;
            document.getElementById("textId1").value=text;
            alert('Text changed');
        })
        .catch(err => {
            alert('Error in changed text: ', err);
        });
  })

document.body.appendChild(button)