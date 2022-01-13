$("#btnSend").click(function () {
    var assignment = $("#assignment").val();
    var groupProject = $("#groupProject").val();
    var quiz = $("#quiz").val();
    var exam = $("#exam").val();
    var intex = $("#intex").val();
    var letterGrade = " ";

    assignment = parseInt(assignment) * 0.55
    groupProject = parseInt(groupProject) * 0.05
    quiz = parseInt(quiz) * 0.10
    exam = parseInt(exam) * 0.20
    intex = parseInt(intex) * 0.10

    finalGrade = assignment + groupProject + quiz + exam + intex

    //calculate the letter grade based off the user's final grade
    if (finalGrade >= 94) {
        letterGrade = "A";
    }
    else if (finalGrade >= 90) {
        letterGrade = "A-";
    }
    else if (finalGrade >= 87) {
        letterGrade = "B+";
    }
    else if (finalGrade >= 84) {
        letterGrade = "B";
    }
    else if (finalGrade >= 80) {
        letterGrade = "B-";
    }
    else if (finalGrade >= 77) {
        letterGrade = "C+";
    }
    else if (finalGrade >= 74) {
        letterGrade = "C";
    }
    else if (finalGrade >= 70) {
        letterGrade = "C-";
    }
    else if (finalGrade >= 67) {
        letterGrade = "D+";
    }
    else if (finalGrade >= 64) {
        letterGrade = "D";
    }
    else if (finalGrade >= 60) {
        letterGrade = "D-";
    }
    else {
        letterGrade = "E";
    }

    //message with user's final grade percentage and letter grade
    alert("Your final grade is " + finalGrade + "% which is an " + letterGrade);

    document.getElementById("output").innerHTML = finalGrade
})

