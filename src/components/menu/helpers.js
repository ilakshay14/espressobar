const extractMenuItems = (type, menu) => {
    return menu.filter(item => item.type === type);
};

export default extractMenuItems;