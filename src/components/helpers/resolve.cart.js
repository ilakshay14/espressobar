export const resolveCart = (cart, menu) => {

    let userCart = [];
    cart.map(cartItem => {
        menu.find( item => {
            if(item._id === cartItem.id){
                userCart.push(item);
            }
        })
    });

    return userCart;
}

//[{"_id":"5f41a4d6e2597313b4f1f46f","name":"Cold brew","price":"250",
//"image":"espresso-bar/cold/coldbrew.webp","item":"beverage","type":"cold"}]