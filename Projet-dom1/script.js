// Sélectionner tous les éléments nécessaires
const cartItems = document.querySelectorAll('.cart-item');
const totalElement = document.getElementById('total');

// Fonction pour mettre à jour le prix total
function updateTotal() {
    let total = 0;
    cartItems.forEach(item => {
        const price = parseFloat(item.dataset.price);
        const quantity = parseInt(item.querySelector('.quantity').textContent);
        total += price * quantity;
    });
    totalElement.textContent = total.toFixed(2);
}

// Gérer les boutons "+" et "-"
cartItems.forEach(item => {
    const increaseBtn = item.querySelector('.increase-btn');
    const decreaseBtn = item.querySelector('.decrease-btn');
    const quantityElement = item.querySelector('.quantity');
    const deleteBtn = item.querySelector('.delete-btn');
    const likeBtn = item.querySelector('.like-btn');

    // Augmenter la quantité
    increaseBtn.addEventListener('click', () => {
        let quantity = parseInt(quantityElement.textContent);
        quantity++;
        quantityElement.textContent = quantity;
        updateTotal();
    });

    // Diminuer la quantité
    decreaseBtn.addEventListener('click', () => {
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 1) {
            quantity--;
            quantityElement.textContent = quantity;
            updateTotal();
        }
    });

    // Supprimer l'article
    deleteBtn.addEventListener('click', () => {
        item.remove();
        updateTotal();
    });

    // Aimer l'article
    likeBtn.addEventListener('click', () => {
        likeBtn.classList.toggle('liked');
    });
});

// Mettre à jour le total au chargement de la page
updateTotal();