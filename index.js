const friends = ["Cam Newton", "Bo Jackson", "Kerryon Johnston", "Deshaun Davis", "Tristan Martinez"];

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

document.addEventListener('DOMContentLoaded', () => {
    const singButton = document.getElementById('btn');
    const container = document.getElementById('container');
    console.log('dom content loaded');
    let button = document.createElement('button');
    button.innerText = 'SING!';
    document.body.appendChild(button);

    button.addEventListener('click', function() {

        for (let i = 0; i < friends.length; i++) {
            let name = friends[i];
            console.log(`${name.toUpperCase()}:`);

            let capitalizedName = capitalizeFirstLetter(name);
            let h3 = document.createElement('h3');
            let someText = document.createTextNode(capitalizedName);
            h3.appendChild(someText);
            document.body.appendChild(h3);

            for (let k = 0; k < friends.length; k++) {
                let name = friends[k];
                let div = document.createElement('div');
                div.innerText = '';
                document.body.appendChild(div);

                let p = document.createElement('p');

                let songText = "";

                for (let j = 99; j > 0; j--) {
                    if (j === 2) {
                        songText = `${j} lines of code in the file, ${j} lines of code; ${capitalizedName} strikes one out, clears it all out, ${j - 1} line of code in the file`;
                    } else if (j === 1) {
                        songText = `${j} line of code in the file, ${j} line of code; ${capitalizedName} strikes one out, clears it all out, no more lines of code in the file`;
                    } else {
                        songText = `${j} lines of code in the file, ${j} lines of code; ${capitalizedName} strikes one out, clears it all out, ${j - 1} lines of code in the file`;
                    }

                    someText = document.createTextNode(songText);
                    p.appendChild(someText);
                    document.body.appendChild(p);
                }
            }
            container.appendChild(friendDiv);
        }
    });
});