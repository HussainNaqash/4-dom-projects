const form = document.querySelector('form')
console.log(form)

form.addEventListener('submit',(e)=>{
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#results");

  console.log(height)
  console.log(weight)

  if(height == '' || height < 0 || isNaN(height)){
    result.innerHTML = `please put valid values`
  }
  else if(weight == '' || weight < 0 || isNaN(weight)){
    result.innerHTML = `please put valid values`
  }
  else{
    const bmi = (weight/((height*height)/10000)).toFixed(2)
    // 18.6 || 18.6 to 24.9 || 24.9
    if (bmi < 18.6){
      result.innerHTML = `<span>${bmi} <br> you are Underweight</span>`
    }
    if (bmi >= 18.6 && bmi < 24.9){
      result.innerHTML = `<span>${bmi} <br> you are Normal</span>`
    }
    if (bmi >= 24.9){
      result.innerHTML = `<span>${bmi} <br> you are Overwight</span>`
    }

  }
  
  

})
