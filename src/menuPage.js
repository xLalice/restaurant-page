const createMenuPage = (function() {
    const content = document.getElementById("content")

    function createDish(name, description) {
        const dish = document.createElement("div");
        dish.classList.add("dish");

        const dishName = document.createElement("h1");
        dishName.textContent = name;
        dishName.classList.add("dish-name")

        const dishDescription = document.createElement("p");
        dishDescription.textContent = description;
        dishDescription.classList.add("dish-description")

        dish.appendChild(dishName);
        dish.appendChild(dishDescription);

        return dish;
    }

    function createImage(img1, img2){
        const dishImages = document.createElement("div")
        dishImages.classList.add("dishes")
        const dishImage1 = document.createElement("img")
        dishImage1.src = `../assets/${img1}`
        const dishImage2 = document.createElement("img")
        dishImage2.src = `../assets/${img2}`

        dishImages.appendChild(dishImage1)
        dishImages.appendChild(dishImage2)

        return dishImages
    }


    function addmenu(){
        const menu = document.createElement("div");
        menu.id = "menu"

        const menuHeader = document.createElement("div");
        menuHeader.classList.add("menu-header")
        
        const titleLogo = document.createElement("h1")
        titleLogo.classList.add("title-logo")
        titleLogo.textContent = "Alchemy Lab"

        const menuTitle = document.createElement("h1")
        menuTitle.classList.add("menu-title")
        menuTitle.textContent = "Menu"

        const menuDescription = document.createElement("p")
        menuDescription.classList.add("menu-description")
        menuDescription.textContent = "Indulge in a culinary journey like no other with our delectable menu. From mouthwatering appetizers to savory entrees and delightful desserts, our menu is a symphony of flavors that will tantalize your taste buds."

        const dishImages1 = createImage("dish1.jpg", "dish2.jpg")
        const dishImages2 = createImage("dish3.jpg", "dish4.jpg")

        const menuDishes = document.createElement("div");
        menuDishes.classList.add("menu-dishes")


        const dish1 = createDish("Bruschetta", "Toasted baguette slices topped with diced tomatoes, fresh basil, garlic, and balsamic glaze." )
        const dish2 = createDish("Grilled Salmon", "Grilled salmon fillet served with lemon butter sauce and steamed asparagus.")
        const dish3 = createDish("Caesar Salad", "Crisp romaine lettuce, croutons, and Parmesan cheese tossed in Caesar dressing.")
        const dish4 = createDish("Vegetable Stir-Fry", "Assorted fresh vegetables stir-fried in a savory ginger-soy sauce, served with steamed rice.") 

        menuHeader.appendChild(titleLogo);
        menuHeader.appendChild(menuTitle)
        menuHeader.appendChild(menuDescription)
        menuDishes.appendChild(dish1)
        menuDishes.appendChild(dish2)
        menuDishes.appendChild(dish3)
        menuDishes.appendChild(dish4)
        menu.appendChild(menuHeader)
        menu.appendChild(dishImages1)
        menu.appendChild(menuDishes)
       menu.appendChild(dishImages2)

        content.appendChild(menu)
    }

    return {
        addmenu
    }
})()

export {createMenuPage}