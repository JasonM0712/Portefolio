<template>

    <div class="principalpage">
        <h1>voiçi mets projet</h1>
        <div class="pagegrid">
            <div class="t1">
                <h2>Projet réalisé</h2>
            </div>
            <div class="t2">
                <h2>Projet en cours</h2>
                <ul>
                    <li>Squad MBT wiki</li>
                </ul>
            </div>
            <div class="t3">
                <h2>Projet à venir</h2>
            </div>
            <div class="t4">
                <h2>Projet pendant ma formation</h2>
                <ul>
                    <li>Je suis à la recherche d'un stage
                        du 13 mai au 19 juillet 2024
                    </li>
                </ul>
            </div>

            <div class="t5">
                <h2>Mets projet sur github</h2>
                <a href="https://github.com/JasonM0712">
                <button class="buttonGit">Github</button>
                </a>
            </div>
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
    margin-top: 20px;
    background-color: #494b52 ;
    opacity: 0.9;
    height: 95%;
    box-shadow:0px 0px 10px 10px #31469A;
    border : 1px solid #31469A;
}

h1{
    display: block;
    color : white ; 
    margin-left: 20px;
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
  height: 40px;
  width: 100px;
  padding: 5px;
  margin: 0% auto;
  margin-top: 30px;
  box-shadow: 0px 0px 10px 0px #4d4d4d;
}

.buttonGit:hover{
  color: white;
  border: #31469A 2px solid;
  cursor: pointer;
  text-decoration: none;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 0px #4d4d4d;
}

.pagegrid{
    display: grid ; 
    flex-direction: column;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    padding: 20px;
    min-width: 300px;
    justify-content: center;
    height: 100%;
}

.t1{
    display: block;
    justify-content: center;
    border: solid 2px #494b52;
    background-color: #31469A;
    border-radius: 20px ;
    width: 200px;
    height:200px; 
    color:white;
    padding: 20px;
    text-align: center;
    margin-left : 50px ;
    margin-bottom: 20px;
}

.t2{
    display: block;
    justify-content: center;
    border: solid 2px #494b52;
    background-color: #31469A;
    border-radius: 20px ;
    width: 200px;
    height:200px; 
    color:white;
    padding: 20px;
    text-align: center;
    margin-left : 50px ;
    margin-bottom: 20px;
}

.t3{
    display: block;
    justify-content: center;
    border: solid 2px #494b52;
    background-color: #31469A;
    border-radius: 20px ;
    width: 200px;
    height:200px; 
    color:white;
    padding: 20px;
    text-align: center;
    margin-left : 50px ;
    margin-bottom: 20px;
}

.t4{
    display: block;
    justify-content: center;
    border: solid 2px #494b52;
    background-color: #31469A;
    border-radius: 20px ;
    width: 200px;
    height:200px; 
    color:white;
    padding: 20px;
    text-align: center;
    margin-left : 50px ;
    margin-bottom: 20px;
}  

.t5{
    display: block;
    justify-content: center;
    border: solid 2px #494b52;
    background-color: #31469A;
    border-radius: 20px ;
    width: 200px;
    height:200px; 
    color:white;
    padding: 20px;
    text-align: center;
    margin-left : 50px ;
    margin-bottom: 20px;
}

@media(max-width: 1500px){
    .pagegrid{
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
        border : 1px solid #31469A;
    }
    .t1.t2.t3.t4{
        display: flex;
        justify-content: center;
        align-items: center;    
        border: solid 2px #494b52;
        border-radius: 20px ;
        width: 200px;
        height:200px; 
        color:white;
        padding: 20px;
        text-align: center;
        margin-left : 50px ;
        margin-bottom: 20px;
    }
}

@media(max-width: 800px){
    .pagegrid{
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
        border : 1px solid #31469A;
    }
    .t1.t2.t3.t4{
        display: inline-block;
        justify-content: center;
        align-items: center;    
        border: solid 2px #494b52;
        border-radius: 20px ;
        width: 100px;
        height:100px; 
        color:white;
        padding: 20px;
        text-align: center;
        margin-left : 50px ;
        margin-bottom: 20px;
    }

}



</style>