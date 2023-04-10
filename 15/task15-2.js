class Cat {
    constructor(alias, age, weight, coatColor, eyeColor, satiety, gender) {
        this.alias = alias;
        this.age = age;
        this.weight = weight;
        this.coatColor = coatColor;
        this.eyeColor = eyeColor;
        this.satiety = satiety;
        this.gender = gender;
    }

    isSatisfied(food) {
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
	}

    toPlay(game) {
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
	}

    toIntroduse() {
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

    love(cat) {
        if (this.gender === cat.gender) {
            console.log("Meooooooow!!!")
        } else {
            let kittens = []
            let amount = Math.floor(Math.random() * 5) + 2
            for (let i = 0; i < amount; i++) {
                let kitten = {}
                kitten.alias = 'кошеня' + (i + 1)
                kitten.age = 0
                kitten.weight = Math.floor(Math.random() * 5) + 1
                kitten.coatColor = this.coatColor === cat.coatColor ? this.coatColor : 'рандомний колір'
                kitten.eyeColor = this.eyeColor === cat.eyeColor ? this.eyeColor : 'рандомний колір'
                kitten.gender = Math.random() < 0.5 ? 'чол' : 'жін'
                kittens.push(kitten)
            }
            return kittens
        }
    }

}

const catRomeo = new Cat('Ромео', 27, 82, 'рудий', 'зелений', 0, 'чол');
const catAnatoliy = new Cat('Анатолій', 10, 3, 'шоколадний', 'блакитно-сірий', 0, 'чол');
const catKitty = new Cat('Кіска', 31, 45, 'блонд', 'блакитний', 0, 'жін');
const catPussy = new Cat('Пуссі', 132, 132, 'рудий', 'карий', 0, 'жін');
const catJulietta = new Cat('Джульєтта', 30, 60, 'червоний', 'блакитно-жовтий', 'жін')


let kittens = catRomeo.love(catPussy)
console.log(kittens)