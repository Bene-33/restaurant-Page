export const loadMenu = () => {
    const content = document.getElementById('content');
    content.innerHTML =`
        <div>
            <h1>Menu</h1>
        </div>
        <div class = 'starters'> 
            <h2>Starters</h2>
            <div class='menuItem'>
                <h3>Caprese Salad</h3>
                <p>Fresh mozzarella, ripe tomatoes, and basil, drizzled with olive oil and balsamic glaze</p>
                <span class='price'>$10.50</span>
            </div>
            <div class='menuItem'>
                <h3>Shrimp Cocktail</h3>
                <p>Cooked jumbo shrimp, served with a classic, lightly spicy cocktail sauce and fresh lemon.</p>
                <span class='price'>$14.90</span>
            </div>

        </div>
        <div class = 'mainDishes'> 
            <h2>Main Dishes</h2>
            <div class='menuItem'>
                <h3>Beef Fillet with Truffle Jus</h3>
                <p>Tender beef fillet, cooked medium, accompanied by creamy potato gratin and green beans.</p>
                <span class='price'>$34.50</span>
            </div>
            <div class='menuItem'>
                <h3>Linguine Vongole</h3>
                <p>Linguine pasta in a white wine and garlic sauce with fresh clams and parsley.</p>
                <span class='price'>$20.80</span>
            </div>
        </div>
        <div class = 'desserts'> 
            <h2>Desserts</h2>
            <div class='menuItem'>
                <h3>Chocolate Lava Cake</h3>
                <p>Warm, molten chocolate cake, served with a scoop of vanilla ice cream.</p>
                <span class='price'>8.50</span>
            </div>
            <div class='menuItem'>
                <h3>Panna Cotta with Berry Sauce</h3>
                <p>Creamy Italian dessert with vanilla and a homemade forest berry sauce.</p>
                <span class='price'>$7.90</span>
            </div>
        </div>
        <div class = 'drinks'> 
            <h2>Drinks</h2>
            <div class='menuItem'>
                <h3>House Wine (Red/White)</h3>
                <p>Open quality wine from the region (0.2L).</p>
                <span class='price'>5.50</span>
            </div>
            <div class='menuItem'>
                <h3>Water (Still/Sparkling)</h3>
                <p>Bottled water (0.75L).</p>
                <span class='price'>$4.50</span>
            </div>

        </div>
        `;    
};
