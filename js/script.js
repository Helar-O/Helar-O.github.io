const btns = document.querySelector('.controls');
const btn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');
const section = document.querySelectorAll('.section');
const type = document.getElementById('type');

function pageTransition() {
    // Button click event
    const dict = {
        'control-1': '.sec1',
        'control-2': '.sec2',
        'control-3': '.sec3',
        'control-4': '.sec4',
        'control-5': '.sec5',
    }
    const translateValues = {
        '1': '0',
        '2': '100',
        '3': '200',
        '4': '300',
        '5': '400',
    }
    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click', function() {
            // Button transition
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].classList.remove('active-btn');
            this.className += ' active-btn';
            // Page transition
            let currentSect = document.querySelectorAll('.active');
            currentSect[0].classList.remove('active');
            document.querySelector(dict[this.className.split(' ')[1]]).classList.add('active')

            let sectionDistance = Math.abs(currentBtn[0].id - this.id);
            for (let j = 0; j < btn.length; j++) {
                if (currentBtn[0].id < this.id) {
                    section[j].style.marginLeft = (translateValues[btn[j].id] - 100 * sectionDistance) + '%';
                    translateValues[btn[j].id] -= 100 * sectionDistance;
                } else if (currentBtn[0].id > this.id) {
                    section[j].style.marginLeft = (translateValues[btn[j].id] + 100 * sectionDistance) + '%';
                    translateValues[btn[j].id] += 100 * sectionDistance;
                }
            }
        })
    }
}

let count = 0;
function typewrite() {
    if (count % 2 === 0 && count !== 0) {
        type.innerHTML === 'Software Developer' ? type.innerHTML = 'Web Developer' : type.innerHTML = 'Software Developer';
        type.innerHTML === 'Web Developer' ? type.style.width = '12.5ch' : type.style.width = '16ch';
    }
    count++;
    if (type.classList.toString() === 'untype' || type.classList.length === 0) {
        type.classList = 'type';
        setTimeout(typewrite, 5000);
    } else {
        type.classList = 'untype';
        setTimeout(typewrite, 1600);
    }
}

// Start after page load
window.onload = function() {
    typewrite();
}

pageTransition();