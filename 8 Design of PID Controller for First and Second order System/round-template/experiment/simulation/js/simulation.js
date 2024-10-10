function checkAnswer8() {
  if (
    document.form8.delayTime.value == 0.6&&
    document.form8.timeConstant.value == 1.8
  ) {
    document.getElementById("output8").innerHTML = "Correct Answer";
    document.getElementById("output8").style.color = "Green";
  } else {
    document.getElementById("output8").innerHTML = "Wrong Answer Try Again !";
    document.getElementById("output8").style.color = "red";
  }
}

function showHint8() {
  document.getElementById("hint-display8").style.display = "block";
}

function showAnswer8() {
  document.getElementById("answer-display8").style.display = "block";
}

function checkAnswer7() {
  if (
    document.form7.crossoverFrequency.value == 3.6 &&
    document.form7.crossoverAngle.value == 1.2 &&
    document.form7.phaseMargin.value == 0.3
  ) {
    document.getElementById("output7").innerHTML = "Correct Answer";
    document.getElementById("output7").style.color = "Green";
  } else {
    document.getElementById("output7").innerHTML = "Wrong Answer Try Again !";
    document.getElementById("output7").style.color = "red";
  }
}

function showHint7() {
  document.getElementById("hint-display7").style.display = "block";
}

function showAnswer7() {
  document.getElementById("answer-display7").style.display = "block";
}

function showResponse(){
  document.getElementById("imgGraph").style.display="block";
}
let counter = 0;

function show_help(btn) {
  document.getElementById(`${btn.id}-h`).style.visibility = "visible";
}

function show_ans(btn) {
  let val = document.getElementById(`${btn.id}-h`).value;
  val = val.replaceAll(" ", "").toUpperCase();
  const ans = value(btn.id);
  if (ans.includes(val)) {
    document.getElementById(`${btn.id}-w`).innerHTML =
      "Correct answer! You can now move to the next simulation.";
    document.getElementById(`${btn.id}-w`).style.color = "#00FF00";
    document.getElementById(`${btn.id}-n`).style.visibility = "visible";
  } else {
    document.getElementById(`${btn.id}-w`).innerHTML =
      "Wrong answer! Try again or click on the answer button to get the answer and move forward!";
    document.getElementById(`${btn.id}-w`).style.color = "#ff0000";
    document.getElementById(`${btn.id}-ans`).style.visibility = "visible";
    document.getElementById(`${btn.id}-n`).style.visibility = "visible";
  }
}

function show_final_answer(btn) {
  const id = btn.id.substring(0, btn.id.lastIndexOf("-"));
  document.getElementById(`${id}-w`).innerHTML = `Answer: ${value(id)[0]}`;
}

function value(id) {
  switch (id) {
    case "ans-sim-1-step-1":
      return ["G1*G2", "G1G2"];
    case "ans-sim-1-step-2":
      return ["G5+G6"];
    case "ans-sim-1-step-3":
      return ["1/(G5+G6)"];
    case "ans-sim-1-step-4":
      return ["H3/(G5+G6)", "H3/G5+G6"];
    case "ans-sim-1-step-5":
      return ["G4*(G5+G6)", "G4(G5+G6)"];
    case "ans-sim-1-step-6":
      return ["1/G1G2", "1/(G1*G2))"];
    case "ans-sim-1-step-7":
      return ["H3/G1G2(G5+G6)", "H3/(G1*G2)(G5+G6)", "H3/G1(G5+G6)G2"];
    case "ans-sim-1-step-8":
      return ["G1G2G3", "G1*G2*G3"];
    case "ans-sim-1-step-9":
      return ["1&2", "1 and 2","1 & 2","1and2"];
    case "ans-sim-1-step-10":
      return ["G1G2G3/(1+G1G2G3H1)", "G1*G2*G3/(1+G1*G2*G3*H1)","G1G2G3/(1+G1G2G3H1)"];
    case "ans-sim-1-step-11":
      return ["G4(G5+G6)/(1+G4H2(G5+G6))", "G4*(G5+G6)/(1+G4*H2*(G5+G6)"];

    case "ans-sim-1-step-12":
      return ["G1G2G3G4(G5+G6)/((1+G1G2G3H1)(1+G4H2(G5+G6)))",
        "G1G2G3G4(G5+G6)/((1+G1G2G3H1)(1+G4H2(G5+G6)))/1+G1G2G3G4(G5+G6)/((1+G1G2G3H1)(1+G4H2(G5+G6)))(H3/G1G2(G5+G6)",
        "G1G2G3G4(G5+G6)/((1+G1G2G3H1)(1+G4H2(G5+G6))","G1G2G3G4(G5+G6)/((1+G1G2G3H1)(1+G4H2(G5+G6))+G3G4H3)",
        "G1*G2*G3*G4(G5+G6)/(1+G1*G2*G3*H1)(1+G4*H2*(G5+G6))",
        "G1G2G3G4(G5+G6)/((1+G1G2G3H1)(1+G4H2(G5+G6)))/1+ G1G2G3G4(G5+G6)/((1+G1G2G3H1)(1+G4H2(G5+G6)))(H3/G1G2(G5+G6)",
      ];
    case "ans-sim-1-step-13":
      return [
        "G1G2G3G4(G5+G6)/((1+G1G2G3H1)(1+G4H2(G5+G6)))/ 1+ G1G2G3G4(G5+G6)/((1+G1G2G3H1)(1+G4H2(G5+G6)))(H3/G1G2(G5+G6))",
        "G1G2G3G4(G5+G6)/((1+G1G2G3H1)(1+G4H2(G5+G6)))/ 1+ G1G2G3G4(G5+G6)/((1+G1G2G3H1)(1+G4H2(G5+G6)))(H3/G1G2(G5+G6)",
        "G1G2G3G4(G5+G6)/((1+G1G2G3H1)(1+G4H2(G5+G6)))/1+G1G2G3G4(G5+G6)/((1+G1G2G3H1)(1+G4H2(G5+G6)))(H3/G1G2(G5+G6)",];
    
  case "ans-sim-1-step-14":
    return [
      "1G2G3G4(G5+G6)/((1+G1G2G3H1)(1+G4H2(G5+G6))+G3G4H3)",];
  }
}
  


