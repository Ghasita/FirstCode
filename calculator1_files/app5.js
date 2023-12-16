(function(){
    let screen=document.querySelector('.screen')
    let clear=document.querySelector('.btn-clear');
    let equal =document.querySelector('.btn-equal');
    let percent =document.querySelector('.btn-percent');
    let sqroot =document.querySelector('.btn-sqroot');
    let buttons =document.querySelectorAll('.btn')
    buttons.forEach(function(button){
        button.addEventListener('click',function(e){
            console.log(e);
            
            let value=e.target.dataset.num;
      
            if(e.target.innerText != '=' && e.target.innerText != 'sq' && e.target.innerText !='%')  {
                screen.value += value
            }
            

        })
    });
    equal.addEventListener('click',function(e){
        
       
        if(screen.value === ''){
            
            screen.value = "";
        }
        else{


            let answer= eval(screen.value)
            
            screen.value=answer;
        }
    })
    sqroot.addEventListener('click',function(e){
  
      
    
      
      let  ass = Math.sqrt(screen.value);

      screen.value=ass;
            
        }
    )
    percent.addEventListener('click',function(e){
  
      
    
      
        
  
       screen.value/=100;
              
          }
      )
    clear.addEventListener('click',function(e){
        
        screen.value=" ";
    })
})();