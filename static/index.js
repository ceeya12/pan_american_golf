
        /*
            Code for image to grab icon for splash page. Purpose of this code is for functionality
            with first image visible.

         */

        const splash = document.querySelector('.splash');
        //const disappear = document.querySelector('.display-none');

        document.addEventListener('DOMContentLoaded', (e)=>{
            setTimeout( ()=>{
                document.getElementById("splash").style.opacity = 0;
               splash.classList.add('display-none');
            }, 4000);
        })


        /*
        const header = document.querySelector('.header');

        window.onscroll = function (){
            var top = window.scrolly;
            console.log(top);
            if(top >=50)
            {
                header.classList.add('active')
            }
            else{
                header.classList.remove('active');
            }
        }

         */


		//This simple script handles the header nav menu modal
        //also covered nav sub menu selection
        //Dependencies: jQuery
$(document).ready(function() {

	$('.burger').click(function(){
		$('header').toggleClass('clicked');
	});

	$('nav ul li').click(function(){
		$('nav ul li').removeClass('selected');
		$('nav ul li').addClass('notselected');
		$(this).toggleClass('selected');
		$(this).removeClass('notselected');
	});

});

//Search functionality for entire site







