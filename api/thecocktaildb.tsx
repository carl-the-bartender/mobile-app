type Drink = {
    idDrink: string;
    strDrink: string;
    strCategory: string;
    strAlcoholic: string;
    strGlass: string;
    strInstructions: string;
    strDrinkThumb: string;
}

export const getLookupById = async (i: number) => {
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${i}`)
        .then((response) => response.json())
        .then((json) => {
            return json.drinks[0];
        })
        .catch((error) => {
            console.error(error);
        });
}

export const getRandom = async () => {
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
        .then((response) => response.json())
        .then((json) => {
            return json;
        })
        .catch((error) => {
            console.error(error);
        });
}