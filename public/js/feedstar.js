$(document).ready(function(){
            $(".clsLike").click(function(){
               var likes=$(this).next().text();
               $(this).siblings().text(++likes);
               alert("hi");

            });

            $(document).on("click",".star",function(){
            	var a=$(this).attr("value");
              /* alert(a);*/
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

            $(document).on("click",".clsComment",function(){
               $(this).parent().parent().next().slideToggle();

               /*$(this).parent().parent().next().animate({ scrollTop: $(".cmtslide").height() },$(".cmtslide").height());*/
                winheight=$(document).height()-100;
                $('#backTopFixed').css("top",winheight);

            });


            $(window).scroll(function(){
                  if ($(this).scrollTop() > 50) {
                        $('#backTopFixed').fadeIn('slow');
                  } else {
                        $('#backTopFixed').fadeOut('slow');
                  }
            });
            $('#backTopFixed').click(function(){
              
                              /*$("html, body").scrollTop(0);*/
                              $("html, body").animate({ scrollTop: 0 }, 500);
                              return false;
            });

            $( document ).on( 'keydown', function ( e ) {
               if ( e.keyCode === 27 ) { // ESC
                 /* alert("hi");*/
                      $('#modal1').modal('hide');
               }
            });

            /*$(document).live('keypress', function(event){
               if(event.which === 27) {
                  alert("hi");
                        $('#model1').hide();
               }
            });*/

            /*$(document).on('keydown',function(e){
               if(e.keydown === 27){

                  $(".comments").append("<p><span><b>"+venky+"</b></span><span>"+GoodIdea+"</span></p>");

               }
            });*/

            $(".ipelement").on("click",function(){
                  ele=$(this);
                  var i=0;

                  $(document).on('keydown',function(e){
                     if(e.keyCode === 13){
                         /*alert($(window).height());
                           alert($(document).height());*/
                          /* console.log($(this).parent().parent().parent().scrollTop() + $(this).parent().parent().parent().innerHeight() );
                           console.log($(".cmtslide").scrollHeight);*/
                           $(this).parent().parent().scrollTop($(this).parent().parent().scrollHeight);
                            ip=ele.val();
                          /* alert(ip);*/
                            /*alert("hi");*/
                           var name=ele.parent().prev().text();

                           /*alert($("#divid11").scrollHeight);*/

                          /* var test1=/[a-z][A-Z]/;*/
                           /*console.log(ele.parent().parent().parent());*/
                          
                           /*if(test1.test(ip)){*/
                              /*if(ip!=""){
                                 alert(i++);
                              ele.parent().parent().parent().children().eq(0).append("<p><span><b>"+name+"</b></span><span>"+ip+"</span></p>");
                               }
                              else{
                                 alert(i++);
                                 alert("enter comments properly");
                              }*/
                           /*}
                           else{
                              alert("enter valid comments");
                           }*/


                           if(ip!=""){
                                
                              ele.parent().parent().parent().children().eq(0).append("<p><span><b>"+name+"</b></span><span>"+ip+"</span></p>");
                               }
                           $(".ipelement").val("");

                           $(this).parent().parent().next().animate({ scrollTop: $(".cmtslide").height() },$(".cmtslide").height());
                         
                     }
                  });
            });

           winheight=$(document).height()-100;

            $('#backTopFixed').css("top",winheight);

      });