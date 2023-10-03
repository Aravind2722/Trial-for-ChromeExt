// background.js

// Define the list of blocked websites
const blockedWebsites = ["https://www.instagram.com/", "https://www.facebook.com/"];

// Add an event listener to intercept requests and block specified websites
chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    if (blockedWebsites.some((website) => details.url.startsWith(website))) {
      // Block the request by returning {cancel: true}
      return { cancel: true };
    }
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);

// Listen for extension messages (e.g., from popup.js)
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "block") {
    // Add a website to the blocked list
    blockedWebsites.push(message.website);
  } else if (message.action === "unblock") {
    // Remove a website from the blocked list
    const index = blockedWebsites.indexOf(message.website);
    if (index !== -1) {
      blockedWebsites.splice(index, 1);
    }
  }
});
// console.log("Service ongoing...!");