document.addEventListener('DOMContentLoaded', function() {
	const prepareFontLoad = (fontList) => Promise.all(fontList.map(font => document.fonts.load(font )))
	async function WriteCanvasText() {
	    const btnSave=document.querySelector('#btnDisplay');
  		const btnDwd=document.querySelector('#btnSave');
	    const canvas = document.getElementById("myCanvas");
	    const context = canvas.getContext("2d");

	    var img=document.getElementById("image1");
	  	const imgConverted = document.getElementById('imgConverted');
	    const ctx = canvas.getContext('2d');
	    var koef=1;
	    if (document.body.clientWidth>=1600){
	      koef=1.84;
	    }
	    else if(document.body.clientWidth>=1400 && document.body.clientWidth<1600){
	      koef=1.56;
	    }
	    else if(document.body.clientWidth>=1300 && document.body.clientWidth<1400){
	      koef=1.42;
	    }
	    else if(document.body.clientWidth>=1200 && document.body.clientWidth<1300){
	      koef=1.28;
	    }
	    else if(document.body.clientWidth>=1050 && document.body.clientWidth<1200){
	      koef=1.1;
	    }

	    var dev=document.querySelector('#lastPageRightPannel').offsetWidth/document.body.clientWidth*koef;
	    ctx.scale(dev,dev);
	    ctx.drawImage(img,0,20);


	    const fontList = ['56px Caveat']
	    await prepareFontLoad(fontList)
	    context.font = fontList[0];

	    context.fillStyle = "#534875";
	    context.textAlign="center";
	    context.fillText("Никита Пищуленок", 395, 290);
	   
	    btnSave.addEventListener('click', function(){
	  		const dataURI=canvas.toDataURL("image/png");
	  		imgConverted.src=dataURI;
	  	});


	  	btnDwd.addEventListener('click', function(){
	      	btnSave.click();
	  		if(window.navigator.msSaveBlob){
	  			window.navigator.msSaveBlob(canvas.msToBlob(), 'sertificate.png');
	  		}
	  		else{
	  			const a=document.createElement("a");
	  			document.body.appendChild(a);
	  			a.href=canvas.toDataURL();
	  			a.download="sertificate.png";
	  			a.click();
	  			document.body.removeChild(a);
	  		}
	  		
	  	});
	}
	WriteCanvasText();
	
});
  
  	

