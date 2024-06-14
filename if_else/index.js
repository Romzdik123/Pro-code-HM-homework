const massRoma = 65;
const heightRoma = 1.86;
const massNazar = 70;
const heightNazar = 1.81;

const BMIRoma = massRoma / heightRoma ** 2; //BMI(Body Mass Index);
const BMINazar = massNazar / heightNazar ** 2

console.log(BMIRoma, BMINazar);

if (BMIRoma > BMINazar) {
    console.log(`Roma's BMI (${BMIRoma}) is higher than Nazar's (${BMINazar})`);

} else {
    console.log(`Nazar's BMI (${BMINazar}) is higher than Roma's (${BMIRoma})`);
}