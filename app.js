function Hamburger (size){
	this.size = size;
	this.price = 0;
	this. calories = 0;

	
	if (this.size === 'small'){
		this.price = 50;
		this.calories = 20;
	}else if(this.size === 'medium'){
		this.price = 75;
		this.calories = 30;
	}else if(this.size === 'big'){
		this.price = 100;
		this.calories = 40;
	}

	this.addModifier = function (additive){

		switch(additive){
			case 'cheese':
				this.price += 10;
				this.calories += 20;
				break;
			
			case 'salad':
				this.price += 20;
				this.calories += 5;
				break;
				
			case 'potato':
				this.price += 15;
				this.calories += 10;
				break;

			case 'species':
				this.price += 15;
				this.calories += 0;
				break;

			case 'mayo':
				this.price += 20;
				this.calories += 5;
				break;
		}
	}

	this.getPrice = function () {
		return this.price;
	}

	this.getCalories = function () {
		return this.calories;
	}

}

let hamburger = new Hamburger('medium');

hamburger.addModifier('mayo');
hamburger.addModifier('cheese');

console.log('Price with sauce: ' + hamburger.getPrice());
console.log('Calories with sauce: ' + hamburger.getCalories());
