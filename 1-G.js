// Number of students: 15
// Number of mentors: 8
// Total number of students and mentors: 23

// const preciseAge = 30.612437;
// const roughAge = Math.round(preciseAge); 

// G.2
// calculate % of mentors & students in the group 
// then round to the nearest integer

let numberOfStudents=15
let numberOfMentors=8
let numberOfMentorsAndStudents= numberOfMentors+numberOfStudents

console.log (numberOfMentorsAndStudents);

let preciseAverageMentors = (numberOfStudents/numberOfMentorsAndStudents)
let preciseAverageStudents = (numberOfMentors/numberOfMentorsAndStudents)

console.log (preciseAverageMentors)
console.log (preciseAverageStudents)

let roughAverageStudents = Math.round(preciseAverageStudents)
let roughAverageMentors = Math.round(preciseAverageMentors)

console.log (roughAverageMentors)
console.log (roughAverageStudents)



