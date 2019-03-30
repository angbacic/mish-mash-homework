class ShoppingCart{
    constructor(itemName, quantity,pricePerUnit){
        this.name=itemName;
        this.quantity=quantity;
        this.price=pricePerUnit;
        this.items= []
    }
    getItems(){
        return this.items
    }
    addItem(itemName, quantity, price){
   
       this.items.push({name : itemName,quantity: quantity,pricePerUnit: price})  
    }
    clear(){
        return this.items=[]
    }
    total(){
        let eachItemPrice = []
        eachItemPrice=this.items.map(user=>{
            return user.quantity*user.pricePerUnit
            })
        
        eachItemPrice = eachItemPrice.reduce((prevTotal,currTotal)=>{
            return prevTotal+currTotal
        },0)
        return eachItemPrice
    }
}


const cart= new ShoppingCart()
// cart.addItem("bananas", 1, 5)
// cart.addItem("apples", 2, 2)

// console.log(cart.getItems())


module.exports=ShoppingCart