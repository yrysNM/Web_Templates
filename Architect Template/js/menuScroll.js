//Change style of navBar on scroll
window.onscroll = function() {
	myFunction();
}

function myFunction() {
	let navBar = document.getElementById("myNavBar");

	if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
		navBar.style.csText = `
			backgroundColor = "rgb(253, 253, 253):;

		`;
	}else {
		backgroundColor = "none";
	}

}