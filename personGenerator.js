const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {   
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,

    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей",
            "id_11": "Павел"
        }
    }`,


    FemalefirstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Ангелина",
            "id_2": "Анна",
            "id_3": "Алена",
            "id_4": "Амина",
            "id_5": "Полина",
            "id_6": "Диана",
            "id_7": "Светлана",
            "id_8": "Татьяна",
            "id_9": "Антонина",
            "id_10": "Алина"
        }
    }`,

    professionFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Парикмахер",
            "id_2": "Медсестра",
            "id_3": "Воспитатель",
            "id_4": "Консьерж",
            "id_5": "Уборщица",
            "id_6": "Стилист",
            "id_7": "Домохозяйка",
            "id_8": "Писательница",
            "id_9": "Программистка",
            "id_10": "Массажистка"
        }
    }`,

    professionMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Плотник",
            "id_2": "Фрезеровщик",
            "id_3": "Токарь",
            "id_4": "Юрист",
            "id_5": "Инженер",
            "id_6": "Строитель",
            "id_7": "Таксист",
            "id_8": "Разработчик игр",
            "id_9": "Дальнобойщик",
            "id_10": "Моряк"
        }
    }`,

    months: [
        "Января",
        "Февраля",
        "Марта",
        "Апреля",
        "Мая",
        "Июня",
        "Июля",
        "Августа",
        "Сентября",
        "Октября",
        "Ноября",
        "Декаря"
    ],

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),



    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;
        return obj.list[prop];
    },



    randomFirstName: function () {
        let resultGender = this.person.gender;
         if(resultGender === 'Мужчина'){
          result = this.randomValue(this.firstNameMaleJson);
          }else{
        result = this.randomValue(this.FemalefirstNameMaleJson)
         } 

        return result;

    },

    randomSurname: function () {
        let personFirstName = this.person.firstName
        if (this.person.gender === "Мужчина") {
            result = this.randomValue(this.surnameJson)
        } else {
            result = `${this.randomValue(this.surnameJson)}а`
        }

        return result;

    },

    randomGender: function () {
        let gender = Math.round(Math.random() * 1)
        return gender === 0 ? this.GENDER_MALE : this.GENDER_FEMALE;
    },

    randomYear: function () {
        return this.randomIntNumber(1985, 2010);
    },

    randomProfession: function () {
        if (this.person.gender === this.GENDER_MALE) {
            result = this.randomValue(this.professionMaleJson)
        } else {
            result = this.randomValue(this.professionFemaleJson)
        }
        return result
    },

    randomPatronymicName: function () {
        let name = this.randomValue(this.firstNameMaleJson);
        if (this.person.gender == "Мужчина") {
            if (name.slice(-1) == "й") { name = name.replace("й", "е") }
            if (name.slice(-1) == "р") { name = name.replace("р", "ро") }
            if (name.slice(-1) == "м") { name = name.replace("м", "мо") }
            if (name.slice(-1) == "н") { name = name.replace("н", "но") }
            if (name.slice(-1) == "а") { name = name.replace("а", "о") }
            if (name.slice(-3) == "иил") { name = name.replace("иил", "ило") }
            if (name.slice(-3) == "аил") { name = name.replace("аил", "айло") }
            result = name + 'вич';
        } else {
            if (name.slice(-1) == "й") { name = name.replace("й", "е") }
            if (name.slice(-1) == "а") { name = name.replace("а", "о") }
            if (name.slice(-1) == "р") { name = name.replace("р", "ро") }
            if (name.slice(-1) == "м") { name = name.replace("м", "мо") }
            if (name.slice(-2) == "ан") {name = name.replace("ан", "ано")}
            if (name.slice(-3) == "иил") { name = name.replace("иил", "ило") }
            if (name.slice(-1) == "г") { name = name.replace("г", "го") }
            if (name.slice(-3) == "аил") { name = name.replace("аил", "айло") }
            result = name + 'вна';
        }
        return result
    },

    randomData: function () {
        let monthInt = this.randomIntNumber(0, 11);
        
        let month = this.months[monthInt];
        if ((month === "Апреля") || (month === "Июня") || (month === "Сентября") || (month === "Ноября")) {
            result = this.randomIntNumber(1, 30) + " " + month;
        } else {
            if (month === "Февраля") {
                result = this.randomIntNumber(1, 28) + " " + month;
            } else {
                result = this.randomIntNumber(1, 31) + " " + month;
            }
        }
        return result;
        
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.year = this.randomYear();
        this.person.profession = this.randomProfession();
        this.person.patronomic = this.randomPatronymicName();
        this.person.data = this.randomData();
        console.log(this.person.randomData)

        return this.person;
    }

}

