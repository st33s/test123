$( document ).ready(function() {
    $('.acc h3').click(function(){
        $(this).next('.content').slideToggle();
        $(this).parent().toggleClass('active');
        $(this).parent().siblings().children('.content').slideUp();
        $(this).parent().siblings().removeClass('active');
    });

    var playerWrapper0 = $('#testronde0');
    var player0 = videojs("workshop0");
    player0.ready(function() {
      
        
        var duration = player0.duration(); 

        player0.on('timeupdate', function (){
            var time = player0.currentTime();
      

            $(".video-js").each(function() {
            if (time >= duration){
            
                playerWrapper0.append('<div class="modal"><h1>Ontvang een<br>welkomskorting!</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p></div>'); 
            }
            });
        });
    });

    var playerWrapper1 = $('#testronde1');
    var player1 = videojs("workshop1");
    player1.ready(function() {
        
        var duration = player1.duration(); 

        player1.on('timeupdate', function (){
            var time = player1.currentTime();
            

            $(".video-js").each(function() {
            if (time >= duration){
                
                playerWrapper1.append('<div class="modal"><h1>Ontvang een<br>welkomskorting!</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p></div>'); 
            }
            });
        });
    });

    var playerWrapper2 = $('#testronde2');
    var player2 = videojs("workshop2");
    player2.ready(function() {
        
        var duration = player2.duration(); 

        player2.on('timeupdate', function (){
            var time = player2.currentTime();
         

            $(".video-js").each(function() {
            if (time >= duration){
                
                playerWrapper2.append('<div class="modal"><h1>Ontvang een<br>welkomskorting!</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p></div>'); 
            }
            });
        });
    });

    var playerWrapper3 = $('#testronde3');
    var player3 = videojs("workshop3");
    player3.ready(function() {
        
        var duration = player3.duration(); 

        player3.on('timeupdate', function (){
            var time = player3.currentTime();
          

            $(".video-js").each(function() {
            if (time >= duration){
               
                playerWrapper3.append('<div class="modal"><h1>Ontvang een<br>welkomskorting!</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p></div>'); 
            }
            });
        });
    });

    var playerWrapper4 = $('#testronde4');
    var player4 = videojs("workshop4");
    player4.ready(function() {
        
        var duration = player4.duration(); 

        player4.on('timeupdate', function (){
            var time = player4.currentTime();

            $(".video-js").each(function() {
            if (time >= duration){
        
                playerWrapper4.append('<div class="modal"><h1>Ontvang een<br>welkomskorting!</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p></div>'); 
            }
            });
        });
    });

    // $(".video-js").each(function( index ) {
    //     console.log(index);
    // 
    
    
    $('.video-wrapper').each(function() {
      
        var video = $(this).find('video')[0];
        
        $(this).find('.playtoggle').click(function() {
            if ($(this).hasClass('play')) {
                $(this).removeClass('play');
                $(this).find('.playbutton').show();
                $(this).find('.pausebutton').hide();
                video.pause();
            } else {
                $(this).addClass('play');
                $(this).find('.playbutton').hide();
                $(this).find('.pausebutton').show();
                video.play();
            }
        });
    });     
    
    $('.video-wrapper').each(function() {
      
        var video = $(this).find('video')[0];
        
        $(this).find('.knopjes').click(function() {
            $('.doorspoelen', video).click(function () {
                el.currentTime = el.currentTime + 10;
            });
        
            $('.terugspoelen', video).click(function () {
                el.currentTime = el.currentTime - 10;
            });
            
        });
    }); 
   
 
    $(function() {
        $(".container-lightdark").click(function() {
            /* zonnetje darkmode */
            if($("#lightdark-icon").attr("src") == "img/lightdarklogo-pink.png")
            {
                $("#lightdark-icon").attr("src", "img/lightdarklogo-blue.png");
            }
            else
            {
                $("#lightdark-icon").attr("src", "img/lightdarklogo-pink.png");
            }
            /* logo in header */
            if($("#logo-nav").attr("src") == "img/logo.png")
            {
                $("#logo-nav").attr("src", "img/logo-blue.png");
            }
            else
            {
                $("#logo-nav").attr("src", "img/logo.png");
            }
            /* trio icon leer */
            if($("#iconleer").attr("src") == "img/leer.png")
            {
                $("#iconleer").attr("src", "img/leer-blue.png");
            }
            else
            {
                $("#iconleer").attr("src", "img/leer.png");
            }
            /* trio icon codeer */
            if($("#iconcodeer").attr("src") == "img/codeer.png")
            {
                $("#iconcodeer").attr("src", "img/codeer-blue.png");
            }
            else
            {
                $("#iconcodeer").attr("src", "img/codeer.png");
            }
            /* trio icon speel */
            if($("#iconspeel").attr("src") == "img/speel.png")
            {
                $("#iconspeel").attr("src", "img/speel-blue.png");
            }
            else
            {
                $("#iconspeel").attr("src", "img/speel.png");
            }

            /* terugspoelen */
            if($(".terugspoelen").attr("src") == "img/ts-pink.png")
            {
                $(".terugspoelen").attr("src", "img/ts-blue.png");
            }
            else
            {
                $(".terugspoelen").attr("src", "img/ts-pink.png");
            }

            /* doorspoelen */
            if($(".doorspoelen").attr("src") == "img/ds-pink.png")
            {
                $(".doorspoelen").attr("src", "img/ds-blue.png");
            }
            else
            {
                $(".doorspoelen").attr("src", "img/ds-pink.png");
            }

            /* pausebutton */
            if($(".pausebutton").attr("src") == "img/pause-pink.png")
            {
                 $(".pausebutton").attr("src", "img/pause-blue.png");
            }
            else
            {
                 $(".pausebutton").attr("src", "img/pause-pink.png");
            }

            /* play */
            if($(".playbutton").attr("src") == "img/play-pink.png")
            {
                 $(".playbutton").attr("src", "img/play-blue.png");
            }
            else
            {
                 $(".playbutton").attr("src", "img/play-pink.png");
            }

            $("body").toggleClass("dark-mode");
        });
    });

});