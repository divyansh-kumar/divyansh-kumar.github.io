const storyText = 'This is a story started in US when the temperature was 94 fahrenheit outside, there lived a :inserty: with the name of Naruto who was :insertx: and wanted to :insertz: was challenged to pick up a log which weights almost 300 pounds ';
const insertX = ['brave', 'curious', 'inquisitive'];
const insertY = ['explorer', 'scientist', 'adventurer'];
const insertZ = ['discovered a hidden treasure', 'explored an uncharted island', 'solved a mystery']

const button = document.querySelector('.randomize');
const paragraph = document.querySelector('.story');
const new_name = document.getElementById('customname');

button.addEventListener('click', main);

function random_item(list){
    const i = Math.floor(Math.random() * list.length);
    return list[i];
  }


function main(){

    let string = storyText;

    if (new_name.value !== '') {
        const name = new_name.value;
        string = string.replaceAll('Naruto', name);
      }
    
      if (document.getElementById("uk").checked) {
        const weight = `${Math.round(300*0.0714286)} stone`;
        const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
        string = string.replaceAll('94 fahrenheit', temperature);
        string = string.replaceAll('300 pounds', weight);
      }

    const x_random = random_item(insertX);
    const y_random = random_item(insertY);
    const z_random = random_item(insertZ);
  
    string = string.replaceAll(':insertx:', x_random);
    string = string.replaceAll(':inserty:', y_random);
    string = string.replaceAll(':insertz:', z_random);

    paragraph.textContent = string;
    paragraph.style.visibility = 'visible';

}

