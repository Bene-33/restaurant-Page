export const loadAbout = () => {
    const content = document.getElementById('content');

    const contact = document.createElement('div');
    contact.classList.add('contact');
    
    const address = document.createElement('div');
    address.classList.add('address');
    address.innerHTML =`
            <h2>Address</21>
            <p>33 Canada Ave, Vancouver </p>
    `;
    
    const telefone = document.createElement('div');
    telefone.classList.add('telefone');
    telefone.innerHTML =`
            <h2>Telefone</21>
            <p>+1 033 033 033</p>
    `;

    const email = document.createElement('div');
    email.classList.add('email');
    email.innerHTML =`
            <h2>Email</21>
            <p>FoodaRama@33.com</p>
    `;
    


    contact.appendChild(address);
    contact.appendChild(telefone);
    contact.appendChild(email);
    content.appendChild(contact);       
};