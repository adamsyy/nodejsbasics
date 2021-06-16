class samp{

    poo(){
        console.log('poo')
    }
}


class Hello extends samp{

    constructor(num1,num2){
        super()
        this.num1=num1
        this.num2=num2
        
    }
   
    
    helo(){
        console.log('ok'+this.num1+this.num2)
    }
}

 oi=new Hello(10,210)
 oi.poo()