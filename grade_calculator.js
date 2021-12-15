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
