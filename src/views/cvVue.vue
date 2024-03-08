<template>
    <div class="principalpage">
        <div class="pageCV">
            <h1>voiçi mon C.V</h1>
                <img src="@/assets/CV.png" alt="cv" width="500px" height="600px">
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
    margin-top: 20px ;
    margin-left: 30px;
}

img{
    display: block;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;
    border: solid 2px #494b52;
    border-radius: 20px;
    box-shadow: 0px 0px 10px 0px #4d4d4d;
}

@media(max-width: 768px){
    img{
        width: 300px;
        height: 400px;
    }
} 

@media(max-width: 1024px){
    img{
        width: 400px;
        height: 500px;
    }
}

@media(max-width: 500px){
    img{
        width: 200px;
        height: 250px;
    }
}

</style>