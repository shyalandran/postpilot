function generatePost() {
    const content = document.getElementById("content").value;
    const platform = document.getElementById("platform").value;

    if (!content) {
        alert("Please paste some content first!");
        return;
    }

    // For now just showing a test message
    document.getElementById("result-text").innerText =
        `[TEST] Generating a ${platform} post for: "${content.slice(0, 50)}..."`;
    document.getElementById("output").style.display = "block";
}