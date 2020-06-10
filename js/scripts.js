function translatePigLatin(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let newStr = "";

  if (vowels.indexOf(str[0]) > -1) {
      newStr = str + "way";
      return newStr;
  } else {
      let firstMatch = str.match(/[aeiou]/g) || 0;
      let vowel = str.indexOf(firstMatch[0]);
      newStr = str.substring(vowel) + str.substring(0, vowel) + "ay";
      return newStr;
  }
}
function acceptChar(str) {
	let acceptable = ['a', 'b', 'c'];
  let newStr = "";
  
  if (str !== acceptable.indexOf(str[0]) >-1) {
      alert("unacceptable");
      
	}

}

$(document).ready(function() {
  $("form#calculator").submit(function() {
    event.preventDefault();
    let number1 = $("#input1").val();
    let result1 = acceptChar(number1);
    let resutl2 = translatePigLatin(result1);

    $("#output").text(result2);
  });
});