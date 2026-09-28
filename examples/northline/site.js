(function(){
    document.querySelectorAll('[data-open]').forEach(button=>button.addEventListener('click',()=>{
      if(window.MachFiveMagnet)window.MachFiveMagnet.open('northline-example');
    }));
  })();
