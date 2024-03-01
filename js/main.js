// references for album title
// reference for album description
// referenece for album art
const albumTitle = document.getElementById("album-title");
const albumDescription = document.getElementById("album-description");
const albumArt = document.getElementById("album-art");

// event listener for album title on INPUT. adds invalid class if > 15 characaters
albumTitle.addEventListener("input", onInputTitle);

function onInputTitle(e) {
  const inputTitle = e.currentTarget.value;

  if (inputTitle.length > 15) {
    e.currentTarget.classList.add("is-invalid");
  } else {
    e.currentTarget.classList.remove("is-invalid");
  }
}

// event listener for album description on INPUT. adds invalid class if > 30 characters
albumDescription.addEventListener("input", onInputDescription);

function onInputDescription(e) {
  const inputDescription = e.currentTarget.value;

  if (inputDescription.length > 30) {
    e.currentTarget.classList.add("is-invalid");
  } else {
    e.currentTarget.classList.remove("is-invalid");
  }
}

// event listener for select art on CHANGE. checks if non-default option is selcted
albumArt.addEventListener("change", onSelectArt);

function onSelectArt(e) {
  const selectedArt = e.currentTarget.value;

  if (selectedArt === "") {
    e.currentTarget.classList.add("is-invalid");
  } else {
    e.currentTarget.classList.remove("is-invalid");
  }
}

document
  .querySelector("#album-form")
  .addEventListener("submit", onValidateForm);

function onValidateForm(e) {
  e.preventDefault();
  const currentTitle = e.currentTarget.elements["album-title"].value;
  const currentDescription =
    e.currentTarget.elements["album-description"].value;
  const currentArt = e.currentTarget.elements["album-art"].value;
  if (currentTitle === "") {
    albumTitle.classList.add("is-invalid");
  }

  if (currentDescription === "") {
    albumDescription.classList.add("is-invalid");
  }

  if (currentArt === "") {
    albumArt.classList.add("is-invalid");
  }

  if (currentTitle !== "" && currentDescription !== "" && currentArt !== "") {
    renderAlbum(e);
    document.getElementById("album-form").reset();
  }
}

// is empty or not?
function isEmpty(inputText) {
  const validate = inputText.trim();

  if (validate === "") {
    return true;
  } else {
    return false;
  }
}

// once values are validated, then save button works

// on save, a card is created:

function renderAlbum(event) {
  const inputTitle = event.currentTarget.elements["album-title"].value;
  const inputDescription =
    event.currentTarget.elements["album-description"].value;
  const inputArt = event.currentTarget.elements["album-art"].value;

  const template = `<div class="col">
    
    <div class="card shadow-sm">
        <img class="bd-placeholder-img card-img-top" src="img/${inputArt}" />
        <div class="card-body">
            <h5 class="card-title">${inputTitle}</h5>
            <p class="card-text">${inputDescription}</p>
        </div>
    </div>
    </div>`;
  document
    .querySelector("#all-albums-list")
    .insertAdjacentHTML("afterbegin", template);
}

// reset
// album title has to have class: is-invalid
// description has to have class: is-invalid
