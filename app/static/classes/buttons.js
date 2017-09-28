class Section {
    constructor ({section, id}) {
        this.section = section;
        this.id = id;
    }

    get font () {
        return this.section.dataset.font;
    }
    get title () {
        return this.section.querySelector('.titleSection').innerText;
    }
    show () {
        this.section.classList.add('active');
    }
    hide () {
        this.section.classList.remove('active');
    }
    init () {
        this.section.dataset.id = this.id;
    }
}

class SectionButton {
    constructor ({title}){
        this.title = title;
        this.sectionShow = 'first';
    }
    get isShow () {
        return this.sectionShow;
    }
    set isShow (value) {
        this.sectionShow = `test ${value}`;
    }
    init () {
        console.log('work', this.title);
    }
}

export {Section, SectionButton};
