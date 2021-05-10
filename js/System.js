class System{

    constructor(){}

    authenticate(actualCode,enterCode){
        textSize(50);
        fill("black");
        text(code,300,300)
        if(actualCode === enterCode)
          return true
        else
          return false      
    }

}