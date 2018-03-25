$(document).ready(function(){
  /*seleziono la classe js--scroll-alle-offerte, quando clicco quel elemento
  abbiamo un animazione che mi scrolla tutto fino alla classe js--section-plans con
  la velocità di 1000 ms ovvero un secondo*/
 $('.js--scroll-alle-offerte').click(function(){
   $('html, body').animate({scrollTop: $('.js--section-plans').offset().top},1000);
 });

 $('.js--inizio').click(function(){ /*link homepage*/
   $('html, body').animate({scrollTop: $('html').offset().top},1000);
 });

 $('.js--corsi').click(function(){/*link corsi*/
   $('html, body').animate({scrollTop: $('.js--sezione-corsi').offset().top},1000);
 });

 $('.js--prezzi').click(function(){/*link prezzi*/
   $('html, body').animate({scrollTop: $('.js--section-plans').offset().top},1000);
 });
});
