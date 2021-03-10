// There are two possible values of the capture option:
// If it’s false (default), then the handler is set on the bubbling phase.
// If it’s true, then the handler is set on the capturing phase.

<html>
<form>FORM
  <div>DIV
    <p>P</p>
  </div>
</form>

<script>
  for(let elem of document.querySelectorAll('*')) {
    elem.addEventListener("click", e => alert(`Capturing: ${elem.tagName}`), true),
    elem.addEventListener("click", e => alert(`Bubbling: ${elem.tagName}`))
  }
</script>
</html>