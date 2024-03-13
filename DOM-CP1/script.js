document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll('#item');
    const totalElement = document.getElementById('total');
    let total = 0; //initial total price

    items.forEach(item => {
        const plusBtn = item.querySelector('#plus-btn');
        const minusBtn = item.querySelector('#minus-btn');
        const deleteBtn = item.querySelector('#delete-btn');
        const likeBtn = item.querySelector('#like-btn');
        const quantitySpan = item.querySelector('#quantity');
        const priceSpan = item.querySelector('#price');

        plusBtn.addEventListener('click', function() {
            let quantity = parseInt(quantitySpan.textContent);
            quantity++;
            quantitySpan.textContent = quantity;
            updateTotal();
        });

        minusBtn.addEventListener('click', function() {
            let quantity = parseInt(quantitySpan.textContent);
            if(quantity > 0) {
                quantity--;
                quantitySpan.textContent = quantity;
                updateTotal();
                }
        });

        deleteBtn.addEventListener('click', function() {
            const price = parseInt(priceSpan.textContent.slice(1));
            total -= parseInt(quantitySpan.textContent) * price;
            item.remove();
            updateTotal();
            console.log(total)
        });

        likeBtn.addEventListener('click', function() {
            likeBtn.classList.toggle('liked')
        });
    });

    function updateTotal() {
        let newTotal = 0;
        items.forEach(item => {
            const quantity = parseInt(item.querySelector('#quantity').textContent);
            const price = parseInt(item.querySelector('#price').textContent.slice(1));
            newTotal += quantity * price;
        });
        total = newTotal;
        totalElement.textContent = `Total: $${total}`;
    }
});

console.log(totalElement);