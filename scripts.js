document.addEventListener("DOMContentLoaded", function () {
	const curtain = document.querySelector("#curtain");
	const lampdiv = document.querySelector("#lamp-div");
	const lampstring = document.querySelector("#lamp-string");
	const lighttrapezoid = document.querySelector("#light-trapezoid");
	const witch = document.querySelector("#witch");
	const hat = document.querySelector("#hat");
	const bunny = document.querySelector("#bunny");
	const dove = document.querySelector("#dove");
	
	let animalOut = 0; //0 for none 1 for bun 2 for dove
	
	//for hover-overs
	curtain.style.transition = "transform 0.2s ease-in-out";
	lampstring.style.transition = "transform 0.1s ease-in-out";
	//lights on stuff
	lighttrapezoid.style.transition = "opacity 0.2s linear";
	witch.style.transition = "opacity 0.2s linear";
	hat.style.transition = "opacity 0.2s linear";
	
	let curtainUp = false
	let lampOn = false
	
	curtain.addEventListener("mouseenter", function () {
		if (!curtainUp) {
			curtain.style.transform = "translateY(-5%)";
		}
	});
	
	curtain.addEventListener("mouseleave", function () {
		if (!curtainUp) {
			curtain.style.transform = "translateY(0)";
		}
	});
	
	curtain.addEventListener("click", function () {
		if (curtainUp) {
			return;
		}
		curtainUp = true;
		curtain.style.transition = "transform 1s ease-in-out";
		curtain.style.transform = "translateY(-100%)";
	});
	
	lampdiv.addEventListener("mousedown", function () {
		lampstring.style.transform = "translateY(6%)";
	});
	
	lampdiv.addEventListener("mouseup", function () {
		if (lampOn) {
			lampOn = false;
			lampstring.style.transform = "translateY(0%)";
			lighttrapezoid.style.opacity = "0%";
			witch.style.opacity = "0%";
			hat.style.opacity = "0%";
			bunny.style.transition = "opacity 0s 0s";
			dove.style.transition = "opacity 0s 0s";
			bunny.style.opacity = "0%";
			dove.style.opacity = "0%";
			
			animalOut = 0;
			bunny.style.transform = "translateY(0%)";
			dove.style.transform = "translateY(0%)";
		} else {
			lampOn = true;
			lampstring.style.transform = "translateY(0%)";
			lighttrapezoid.style.opacity = "50%";
			witch.style.opacity = "100%";
			hat.style.opacity = "100%";
			bunny.style.transition = "opacity 0s 0.2s"; //bun and dove w/ delay
			dove.style.transition = "opacity 0s 0.2s";
			bunny.style.opacity = "100%";
			dove.style.opacity = "100%";
		}
		
	});
	
	lampdiv.addEventListener("mouseleave", function () {
		lampstring.style.transform = "translateY(0%)";
	});
	
	hat.addEventListener("click", function () {
		console.log("lol");
		switch (animalOut) {
			case 0:
			case 2:
				animalOut = 1;
				dove.style.transition = "transform 0.2s ease-in-out 0.25s";
				bunny.style.transition = "transform 0.2s ease-in-out 0s";
				dove.style.transform = "translateY(-170%)";
				bunny.style.transform = "translateY(0%)";
			break;
			case 1:
				animalOut = 2;
				dove.style.transition = "transform 0.2s ease-in-out 0s";
				bunny.style.transition = "transform 0.2s ease-in-out 0.25s";
				dove.style.transform = "translateY(0%)";
				bunny.style.transform = "translateY(-170%)";
			break;
		}
	});
	
})