// Профиль покупателя
let userParams = {
    height: 0,
    weight: 0,
    footSize: 0,
    age: 0,
    gender: "male",
};

// Функция сохранения профиля в localStorage
function saveProfile() {
    userParams.height = document.getElementById("height").value;
    userParams.weight = document.getElementById("weight").value;
    userParams.footSize = document.getElementById("footSize").value;
    userParams.age = document.getElementById("age").value;
    userParams.gender = document.getElementById("gender").value;

    localStorage.setItem("userParams", JSON.stringify(userParams));
}

// Функция загрузки профиля из localStorage
function loadProfile() {
    const storedParams = localStorage.getItem("userParams");
    if (storedParams) {
        userParams = JSON.parse(storedParams);
        // Заполним форму значениями из localStorage
        document.getElementById("height").value = userParams.height;
        document.getElementById("weight").value = userParams.weight;
        document.getElementById("footSize").value = userParams.footSize;
        document.getElementById("age").value = userParams.age;
        document.getElementById("gender").value = userParams.gender;
    }
}

// Массив товаров
const products = [
    { name: "Трусы Женские 'Бабочка'", gender: "female", index: 1 },
    { name: "Трусы Женские 'Маргарита'", gender: "female", index: 2 },
    { name: "Трусы Женские 'Судный День'", gender: "female", index: 3 },
    { name: "Трусы Мужские 'Семейные'", gender: "male", index: 4 },
    { name: "Трусы Мужские 'Уточки'", gender: "male", index: 5 },
    { name: "Трусы Мужские 'Патриот'", gender: "male", index: 6 },
    { name: "Трусы Мужские 'С Новым годом' Скидка 🔥", gender: "male", index: 7 },
    { name: "Трусы Женские 'С Новым годом' Скидка 🔥", gender: "female", index: 8 }
];

// Функция для создания товарных карточек
function createProductCards(products) {
    const grid = document.getElementById("productGrid");
    grid.innerHTML = "";

    products.forEach((product) => {
        const card = document.createElement("div");
        card.classList.add("product-card");

        const image = document.createElement("img");
        const imageName = `img/${product.index}`;
        image.src = `${imageName}.jpg`;
        image.alt = product.name;
        image.style.maxWidth = "100%";
        image.style.maxHeight = "100%";
        card.appendChild(image);

        card.innerHTML += `<h3>${product.name}</h3>`;

        grid.appendChild(card);
    });
}

// Функция для сортировки товаров 
function sortProducts() {
    const selectedGender = document.getElementById("gender").value;

    // Фильтруем товары по выбранному полу
    const filteredProducts = products.filter((product) => {
        return product.gender === selectedGender;
    });

    // Создаем карточки для отфильтрованных товаров
    createProductCards(filteredProducts);
}

// Загрузка профиля при загрузке страницы
loadProfile();

// Создание карточек товаров при загрузке страницы
createProductCards(products);
