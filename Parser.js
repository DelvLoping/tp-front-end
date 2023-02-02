class Parser{
    constructor(pattern){
       this.pattern = pattern;
       this.str=""
    }
    parse(text){
       this.str = text.split(this.pattern).map((word)=>word.trim()).filter((word)=>{
           if(parseInt(word)){
               return word
           }
       }).join(" ")
    }
}
module.exports = {
    Parser
}