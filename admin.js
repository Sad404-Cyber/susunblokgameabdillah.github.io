if (!localStorage.getItem("adminLogin")) {
  location.href = "login.html";
}

function logout() {
  localStorage.removeItem("adminLogin");
  location.href = "login.html";
}

function uploadImage() {
  const file = imageInput.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    let images = JSON.parse(localStorage.getItem("images")) || [];
    images.push(reader.result);
    localStorage.setItem("images", JSON.stringify(images));
    loadImages();
  };
  reader.readAsDataURL(file);
}

function loadImages() {
  preview.innerHTML = "";
  const images = JSON.parse(localStorage.getItem("images")) || [];

  images.forEach(img => {
    preview.innerHTML += `
      <div class="col-md-3">
        <img src="${img}" class="img-fluid rounded shadow">
      </div>`;
  });
}

loadImages();
