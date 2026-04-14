let selectedPlatform = 'linkedin';

function selectPlatform(el, platform) {
    document.querySelectorAll('.platform-btn').forEach(b => b.classList.remove('active'));
    el.classList.add('active');
    selectedPlatform = platform;
}

async function generatePost() {
    const content = document.getElementById("content").value;
    if (!content) { alert("Please paste some content first!"); return; }

    document.getElementById("output").style.display = "block";
    document.getElementById("result-text").innerText = "Generating your post...";
    document.getElementById("platform-badge").innerText =
        selectedPlatform === 'twitter' ? 'Twitter / X' :
        selectedPlatform.charAt(0).toUpperCase() + selectedPlatform.slice(1);

    try {
        const response = await fetch("/generate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ content, platform: selectedPlatform })
        });
        const data = await response.json();
        document.getElementById("result-text").innerText = data.post;
    } catch (error) {
        document.getElementById("result-text").innerText = "Something went wrong. Try again!";
    }
}

function copyPost() {
    const text = document.getElementById("result-text").innerText;
    navigator.clipboard.writeText(text);
    document.getElementById("copy-btn").innerText = "Copied!";
    setTimeout(() => {
        document.getElementById("copy-btn").innerText = "Copy post";
    }, 2000);
}