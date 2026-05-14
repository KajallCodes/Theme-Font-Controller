const toggle = document.getElementById("toggle");
const slider = document.getElementById("slider");
const text = document.getElementById("text");

const savedTheme = localStorage.getItem("theme");
const savedFontSize = localStorage.getItem("fontSize");

if(savedTheme === "dark"){
    toggle.checked = true;
    document.body.classList.add("dark");
}else{
    document.body.classList.remove("dark");
}

if(savedFontSize){
    slider.value = savedFontSize;
    text.style.fontSize = savedFontSize + "px";
}

toggle.addEventListener("change",()=>{
    const theme = toggle.checked ? "dark" : "light";
    localStorage.setItem("theme", theme);

    document.body.classList.toggle("dark", toggle.checked);
});

slider.addEventListener("input",()=>{
    const size = slider.value;
    text.style.fontSize = size + "px";
    localStorage.setItem("fontSize", size);
});


























