


window.onload = function() {
	let block = document.getElementById('block');

	//document position Y
	let posY = document.getElementById('slider-y');
	posY.addEventListener("change", function() {
		block.style.top = posY.value + 'px';
	});

	//document position x
	let posX = document.getElementById('slider-x');
	posX.addEventListener("change", function() {
		block.style.left = posX.value + 'px';
	});

	//document size
	let size = document.getElementById('size');
	size.addEventListener("change", function() {
		block.style.transform = 'scale('+size.value + ')';
	});

	//document opacity
	let opacity = document.getElementById('opacity');
	opacity.addEventListener("change", function() {

		block.style.opacity = opacity.value;
	});

	//document shape
	let okButton = document.getElementById('ok-shape');
	let shape = document.getElementById('shape');
	okButton.onclick = function() {
		let option = shape.value;
		if (option === '1') {
			block.style.borderRadius='0';
			block.style.transform = 'rotate(0deg)';
		}
		else if (option === '2') {
			block.style.borderRadius ='50%';
		}
		else if (option === '3') {
			block.style.transform = 'rotate(45deg)';
			block.style.borderRadius='0';
		}
	}

	//document HEX Code
	let hex = document.getElementById('hex');
	hex.addEventListener('keypress', function key(e) {
		if (e.keyCode == 13) {
			block.style.backgroundColor = '#' + hex.value;
		}
	});

	//document rgb
	let r =  document.getElementById('rgba-r');
	let g =  document.getElementById('rgba-g');
	let b =  document.getElementById('rgba-b');
	let a =  document.getElementById('rgba-a');

	r.addEventListener("change", function() {
		block.style.backgroundColor = 'rgb(' + r.value + ',' + g.value + ',' + b.value + ')';
	})

	g.addEventListener("change", function() {
		block.style.backgroundColor = 'rgb(' + r.value + ',' + g.value + ',' + b.value + ')';
	})

	b.addEventListener("change", function() {
		block.style.backgroundColor = 'rgb(' + r.value + ',' + g.value + ',' + b.value + ')';
	})


	a.addEventListener("change", function() {
		block.style.backgroundColor = 'rgb(' + r.value + ',' + g.value + ',' + b.value + ',' + a.value +')';
	})



















}




