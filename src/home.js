export const loadHome = () => {
    const content = document.getElementById('content');
    content.innerHTML =`
        <div>
            <h1>FoodaRama</h1>
        </div>
        <div>
            <h2>Opening Hours</h2>
            <p>Monday-Friday: 12pm - 14.30pm & 18pm - 11pm</p>
            <p>Saturday-Sunday: 4pm - 11pm</p>
        </div>
    `;
};