//throw

function SayMayName(name = ''){
    if (name === ''){
        throw ' nome é obrigatório'

    }

     console.log('depois do erro ');
    }
    SayMayName()
   //try....catch
   try{
      SayMayName()
   }catch(e){
     console.log(e);
   }
   console.log('após a função de erro ');



