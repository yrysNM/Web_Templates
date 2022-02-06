//Change style of navBar on scroll
window.onscroll = function() {
	myFunction();
}

function myFunction() {
	let navBar = document.getElementById("myNavBar");
	let tagA = document.querySelectorAll("#chColor");

	if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
		navBar.className  = "navBar";
		tagA.forEach(item => {
			item.style.color = "#000";
		});
	}else {
		navBar.className = navBar.className.replace("navBar");
		tagA.forEach(item => {
			item.style.color = "#777";
		});
	}

}