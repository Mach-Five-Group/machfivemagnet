// Host controls only. The server-owned example capture mode suppresses delivery.
(function(){
  var buttons=Array.from(document.querySelectorAll('[data-open-magnet]'));
  var status=document.getElementById('example-load-status');
  function ready(){if(!window.MachFiveMagnet)return false;buttons.forEach(function(b){b.disabled=false;});status.textContent='';return true;}
  function unavailable(){status.textContent='The interactive example could not load. Reload this page to try again.';}
  buttons.forEach(function(b){b.addEventListener('click',function(){if(ready())window.MachFiveMagnet.open("aperture-consultation");else unavailable();});});
  var sdk=document.getElementById('magnet-example-sdk');sdk.addEventListener('load',function(){if(!ready())unavailable();});sdk.addEventListener('error',unavailable);ready();
})();
