document.addEventListener("DOMContentLoaded", function () {
    // Add an event listener to block a website
    document.getElementById("blockButton").addEventListener("click", () => {
      const website = document.getElementById("websiteInput").value;
      chrome.runtime.sendMessage({ action: "block", website: website });
      // console.log("block message sent");
    });
  
    // Add an event listener to unblock a website
    document.getElementById("unblockButton").addEventListener("click", () => {
      const website = document.getElementById("websiteInput").value;
      chrome.runtime.sendMessage({ action: "unblock", website: website });
      // console.log("unblock message sent");
    });
  });
  