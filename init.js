window.onload = function () {
    let firstName = document.getElementById('firstNameOutput');


    document.querySelector(".generate").addEventListener("click", function () {
        const initPerson = personGenerator.getPerson();
        firstName.innerText = initPerson.firstName;
        document.getElementById('surnuameOutpt').innerText = 'Фамилия: ' + initPerson.surname;
        document.getElementById('genderOutput').innerText = 'Пол: ' + initPerson.gender;
        document.getElementById('birthYearOutput').innerText = 'Дата рождения: ' + initPerson.data +  " " + initPerson.year;
        document.getElementById('Profession').innerText = 'Профессия: ' + initPerson.profession;
        document.getElementById('PatronomicNameOutput').innerText = initPerson.patronomic;
        
    });

    document.querySelector(".clear").addEventListener("click", function () {
        firstName.innerText = "";
        document.getElementById('surnuameOutpt').innerText = "Фамилия: ";
        document.getElementById('genderOutput').innerText = 'Пол: ';
        document.getElementById('birthYearOutput').innerText = 'Год рождения: ';
        document.getElementById('Profession').innerText = 'Профессия: ';
        document.getElementById('PatronomicNameOutput').innerText = "";
    });
};