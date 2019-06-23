$(document).ready(function () {
    const { TesseractWorker } = Tesseract;
    console.log(TesseractWorker);
    const worker = new TesseractWorker();
    worker.recognize(document.querySelector("img"),'chi_tra')
        .then(function(data){
            console.log(data);
            document.getElementById("paragraph").innerText=data.text;
        })
        
    $(document).on('mouseup', function (e) {
        let x = window.getSelection();
        let xrange = x.getRangeAt(0);
        highlightRange(xrange);
    });
});

function highlightRange(range) {
    var newNode = document.createElement("div");
    newNode.setAttribute(
       "style",
       "background-color: yellow; display: inline;"
    );
    range.surroundContents(newNode);
}