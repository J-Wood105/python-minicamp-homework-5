function changeBG() {

  var bg = document.body,
      newBG = document.getElementById('newBG').value;

  if(newBG == "troll") {
    bg.style.backgroundImage = 'url("https://media.giphy.com/media/edzfEQaW6sckU/giphy.gif")';
  }

  bg.style.backgroundColor = newBG;

  console.log(newBG);

}

function hideAll() {
  document.body.style.display = 'none';
}


function validateForm() {

  var name = document.getElementById('nameInput').value,
      species = document.getElementById('speciesInput').value,
      age = document.getElementById('ageInput').value;

  if (!name.length || !species.length || !age.length) {
    alert('Please fill in all input fields in the form!');
    return false;
  }

  if(isNaN(parseInt(age)) || typeof parseInt(age) !== 'number') {
    console.log(typeof age);
    alert('Please provide a number for age');
    return false;
  }

  return true;
}
