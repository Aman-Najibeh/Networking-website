function onReady(callback) {
    var intervalId = window.setInterval(function() {
      if (document.getElementsByTagName('body')[0] !== undefined) {
        window.clearInterval(intervalId);
        callback.call(this);
      }
    }, 3000);
  }
  
  function setVisible(selector, visible) {
    document.querySelector(selector).style.display = visible ? 'block' : 'none';
  }
  
  onReady(function() {
    setVisible('.pageloader', true);
    setVisible('.pageloader', false);
  });

const nav= document.querySelector('nav');
const header =document.querySelector('header');

const options={

};
const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            nav.classList.remove('changecolor');
        }
        else{
            nav.classList.add('changecolor');
        }
    })
},options)

observer.observe(header);


function openTab(evt, tabName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("content-tab");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" is-active", "");
    }
    document.getElementById(tabName).style.display = "block";
    // document.getElementById(tabName).style.border-bottom="solid" ;
    evt.currentTarget.className += " is-active";
  }