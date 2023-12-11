function showHelloWorldAlert() {
    alert('Hello, world!');
}

function makeTextBigger() {
    document.getElementById("textArea").style.fontSize = "24pt";
}

function addSomeStyle(){
    //alert("This shit work?")
    document.getElementById("textArea").style.fontWeight = "bold";
    document.getElementById("textArea").style.color = "blue";
    document.getElementById("textArea").style.textDecoration = "underline";
}
function takeAwayStyle(){
    document.getElementById("textArea").style.fontWeight = "normal";
}

function toUpperCase(){
    let textArea = document.getElementById("textArea");
    let text = textArea.value.toUpperCase();

    let sentences = text.split(".");
    for (let i = 0; i < sentences.length; i++) {
        if (sentences[i].trim().length > 0) {
            sentences[i] = sentences[i].trim() + "-Moo";
        }
    }

    textArea.value = sentences.join(". ") + (text.endsWith(".") ? "" : ".");

}
