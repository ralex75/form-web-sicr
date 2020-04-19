// JavaScript Document
var foto_totali=3;
var nfoto=1;
var vopacity=1;
var mstep=1;
var aspetta=0;
var o_width= 0;
var	o_height= 0;
var ciclo=window.setInterval(function(){fslide(foto_totali,30)},170);
	
function fslide(n_foto,attesa)
{
	

    if (mstep==1){
        window.document.getElementById("fimage"+nfoto).style.opacity ="1";

        aspetta=aspetta+1;
        if (aspetta==attesa){
            mstep=2;
            aspetta=0;
        }
    }
    if (mstep==2){
        window.document.getElementById("fimage"+(nfoto+1)).style.opacity = "0."+vopacity;
        vopacity=vopacity+1;
        if (vopacity==10){
            mstep=3;
            vopacity=1;
        }
    }
    if (mstep==3){  
        window.document.getElementById("fimage"+nfoto).style.opacity = "0";
		nfoto=nfoto+1;
        if (nfoto==n_foto) {
            mstep=4;
        }
		else{
        mstep=1;
		}
    }
	if (mstep==4){
        window.document.getElementById("fimage"+nfoto).style.opacity ="1";
        aspetta=aspetta+1;
        if (aspetta==attesa){
			window.document.getElementById("fimage1").style.opacity ="1";
            mstep=5;
            aspetta=0;
			vopacity=9;
        }
    }
	if (mstep==5){
        window.document.getElementById("fimage"+nfoto).style.opacity = "0."+vopacity;
        vopacity=vopacity-1;
        if (vopacity==0){
            mstep=6;
            vopacity=1;
        }
    }
	if (mstep==6){  
        window.document.getElementById("fimage"+nfoto).style.opacity = "0";
		nfoto=1;
        mstep=1;
    }
}
function photo_next(){
	if(nfoto==foto_totali){
		window.document.getElementById("fimage"+foto_totali).style.opacity = "0";
		nfoto=1;
		vopacity=1;
		mstep=1;
		aspetta=0;
	}
	else{
		window.document.getElementById("fimage"+nfoto).style.opacity = "0";
		nfoto=nfoto+1;
		vopacity=1;
		mstep=1;
		aspetta=0;
	}	
}

function photo_prev(){
	if (nfoto==1){
		window.document.getElementById("fimage1").style.opacity = "0";
		nfoto=foto_totali;
		vopacity=1;
		mstep=4;
		aspetta=1;
	}
	else{
		window.document.getElementById("fimage"+nfoto).style.opacity = "0";
		nfoto=nfoto-1;
		aspetta=1;
		vopacity=1;
		mstep=1;
	}	
}
function prev_next_over(e){
	e.style.opacity=1;
}	

function prev_next_out(e){
	e.style.opacity=0.5;
}

function menu_about(){
	window.document.getElementById("about").style.display="block";
	window.document.getElementById("venue").style.display="none";
}
function menu_venue(){
	window.document.getElementById("about").style.display="none";
	window.document.getElementById("venue").style.display="block";
}
function detectMobile() {
    if (navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/BlackBerry/i)
            || navigator.userAgent.match(/Windows Phone/i)
            ) {
        //document.location.href="mobile/home.html"
		document.location.href="home.html"//no mobile
    }
	else{
		document.location.href="home.html"
	}	
}

function menu_show(){	
	window.document.getElementById("menu_m").style.right="0px";
	window.document.getElementById("menu_ico").style.display="none";
	window.document.getElementById("x_ico").style.display="block";
	window.document.getElementById("menu_v").style.display="block";
}
function menu_hide(){
	window.document.getElementById("menu_m").style.right='-40%';
	window.document.getElementById("menu_ico").style.display="block";
	window.document.getElementById("x_ico").style.display="none";
	window.document.getElementById("menu_v").style.display="none";
}
var fixId, fixTop;

// al caricamento della pagina valorizzo le variabili appena definite
// nella prima incapsulo l'oggetto rappresentato dall'elemento che vogliamo fixare
// nella seconda memorizzo la posizione (altezza) fi partenza dell'elemento
window.onload = function() { 
  fixId = document.getElementById("col_sin_menu");
  fixTop = fixId.offsetTop;
}

// allo scroll di pagina applico delle modifiche agli attributi CSS dell'elemento
// a seconda che la posizione corrente sia superiore o meno rispetto all'altezza originale dell'elemento
window.onscroll = function() { 
  with (fixId.style) {
    if (window.pageYOffset > fixTop) {
      	top = (window.pageYOffset-fixTop)+"px";
		} else {
      top = 0;
    }
  }
}