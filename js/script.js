$(document).ready(function() {

	$('.about-button').on("click", function(){
        
        var targets = $('.section-titles');
        for(var i=0; i < targets.length; i++){
            console.log(targets[i]);
            // -> removing the class
            targets[i].classList.remove("typing-animation");
        
            void targets[i].offsetWidth;
         
            // -> and re-adding the class
            targets[i].classList.add("typing-animation");
        }
    });


    $('.work-button').on("click", function(){
        var targets = $('.section-titles');
        for(var i=0; i < targets.length; i++){
            console.log(targets[i]);
            // -> removing the class
            targets[i].classList.remove("typing-animation");
        
            void targets[i].offsetWidth;
         
            // -> and re-adding the class
            targets[i].classList.add("typing-animation");
        }
    });

    $('.contact-button').on("click", function(){
        var targets = $('.section-titles');
        for(var i=0; i < targets.length; i++){
            console.log(targets[i]);
            // -> removing the class
            targets[i].classList.remove("typing-animation");
        
            void targets[i].offsetWidth;
         
            // -> and re-adding the class
            targets[i].classList.add("typing-animation");
        }
    });

    $('.insite-link').on("click", function(){
        var targets = $('.section-titles');
        for(var i=0; i < targets.length; i++){
            console.log(targets[i]);
            // -> removing the class
            targets[i].classList.remove("typing-animation");
        
            void targets[i].offsetWidth;
         
            // -> and re-adding the class
            targets[i].classList.add("typing-animation");
        }
    });

});