class Meditation {
    constructor(private count: number) {
    }

    start() {
            for (let i = this.count; i > 0; i--) {
                setTimeout(() => console.log(i), (this.count - i + 1) * 1000);
            }
            setTimeout(() => console.log("Jay Guru Dev"), (this.count + 1) * 1000);
    }
}

const morning_meditation = new Meditation(5);
morning_meditation.start();
console.log(`Start meditation`);

const isPrime = (n: number) => {
    return new Promise((resolve, reject) => {
        let isPrime: boolean = n > 1;
        for (let i = 2, s = Math.sqrt(n); i <= s; i++)
            if (n % i === 0) isPrime = false;

        if (isPrime) {
            resolve({prime: true});
        }
        reject({prime: false});
    })
};

console.log('start');
isPrime(7)
    .then(console.log)
    .catch(console.error);
console.log('end');

interface Root {
    recipes: Recipe[]
    total: number
    skip: number
    limit: number
}

interface Recipe {
    id: number
    name: string
    ingredients: string[]
    instructions: string[]
    prepTimeMinutes: number
    cookTimeMinutes: number
    servings: number
    difficulty: string
    cuisine: string
    caloriesPerServing: number
    tags: string[]
    userId: number
    image: string
    rating: number
    reviewCount: number
    mealType: string[]
}

(async () => {
    try {
        const response = await fetch('https://dummyjson.com/recipes?limit=5');
        const root: Root = await response.json();
        for(const recipe of root.recipes) {
            console.log(`${recipe.id}: Recipe name - ${recipe.name}`);
        }
    } catch (error) {
        console.error(error.message);
    }

}) ();