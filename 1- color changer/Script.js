const body = document.querySelector('body')
const buttons = document.querySelectorAll('.button')
console.log(buttons)

buttons.forEach((item)=>{
  console.log(item);
  item.addEventListener('click',(e)=>{
    console.log(e);
    console.log(e.target)

    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id
    }
  })
})