<template>
<div>
    <header>
        <div class="barNav">
           <div class="buttonNav">
               <router-link to="/acceuilpf">Acceuil</router-link>
               <router-link to="/profiljason">Profil</router-link>
               <router-link to="/projetvue">Projets</router-link>
                <div type="button" @click="openModal(index)">Contact</div>
               <!-- Modal contact -->
            </div>
        </div>
               
               <div class="modal" v-if="modal" v-cloak>
                    <div class="modal-content">
                        <div class="modal-header">
                            <span class="close-button" v-on::click="closeModal">&times;</span>
                            <div class="contact">
                                <h1>Contact</h1>
                                <p>Vous pouvez me contacter par mail à l'adresse suivante : <strong class="info">jasonmorel54@gmail.com</strong></p>
                                <p>numéro de téléphone : <strong class="info">06.18.13.51.63</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
    
    </header>
    
 

</div>
<div class="flanc">
    <router-view/>
</div>
</template>

<script>
export default {

    data(){
        return {
  
        }
    },

    computed: {
        modal(){
            return this.$store.state.modal
        }
    },

    methods: {
        openModal(index){
            this.$store.commit('openModal', index)
        },

        closeModal(index){
            this.$store.commit('closeModal' , index)
        }
    }

}
</script>


<style > 

*, ::before, ::after{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


header {
    text-decoration: none;
}

.contact h1{
    font-family: cursive ;
}

.contact {
    display: block;
    align-items: center;
    color: white;
    margin-top: 0px;
}

.barNav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-decoration: none;
    background-color: #151E40 ;
    color: white;
    height: 50px;
    box-shadow: 0px 0px 10px 0px #4d4d4d;
    width: 100%;
    margin-left: 0px ;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    
} 

.buttonNav {
    display: flex;
    text-decoration: none;
    font-size:20px;
    color: white;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
    margin-left: 0px ;
    z-index: 1;
    left: 0;
    top: 0;
}

.buttonNav :hover {
    background-color: #4d4d4d;
    color: white;
    cursor: pointer;
    text-decoration: none;
    border-radius: 5px;
    padding: 5px;
    margin: 5px;
    transition: 0.5s;
    box-shadow: 0px 0px 10px 0px #4d4d4d;
}

.buttonNav :active {
    background-color: #4d4d4d;
    color: #31469A;
    cursor: pointer;
    border-radius: 5px;
    padding: 5px;
    margin: 5px;
    transition: 0.5s;
    box-shadow: 0px 0px 10px 0px #4d4d4d;
}

a:-webkit-any-link {
    color: white;
    cursor: pointer;
    text-decoration: none;
}
/* .flanc {
    display: flex;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    background-attachment:fixed ;
    background-size : 100% 100% ;
    width: 100%;
    height: 100vh;
    background-image: url('assets/codebase.jpg') ;
    left: 0;

} */

.flanc{
    display: block;
    margin-top : 50px;
    background-size : 100%;
    background-attachment: fixed;
    height: 100vh;
    background-image: url('assets/codebase.jpg') ;
}

.modal{
    display: flex;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.5);
    justify-content: center;
    align-items: center;
}

.modal-content{
    display: flex;
    justify-content: center;
    height: 20%;
    width: 40%;
    padding-bottom: 20px;
    align-items: center;
    background-color: #494b52;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px #4d4d4d;
}



.close-button{
    display: flex;
    justify-content: flex-end;
    color: white;
    font-size: 20px;
    cursor: pointer;
}

.info{
    text-decoration: underline;
}

@media (max-width: 768px) {
    .modal-content{
        padding: 5px;
        width: 80%;
    }
}

</style>
