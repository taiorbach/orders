
        let firstName = document.getElementById('firstName') 
        let lastName =  document.getElementById('lastName') 
        let cities =  document.getElementById('cities')
        let street =  document.getElementById('street')
        let zipcode =  document.getElementById('zipcode')
        let items =  document.getElementById('items')
        let amountOfItems =  document.getElementById('amountOfItems')
        let priceOfitem =  document.getElementById('priceOfItem')
        

            function item_price(){
                if(items.value === "PS5"){
                priceOfItem.value = 1000;
                }
                else if(items.value === "PC"){
                    priceOfItem.value = 2000
                }
                else if(items === "Xbox"){
                    document.getElementById('priceOfItem').value = 800
                }
                
            
            }



        function calc(){
            totalPrice.value = priceOfItem.value * amountOfItems.value
        }

         
      
    function order(){
    const details = {
        firstName : firstName.value ,
         lastName : lastName.value ,
         cities :  cities.value ,
        street : street.value ,
         zipcode :  zipcode.value ,
         items : items.value ,
         amountOfItems :  amountOfItems.value ,
         priceOfitem : priceOfItem.value ,
         totalPrice : totalPrice.value , 
    }
    console.log(details)
}
    



    



