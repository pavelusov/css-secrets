class Section {
    constructor ({id, title, html}) {
        this.id = id;
        this.title = title;
        this.html = html;
    }
    get rules () {
        let node = document.createElement('pre'),
            rules;
        node.innerHTML = this.html;
        rules = `<pre>${node.getElementsByTagName('style')[0].innerHTML}</pre>`;
        return rules;
    }
}

export {Section};
