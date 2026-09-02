document.addEventListener("click", function (e) {
  var q = e.target.closest(".quiz .q");
  if (q) q.parentElement.classList.toggle("open");
});
