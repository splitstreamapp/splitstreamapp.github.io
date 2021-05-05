
    /*******Carga Stream***********/

    /*var plataforma = [];
    var canal = [];

    var arrayAsAString = Android.getJavaArrayAsAString();
    var plat = Android.getPlataformArrayAsAString();
    realJsString = arrayAsAString + "";
    arrayFromJava = realJsString.split("|");
    realPlatform = plat + "";
    platFromJava = realPlatform.split("|");
    for (var i = 0; i < arrayFromJava.length; i++) {
        canal[i] = arrayFromJava[i];
        plataforma[i] = platFromJava[i];
    }

    for (var i = 0; i < plataforma.length; i++) {

        if (plataforma[i] == "t") {
            $('<div id="stream-'+canal[i]+'" class="child"><iframe src="https://player.twitch.tv/?channel=' + canal[i] + '&parent=www.splitstreamapp.com" height="100%" width="100%" frameborder="0" allowfullscreen="false"></iframe></div>').appendTo("#parent");
        } else if (plataforma[i] == "f") {
            $('<div id="stream-'+canal[i]+'" class="child"><iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/' + canal[i] + '/live"          height="100%" width="100%" frameborder="0" allowfullscreen="false"></iframe></div>').appendTo("#parent");
        }
        $('<li style="align-items:center;"><label  style="border-radius: 3px; padding: 3px; margin-right: 5px; background-color:#016fb9; color: white;">'+ canal[i] +'</label><div class="fab-icon-holder"><i class="fa fa-refresh" onclick="updateDiv(\'stream-' + canal[i] + '\')"></i></div></li>').appendTo("#options");

    }*/

    /*******Cambia Vista***********/
    var childDiv = document.getElementsByClassName('child');
    for (i = 0; i < childDiv.length ; i++){
        childDiv[i].style.height = (100/childDiv.length)+"vh";
        childDiv[i].style.width = "100%";
    }
    function changemode(button) { 
        var floatbtn = document.getElementById("fbtn");
        var className = button.getAttribute("class");
        var label = document.getElementById("lblView");

        if (className == "fa fa-th-large") {
            button.className = "fa fa-th-list";
            label.innerHTML='List';
            modeList = true;
        } else {
            button.className = "fa fa-th-large";
            label.innerHTML='Grid';
            modeList = false;
        }

        if (modeList) {
            if(childDiv.length == 2){
                for (i = 0; i < childDiv.length ; i++){
                    childDiv[i].style.height = "100vh";
                    childDiv[i].style.width = "50%";
                }
            }else{
                for (i = 0; i < childDiv.length ; i++){
                    if((childDiv.length % 2) != 0 && i == (childDiv.length-1)){
                        childDiv[i].style.height = "50vh";
                        childDiv[i].style.width = "100%";
                    }else{
                        childDiv[i].style.height = "50vh";
                        childDiv[i].style.width = "50%";
                    }
                }
            }
        } else {
            for (i = 0; i < childDiv.length ; i++){
                childDiv[i].style.height = (100/childDiv.length)+"vh";
                childDiv[i].style.width = "100%";
            }
        }
    } 

    $(function() {
        $('.fab-container').on('click', '.fab-icon-holder', function() {
            $('#options').fadeToggle('slow');
        });
        
    });
    function updateDiv(idStream) {
        document.getElementById(idStream).innerHTML = document.getElementById(idStream).innerHTML;
    }