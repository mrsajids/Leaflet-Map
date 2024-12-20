# My Coding Tutorial

Welcome to my tutorial on **creating tutorials** with GitHub Pages and Markdown!

## Introduction

In this tutorial, I'll show you how to:
1. Create a repository on GitHub
2. Enable GitHub Pages
3. Write content in Markdown

## Code Example: Hello World in Python

Here's a simple Python code to print "Hello World":

# Python code example
def greet(name):
    print(f"Hello, {name}!")

# My Tutorial

Here's some code that you can copy:

<div class="code-container">
  <button class="copy-btn" onclick="copyCode()">Copy</button>
  <pre id="codeBlock">
# Python example to print Hello World
print("Hello, World!")
  </pre>
  <span class="copied-notification" id="copiedNotification">Copied!</span>
</div>

<script>
  function copyCode() {
    var codeBlock = document.getElementById("codeBlock");
    var range = document.createRange();
    range.selectNode(codeBlock);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");

    var notification = document.getElementById("copiedNotification");
    notification.style.display = "block";
    setTimeout(function() {
      notification.style.display = "none";
    }, 2000);
  }
</script>

# My Coding Tutorial

In this tutorial, I will show you how to display code in a beautiful box like ChatGPT's, and allow users to copy it with a button.

## Python Example Code

Here is a simple Python example:

<div class="code-container">
  <button class="copy-btn" onclick="copyCode()">Copy</button>
  <pre id="codeBlock">
# Python example to print Hello World
print("Hello, World!")
  </pre>
  <span class="copied-notification" id="copiedNotification">Copied!</span>
</div>

<!-- Add the styles inside a <style> tag -->
<style>
  /* Styling for the code container */
  .code-container {
    position: relative;
    margin: 20px 0;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f6f6f6;
    font-family: 'Courier New', Courier, monospace;
  }

  /* Code block styling */
  pre {
    margin: 0;
    padding: 0;
    white-space: pre-wrap;
    word-wrap: break-word;
    background-color: #1e1e1e;
    color: #f5f5f5;
    border-radius: 5px;
    overflow-x: auto;
    padding: 12px;
    font-size: 14px;
  }

  /* Styling for the copy button */
  .copy-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 8px 12px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
  }

  .copy-btn:hover {
    background-color: #45a049;
  }

  .copy-btn:focus {
    outline: none;
  }

  /* Notification when code is copied */
  .copied-notification {
    position: absolute;
    top: -30px;
    right: 10px;
    font-size: 12px;
    color: green;
    display: none;
  }
</style>

<!-- Add the JavaScript for copy functionality -->
<script>
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
</script>









