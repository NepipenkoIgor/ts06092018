interface IMenuItem {
    title: string;
    items?: Partial<IMenuItem>[];
}

const menuList: IMenuItem[] = [
    {
        title: 'Животные', items: [
            {
                title: 'Млекопитающие', items: [
                    {title: 'Коровы'},
                    {title: 'Ослы'},
                    {title: 'Собаки', items: [
                            {title: 'Овчарка'},
                            {title: 'Питбуль'},
                            {title: 'Лайка'}
                        ]
                    },
                    {title: 'Тигры'}
                ]
            },
            {
                title: 'Другие', items: [
                    {title: 'Змеи'},
                    {title: 'Птицы'},
                    {title: 'Ящерицы'},
                ],
            },
        ]
    },
    {
        title: 'Рыбы', items: [
            {
                title: 'Аквариумные', items: [
                    {title: 'Гуппи'},
                    {title: 'Скалярии'}
                ]
            },
            {
                title: 'Форель', items: [
                    {title: 'Морская форель'}
                ]
            },
        ]
    }
];


function generateMenu(list: Partial<IMenuItem>[]): string {
    let content: string = `<ul>`;
    for (const a of list) {
        content += `<li><a class="${a.items ? 'title' : ''}"> ${a.title}</a>`;
        if (typeof a.items === 'object') {
            content += generateMenu(a.items);
        }
        content += `</li>`;
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
