const middleAgeBySex = (arr, sex) => {
    return arr.filter((elem) => elem.sex === sex).reduce((sum, current, index, arr) => {
        return (index == arr.length - 1) ? (sum += current.age) / arr.length : sum += current.age;
    }, 0);
  }