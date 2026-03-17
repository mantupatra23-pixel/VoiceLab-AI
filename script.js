async function generate(){
    let text = document.getElementById("text").value;

    let res = await fetch("http://34.201.111.254:5000/generate",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            text:text,
            voice:document.getElementById("voice").value,
            emotion:document.getElementById("emotion").value,
            speed:document.getElementById("speed").value
        })
    });

    let blob = await res.blob();
    let url = URL.createObjectURL(blob);

    let link = document.getElementById("download");
    link.href = url;
    link.innerText = "⬇ Download Voice";
}
