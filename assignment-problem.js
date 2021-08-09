// Assignment-4


// problem-1 start from here

function seerToMon(seer){

    // extra part start
    // if the input perameter is not a number 
    if(typeof seer != 'number'){
        return 'please enter a valid number'
    }
    // if the input perameter is nagative then
    if(seer < 0){
        return 'please enter a positive value'
    }
    // extra part end

    var mon = seer / 40;
    return mon;
}
 
var weight = seerToMon(100);
console.log(weight);

// problem-1 end here


// problem-2 start from here

function totalSales(shirt, pant, shoes){
    //  extra part

    // if the value of shirt , pant and shoes are not a number then
    if(typeof shirt !='number' || typeof pant != 'number' || typeof shoes !='number' ){
        return 'please input Quantity in nmber'
    }

    // if the value of shirt, pant and shoes are not in possitive number
    if(shirt < 0 || pant < 0 || shoes < 0){
        return 'please input a possiive number  as quantity'
    }

    // extra part end here
    
    const perShirtPrice = 100;
    const perPantPrice  = 200;  
    const perShoesPrice = 500;

    const shirtPrice = shirt * perShirtPrice;
    const pantPrice  = pant  * perPantPrice;
    const shoesPrice = shoes * perShoesPrice;

    const totalPrice = shirtPrice + pantPrice + shoesPrice;
    return totalPrice;
}

const toDaySeles = totalSales(2, 2, 1);
console.log(toDaySeles);

// problem-2 end here


// problem-3 start from here

function deliveryCost(productQuantity){

    // extra part start
    // if the type of product Quantity is not a number then
    if(typeof productQuantity != 'number'){
        return 'please input the quantity in number'
    }
     
    // if the productQuantity is nagative number
    if(productQuantity < 0){
        return ' bhai please input vaild positive number , na hole ami kaz korbo na'
    }
    // extra part end  

   const first100ProductCharge = 100;
   const second200ProductCharge = 80;
   const third300MoreProductCharge = 50;
    if(productQuantity<=100){
        const deliveryCharge = productQuantity * first100ProductCharge;
        return deliveryCharge;
    }

    else if(productQuantity<=200){
        const firs100DeliveryCharge = 100 * first100ProductCharge;
        const second200Delivery = productQuantity - 100;
        const second200DeliveryCharge = second200Delivery * second200ProductCharge;
        const totalSecond200DeliveryCharge =firs100DeliveryCharge + second200DeliveryCharge
        return totalSecond200DeliveryCharge;
    }
    else{
        const firs100DeliveryCharge = 100 * first100ProductCharge;
        const second200DeliveryCharge = 100 * second200ProductCharge;
        const thirdDelivery = productQuantity - 200;
        const thirdDeliveryCharge = thirdDelivery * third300MoreProductCharge;
        const totalDeliveryCharge = firs100DeliveryCharge + second200DeliveryCharge +thirdDeliveryCharge;
        return totalDeliveryCharge;

    }
}

const totalDeliveryChargeHere = deliveryCost(201);
console.log(totalDeliveryChargeHere);
// problem-3 end here 

// problem-4 start from here

const friendNames = ['mou', 'jack', 'dip', 'faruk', 'sworgo','tamim','sworgo'];
function perfectFriend(friendNames){

        // extra part 

        // if the type of value is not String
        for(const element of friendNames){
            if(typeof element!= 'string'){
                return ' dur miya string value den'
            }
        }
        // if the array is empty pocket
        if(friendNames.length  == 0){
            return 'please kico value input koren bhai'
        }

        // extra part end


    let perfect = friendNames[0];
    for(const element of friendNames){
           if(element.length == 5){
               perfect = element;
               break;
           }
        
        }
    return perfect

    }
    

var bestFriend = perfectFriend(friendNames);
console.log(bestFriend);

// problem-4 from here

// thank you