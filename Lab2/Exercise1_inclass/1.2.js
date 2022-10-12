document.getElementById("copyBtn")
    .onclick = function() {
        let text = document.getElementById("textId").value;
        navigator.clipboard.writeText(text)
        .then(() => {
            alert('Text copied to clipboard');
        })
        .catch(err => {
            alert('Error in copying text: ', err);
        });
    }