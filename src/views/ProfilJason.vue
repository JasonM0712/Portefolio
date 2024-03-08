<template class="bodyProfil">
  <div class="pageProfil">
    
      <div class="banner">
        <div class="gridUn">
          <h1>Profil de Jason</h1>
          <div class="bullProfil">
            <h2>Profil</h2>
            <h4>Nom : Morel</h4>
            <h4>Prénom : Jason</h4>
            <router-link to="/cvvue">CV</router-link>
          </div>
        </div>
    <div class="gridDeux">
          <div class="techno">
            <h2>Techno que j'utilise</h2>
            <div class="gridColumn">
              <div class="tableauFront">
                <ul>
                  <h3>Front-end</h3>
                  <li>HTML / CSS</li>
                  <li>Boothstrap</li>
                  <li>Javascript</li>
                  <li>Vue.js</li>
                </ul>
              </div>
              <div class="tableauBack">
                <ul>
                  <h3>Back-end</h3>
                  <li>Node.js</li>
                  <li>PHP</li>
                  <li>MongoDB</li>
                </ul>
              </div>
              <div class="tableauEquipe">
              <ul>
                <h3>Travaux en Equipe</h3>
                <li>GitHub</li>
                <li>Methode Merise</li>
              </ul>
            </div>
        </div>
    </div>
  </div>
<div class="gridTrois">
        <div class="experience">
          <h2>Expérience</h2>
          <p>Je suis un développeur web junior, je suis actuellement en formation à l'Afpa en distanciel.</p>
          <div class="buttonProjet">
            <a class="buttonSkill" href="https://passeport.dev/p/35340d04-42d5-4901-9e86-7c02a5c378ce">Skill Map</a>
            <a class="buttonGit" href="https://github.com/JasonM0712">GitHub</a>
          </div>
        </div>
      </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
h1{
  display: block;
  color : white ; 
  margin-left: 20px;
}
.pageProfil{
  display: block;
    margin: 0% auto;
    justify-content: center;
    align-items: center; 
    margin-left: 20%;
    margin-right: 20%;
    background-color: #494b52 ;
    opacity: 0.9;
    height: 100vh;
    box-shadow:0px 0px 10px 10px #31469A;
    border : 1px solid #31469A;
}
.bullProfil{
  display: block;
  opacity: 1;
  justify-content: center;
  border: solid 2px #494b52;
  background-color: #31469A;
  border-radius: 999px;
  width: 200px;
  height:200px; 
  color:white;
  padding: 20px;
  text-align: center;
  margin-left : 50px ;
  margin-bottom: 20px;
}

a:-webkit-any-link {
    color: white;
    cursor: pointer;
    text-decoration: none;
}

.gridColumn{
  display: flex;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  padding: 20px;
  justify-content: center;
}

.cardProfil {
  display: flex;
  opacity: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 50%;
  height: 50%;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px #4d4d4d;
}

.techno{
  display: block;
  opacity: none;
  justify-content: center;
  align-items: center;
  margin: 0% auto;
  background-color: #31469A;
  font-size: 20px;
  color: white;
  width: 800px;
  height: 350px;
  max-height: 800px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px #4d4d4d;
}

.tableauFront{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px ;
  background-color: #494b52;
  font-size: 20px;
  color: white;
  width: 200px;
  height: 200px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px #4d4d4d;
}

.tableauBack{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #494b52;
  font-size: 20px;
  color: white;
  width: 200px;
  height: 200px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px #4d4d4d;
  padding: 10px ;
  margin-left: 30px;
  margin-bottom: 60px;
}

.tableauBack :hover{
  background-color: #4d4d4d;
  color: white;
  border-radius: 5px;
  padding: 5px;
  margin: 5px;
  transition: 0.5s;
  box-shadow: 0px 0px 10px 0px #4d4d4d;
}

.tableauEquipe{ 
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #494b52;
  font-size: 20px;
  color: white;
  width: 200px;
  height: 200px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px #4d4d4d;
  padding: 30px ;
  margin-left: 30px;
  margin-bottom: 60px;

}

.tableauEquipe :hover {
  background-color: #4d4d4d;
  color: white;
  border-radius: 5px;
  padding:10px;

  transition: 0.5s;
  box-shadow: 0px 0px 10px 0px #4d4d4d;
}

.tableauFront h3, .tableauEquipe h3, .tableauBack h3 {
  padding: 0 ;
  margin: 0 ;
  margin-bottom: 10px ;
  font-family: cursive;
}



.tableauFront :hover{
  background-color: #4d4d4d;
  color: white;
  border-radius: 5px;
  padding: 5px;
  margin: 5px;
  transition: 0.5s;
  box-shadow: 0px 0px 10px 0px #4d4d4d;
}

.experience{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0% auto;
  margin-top: 30px;
  padding: 10px;
  background-color: #31469A;
  font-size: 20px;
  color: white;
  width: 800px;
  height: 200px;
  border-radius: 10px;
} 

.gridDeux{
  grid-column: 2;
  
}

