nbcont = 0 ;
window.onload = function change(){
    if ( nbcont==0 ) document.getElementById("nocont").style.display="block";
	retrieve(); 

   // we take new account informations from login page to fill username, photo and his phone number.  

	let a= document.getElementById("user").innerHTML=localStorage.getItem("username");
	     var img = document.createElement("img");
        
        var filename =localStorage.getItem("pic");
        
        filename = filename.substring(filename.lastIndexOf('\\')+1);

            //Test if the uploaded file is an image
            extension = filename.substring(filename.lastIndexOf('.')+1);
            switch(extension)
            {
                case "png":
                case "jpg":
                case "jpeg":
                case "gif":
                case "bmp":
                 img.src = "images\\" + filename; break;
                 default:
                 img.src = "images\\default.png";
                    break;
            }
			img.id="profile";
            span = document.getElementById("span");
			span.appendChild(img);  
			
			
           
     

                                 }

			//this function show a modal and fill input text by values stocked in localstorage					 
		function profile()
		{
		document.getElementById('id02').style.display='block';
	
        k = document.getElementById("nom1").value = localStorage.getItem("username");
        z = document.getElementById("ncin1").value = localStorage.getItem("num"); 
		t = document.getElementById("email").value = localStorage.getItem("email"); 
		}
 

		function update()
		{   
			nom=  document.getElementById("nom1").value;
			ncin= document.getElementById("ncin1").value ;
		    email= document.getElementById("email").value;
            validd=true;
			erreur="";
			if(nom.length <= 0) { 
                erreur += 'You need to enter your name!  ';
           
                validd = false;
            }

		   if(email.length <= 0) { 
                erreur += 'You need to enter your mail!  ';
           
                validd = false;
            }

         
			if(ncin.length <= 0) { 
                erreur += 'You need to enter your number!  ';
              
                validd = false;
            } else if (!verif_ncin(ncin)) {
                erreur += ' Invalid number!  ';
               
                validd = false;
            }
            
			if (validd){ 
			localStorage.setItem("email",email);
			localStorage.setItem("username",nom);
			localStorage.setItem("num",ncin);
   
			let a= document.getElementById("user").innerHTML=localStorage.getItem("username");
			document.getElementById('id02').style.display='none';
			}
			else alert(erreur); 
		}




   //verify phone number function : 
		function verif_ncin(ncin) {
            let v = true;
            let taille = ncin.length;
            for(let i=0; i<taille; ++i) {
                if ((ncin.charAt(i) < "0") || (ncin.charAt(i) > "9") || (taille!=8)) 
                    v = false;
            }
            return v;
        }

    //add new contact to the #contenu  : 
		function add_contact()
        { 

		  var valid=true;
         let nom = document.getElementById("nom").value;
         let file=document.getElementById("photo").value;
		 let num = document.getElementById("ncin").value;
		 let job=  document.getElementById("job").value;
         let field=document.getElementById("contenu");
         erreur="";

        var x=document.getElementsByName('gender');
        var gender ; 
        for ( let i=0 ; i<x.length ; i++ ) 
             {
        if (x[i].checked )  gender = x[i].value ; 
              }


		 if(gender==null) { 
                erreur += 'You need to enter gender!  ';
           
                valid = false;
            }

       
		 if(nom.length <= 0) { 
                erreur += 'You need to enter name!  ';
           
                valid = false;
            }

		 if(job.length <= 0) { 
                erreur += 'You need to enter job!  ';
           
                valid = false;
            }

         
			if(num.length <= 0) { 
                erreur += 'You need to enter number!  ';
              
                valid = false;
            } else if (!verif_ncin(num)) {
                erreur += ' Invalid number!  ';
               
                valid = false;
            }

       
        
		 if(valid)
		        {  
			nbcont++;
          //we're adding new contact so #nocont div will be not displayed 
		 document.getElementById("nocont").style.display="none";
          

		   //creating new elements to #contenu 
         let kaka=document.createElement("div");
		 kaka.id="contact";
		 //adding new class to contact depending on gender 
          if (gender=="Female") kaka.classList.add('Female');
		  else kaka.classList.add("Male");
         

         let a=document.createElement("h2");
         let node1 = document.createTextNode(nom);
		 a.id="esm";
		 a.classList.add('aclass');
         a.appendChild(node1);
        
		 let b = document.createElement("span");
		 let node2=document.createTextNode(num);
		 b.classList.add('bclass');
         b.id="span1";
         b.appendChild(node2);
		


		 let c = document.createElement("span");
		 let node3=document.createTextNode(job);
		 c.classList.add('cclass');
		 c.id="span2";

         c.appendChild(node3);
		 
		 

            var img = document.createElement("img");
            var filename = file;
            filename = filename.substring(filename.lastIndexOf('\\')+1);

            // Tester si le fichier uploadé est une image
            extension = filename.substring(filename.lastIndexOf('.')+1);
            switch(extension)
            {
                case "png":
                case "jpg":
                case "jpeg":
                case "gif":
                case "bmp":
                 img.src = "images\\" + filename;
                    break;
                 default:
                 img.src = "images\\default.png";
                    break;
            }
            img.width = 90;
            img.height = 150;
            

		   //create update button 
          let up=document.createElement("p");
		  let update=document.createTextNode("Update");
		  up.classList.add('upclass');
		   up.appendChild(update);
		   up.id="up";
        
			
		   up.onclick = function updatecontact()

		   {

			document.getElementById('id03').style.display='block';    
           esm = document.getElementById("NAME").value = nom;
           numero = document.getElementById("NCIN").value = num; 
		   jo= document.getElementById("JOB").value = job;
		   localStorage.setItem("Folder1", field.innerHTML);
		   }

		  


          //create delete button 
		let del=document.createElement("p");
		let delet=document.createTextNode("Delete");
		del.id="del";

           //add a function when click to delete button 
		del.addEventListener("click", function () {
        this.parentElement.remove();
		field=document.getElementById("contenu");
         localStorage.setItem("Folder1", field.innerHTML);
		 nbcont=nbcont-1;
		if (localStorage.getItem("Folder1") === null) document.getElementById("nocont").style.display="block";
        });
          


		del.appendChild(delet);
		 kaka.appendChild(up);
		 kaka.appendChild(del);
         kaka.appendChild(img);
         kaka.appendChild(a);
		 kaka.appendChild(b);
		 kaka.appendChild(c);
         field.appendChild(kaka);
        
         //store the whole #contenu(field) to local storage 
		 localStorage.setItem("Folder1", field.innerHTML);
		
		  //closing modal at the end 
         document.getElementById('id01').style.display='none';
         
	
		             }
		else alert(erreur);
		

        }

	 


     //retrieve function will be called onreload , displaying stored content every time we reload page 
      
  		function retrieve() {
  			 //if we dont have any content in folder1 stored in localstorage , adding a new 
    if (localStorage.getItem("Folder1") === null)  {document.getElementById("nocont").style.display="block";}
    else {
          
		 //display stored content 
      document.getElementById("contenu").innerHTML = localStorage.getItem("Folder1");

	  //in this case folder1!=NULL  ,so nocont will be not displayed 
      document.getElementById("nocont").style.display="none";



      let buttons = document.getElementsByTagName("p");
       
      for (var z = 0; z < buttons.length; z++) {

        if (buttons[z].innerText == "Delete") {
           buttons[z].addEventListener("click", function () {
            this.parentElement.remove();
			nbcont=nbcont-1;
			field=document.getElementById("contenu");
            localStorage.setItem("Folder1", field.innerHTML);});
                                             }
                                               }
												   
        let clear=document.getElementById("btn1");
		clear.addEventListener("click",function() {
        document.getElementById("contenu").remove();
		localStorage.removeItem('Folder1');
	    nbcont=0;
		document.getElementById("nocont").style.display="block";
	                                              }) 
	    field=document.getElementById("contenu");
	     localStorage.setItem("Folder1", field.innerHTML);
         

         upp=document.getElementsByClassName("upclass");
		 for (var k = 0; k < upp.length; k++) {
			 upp[k].addEventListener("click",function(){
            
		   document.getElementById('id03').style.display='block';    
           esm = document.getElementById("NAME").value = nom;
           numero = document.getElementById("NCIN").value = num; 
           jo= document.getElementById("JOB").value = job;
           localStorage.setItem("Folder1", field.innerHTML);
			 })
             

                                            }
        

									     }
									   
			 }						   
	  





	 function update2()
	 {
    let a=document.getElementById("NAME").value;
    let b=document.getElementById("NCIN").value;
    let c=document.getElementById("JOB").value;
    
    let esm= document.getElementById("esm").innerHTML=a;
    let NCIN= document.getElementById("span1").innerHTML=b;
    let JOBB= document.getElementById("span2").innerHTML=c;
	
	localStorage.setItem("Folder1", field.innerHTML);
    document.getElementById('id03').style.display='none'


}







  //clear function will clear every contact we have from the page and localstorage 
   function clear1()
   {
	document.getElementById("contenu").remove();
	localStorage.removeItem('Folder1');
	location.reload();
    document.getElementById("nocont").style.display="block";
   }


   function search_contact() {

   //when we type in search bar , "done" button show up  	
    document.getElementById("donebutton").style.display ="inline-block";
   //we get access to searchbar input 
    let input = document.getElementById('searchbar').value;
    input=input.toLowerCase();
	let a = document.getElementById("contenu");
    //access to all names , and numbers by classname 
	var y = document.getElementsByClassName("bclass");
	var x = document.getElementsByClassName("aclass");

 
	var  img = document.querySelectorAll("div>img");

	let b = document.getElementById("found");

	found=""
    //browse all names 
    for (i = 0; i < x.length; i++) { 
       
        if (x[i].innerHTML.toLowerCase().includes(input)) {    
	    	src=img[i].src;

	     found+="<div class='founddiv'><h2 class='foundname'>" + x[i].innerHTML+"</h2>"+"<span class='foundnum'>"+y[i].innerHTML+"</span> <img class='foundimg'src='"+src+"'></div>"; 
		                                                  }								
                                  }
		 a.style.display="none";
	     b.innerHTML=found; 

		
         


   }
   function donesearch(){
   
    let a = document.getElementById("contenu").style.display="grid";
	let b = document.getElementById("found").innerHTML="";
    document.getElementById("searchbar").value="";
	document.getElementById("donebutton").style.display="none";
   }
