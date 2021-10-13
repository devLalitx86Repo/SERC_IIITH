is_admin=0
function toggle_admin(){
    is_admin=is_admin==0?1:0;
    if(is_admin==1)active_admin();
    else deactive_admin();

}

function active_admin(){
    x = document.getElementById( "edit_workshop");
    x.style.display = "block";
}
function deactive_admin(){
    x = document.getElementById( "edit_workshop");
    x.style.display = "none";
}

function init_add(option){

    var x,count=0;
    var cont_name,conf_name,conf_dis,conf_ref,ref_link;
    cont_name=prompt("Please enter names of Contributers");
    if (cont_name){
        count++;
        conf_name=prompt("Please enter name of Conference/Workshop");
        if (conf_name){
            count++;
            conf_dis=prompt("Please enter the short discription");
            if (conf_dis){
                count++;
                conf_ref=prompt("Please enter the reference","eg: ISBN 978-3-030-xxxxx-5 xxxx");
                if (conf_ref){
                    count++;
                    ref_link=prompt("Please enter the URL");
                    if(ref_link){
                        count++;
                        add_item(cont_name,conf_name,conf_dis,conf_ref,ref_link);
                    }
                }
            }
        }
    }
    
    

        if(count<5){
            alert("Opps! Guess you have missed out some fields");
        }

}

function add_item(names,con_name="",dis,link_status,link){
    var newP = document.createElement("p");
         var text = document.createElement("text");
         html = '<strong>'+names+'</strong>';
         html+='<br><mark>'+con_name+'</mark>';
         html+='<br>'+dis;
         html+='<br><a target="_blank" href="'+link+'"><mark>'+link_status+'</mark><i class="fa fa-link"></i></a>';
         text.innerHTML = html;
         newP.appendChild(text);
         newP.style.fontSize="14px";
     var container = document.getElementById('conferences');
    // container.insertBefore(node, container.firstChild);
    container.insertBefore(newP, container.firstChild);
}