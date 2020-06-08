const middleAgeBySex = (infoArray, sex) => {
	let persons = [];
 
 	if (sex=='M') {
 		persons = infoArray.filter(item => item.sex == 'M');
 	} else {
 		persons = infoArray.filter(item => item.sex == 'W');
 	}
 
 	let sum = 0;
 	for(let i = 0; i < persons.length; i++){
 		sum += persons[i].age;
 	}
 	let result = sum / persons.length;
 	alert (result);
 }

const infoArray = [{
            name: `Ivan`,
            sex: `M`,
            age: 21
        },
        {
            name: `Olga`,
            sex: `W`,
            age: 19
            },
        {
            name: `Oleg`,
            sex: `M`,
            age: 27
        },
        {
            name: `Ann`,
            sex: `W`,
            age: 21
        },
        {
            name: `Alex`,
            sex: `M`,
            age: 30
        },
];

middleAgeBySex (infoArray, `W`);