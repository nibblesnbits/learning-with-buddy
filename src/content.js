document.body.addEventListener('keyup', function(event) {
  if(event.eventPhase === Event.BUBBLING_PHASE){
    return;
  }
  window.open(window.location.href, 'test window', 'chrome=1,location=0');
});
