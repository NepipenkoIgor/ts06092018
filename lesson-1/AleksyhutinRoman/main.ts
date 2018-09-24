interface IMenuItem {
    title: string;
    items: string[];
}

const menuList: IMenuItem[] = [
    {
        items: ['Angular', 'React', 'Vue'],
        title: 'JavaScript',
    }, {
        items: ['Angular', 'Polymer'],
        title: 'Dart',
    }
];

function generateMenu(list: IMenuItem[]): string {
    let content: string = `<ul>`;
    for (const a of list) {
        content += `<li><a class="title"> ${a.title}</a><ul>`;
        for (const item of a.items) {
            content += `<li><a>${item}</a></li>`;
        }
        content += `</li></ul>`;
    }
    content += `</ul>`;
    return content;
}

let navMenuList = document.querySelector('.menu') as HTMLDivElement;
navMenuList.innerHTML = generateMenu(menuList);
navMenuList.onclick = (ev: MouseEvent) => {
    const el = ev.target as HTMLAnchorElement;
    const classList = el.classList;
    if (!classList.contains('title')) {
        return;
    }
    const parenLi = el.parentNode as HTMLLIElement;
    parenLi.classList.toggle('menu-open');
};