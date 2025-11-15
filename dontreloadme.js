// Use this in your html <script src="dontreloadme.js"></script>
// Block F5 and Ctrl+R / Cmd+R
document.addEventListener("keydown", function (e) {
  // F5 key
  if (e.key === "F5" || e.keyCode === 116) {
    e.preventDefault();
  }

  // Ctrl+R or Cmd+R
  if ((e.ctrlKey || e.metaKey) && e.key && e.key.toLowerCase() === "r") {
    e.preventDefault();
  }
});
