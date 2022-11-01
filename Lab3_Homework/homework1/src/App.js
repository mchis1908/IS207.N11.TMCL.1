import './App.css';
import sound from './sound'
import animation from './animation'

var numberOfButtons =
	document.querySelectorAll(".button").length;

for (var j = 0; j < numberOfButtons; j++) {

document.querySelectorAll(".button")[j]
.addEventListener("click", function() {

	var buttonStyle = this.innerHTML;
	sound(buttonStyle);
	animation(buttonStyle);
});
}

document.addEventListener("keypress", function(event) {
sound(event.key);
animation(event.key);
});

function App() {
  return (
    <div className='all' >
      <h1>The Drum Kit</h1>
      <button class="w button">w</button>
      <button class="a button">a</button>
      <button class="s button">s</button>
      <button class="d button">d</button>
      <button class="j button">j</button>
      <button class="k button">k</button>
      <button class="l button">l</button>
    </div>
  );
}


export default App;
