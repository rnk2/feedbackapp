$(document).ready(function(){
            $(".clsLike").click(function(){
               var likes=$(this).next().text();
               $(this).siblings().text(++likes);
               

            });

            $(document).on("click",".star",function(){
              var b="";
            	var a=$(this).attr("value");

              
              b+=a;   
               alert(b);
               console.log(a);
               parentEle=$(this).parent();
               parentEle.empty();
               for(i=1;i<=5;i++){
                  if(i<=a){
                     parentEle.append("<img src='./images/star.png' value="+i+" class='img-circle star' width='20px' height='20px'>");
                  }
                  else{
                     parentEle.append("<img src='./images/onestar1.png' value="+i+" class='img-circle star' width='20px' height='20px'>");
                  }
               }
            });

      });