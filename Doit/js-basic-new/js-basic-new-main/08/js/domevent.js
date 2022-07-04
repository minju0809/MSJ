    var pic = document.querySelector('#pic');
    pic.addEventListener("mouseover", changePic, false);
    pic.addEventListener("mouseout", originPic, false);
    // pic.addEventListener('click', changePic, false);
    // pic.addEventListener('click', originPic, false);

    document.addEventListener('click', function() {alert("Hello")});

		function changePic() {			
			pic.src = "images/boy.png";
    }
    function originPic() {
      pic.src = "images/girl.png";
    }