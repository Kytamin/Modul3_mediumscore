let student=[
    {
        name: "Ha",
        gender: 'female',
        poin: 8
    },
    {
        name: "Huy",
        gender: 'male',
        poin: 9
    },
    {
        name: "Hung",
        gender: 'male',
        poin: 7
    },
    {
        name: "Phuong",
        gender: 'female',
        poin: 6
    },
    {
        name: "Huyen",
        gender: 'female',
        poin: 10
    },
    {
        name: "Long",
        gender: 'male',
        poin: 5
    },
    {
        name: "Luan",
        gender: 'male',
        poin: 10
    },
    {
        name: "Linh",
        gender: 'female',
        poin: 8
    }

];

let maleStudent=student.filter((element)=>element.gender==="male")
let femaleStudent=student.filter((element)=>element.gender==="female")

let totalMale=maleStudent.reduce((totalPoint,male)=>(totalPoint+male.poin),0)
let totalFemale=femaleStudent.reduce((totalPoint,female)=>(totalPoint+female.poin),0)
let mediumMale=totalMale/maleStudent.length
let mediumFemale=totalFemale/femaleStudent.length


console.log(maleStudent)
console.log(femaleStudent)
console.log(`điểm trung bình học sinh nam:${mediumMale} điểm`)
console.log(`điểm trung bình học sinh nữ:${mediumFemale} điểm`)
