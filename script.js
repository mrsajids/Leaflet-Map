// Function to copy code to clipboard
function copyCode1() {
  var codeBlock = document.getElementById("codeBlock1");
  var range = document.createRange();
  range.selectNode(codeBlock);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy"); // Copy the selected content

  // Show notification after copy
  var notification = document.getElementById("copiedNotification1");
  notification.style.display = "block";
  setTimeout(function() {
    notification.style.display = "none";
  }, 2000); // Hide after 2 seconds
}

// Function to copy code to clipboard
function copyCode2() {
  var codeBlock = document.getElementById("codeBlock2");
  var range = document.createRange();
  range.selectNode(codeBlock);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy"); // Copy the selected content

  // Show notification after copy
  var notification = document.getElementById("copiedNotification2");
  notification.style.display = "block";
  setTimeout(function() {
    notification.style.display = "none";
  }, 2000); // Hide after 2 seconds
}
