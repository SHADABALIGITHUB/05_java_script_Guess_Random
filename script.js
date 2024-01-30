

// let a=[12,3,-5,0,4];

//  for(let i=0;i<a.length;i++){

//       console.log(` ... ${a[i]}C in ${i+1} days`);
//  } 
 



// function Fun1(){


// // e.preventDefault();
// let number=Math.floor(Math.random()*20-1+1)+1;

// console.log(number);


// }

// const myvalue=5;


let InputValue=document.getElementById('input1');
let element=document.getElementById('result');
  
let number=Math.floor(Math.random()*20-1+1)+1;

// console.log(InputValue.value);  


function Fun1(){
     
        if(InputValue.value <0 || InputValue.value >20 || InputValue.value===''){
            element.textContent='';
            element.innerText="select between 1 and 20";
            console.log(` select between 1 and 20 `);
        }
     
        else if(number==InputValue.value){
                
            element.textContent='';
            element.innerText=`Hurry ! you Guess it.Its ${number}.`;
            console.log(`Hurry ! you Guess it.Its ${number}.`);
 
        }
        else if(number>InputValue.value){
            element.textContent='';
            element.innerText="you number is small";
               console.log(`you number is small`);
        }
        else if(number<InputValue.value){
            element.textContent='';
            element.innerText="Your number is big";
               console.log(`Your number is big`);
        }
       
}



// console.log(number);
