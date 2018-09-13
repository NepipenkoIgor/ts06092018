interface IMenuItem {
    title: string;
    items: Array<string | IMenuItem[]>;
}

const menuList: IMenuItem[] = [
    {
        items: ['Angular', 'Vue'],
        title: 'JavaScript',
    }, {
        items: ['Angular', [{
            items: ['Luke', 'Lea'],
            title: 'Dart Weider',
        }], 'Polymer'],
        title: 'Dart',
    }
];

function generateMenu(list: IMenuItem[], wrap: boolean): string {
    let content: string = '';
    for (const a of list) {
        content += `<li><a class="title"> ${a.title}</a><ul>`;
        for (const item of a.items) {
            if (typeof item === 'string') {
                content += `<li><a>${item}</a></li>`;
            } else {
                content += generateMenu(item, false);
            }
        }
        content += `</li></ul>`;
    }

    if (wrap) {
        content = `<ul>${content}</ul>`;
    }

    return content;
}

let navMenuList = document.querySelector('.menu') as HTMLDivElement;
navMenuList.innerHTML = generateMenu(menuList, true);
navMenuList.onclick = (ev: MouseEvent) => {
    const el = ev.target as HTMLAnchorElement;
    const classList = el.classList;
    if (!classList.contains('title')) {
        return;
    }
    const parenLi = el.parentNode as HTMLLIElement;
    parenLi.classList.toggle('menu-open');
};
