class Food {
    constructor(){
        this.foodStock = 20
        this.lastFed
        this.image = loadImage("images/Milk.png");
    }
    getFoodStock(){
        database.ref("food").on("value", function(data){
            this.foodStock = data.val();
        });
    }
    updateFoodStock(s){
        database.ref('/').update({
            food: s
        })
    }
    deductFood(z){
        if(z<=0){
            z=0;
        } else {
            z = z-1;
        }
        database.ref('/').update({
            food:z
        })
    }

    display(){
        var x=80, y=100;

        imageMode(CENTER);

        if(this.foodStock!=0){
            for(var i=0;i<this.foodStock;i++){
                if(i%10===0){
                    x=580;
                    y=y+50;
                }
                image(this.image, x, y, 50, 50);
                x=x+30;
            }
        }
    }
} 