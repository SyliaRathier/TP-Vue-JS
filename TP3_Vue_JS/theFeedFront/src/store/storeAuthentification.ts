import { reactive } from 'vue'

export const storeAuthentification = reactive({
  JWT: "",
  estConnecte: false,
  connexion(login: string, motDePasse: string, succes:()=>void, echec:()=>void): void{
    //fait le fetch et change le JWT si succès
    //execute succes ou echec en fonction du succès de l'authentification
    fetch("https://localhost:8000/api/auth", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "login": login,
            "password": motDePasse
          }),
    }).then(reponsehttp => {
        if(reponsehttp.status!== 200){
            this.estConnecte = false;
            echec();
        }else{
            reponsehttp.json()
            .then(reponseJSON => {
                this.JWT = reponseJSON.token;
                this.estConnecte = true;
                succes();
                //console.log(this.JWT);
                }
            );
            
        }})
        
    }
});

