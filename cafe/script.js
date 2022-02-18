$(document).ready(function(){


    $('#submitBtn').click(function(){
        let name = $("input[name=full_name").val();
        let coffeeType = $("input[name=coffee_type]:checked").val();
        
        
        
        
        let extras = [];
        $("input[name=extras]:checked").each(function(){
            extras.push($(this).val());
        });
            

        console.log(name, coffeeType, extras);


        let total = 0;

        if(coffeeType === 'turkish'){
            total += 3;

        }

        else if(coffeeType === 'american') {
            total += 5;

        }

        else if(coffeeType === 'iced_latte') {
            total += 7;
            
        }


        for(let i = 0; i < extras.length; i++) {
            let extra = extras[i];

            if(extra === 'extra_coffee'){
                total += 1.5;
            }
            else if(extra === 'whipped_cream'){
                total += 2;
            }
            else if(extra === 'extra_caramel'){
                total += 3;
            }
        }


        let report = `Name: ${name}, Total: ${total}`;
        console.log(report);
    });

});