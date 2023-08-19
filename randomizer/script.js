let btn = document.querySelector('input[type="button"]');
let result = document.querySelector('.result');
btn.onclick = preparation;

function randomaizer(min, max, amount,checkbox) {
    let rand = [];
    if (min > max){
            result.style.color = "darkred";
            result.style.lineHeight = "9em";
            return 'Error! Invalid range';
    }else if(min < 1 || max < 1){
        result.style.color = "darkred";
        result.style.lineHeight = "9em";
        result.style.fontSize = "18px";
        return `Error! Numbers cannot be negative or equal to 0`;
    }
    
    if (checkbox == true){
        if(amount > max - min){
        result.style.color = "darkred";
        result.style.lineHeight = "9em";
        return 'Error! Invalid amount';
        }
        A: for (let i = 0; i < amount;) {
            let check = Math.floor(min + Math.random() * (max - min + 1));
             for(let j = 0; j <= rand.length-1; j++){
                if (check == rand[j]) continue A;
            }
             rand.push(check);
             i++; 
        }
    }
    else if(checkbox == false){
        for (let i = 0; i < amount; i++) {
            rand.push(Math.floor(min + Math.random() * (max - min + 1)));
        }
    }
    else{ 
        result.style.color = "darkred";
        result.style.lineHeight = "9em";
        return 'Unknown error! Try later!';
    }
    result.style.color = "black";
    result.style.lineHeight = "2em";
    result.style.fontSize = "20px";
    

    return rand;

}   

function preparation() {
    let min = +document.querySelector('#min').value;
    let max = +document.querySelector('#max').value;
    let amount = +document.querySelector('#amount').value;
    let checkbox = document.querySelector('.checkbox').checked;


    let res = randomaizer(min, max, amount,checkbox);
    result.innerText = res;
}
