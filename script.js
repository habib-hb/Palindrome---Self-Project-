let inputBox = document.getElementById('text-input');

let button= document.getElementById('check-btn');

let resultBox = document.getElementById('result');

 let checkingArray = [",",".","_"," ","(",":","/","-","\\","|"] ; 

button.addEventListener('click' , ()=>{
  if(inputBox.value === ""){
 alert('Please input a value')
  }else{
    let disectedInput = inputBox.value.toLowerCase().split("");
    console.log(disectedInput)
    let cleanedInput = disectedInput.filter((c)=>{
      return !(checkingArray.includes(c));
    });
  //  console.log(cleanedInput);
    
    // console.log(cleanedInput.reverse())

    let rearrengedText= cleanedInput.join("");
    let rearrengedTextReversed = cleanedInput.reverse().join("");
    // console.log(rearrengedText)
    // console.log(rearrengedTextReversed)

    if(rearrengedText===rearrengedTextReversed){
      resultBox.innerText= inputBox.value + " is a palindrome";
    }else{
      resultBox.innerText= inputBox.value + " is not a palindrome";
    }

   
    
   

  }
})
