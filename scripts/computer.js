/* ==================== POPUP FEEDBACK ==================== */
function hapeMesazhin() {
  document.getElementById("myMesazh").style.display = "block";
}
  
function mbylleMesazhin() {
  document.getElementById("myMesazh").style.display = "none";
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