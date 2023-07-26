// Shows the preview of an attached image
function previewImage() {
    var oFReader = new FileReader();
    oFReader.readAsDataURL(document.getElementById("picture").files[0]);
    let preview = document.getElementById("snap-preview");
    oFReader.onload = function (oFREvent) {
        preview.src = oFREvent.target.result;
        document.querySelector("#snap-preview-container").style.display = "block";
        document.querySelector("#attach").style.display = "none";
        document.querySelector("#detach").style.display = "block";
    };
    let res = document.querySelector("#result");
    res.innerHTML = "";

};

//removes the image and makes necessary adjustments
function resetPreview(){
    document.querySelector("#picture").value = "";
    document.querySelector("#snap-preview").src="#";
    document.querySelector("#snap-preview-container").style.display = "none";
    document.querySelector("#detach").style.display = "none";
    document.querySelector("#attach").style.display = "block";
    document.querySelector("#file-upload-tweaks").innerHTML = "";
    
};

// Downloads the ASCII art as a txt file
function downloadText(){
    var content = document.querySelector("#resultcanvas").innerHTML;
    var fn = document.querySelector("#downloadname").value;
    var file = new Blob([content],{type: "text/plain;charset=utf-8"});
    var a = document.createElement("a");
    var url =URL.createObjectURL(file);
    a.href = url;
    a.download = fn + ".txt";
    document.body.appendChild(a);
    a.click();
    setTimeout(function() {
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);  
}, 0);
};


// To be executied only after the Page finishes loading
window.onload = function(){
        let snap_preview = document.querySelector("#snap-preview");
        let tweaks = document.querySelector("#file-upload-tweaks");

        // Add inputs to tweak the result ASCII art
        snap_preview.onload = function(){
            let max_width = snap_preview.width;
            //Input to enter the number of columns which determines the size of the tile
            //Default -max width of the image
            var x = document.createElement("input");
            x.setAttribute("type", "number");
            x.setAttribute("name", "cols");
            x.max = max_width;
            x.setAttribute("value", max_width);
            x.min = 1;
            x.id="cols";
            x.className = "form-control";
            var x_label = document.createElement("label");
            x_label.setAttribute("for", x.name);
            x_label.innerHTML = "Size of the ASCII Image:";
            tweaks.appendChild(document.createElement("hr"));
            tweaks.appendChild(x_label);
            tweaks.appendChild(x);
            tweaks.appendChild(document.createElement("hr"));

            //Change in height of the image is directly proportional to the change in default value
            var y = document.createElement("input");
            y.setAttribute("type", "number");
            y.setAttribute("name", "scale");
            y.setAttribute("step", 0.01);
            y.setAttribute("value",0.43);
            y.min = 0.01;
            y.max = 1.00;
            y.id="scale";
            y.className = "form-control";            
            var y_label = document.createElement("label");
            y_label.setAttribute("for", y.name);
            y_label.innerHTML = "Scale the image height:";
            tweaks.appendChild(y_label);
            tweaks.appendChild(y);
            tweaks.appendChild(document.createElement("hr"));
        }

};