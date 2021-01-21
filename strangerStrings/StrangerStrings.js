class StrangerStrings {

    getHelloWorld(){
        return "Hello World";
    }
 
    concatenation(firstSegment, secondSegment){
        return firstSegment + secondSegment;
    }

    getPrefix(input){
        return input[0] + input[1] + input[2] 
    }

    getSuffix(input){
        return input[input.length-3] + input[input.length-2] + input[input.length - 1];
    }

    getMiddleCharacter(inputValue){
        let actual = strangerStrings.getMiddleCharacter(inputValue);
        return input.substr(Math.ceil(input.length / 2 - 1), input.length % 2 === 0 ? 2 : 1);
    }

    getFirstWord(input){
        var totalWords = input;

        var firstWord = totalWords.replace(/ .*/,'');

       return firstWord;

     
        

    }
    
      
    getSecondWord(input) {
        var SecondWords = input;
        var SecondWords = SecondWords.split(' ');
        return(SecondWords[1]);
    }

        reverse(input){
            return input.split('').reverse().join('');
        }
    
    
    }


module.exports = StrangerStrings;