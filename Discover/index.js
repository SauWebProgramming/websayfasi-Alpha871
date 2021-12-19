
document.addEventListener("click", function(e){
  if(e.target.classList.contains("gallery-item")) {
    const src = e.target.getAttribute("src");
    document.querySelector(".modal-img").src = src;
    var myModal = new bootstrap.Modal(document.getElementById('gallery-photo'));
    myModal.show();
  }
});
