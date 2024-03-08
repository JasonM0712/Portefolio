<template>
  <div class="principalpage">
    <h1>Bienvenue sur mon Portefolio</h1>

    <div class="presetation">
      <div class="textBlock">
        <h2 class="titlePreset">Présentation</h2>
        <p>Je suis Jason Morel, je suis actuellement en formation à l'Afpa en distanciel pour devenir développeur web et web mobile.</p>
        <p>Je suis passionné par l'informatique et le développement web, j'ai choisi de me reconvertir dans ce domaine car j'aime les défis et apprendre de nouvelles choses.</p>
        <p>Je suis actuellement à la recherche d'un stage en entreprise pour valider ma formation.</p>
      </div>
    </div>
    <div class="blockSkill">
      <h2 class="titleSkillMap">SkillMap</h2>
      <img class="imgSkillMap" src="@/assets/Skillmap.png" alt="SkillMap"  width="700px" height="600px">
      <a class="lienSkillMap" href="https://passeport.dev/p/35340d04-42d5-4901-9e86-7c02a5c378ce">Lien vers SkillMap</a>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.principalpage{
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

h1{
    display: block;
    color : white ; 
    margin-left: 20px;
}

.presetation{
    display: flex;
    justify-content: center;
    align-content: center;
    margin: 0 auto;
    border: solid 2px #494b52;
    background-color: #31469A;
    border-radius: 20px;
    width: 800px;
    height:280px; 
    color:white;
    text-align: center;
    margin-top : 50px;
    margin-bottom: 20px;
}

.textBlock{
    display: block;
    color:white;
    padding: 20px;
    text-align: center;
}
 
.blockSkill{
    display: block;
    justify-content: center;
    align-content: center;
    margin: 0 auto;
    border: solid 2px #494b52;
    background-color: #31469A;
    border-radius: 20px;
    width: 800px;
    height:700px; 
    color:white;
    text-align: center;
    margin-bottom: 20px;
}

.lienSkillMap{
    display: block;
    color:white;
    padding: 20px;
    text-align: center;
    text-decoration: none;
}

.imgSkillMap{
    background-color: #31469A;
    border-radius: 20px;
    color:white;
}

.imgSkillMap :hover{
    background-color: #494b52;
    color:white;
    cursor: pointer;
    border-radius: 5px;
    padding: 5px;
    margin: 5px;
    transition: 0.5s;
    box-shadow: 0px 0px 10px 0px #4d4d4d;
} 

.titleSkillMap{
    display: block;
    color:white;
    padding: 20px;
    text-align: center;
    font-family: cursive ;
} 

.titlePreset{
    display: block;
    color:white;
    text-align: center;
    font-family: cursive ;
    margin-bottom: 10px;
}

@media (max-width: 1600px){
    .principalpage{
        margin-left: 0px ;
        margin-right:0px ;
    }
    .presetation{
        display: block;
        width: 400px;
        height:250px; 
    }

    .blockSkill{
        display: block;
        width: 400px;
        height:400px; 

    } 

    .imgSkillMap{
        width: 300px;
        height:300px; 
    }
    .lienSkillMap{
        display: block;
        color:white;
        padding: 20px;
        text-align: center;
        text-decoration: underline;
    }
}

@media(max-width : 1900px){

    .presetation{
        display: block;
        width: 650px;
        height:250px; 
    }

    .blockSkill{
        display: block;
        width: 400px;
        height:400px; 

    } 

    .imgSkillMap{
        width: 300px;
        height:300px; 
    }
    .lienSkillMap{
        display: block;
        color:white;
        padding: 20px;
        text-align: center;
        text-decoration: underline;
    }
    @media(max-width : 1450px ){ 
        .principalpage{
            margin-left: 0px ;
            margin-right:0px ;
            left: 5px; 
        }
        .presetation{
            display: block;
            width: 400px;
            height:250px;
            left: 5px; 
        }
    
        .blockSkill{
            display: block;
            width: 400px;
            height:400px; 
    
        } 
    
        .imgSkillMap{
            width: 300px;
            height:300px; 
        }
        .lienSkillMap{
            display: block;
            color:white;
            padding: 20px;
            text-align: center;
            text-decoration: underline;
        }
    }

    @media(max-width : 900px){
        .principalpage{
            margin-left: 0px ;
            margin-right:0px ;
            left: 5px; 
        }
        .presetation{
            display: block;
            width: 400px;
            height:250px;
            left: 5px; 
        }
    
        .blockSkill{
            display: block;
            width: 400px;
            height:400px; 
    
        } 
    
        .imgSkillMap{
            width: 300px;
            height:300px; 
        }
        .lienSkillMap{
            display: block;
            color:white;
            padding: 20px;
            text-align: center;
            text-decoration: underline;
        }
    }

    @media(max-width : 600px){
        .principalpage{
            margin-left: 0px ;
            margin-right:0px ;
            left: 5px; 
        }
        .presetation{
            display: block;
            width: 300px;
            height:250px;
            left: 5px; 

        }
    
        .blockSkill{
            display: block;
            width: 400px;
            height:400px; 
    
        } 
    
        .imgSkillMap{
            width: 300px;
            height:300px; 
        }
        .lienSkillMap{
            display: block;
            color:white;
            padding: 20px;
            text-align: center;
            text-decoration: underline;
        }

    }

    @media (max-width: 400px){
        .principalpage{
            margin-left: 0px ;
            margin-right:0px ;
            left: 5px; 
        }
        .presetation{
            display: flex;
            width: 200px;
            height:300px;
            margin: 0 auto;
            font-size: 12px;
            margin-top: 10px;
            margin-bottom: 10px;

        }
    
        .blockSkill{
            display: block;
            margin: 0 auto;
            width: 250px;
            height:400px; 
    
        } 
    
        .imgSkillMap{
            width: 200px;
            height:200px;
        }
        .lienSkillMap{
            display: block;
            color:white;
            padding: 20px;
            text-align: center;
            text-decoration: underline;
        }
    }
    


}


</style>