

let cont = document.getElementById('content') ;

function time(){

        let date = new Date() ;
        a = date.getHours() ;
        b = date.getMinutes() ;
        c = date.getSeconds() ;

        tod = (a < 12)? 'AM' : 'PM' ;
        
        a = ((a > 12)? a-12 : a ) ;
        a = ((a == 0)? 12 : a) ;

        b = ((b < 10)? '0': '') + b ;
        c = ((c < 10)? '0': '') + c ;     

        x = `${a} : ${b} : ${c}  ${tod}` ; 
        cont.innerHTML = `<h2>${x}</h2>` ;
}

time() ;  
setInterval(time,1000) ;


