console.log("hello");

window.onscroll = function() {topScroll()};

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

// p1
showing1.addEventListener('mouseenter', function(){
  hidden1.style.display = 'block';
  showing1.style.display = 'none';
});

hidden1.addEventListener('mouseleave', function(){
  showing1.style.display = 'block';
  hidden1.style.display = 'none';
});

// p2
showing2.addEventListener('mouseenter', function(){
  hidden2.style.display = 'block';
  showing2.style.display = 'none';
});

hidden2.addEventListener('mouseleave', function(){
  showing2.style.display = 'block';
  hidden2.style.display = 'none';
});
