const country = 'Bangladesh';
const age = 52;
const Id = [58, 76, 98, 67];
console.log(typeof (country))
console.log(typeof (age))

/* To check the typeOff an Array. Need to use:  Array.IsArray */
console.log(typeof (Id))
console.log(Array.isArray(Id))

/* includes function */
console.log(Id.includes(76))
console.log(Id.includes(32))

/* Conact: It refers to joining two arrays together */
const friendsAge = [17, 21, 23, 19, 16];
const friednsAgeID = friendsAge.concat(Id);
console.log("New conacted Array =", friednsAgeID)