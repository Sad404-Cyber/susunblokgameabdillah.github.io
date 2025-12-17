const gallery = document.getElementById("galleryContainer");
const images = JSON.parse(localStorage.getItem("images")) || [];

images.forEach(img => {
  gallery.innerHTML += `
    <div class="col-md-3">
      <img src="${img}" class="img-fluid rounded shadow">
    </div>`;
});
