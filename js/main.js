// global references
const albumTitle = document.getElementById('album-title');
const albumDescription = document.getElementById('album-description');
const albumArt = document.getElementById('album-art');

//event listeners
albumTitle.addEventListener('input', onInputTitle);
albumDescription.addEventListener('input', onInputDescription);
albumArt.addEventListener('change', onSelectArt);
document.querySelector('#album-form').addEventListener('submit', onValidateForm);

//FUNCTIONS
// adds invalid class if album title > 15 characaters
function onInputTitle(e) {
    const inputTitle = e.currentTarget.value;

    if (inputTitle.length > 15) {
        e.currentTarget.classList.add('is-invalid');
    } else {
        e.currentTarget.classList.remove('is-invalid');
    }
}

//adds invalid class if album description > 30 characters
function onInputDescription(e) {
    const inputDescription = e.currentTarget.value;

    if (inputDescription.length > 30) {
        e.currentTarget.classList.add('is-invalid');
    } else {
        e.currentTarget.classList.remove('is-invalid');
    }
}

// adds invalid class if default option is selcted
function onSelectArt(e) {
    const selectedArt = e.currentTarget.value;

    if (selectedArt === '') {
        e.currentTarget.classList.add('is-invalid');
    } else {
        e.currentTarget.classList.remove('is-invalid');
    }
}

// validating input fields and submission of form
function onValidateForm(e) {
    e.preventDefault();
    const currentTitle = e.currentTarget.elements['album-title'].value;
    const currentDescription =
        e.currentTarget.elements['album-description'].value;
    const currentArt = e.currentTarget.elements['album-art'].value;
    if (currentTitle === '') {
        albumTitle.classList.add('is-invalid');
    }

    if (currentDescription === '') {
        albumDescription.classList.add('is-invalid');
    }

    if (currentArt === '') {
        albumArt.classList.add('is-invalid');
    }

    if (currentTitle !== '' && currentDescription !== '' && currentArt !== '') {
        renderAlbum(e);
        document.getElementById('album-form').reset();
    }
}

// renders a card for the album containing album title, album description, and album art
function renderAlbum(event) {
    const inputTitle = event.currentTarget.elements['album-title'].value;
    const inputDescription =
        event.currentTarget.elements['album-description'].value;
    const inputArt = event.currentTarget.elements['album-art'].value;

    const template = `<div class="col">
    
    <div class="card shadow-sm">
        <img class="bd-placeholder-img card-img-top" src="img/${inputArt}" />
        <div class="card-body">
            <h5 class="card-title">${inputTitle}</h5>
            <p class="card-text">${inputDescription}</p>
        </div>
    </div>
    </div>`;
    document.querySelector('#all-albums-list').insertAdjacentHTML('afterbegin', template);
}
