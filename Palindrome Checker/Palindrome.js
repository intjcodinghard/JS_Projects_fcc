function palindrome(str) {

    var arr = [];
    arr = str.replace(/\s|[^0-9a-zA-Z]+/g,'');
    
    var flag = 0 ;
    var seedha = [...arr.toLowerCase()];
    var front , back;
    var j = seedha.length;
  
    for (var i =0 ; i<= j/2-1; i++){
        front = seedha[i];
        back = seedha[j-i-1];
      /* console.log(front);
        console.log(back);
  }*/
        if(front == back)
        {
            flag = 1;
        }else{
            flag = 0;
            break;
        }
    }
  
    return flag==1 ? true: false; 
    
  }
  
  
  
  palindrome("1 eye for of 1 eye.");