function displayAnswerpost() {
  let c = 0;
  if (document.getElementById("option-11").checked && document.getElementById("option-21").checked && document.getElementById("option-31").checked) {
    c++;
    document.getElementById("block-11").style.border = "3px solid limegreen";
    document.getElementById("result-11").style.color = "limegreen";
    document.getElementById("result-11").innerHTML = "Correct!";
    alert(`Correct Answer! On to the next.`);
	$('#qa1').hide();
	$('#q4').show();
    //window.location = "simulation4.html";
  $('#formative-box').hide();
  $('.box, .box1, .box2').show().css("display", "inline-block");
  }
 else {
    // document.getElementById("block-12").style.border = "3px solid red";
    // document.getElementById("result-12").style.color = "red";
    // document.getElementById("result-12").innerHTML = "Incorrect!";
    document.getElementById("block-11").style.border = "3px solid limegreen";
    document.getElementById("result-11").style.color = "limegreen";
    document.getElementById("result-11").innerHTML =
      "This is the correct answer!";
      document.getElementById("block-21").style.border = "3px solid limegreen";
      document.getElementById("result-21").style.color = "limegreen";
      document.getElementById("result-21").innerHTML =
        "This is the correct answer!";   
         document.getElementById("block-31").style.border = "3px solid limegreen";
        document.getElementById("result-31").style.color = "limegreen";
        document.getElementById("result-31").innerHTML =
          "This is the correct answer!";
  }
}

function displayAnswer() {
  let c = 0;
  if (document.getElementById("option-11").checked) {
    c++;
    document.getElementById("block-11").style.border = "3px solid limegreen";
    document.getElementById("result-11").style.color = "limegreen";
    document.getElementById("result-11").innerHTML = "Correct!";
    //alert(`Correct Answer! On to the next.`);
   // return;
  }
  if (document.getElementById("option-12").checked) {
    document.getElementById("block-12").style.border = "3px solid red";
    document.getElementById("result-12").style.color = "red";
    document.getElementById("result-12").innerHTML = "Incorrect!";
    document.getElementById("block-11").style.border = "3px solid limegreen";
    document.getElementById("result-11").style.color = "limegreen";
    document.getElementById("result-11").innerHTML =
      "This is the correct answer!";
  }
  if (document.getElementById("option-13").checked) {
    document.getElementById("block-13").style.border = "3px solid red";
    document.getElementById("result-13").style.color = "red";
    document.getElementById("result-13").innerHTML = "Incorrect!";
    document.getElementById("block-11").style.border = "3px solid limegreen";
    document.getElementById("result-11").style.color = "limegreen";
    document.getElementById("result-11").innerHTML =
      "This is the correct answer!";
  }
  if (document.getElementById("option-14").checked) {
    document.getElementById("block-14").style.border = "3px solid red";
    document.getElementById("result-14").style.color = "red";
    document.getElementById("result-14").innerHTML = "Incorrect!";
    document.getElementById("block-11").style.border = "3px solid limegreen";
    document.getElementById("result-11").style.color = "limegreen";
    document.getElementById("result-11").innerHTML =
      "This is the correct answer!";
  }
}
