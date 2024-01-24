let storeProducts = '';
let storeProducts2 = '';

    BestSellerArray.forEach( product => {
        starRatingIcon(product);

        storeProducts += `
        <div class="product">
            <img class="product-img" src="${product.img}" alt="skin1004 product image">
            <div class="description">
                <p>${product.productName}</p>
                <div class="rating">
                    ${product.ratingStar}
                    <p>${product.rating} <span>(${product.ratingAmount})</span></p>
                </div>
                <p>${product.price}</p>
            </div>
        </div>`;
    });

    newArrivalArray.forEach( product => {
        starRatingIcon(product);

        storeProducts2 += `
        <div class="product">
            <img class="product-img" src="${product.img}" alt="skin1004 product image">
            <div class="description">
                <p>${product.productName}</p>
                <div class="rating js-rating">
                    ${product.ratingStar}
                    <p>${product.rating} <span>(${product.ratingAmount})</span></p>
                </div>
                <p>${product.price} <del>${product.deletePrice}</del></p>
            </div>
        </div>`;
    });

    newArrival.innerHTML = storeProducts2;
    bestSeller.innerHTML = storeProducts;
    recommendProduct.innerHTML = storeProducts;

function starRatingIcon(product){
    if(product.rating < 1){
        product.ratingStar = '';
    }
    else if(product.rating == 1){
        product.ratingStar = `<i class="fa-solid fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        `;
    }
    else if(product.rating < 2 && product.rating > 1){
        product.ratingStar = `<i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star-half-stroke"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        `;
    }
    else if(product.rating == 2){
        product.ratingStar = `<i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        `;
    }
    else if(product.rating < 3 && product.rating > 2){
        product.ratingStar = `<i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star-half-stroke"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        `;
    }
    else if(product.rating == 3){
        product.ratingStar = `<i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        `;
    }
    else if(product.rating < 4 && product.rating > 3){
        product.ratingStar = `<i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star-half-stroke"></i>
        <i class="fa-regular fa-star"></i>
        `;
    }
    else if(product.rating == 4){
        product.ratingStar = `<i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-regular fa-star"></i>
        `;
    }
    else if(product.rating < 5 && product.rating > 4){
        product.ratingStar = `<i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star-half-stroke"></i>`;
    }
    else if(product.rating == 5){
        product.ratingStar = `<i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        `;
    }
}