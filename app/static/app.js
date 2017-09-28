import './style.less';

import {Section, SectionButton} from './classes';

document.addEventListener('DOMContentLoaded', () => {
    let leftColumn = document.querySelector('.leftColumn');

    let sectionsNode = document.querySelectorAll('.section');

    let sections = Array.prototype.slice.call(sectionsNode);
    let sectionsMap = sections.map((node, id) => {
        let section = new Section({
            section: node,
            id: id
        });
        section.init();
        let button = document.createElement('a');
        button.dataset.id = id;
        button.classList.add('buttonSection');
        button.classList.add('fa');
        button.classList.add(section.font);
        button.innerHTML = `<span class="textButton">${section.title}</span>`;

        leftColumn.appendChild(button);
        return section;
    });
    sectionsMap[0].show();
    leftColumn.onclick = event => {

        let button = event.path.find(A => {
            return A.tagName === 'A' ? A : false;
        });

        sectionsMap.forEach(section => {
            section.hide();
            if (section.id == button.dataset.id) {

                section.show();
            }
        });
    };

});




