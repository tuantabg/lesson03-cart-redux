// import * as action from "./../actions/index";

var initalState = [
    {
        id : 1,
        name : "Iphone 7",
        image : "https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72",
        description : "Sản phẩm của Apple",
        price : 7000000,
        inventory : 10,
        rating : 4
    },
    {
        id : 2,
        name : "samsung 7",
        image : "https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72",
        description : "Sản phẩm của samsung",
        price : 5000000,
        inventory : 17,
        rating : 3
    }
]

const products = (state = initalState, action) => {
    switch (action.type) {

        default : return [...state];
    }
}

export default products;