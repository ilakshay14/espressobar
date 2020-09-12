export const resolveCart = (cart, menu) => {
    let cartFromHelper = [];
    let amount = 0;
    cart?.map(cartItem => {
        menu.find( item => {
            if(item._id === cartItem.itemid){
                cartFromHelper.push(item);
                amount = amount + parseInt(item.price);
            }
        })
    });
    return {cartFromHelper, amount};
}

//[{"_id":"5f41a4d6e2597313b4f1f46f","name":"Cold brew","price":"250",
//"image":"espresso-bar/cold/coldbrew.webp","item":"beverage","type":"cold"}]