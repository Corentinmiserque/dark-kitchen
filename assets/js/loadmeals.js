const cardsContainer = document.querySelector("#meal-cards");
const filtersContainer = document.querySelector("#filters")

getMeals(cardsContainer, filtersContainer).catch((error) => {
    console.log(error)
});


async function getMeals(cardsContainer, filtersContainer) {
    const response = await fetch("./assets/js/meals.json");
    const mealsJson = await response.json();
    
    mealsJson.categories.forEach((category, index) => {
        filtersContainer.appendChild(createFilter(category, index));
    });
    mealsJson.meals.forEach(meal => {
        let card = createCard(meal);
        cardsContainer.innerHTML += card;
    });

    initUnderline();
}

const createCard = (meal) => {
    const card = `
        <article class="meal-card" data-category="${meal.category}">
            <header class="meal-card__header">
                <img src=${meal.image} alt=${meal.name}>
            </header>
            <div class="meal-card__body">
                <h3 class="meal-card__heading">
                    ${meal.name}
                </h3>
                <p class="meal-card__description">
                    ${meal.description}
                </p>
            </div>
            <div class="meal-card__footer">
                <p class="meal-card__price">${new Intl.NumberFormat("fr-BE", { style: "currency", currency: "EUR"}).format(meal.price)}</p>
                <ul class="meal-card__cart-info">
                    <li class="meal-card__cart-action-remove">
                        <button id="remove-from-cart-btn" class="btn">-</button>
                    </li>
                    <li class="meal-card__cart-action-add">
                        <button id="add-to-cart-btn" class="btn">+</button>
                    </li>
                    <li class="meals__cart-info__quantity">
                        0
                    </li>
                </ul>
            </div>
        </article>
    `;
    return card;
}

const createFilter = (filter, index) => {
    const filterBtn = document.createElement("button");
    const listItem = document.createElement("li");
    filterBtn.classList.add("meals__filter-btn", "btn");
    filterBtn.appendChild(document.createTextNode(filter));
    filterBtn.addEventListener("click", filterMeals)
    
    listItem.classList.add("meals__categories__category");
    listItem.appendChild(filterBtn);
    return listItem;
}

const filterMeals = (event) => {
    let meals = document.querySelectorAll(".meal-card");
    let filterName = event.target.textContent;

    meals.forEach((meal) => {
        let mealCategory = meal.dataset.category;
        if (!mealCategory.includes(filterName) && filterName != "All"){
            meal.classList.add("hide");
        } else if (meal.classList.contains("hide") || filterName == "All"){
            meal.classList.remove("hide");
        }
    })
}