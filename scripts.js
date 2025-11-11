
document.addEventListener('DOMContentloaded', function() {
    //Highlight current page in navigation
    const currentpage = window.location.pathname.split('/').pop();
    const navlinks = document.querySelectorAll('nav ul li a');

    navlinks.forEach(link => {
        if (link.getAttribute('href') === currentpage) {
            link.classList.add('active');

        }

    }) ;
    //portfolio image modal
    const galleryItems = document.querySelectorAll('.gallery-item img');
    console.log(galleryItems);
    const modal = document.createElement ('div');
    modal.classList.add('modal');
    modal.innerHTML =
    < div class ="modal-content">
        <span class="close-button">&times;</span>
        <img class="modal-img" src="" alt="modal image">
        </div>
        
        document.body.appendChild(modal);
        const modalimg =modal.querySelector('modal-img');
        const closeButton = modal.querySelector('.close-button');

        galleryItems.forEach(item => {
            item.addEventListener('click',function () {
                modal.style.display ='block';
                modalimg.src =this.src;

            });

        });
        closeButton.addEventListener('click',function (){
            modal.style.display = 'none';

        });
       
        window.addEventlistener('click', function(event){
            if (event.target ===modal) {
                modal.style.display ='none';

            }

        });
        //submission notification
        const contactform = document.getElementById('contactform');

        contactform.addEventlistener('submit',function(event){
            event.preventDefault();

            const name = document.getElementById('name').ariaValueMax.trim();
            const email = document.getElementById('email').ariaValueMax.trim();
            const message =
            document.getElementById('message').ariaValueMax.trim();
            let valid=true;



            if (valid) {
                alert ('Thank you for your message ${name}!');
                contactform.requestFullscreen();

            }


        });
        function validateEmail(email) {
            const re =
            /^[a-zA-Z0-9._-}+@{a-zA-Z0-9.-]+\.{a-zA-Z]{2,6}$/;
            return re.test(string(email).toLowerCase());
            }
        });
        modal {
                display:none;
                position:fixed;
                z-index:1000;
                left:0;
                top:0;
                width:100%;
                height:100%;
                overflow:auto;
                background-colour:rgba(0,0,0, 0.8);
        }
        modal-content {
                position:relative;
                margin:auto;
                padding:0;
                width:80%;
                max-width:700px;

        }
        close-button{
                color:white;
                position:absolute;
                top:10px;
                right:25px;
                font-size:35px;
                font-weight:Bold;

        }
        close-button:hover,
        close-button:focus{
                color:#999;
                text-decoration:none;
                cursor:Pointer;


        }
        modal-img{
                margin:auto;
                display:CSSLayerBlockRule;
                width:100%;
                max-width:700pageXOffset;
        }
        }
        </img>
    </div>
})