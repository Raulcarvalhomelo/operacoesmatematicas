const percentageDecimalFractional = (n1)=>n1/100 

const percentagePartwhole = (type,n1,n2) =>{
    if(!type){
        return "Tipo operação não definida"
    }
    if(!n1||!n2){
        return 'valores inválidos'
    }
    if (type==='discount' || type==='disc'){
        return n1*percentageDecimalFractional(n2)
    }
    else if(type==='Increase' || type==='incr'){
        return n1*(percentageDecimalFractional(n2)+1)
        
    }
    else if (type==='PercentageIncDec' || type==='percent'){
        return Math.abs(((n2-n1)/n1)*100)
    }
    else{
        return 'Falta definir o tipo de operação'
    }
}