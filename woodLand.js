function swipe(){

    window.scrollTo({top:0,behavior:"smooth"});

}

function distext(val){
   
    switch(val)
    {case 1:
        document.getElementsByClassName('png-text1')[0].innerHTML="All Men's Shoes"
        break;
    case 2:
        document.getElementsByClassName('png-text1')[1].innerHTML="All Women's Shoes"
        break;
    case 3:
        document.getElementsByClassName('png-text1')[2].innerHTML="Shop New Arrivals"
        break;
    case 4:
        document.getElementsByClassName('png-text1')[3].innerHTML="Shop All"
    }
}
function hidtext(){
    document.getElementsByClassName('png-text1')[0].innerHTML=""
    document.getElementsByClassName('png-text1')[1].innerHTML=""
    document.getElementsByClassName('png-text1')[2].innerHTML=""
    document.getElementsByClassName('png-text1')[3].innerHTML=""
}

window.onscroll = function myfunction () {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 150) {
    document.getElementById('swipe-button').style.display='block';
  } else {
    document.getElementById('swipe-button').style.display='none';
  }
};