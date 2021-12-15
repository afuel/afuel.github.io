//When calculate button is clicked, exam grade will be calculated and displayed
document.getElementById('calculate-overlay').addEventListener("click", function(){
  if (examGrade() < 0){
    document.getElementById('output').innerHTML = 'You need at least a 0% on your final exam.';
  }
  else if (examGrade() <= 100){
    document.getElementById('output').innerHTML = 'You need at least a ' + examGrade() +  '% on your final exam.';
  }
  else if (examGrade() > 100){
    document.getElementById('output').innerHTML = 'You cannot achieve your desired grade.';
  }

});

//Calculates minimum exam grade to achieve desired final grade
  function examGrade(){
    var minExamGrade;
    var currentGrade = document.getElementById('currentGrade').value;
    var weight = document.getElementById('weight').value;
    var weight_proportion = weight/100;
    var finalGrade = document.getElementById('finalGrade').value;

    minExamGrade = (finalGrade - (currentGrade * (1 - weight_proportion))) / weight_proportion;
    console.log(minExamGrade);
    return Math.round(minExamGrade);
  }
