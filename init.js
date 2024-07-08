
window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnuameOutpt').innerText = 'Фамилия: ' + initPerson.surname;
    document.getElementById('genderOutput').innerText = 'Пол: ' + initPerson.gender;
    document.getElementById('birthYearOutput').innerText = 'Год рождения: ' + initPerson.year;
    document.getElementById('Profession').innerText = 'Профессия: ' + initPerson.profession;
    
};

