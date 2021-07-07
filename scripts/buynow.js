/* ==================== REQUIRED INPUTS ==================== */
function isBlank(inputField){
    if(inputField.type === ""){
        if(inputField.checked){
            return false;
        }
        return true;
    }
    if(inputField.value === ""){
        return true;
    }
    return false;
}

function makeRed(inputDiv){
    inputDiv.style.borderColor = "red";
}

function makeClean(inputDiv){
    inputDiv.style.borderColor = "silver";
}

window.onload = function(){
    var mainForm = this.document.getElementById("mainForm");
    var requiredInputs = document.querySelectorAll(".required");
    mainForm.onsubmit = function(e){
        for(var i = 0; i < requiredInputs.length; i++){
            if(isBlank(requiredInputs[i])){
                e.preventDefault();
                makeRed(requiredInputs[i]);
            }
            else{
                makeClean(requiredInputs[i]);
            }
        }
    }
}

/* ==================== ALERT BOX ==================== */
var btn = document.getElementById("termetKushtet");
var box = document.getElementById("myBox");
var span = document.getElementsByClassName("okay")[0];
btn.onclick = function(){
    box.style.display = "block";
}
span.onclick = function(){
    box.style.display = "none";
    location.reload();
}