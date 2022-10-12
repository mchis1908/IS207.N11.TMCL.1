
const parseCookie = str =>
  str
    .split(';')
    .map(v => v.split('='))
    .reduce((acc, v) => {
      acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
      return acc;
    }, {});
document.getElementById("readCookiebtn")
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