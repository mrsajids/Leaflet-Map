// Function to copy code to clipboard
function copyCode() {
  var codeBlock = document.getElementById("codeBlock");
  var range = document.createRange();
  range.selectNode(codeBlock);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy"); // Copy the selected content

  // Show notification after copy
  var notification = document.getElementById("copiedNotification");
  notification.style.display = "block";
  setTimeout(function() {
    notification.style.display = "none";
  }, 2000); // Hide after 2 seconds
}
