console.log("hello");

window.onscroll = function(){topScroll()};

function topScroll() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("top").style.display = "block";
  }
  else {
    document.getElementById("top").style.display = "none";
  }
}


var hidden = [document.getElementById('hidden1'), document.getElementById('hidden2')];
var showing = [document.getElementById('showing1'), document.getElementById('showing2')];

// p1-------
showing1.addEventListener('mouseenter', function(){
  hidden1.style.display = 'block';
  showing1.style.display = 'none';
});

hidden1.addEventListener('mouseleave', function(){
  showing1.style.display = 'block';
  hidden1.style.display = 'none';
});

// p2-------
showing2.addEventListener('mouseenter', function(){
  hidden2.style.display = 'block';
  showing2.style.display = 'none';
});

hidden2.addEventListener('mouseleave', function(){
  showing2.style.display = 'block';
  hidden2.style.display = 'none';
});

// p3-------
showing3.addEventListener('mouseenter', function(){
  hidden3.style.display = 'block';
  showing3.style.display = 'none';
});

hidden3.addEventListener('mouseleave', function(){
  showing3.style.display = 'block';
  hidden3.style.display = 'none';
});

// p4-------
showing4.addEventListener('mouseenter', function(){
  hidden4.style.display = 'block';
  showing4.style.display = 'none';
});

hidden4.addEventListener('mouseleave', function(){
  showing4.style.display = 'block';
  hidden4.style.display = 'none';
});

// p5-------
showing5.addEventListener('mouseenter', function(){
  hidden5.style.display = 'block';
  showing5.style.display = 'none';
});

hidden5.addEventListener('mouseleave', function(){
  showing5.style.display = 'block';
  hidden5.style.display = 'none';
});

// p6-------
showing6.addEventListener('mouseenter', function(){
  hidden6.style.display = 'block';
  showing6.style.display = 'none';
});

hidden6.addEventListener('mouseleave', function(){
  showing6.style.display = 'block';
  hidden6.style.display = 'none';
});

// p7-------
showing7.addEventListener('mouseenter', function(){
  hidden7.style.display = 'block';
  showing7.style.display = 'none';
});

hidden7.addEventListener('mouseleave', function(){
  showing7.style.display = 'block';
  hidden7.style.display = 'none';
});

// p8-------
showing8.addEventListener('mouseenter', function(){
  hidden8.style.display = 'block';
  showing8.style.display = 'none';
});

hidden8.addEventListener('mouseleave', function(){
  showing8.style.display = 'block';
  hidden8.style.display = 'none';
});

// github-------
showing9.addEventListener('mouseenter', function(){
  hidden9.style.display = 'block';
  showing9.style.display = 'none';
});

hidden9.addEventListener('mouseleave', function(){
  showing9.style.display = 'block';
  hidden9.style.display = 'none';
});
