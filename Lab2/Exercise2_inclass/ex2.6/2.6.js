var el_up = document.getElementById("UP");
	var el_down = document.getElementById("DOWN");
	el_up.innerHTML = "Click on the button to get the"
	+ " width and height of the window";

	function Cal_Window() {
		el_down.innerHTML = "Width:"
		+ document.documentElement.clientWidth
		+ " pixels"
		+ ", "
		+ "Height:"
		+ document.documentElement.clientHeight
		+ " pixels";
	}