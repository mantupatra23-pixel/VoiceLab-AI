async function generate() {
    let text = document.getElementById("text").value;
    let voice = document.getElementById("voice").value;

    if (!text) {
        alert("Text enter karo ❌");
        return;
    }

    let res = await fetch("/generate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            text: text,
            voice: voice
        })
    });

    if (res.status !== 200) {
        alert("Error: Login ya credits issue ❌");
        return;
    }

    let blob = await res.blob();
    let url = URL.createObjectURL(blob);

    // 🎧 Play audio
    let audio = document.getElementById("audio");
    audio.src = url;
    audio.style.display = "block";

    // ⬇ Download link
    let link = document.getElementById("download");
    link.href = url;
    link.style.display = "block";
}

// 💳 Buy credits
async function buyCredits() {
    let res = await fetch("/create-order", {
        method: "POST"
    });

    let data = await res.json();
    alert("Order Created ₹49 (Demo)");
}
