// references for album title
// reference for album description
// referenece for album art
const albumTitle = document.getElementById('album-title');
const albumDescription = document.getElementById('album-description');
const albumArt = document.getElementById('album-art');

const template = `<div class="col">
<div class="card shadow-sm">
    <img class="bd-placeholder-img card-img-top" src="ALBUM IMAGE SELECTION HERE" />
    <div class="card-body">
        <h5 class="card-title">${albumTitle}</h5>
        <p class="card-text">${albumDescription}</p>
    </div>
</div>
</div>`

console.log(albumTitle);
console.log(albumDescription);
console.log(albumArt);

// if element fails, then add "is-invalid" class, once fixed, remove "is-invalid" class
// validate album title
// validate album description
// validate album art


// on input event for ALBUM title, title invalid if name >15 characters
albumTitle.addEventListener('input', onInputTitle);

function onInputTitle(e){
    const inputTitle = e.currentTarget.value;
    
    if(inputTitle.length > 0){
       e.currentTarget.classList.remove('is-invalid');
    }

    if(inputTitle.length === 20){
        e.currentTarget.classList.add('is-valid');
    }
}

// on input event for ALBUM NAME, name invalid if > 30 characters
albumDescription.addEventListener('input', onInputDescription);

function onInputDescription(e){
    const inputDescription = e.currentTarget.value;
    
    if(inputDescription.length > 0){
       e.currentTarget.classList.remove('is-invalid');
    }

    if(inputTitle.length === 40){
        e.currentTarget.classList.add('is-valid');
    }
}


// on CHANGE event for art, invalid if the SELECT ELEMENT OPTION VALUE returns the text "Select album art"
// submit event: validate empty TITLE, validate empty ALBUM DESCRIPTION
document.querySelector('#album-form').addEventListener('submit', onValidateForm);

function onValidateForm(e){
    e.preventDefault();
    isEmpty(e.currentTarget.elements['album-title'].value)
}

// is empty or not? 
function isEmpty(inputText){
    const validate = inputText.trim();
    console.log(validate);
    if(validate === ''){
        console.log('This is an empty string');
    }
}

// once values are validated, then save button works

// on save, a card is created: 


// reset 
// album title has to have class: is-invalid
// description has to have class: is-invalid