import { HTTP_POST } from "./axios.config"


export const removeFromCart = async (itemid) => {
    const user = JSON.parse(localStorage.getItem('user'));
    // console.log(user.id);
    let response = await HTTP_POST('removeitem',
        {
            _id: user.id,
            itemid: itemid
        }
    );

    console.log(response);

    return response;
}