function validateForm() {

  var name = document.getElementById('nameInput').value,
      species = document.getElementById('speciesInput').value,
      age = document.getElementById('ageInput').value;

  if (!name.length || !species.length || !age.length) {
    alert('Please fill in all input fields in the form!');
  }

  if(isNaN(parseInt(age)) || typeof parseInt(age) !== 'number') {
    console.log(typeof age);
    alert('Please provide a number for age');
  }

  return false;
}
