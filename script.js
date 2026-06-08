function calculateGrade() {

    let name = document.getElementById("name").value;
    let marksInput = document.getElementById("marks").value;

    let marksArray = marksInput.split(",");

    let total = 0;

    for(let i = 0; i < marksArray.length; i++){
        total += Number(marksArray[i]);
    }

    let average = total / marksArray.length;

    let grade;

    if(average >= 90)
        grade = "A+";
    else if(average >= 80)
        grade = "A";
    else if(average >= 70)
        grade = "B";
    else if(average >= 60)
        grade = "C";
    else if(average >= 50)
        grade = "D";
    else
        grade = "F";

    let status = average >= 50 ? "PASS" : "FAIL";

    document.getElementById("result").innerHTML =
        `
        <h3>Result</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Average:</b> ${average.toFixed(2)}</p>
        <p><b>Grade:</b> ${grade}</p>
        <p><b>Status:</b> ${status}</p>
        `;
}