.techno h2{
  font-family: cursive;
  padding: 10px ;
  margin: 0 ;
}

.buttonSkill{
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size:20px;
  color: white;
  background-color:  #494b52;
  border-radius: 5px;
  padding: 5px;
  margin: 5px;
  box-shadow: 0px 0px 10px 0px #4d4d4d;
}

.buttonSkill :hover{
  background-color: #311462 ;
  color: white;
  cursor: pointer;
  text-decoration: none;
  border-radius: 5px;
  padding: 10px;
  margin: 5px;
  box-shadow: 0px 0px 10px 0px #4d4d4d;
}

.buttonGit{
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size:20px;
  color: white;
  background-color:  #494b52;
  border-radius: 5px;
  padding: 5px;
  margin: 5px;
  box-shadow: 0px 0px 10px 0px #4d4d4d;
}

.buttonProjet{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
}

@media(max-width : 1100px){
  .pageProfil{
    margin: 0% auto;
    width: 80%;

  } 
  .principalpage{
    display: block;
    justify-content: center;
    padding: 20px;
    margin-left: 20px ;
    margin-right:20px ;
    min-width: 300px;
    background-color: #494b52 ;
    justify-content: center;
    height: 100%;
    box-shadow:0px 0px 10px 10px #31469A;

  }

  .experience{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0% auto;
    margin-top: 30px;
    padding: 10px;
    background-color: #31469A;
    font-size: 15px;
    color: white;
    width: 600px;
    height: 200px;
    border-radius: 10px;
  }

  .techno{
    display: block;
    opacity: none;
    justify-content: center;
    align-items: center;
    margin: 0% auto;
    background-color: #31469A;
    font-size: 15px;
    color: white;
    width: 450px;
    height: 300px;
    max-height: 800px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px #4d4d4d;
  }

  .tableauBack{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #494b52;
    font-size: 15px;
    color: white;
    width: 150px;
    height: 200px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px #4d4d4d;
    padding: 10px ;
    margin-left: 30px;
    margin-bottom: 60px;
  }

  .tableauFront{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px ;
    background-color: #494b52;
    font-size: 15px;
    color: white;
    width: 150px;
    height: 200px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px #4d4d4d;
}

.tableauEquipe{ 
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #494b52;
  font-size: 15px;
  color: white;
  width: 150px;
    height: 200px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px #4d4d4d;
  padding: 10px ;
  margin-left: 30px;
  margin-bottom: 60px;
}
}
@media (max-width: 768px) {
  .pageProfil {
    width: 100%;
    margin-left: 0px;
    margin-right: 0px;
    font-size: 12px;
  }
  .bullProfils{
    display: flex;
    height: 30px;
    width: 30px;
    margin: 0 auto;
    margin-left: 0px;
    margin-right: 0px;
    font-size: 12px;
  }

}

@media (max-width: 400px){
  .pageProfil{
    display: flex ; 
    flex-direction: column;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    padding: 20px;
    min-width: 300px;
    justify-content: center;
    height: 100%;
  } 
  .principalpage{
    display: block;
    justify-content: center;
    padding: 20px;
    margin-left: 20px ;
    margin-right:20px ;
    min-width: 300px;
    background-color: #494b52 ;
    justify-content: center;
    height: 100%;
    box-shadow:0px 0px 10px 10px #31469A;
  }

  .techno{
    display: block;
    opacity: none;
    justify-content: center;
    align-items: center;
    margin: 0% auto;
    background-color: #31469A;
    font-size: 10px;
    color: white;
    width: 300px;
    height: 200px;
    max-height: 800px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px #4d4d4d;
  }

  .tableauBack{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #494b52;
    font-size: 10px;
    color: white;
    width: 100px;
    height: 100px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px #4d4d4d;
    padding: 10px ;
    margin-left: 30px;
    margin-bottom: 60px;
  }

  .tableauFront{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px ;
    background-color: #494b52;
    font-size: 10px;
    color: white;
    width: 100px;
    height: 100px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px #4d4d4d;
  }
  .tableauEquipe{ 
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #494b52;
    font-size: 10px;
    color: white;
    width: 100px;
    height: 100px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px #4d4d4d;
    padding: 10px ;
    margin-left: 30px;
    margin-bottom: 60px;
  }

  .experience{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0% auto;
    margin-top: 30px;
    padding: 10px;
    background-color: #31469A;
    font-size: 10px;
    color: white;
    width: 300px;
    height: 200px;
    border-radius: 10px;
  }

  .buttonSkill{
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-size:10px;
    color: white;
    background-color:  #494b52;
    border-radius: 5px;
    padding: 5px;
    margin: 5px;
    box-shadow: 0px 0px 10px 0px #4d4d4d;
  }
  .buttonGit{
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-size:10px;
    color: white;
    background-color:  #494b52;
    border-radius: 5px;
    padding: 5px;
    margin: 5px;
    box-shadow: 0px 0px 10px 0px #4d4d4d;}
}


</style>