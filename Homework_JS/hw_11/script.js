//#HmvAfRQM
//взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини.
//Відобразити всі поля кожної корзини.
// const cartsDiv = document.getElementById('carts');
// fetch('https://dummyjson.com/carts')
//     .then(value => value.json())
//     .then(cartsObject => {
//         const {carts} = cartsObject;
//         console.log(carts);
//
//         for (const cart of carts) {
//             const div = document.createElement('div');
//             div.classList.add('cart-container');
//             const divWithInfo = document.createElement('div');
//             divWithInfo.innerText = `
//                     "total": ${cart.total},
//                     "discountedTotal": ${cart.discountedTotal},
//                     "userId": ${cart.userId},
//                     "totalProducts": ${cart.totalProducts},
//                     "totalQuantity": ${cart.totalQuantity}
//                 `
//
//             const ol = document.createElement('ol');
//             for (const product of cart.products) {
//                 const li = document.createElement('li');
//                 const info = document.createElement('p');
//                 info.innerText = `
//                       "id": ${product.id},
//                       "title": ${product.title},
//                       "price": ${product.price},
//                       "quantity": ${product.quantity},
//                       "total": ${product.total},
//                       "discountPercentage": ${product.discountPercentage},
//                       "discountedTotal": ${product.discountedTotal},
//                     `
//                 const img = document.createElement('img');
//                 img.src = product.thumbnail;
//                 li.append(img, info);
//                 ol.appendChild(li);
//             }
//             div.append(divWithInfo, ol);
//             cartsDiv.appendChild(div);
//         }
//     });

//#whXxOBlYS0H
//взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти.
//Інгредієнти повинні бути списком під час відображення.
const recipesDiv = document.getElementById('recipes');
fetch('https://dummyjson.com/recipes?limit=0')
    .then(res => res.json())
    .then(data => {
        const { recipes } = data;
        recipesDiv.innerHTML = '';
        for (const recipe of recipes) {
            const card = document.createElement('div');
            card.classList.add('recipe-card');
            const ingredientsHTML = recipe.ingredients
                .map(ing => `<li>${ing}</li>`)
                .join('');
            const instructionsHTML = recipe.instructions
                .map((step, i) => `<p>${i + 1}. ${step}</p>`)
                .join('');
            card.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name}" loading="lazy" />
            <div>
              <div>${recipe.name}</div>
              <div>
                <span>${recipe.prepTimeMinutes + recipe.cookTimeMinutes} хв</span>
                <span>Порцій: ${recipe.servings}</span>
                <span>${recipe.difficulty}</span>
                <span>${recipe.cuisine}</span>
                <span>${recipe.rating} (${recipe.reviewCount})</span>
                <span>${recipe.caloriesPerServing} ккал</span>
              </div>

              <div>Інгредієнти</div>
              <ul>${ingredientsHTML}</ul>

              <div>Приготування</div>
              <div>${instructionsHTML}</div>
            </div>
          `;
            recipesDiv.appendChild(card);
        }
    });