$(document).ready(function() {
  $("form#choice").submit(function(event){
    event.preventDefault();
    var animal = $("#animals").val();
    var gender = $("#gender").val();
    var music = $("input:radio[name=music]:checked").val();
    console.log(gender);
    console.log(animal);
    if (gender === "male" && (music === "alt" || music === "class") && (animal === "turtle" || animal === "tiger")) {
      console.log(gender);
      $("#rock").show();
    } else if (gender === "male" && music === "rap" && (animal ==="all of them"|| animal ==="snake")) {
      $("#jb").show();
    } else if (gender === "female" && (music === "alt"|| music === "class") && (animal === "turtle"|| animal === "tiger")) {
      $("#ja").show();
    } else if (gender === "female" && music === "rap" && (animal ==="all of them"|| animal ==="snake")) {
      $("#kk").show();
    } else if (gender === "female") {
      $("#jb").show();
      console.log("last male option");
    } else {
      $("#kk").show();
      console.log("Last female option");
    }
  });
});
