document.getElementById('downloadButton').addEventListener('click', async () => {
    const messageElement = document.getElementById('message');
    messageElement.textContent = ''; // Clear previous messages

    try {
        // Fetch the link from the clipboard
        const link = await navigator.clipboard.readText();

        // Validate the link (basic validation for supported sites)
        const supportedSites = ['youtube.com', 'youtu.be', 'tiktok.com', 'instagram.com', 'facebook.com'];
        const isValidLink = supportedSites.some(site => link.includes(site));

        if (!isValidLink) {
            throw new Error('Unsupported link or no link found in clipboard.');
        }

        // Show fetched link
        messageElement.textContent = `Link fetched: ${link}`;

        // Redirect to the download service (replace with your actual download service URL)
        const downloadServiceUrl = `https://your-download-service.com/download?url=${encodeURIComponent(link)}`;
        window.location.href = downloadServiceUrl;
    } catch (error) {
        messageElement.textContent = `Error: ${error.message}`;
    }
});
