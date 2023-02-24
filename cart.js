///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((a, c) => {
    return a + c.price
}, cart[0].price)

console.log(summedPrice)
//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
function calcFinalPrice(cartTotal, couponValue, tax){
    let newCartTotal = cartTotal + (cartTotal * tax)
    return newCartTotal - couponValue
}
 
console.log(calcFinalPrice(30, 10, 0.05))

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
// My customer object will have the following properties. "Full name" This will be the name that correlates with the order, the data type will be a string. "Email address" So the customer can be sent a reciept of their order, this data type will be a string. "Phone number" So the resturaunt can call or text the customer to let them know their order is ready, this data type will be a number. "Credit card number" So the customer can put in their card information to pay for the order, this data type will be a number
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
let customer = {
    fullName: '',
    emailAddress: '',
    phoneNumber: 0,
    creditCardNumber: 0,
}

let exampleCustomer = {
    fullName: 'Daniel McDevitt',
    emailAddress: 'danielmcdevitt@gmail.com',
    phoneNumber: 8019995555,
    creditCardNumber: 1111222233334444,
}