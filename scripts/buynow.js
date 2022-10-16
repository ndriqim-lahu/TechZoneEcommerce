/* ==================== ALERT BOX ==================== */
var btn = document.getElementById("termetKushtet");
var box = document.getElementById("myBox");
var span = document.getElementsByClassName("okay")[0];

btn.onclick = function() {
    box.style.display = "block";
}

span.onclick = function() {
    box.style.display = "none";
    window.reload();
}

/* ==================== FORM VALIDATION ==================== */
function isBlank(inputField) {
    if(inputField.type === "") {
        if(inputField.checked) {
            return false;
        }
        return true;
    }
    if(inputField.value === "") {
        return true;
    }
    return false;
}

function makeRed(inputDiv) {
    inputDiv.style.borderColor = "red";
}

function makeClean(inputDiv) {
    inputDiv.style.borderColor = "silver";
}

function formValidation() {
    var mainForm = this.document.getElementById("mainForm");
    var requiredInputs = document.querySelectorAll(".required");
    mainForm.onsubmit = function(e) {
        for(var i = 0; i < requiredInputs.length; i++) {
            if(isBlank(requiredInputs[i])) {
                e.preventDefault();
                makeRed(requiredInputs[i]);
            }
            else {
                makeClean(requiredInputs[i]);
            }
        }
    }
}
formValidation();

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