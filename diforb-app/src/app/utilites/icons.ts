export function setIconsFont(doc: Document): void {
    let link = doc.createElement('link'),
        css = {
            href: 'assets/libs/css/icons/Diforb_ui/style.css',
            type: 'text/css',
            rel: 'stylesheet'
        };

    for (let key in css) link.setAttribute(key, css[key]);

    doc.head.appendChild(link);
}

export function setIconLibrary(doc: Document, name: string): void {
    let links: HTMLCollection = doc.head.getElementsByTagName('link');

    for (let i = 0; i < links.length; i++) {
        let library = links[i].getAttribute('data-library');
        if (library == name) {
            return;
        }
    }

    let link = doc.createElement('link'),
        css = {
            href: 'assets/libs/css/icons/' + name + '/style.css',
            type: 'text/css',
            rel: 'stylesheet',
            'data-library': name
        };

    for (let key in css) link.setAttribute(key, css[key]);

    doc.head.appendChild(link);
}