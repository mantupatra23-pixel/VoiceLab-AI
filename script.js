const BASE = "http://34.201.111.254:5000";

// REGISTER
async function register() {
    let res = await fetch(BASE + "/register", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        credentials: "include",
        body: JSON.stringify({
            email: document.getElementById("email").value,
            password: document.getElementById("password").value
        })
    });

    let data = await res.json();
    alert(data.msg);
}

// LOGIN
async function login() {
    let res = await fetch(BASE + "/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        credentials: "include",
        body: JSON.stringify({
            email: document.getElementById("email").value,
            password: document.getElementById("password").value
        })
    });

    let data = await res.json();
    alert(data.msg);
}

// GENERATE
async function generate() {
    let res = await fetch(BASE + "/generate", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        credentials: "include",
        body: JSON.stringify({
            text: document.getElementById("text").value,
            voice: document.getElementById("voice").value
        })
    });

    if (res.status !== 200) {
        alert("Login first or no credits");
        return;
    }

    let blob = await res.blob();
    let url = URL.createObjectURL(blob);
    document.getElementById("audio").src = url;
}

// BUY
async function buy() {
    let res = await fetch(BASE + "/create-order", {
        method: "POST",
        credentials: "include"
    });

    let data = await res.json();
    alert("Order ID: " + data.id);
}
