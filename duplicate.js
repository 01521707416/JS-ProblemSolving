/* Removing duplicate elements from the Array */

const countryNames = ['Bangladesh', 'Australia', 'India', 'USA', 'Scotland', 'England', 'India', 'Scotland', 'Australia', 'USA'];

function removeDuplicate() {
    const unique = [];
    for (let i = 0; i < countryNames.length; i++) {
        const country = countryNames[i];
        if (unique.includes(country) == false) {
            unique.push(country);
        }
    }
    return unique;
}

const uniquNames = removeDuplicate(countryNames);
console.log(uniquNames)