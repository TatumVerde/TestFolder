const cat = {
	alias: 'Владос',
	age: 27,
	weight: 82,
	coatColor: 'рудий',
	eyeColor: 'зелений',
	satiety: 0,

	isSatisfied: function (food) {
		if (food == 'milk') {
			this.satiety = this.satiety + 15
		} else if (food == 'dry') {
			this.satiety = this.satiety + 25
		} else if (food == 'wet') {
			this.satiety = this.satiety + 35
		} else if (food == 'meat') {
			this.satiety = this.satiety + 45
		} else {
			console.log('Meeeeeeeeow!')
		}
	},

	toPlay: function (game) {
		switch (game) {
			case 'ball':
				this.satiety >= 40 ? this.satiety -= 40 : console.log('Meeeeeeeeow!')
				break;
			case 'mouse':
				this.satiety >= 30 ? this.satiety -= 30 : console.log('Meeeeeeeeow!')
				break;
			case 'pet':
				this.satiety >= 20 ? this.satiety -= 20 : console.log('Meeeeeeeeow!')
				break;
			default: console.log('Meeeeeeeeow!')
		}
	},

	toIntroduse: function () {
		let str = 'Мяу, мене звуть ' + this.alias +
			', мені ' + this.age +
			' років, я важу ' + this.weight +
			' кг, колір моєї шерсті ' + this.coatColor +
			', а колір очей ' + this.eyeColor

		if (this.satiety >= 80) {
			str += '. Я зараз досить ситий'
		} else if (this.satiety < 80) {
			str += '. Я зараз досить голодний'
		}
		console.log(str)
	}
}


for (let key in cat) {
	console.log(key + ' : ' + cat[key])
}