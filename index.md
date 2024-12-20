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

