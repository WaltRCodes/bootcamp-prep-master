let classRoom = [
    {
        "Marnie" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : true},
                {"Thursday" : true},
                {"Friday" : true}
            ]
    },
    {
        "Lena" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : true},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    },
    {
        "Shoshanna" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : false},
                {"Thursday" : true},
                {"Friday" : false}
            ]
    },
    {
        "Jessa" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : false},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    }
];

// YOUR CODE BELOW
function attendanceCheck(string){
        let array = [];
        for (let i = 0; i < classRoom.length; i++) {
          let students = classRoom[i];
          let [names,attendance] = Object.entries(students)[0];
          for (let x = 0; x < attendance.length;x++){
                  let day = attendance[x];
                  let [date,dateValue] = Object.entries(day)[0];
                  if (date === string && dateValue){
                          array.push(names);
                  }
          }
        }
        return array;
}
