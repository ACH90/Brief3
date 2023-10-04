document.addEventListener('DOMContentLoaded', () => {

    let body = document.querySelector("body")
    body.className = "bg-slate-50"

    let rootContainer = document.getElementById("root")
    
    let url = "https://reqres.in/api/users?per_page=12" 

    rootContainer.className = "bg-slate-50 h-full w-full inline-flex flex-row gap-10 flex-wrap justify-center items-center text-center p-10"
    
  
    
fetch(url)
    .then((response) => response.json())
    .then((array) => 
    {
        for (let i = 0; i < array.data.length; i++) {
            let element = array.data[i];
            //Creer Div
            let elementDiv = document.createElement("div")
            elementDiv.className = "block rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
            rootContainer.append(elementDiv) 
            // rootContainer.className = "fixed w-full h-full"

            //Creer Gestionnaire d'évenement de click pour chaque cards

            elementDiv.addEventListener("click", () => {
                // console.log(element.first_name)
                afficherModal(element)
                
            })

            //Creer la fonction "afficher la modale"
            function afficherModal(element) {
                const backgroundModal = document.createElement("div")
                backgroundModal.className = "absolute w-full h-full bg-black opacity-75"
                const modal = document.createElement("div");
                modal.className = "absolute mx-auto my-auto px-5 text-black block rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
                modal.classList.add("modal");
                modal.innerHTML = `
                    <div class= "p-4 mx-auto border-b-2 border-neutral-100 px-6 pb-1 dark:border-neutral-600 dark:text-neutral-50 font-semibold" >
                        <div>
                        <h2 class="py-6 font-semibold">${element.first_name} ${element.last_name}</h2>
                        </div>
                        <div>
                        <img src="${element.avatar}" alt="avatar de "${element.first_name}" class="mx-auto my-auto">
                        </div>
                        <div>
                        <p class="py-6">
                        <a href="mailto:${element.email}">${element.email}</a>
                        </p>
                       
                        </div>
                        <div class="p-6">
                            <p>
                                Abitbol l'homme trop bien sappé <br> On va manger des chips!!!!
                             </p>
                        </div>
                        <button id="fermerModal">Fermer</button>
                    </div>
                `;
            
                // Ajouter un gestionnaire d'événement de clic pour fermer la modale
                backgroundModal.addEventListener("click", () => {
                    modal.remove()
                    backgroundModal.remove()
                })

                modal.querySelector("#fermerModal").addEventListener("click", () => {
                    modal.remove()
                    backgroundModal.remove()
                })
            
                rootContainer.appendChild(backgroundModal)
                rootContainer.appendChild(modal)
            }
            
            //Creer prenom
            let prenom = document.createElement("h2")
            prenom.textContent = element.first_name
            prenom.className = "border-neutral-100 px-6 pt-1 dark:border-neutral-600 dark:text-neutral-50 font-semibold"
            elementDiv.append(prenom)

            //Creer Nom
            let nom = document.createElement("h2")
            nom.textContent = element.last_name
            nom.className = "border-b-2 border-neutral-100 px-6 pb-1 dark:border-neutral-600 dark:text-neutral-50 font-semibold"
            elementDiv.append(nom)

            //Creer Image
            let Img = document.createElement("img")
            Img.src = element.avatar
            Img.className = "w-[auto] h-[200px] p-6 rounded-full ml-auto mr-auto"
            elementDiv.append(Img)

            //Creer mail 
            let mail = document.createElement("p")
            mail.textContent = element.email
            mail.className = "border-t-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50"
            elementDiv.append(mail)
       

            
        }
    }  
    )
    
})