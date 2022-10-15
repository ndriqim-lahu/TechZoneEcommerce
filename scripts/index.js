/* ==================== SLIDESHOW ==================== */
var slideIndex = 0;
showSlides();

function showSlides() {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";  
	}
	slideIndex++;
	if (slideIndex > slides.length) {slideIndex = 1}    
	slides[slideIndex-1].style.display = "block";  
	setTimeout(showSlides, 2000);
}

/* ==================== COPYRIGHT YEAR ==================== */
function copyrightYear() {
  document.querySelector('#copyright-year').innerText = new Date().getFullYear();
}
window.onload = copyrightYear();

/* ==================== DISABLE RIGHT-CLICK ==================== */
function disableRightClick() {
	document.addEventListener("contextmenu", (e) => {
		e.preventDefault();
	}, false);
}
window.onload = disableRightClick();

/* ==================== DISABLE CONTROL & FUNCTION KEYS ==================== */
function disableShortcutKey() {
	document.addEventListener("keydown", (e) => {
	  if (e.ctrlKey || (e.keyCode>=112 && e.keyCode<=123)) {
		e.stopPropagation();
		e.preventDefault();
	  }
	});
}
window.onload = disableShortcutKey();