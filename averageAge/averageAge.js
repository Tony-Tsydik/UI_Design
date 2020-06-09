/*const middleAgeBySex = (infoArray, sex) => {
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

middleAgeBySex (infoArray, `W`);*/


const middleAgeBySex = (infoArray, sex) => {
   
    let i = 0;

  let result = infoArray.reduce((average,item) => {
    /*
    Сам алгоритм: работает одинаково на два случая, которые
    по-любому будут. Зависит это от 'sex', который указывается 
    при вызове функции. На выходе у меня result == NaN. Я
    так понимаю, что все дело в условии с item.sex, потому что
    когда я оставляю условие просто sex == 'M' выдает сумму всех
    item.age. Как только добавляю item.sex, сразу на выходе NaN.
    */
    if (sex == 'M' && item.sex == 'M') {
        ++i;
        return ((average + item.age) / i);
    } else if(sex == 'W' && item.sex == 'W'){
        ++i;
        return ((average + item.age) / i);
    }
  },0);
     return result;
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

middleAgeBySex (infoArray, `M`);


