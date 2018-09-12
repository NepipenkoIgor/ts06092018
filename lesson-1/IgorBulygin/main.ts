interface IMenuItem {
    title: string;
    items?: IMenuItem[];
}

const menuList: IMenuItem[] = [
    {
        items: [{
            title: 'Angular',
            items: [
                {title: '4.0.0'},
                {title: '5.0.0'},
                {title: '6.0.0'}
            ]
        }, {
            title: 'React'
        }, {
            title: 'Vue',
            items: [
                {
                    title: '2.5',
                    items: [
                        {title: '2.5.12'},
                        {title: '2.5.13'},
                        {title: '2.5.14'},
                        {title: '2.5.15'}
                    ]
                },
                {
                    title: '2.4'
                }
            ]
        }],
        title: 'JavaScript',
    }, {
        items: [{
            title: 'Angular'
        }, {
            title: 'Polymer',
            items: [
                {title: '1.0'},
                {title: '2.0'},
                {title: '3.0'}
            ]
        }],
        title: 'Dart',
    }
];


function generateMenu(list: IMenuItem[]): string {
    let content = '<ul>';
    for (const a of list) {
        if (a.items !== undefined) {
            content += `<li><a class="title"> ${a.title}</a>`;
            content += generateMenu(a.items);
        } else {
            content += `<li><a>${a.title}</a></li>`;
        }
        content += '</li>';
    }
    content += '</ul>';
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
