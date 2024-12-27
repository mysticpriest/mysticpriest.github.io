// Dishes Data
const dishes = [
    'Grilled Salmon',
    'Steak Diane',
    'Vegetarian Lasagna',
    'Chicken Parmesan',
    'Beef Stroganoff',
    'Lobster Bisque',
    'Seafood Paella',
    'Margarita Pizza',
    'Caesar Salad',
    'BBQ Ribs',
    'Spaghetti Carbonara',
    'Pad Thai',
    'Teriyaki Chicken',
    'Sushi Platter',
    'Fish Tacos',
    'Pumpkin Soup',
    'Cheeseburger Deluxe',
    'French Onion Soup',
    'Eggplant Parmesan',
    'Crème Brûlée',
];

// Populate Menu Dynamically
const menuContainer = document.querySelector('.menu-container');
dishes.forEach(dish => {
    const div = document.createElement('div');
    div.className = 'menu-item';
    div.textContent = dish;
    menuContainer.appendChild(div);
});

// Translation Data (English to Macedonian)
const translations = {
    "Welcome to Aurum Kitchen & Bar": "Добредојдовте во Aurum Kitchen & Bar",
    "A place where every bite tells a story.": "Место каде секој залак раскажува приказна.",
    "Discover Our Menu": "Откријте го нашето мени",
    "Our Signature Dishes": "Нашите потписни јадења",
    "About Us": "За нас",
    "Visit Us": "Посетете не",
    "Located in the heart of the city, we are ready to serve you with a welcoming ambiance and world-class cuisine.": "Лоцирани во срцето на градот, подготвени сме да ве послужиме со пријатна атмосфера и светска кујна.",
    "Aurum Kitchen & Bar": "Aurum Kitchen & Bar",
    "Menu": "Мени",
    "Home": "Дома",
    "Contact": "Контакт",
    "Send": "Испрати",
    "Contact Us": "Контактирајте не",
    "Our Signature Dishes": "Наши потписни јадења"
};

// Function to Translate Text
function translateToMacedonian() {
    document.querySelector('.hero h1').textContent = translations["Welcome to Aurum Kitchen & Bar"];
    document.querySelector('.hero p').textContent = translations["A place where every bite tells a story."];
    document.querySelector('.btn').textContent = translations["Discover Our Menu"];
    
    document.querySelector('.menu h2').textContent = translations["Our Signature Dishes"];
    
    document.querySelector('.about h2').textContent = translations["About Us"];
    document.querySelector('.about h3').textContent = translations["Visit Us"];
    document.querySelector('.about p').textContent = translations["Located in the heart of the city, we are ready to serve you with a welcoming ambiance and world-class cuisine."];
    
    document.querySelector('footer p').textContent = translations["Aurum Kitchen & Bar"];
    
    // Dynamically change the menu items
    const menuItems = document.querySelectorAll('.menu-item');
    const translatedDishes = [
        "Грилован Лосос",
        "Стејк Дијан",
        "Вегетаријанска Лазања",
        "Пилешки Пармеџан",
        "Говедски Строганов",
        "Лобстер Биске",
        "Морска Палаја",
        "Маргарита Пица",
        "Цезар Салата",
        "Барбекју Рибс",
        "Спагети Карбонара",
        "Пад Тај",
        "Теријаки Пилешко",
        "Суши Плато",
        "Риба Такос",
        "Тиквена Супа",
        "Чизбургер Делукс",
        "Француска Кромпир Супа",
        "Јаволска Пармезан",
        "Крем Бруле"
    ];
    
    menuItems.forEach((item, index) => {
        item.textContent = translatedDishes[index];
    });
}

// Add Event Listener to the Translate Button
document.getElementById('translate-btn').addEventListener('click', translateToMacedonian);
