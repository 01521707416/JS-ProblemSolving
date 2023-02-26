const phones = [
    { name: 'SAMSUNG', camera: 12, storage: '32gb', price: 36000, color: 'golden' },
    { name: 'OPPO', camera: 8, storage: '28gb', price: 31000, color: 'lime' },
    { name: 'VIVO', camera: 16, storage: '56gb', price: 28000, color: 'silver' },
    { name: 'Realme', camera: 12, storage: '24gb', price: 21000, color: 'pale' },
    { name: '1+', camera: 12, storage: '32gb', price: 42000, color: 'orange' }
];

function cheapestPhone(phones) {
    let cheapestOne = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if (phone.price < cheapestOne.price) {
            cheapestOne = phone;
        }
    }
    return cheapestOne;
}

const allPhones = cheapestPhone(phones);
console.log(allPhones)