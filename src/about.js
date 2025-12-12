export const loadAbout = () => {
    const content = document.getElementById('content');

    const contact = document.createElement('div');
    contact.classList.add('contact');

    contact.innerHTML =`
        <h1>About Us</h1>
        <div class = 'address'> 
            <h2>Address</h2>
            <p>33 Canada Ave, Vancouver </p>
        </div>
        <div class = 'telefone'> 
            <h2>Telefone</h2>
            <p>+1 033 033 033</p>
        </div>
        <div class = 'email'> 
            <h2>Email</h2>
            <p>FoodaRama@33.com</p>
        </div>
        `;

    content.appendChild(contact);       
};
