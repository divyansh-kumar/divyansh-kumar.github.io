const storyText = 'This is a story started in US, there lived a :inserty: who was :insertx: and wanted to :insertz: ';
const insertX = ['brave', 'curious', 'inquisitive'];
const insertY = ['explorer', 'scientist', 'adventurer'];
const insertZ = ['discovered a hidden treasure', 'explored an uncharted island', 'solved a mystery']

const button = document.querySelector('.randomize');
const paragraph = document.querySelector('.story');


button.addEventListener('click', main);

function random_item(list){
    const i = Math.floor(Math.random() * list.length);
    return list[i];
  }


function main(){

    let string = storyText;

    const x_random = random_item(insertX);
    const y_random = random_item(insertY);
    const z_random = random_item(insertZ);
  
    string = string.replaceAll(':insertx:', x_random);
    string = string.replaceAll(':inserty:', y_random);
    string = string.replaceAll(':insertz:', z_random);

    paragraph.textContent = string;
    paragraph.style.visibility = 'visible';

}

