var initState = [
    {
        id: 1,
        name: 'iphone',
        price: 400,
        status: true
    },
    {
        id: 2,
        name: 'iphone2',
        price: 400,
        status: true
    },
    {
        id: 3,
        name: 'iphone3',
        price: 4600,
        status: true
    }
]

const products = (state = initState, action)=>{
    switch(action.type){
        default: return [...state]
    }
}


export default products;