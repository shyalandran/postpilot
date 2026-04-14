async function generatePost() {
    const content = document.getElementById("content").value;
    const platform = document.getElementById("platform").value;

    if (!content) {
        alert("Please paste some content first!");
        return;
    }

    // Show loading state
    document.getElementById("output").style.display = "block";
    document.getElementById("result-text").innerText = "Generating your post...✨";

    try {
        const response = await fetch("/generate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ content, platform })
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
    document.getElementById("copy-btn").innerText = "Copied! ✅";
    setTimeout(() => {
        document.getElementById("copy-btn").innerText = "Copy Post 📋";
    }, 2000);
}