interface IMenuItem {
    title: string;
    items?: IMenuItem[];
}

const menuList: IMenuItem[] = [
    {
        title: 'Животные',
        items: [
            {
                title: 'Млекопитающие',
                items: [
                    {title: 'Коровы'},
                    {title: 'Ослы'},
                    {title: 'Собаки'},
                    {title: 'Тигры'}
                ]
            },
            {
                title: 'Другие',
                items: [
                    {title: 'Змеи'},
                    {title: 'Птицы'},
                    {
                        title: 'Ящерицы',
                        items: [
                            {title: 'Микроящерицы'},
                            {title: 'Наноящерицы'},
                        ]
                    },
                ],
            },
        ]
    },
    {
        title: 'Рыбы',
        items: [
            {
                title: 'Аквариумные',
                items: [
                    {title: 'Гуппи'},
                    {title: 'Скалярии'}
                ]
            },
            {
                title: 'Форель',
                items: [
                    {
                        title: 'Морская'
                    },
                    {
                        title: 'Речная',
                        items: [
                            {
                                title: 'Киевская',
                                items: []
                            },
                            {
                                title: 'Одесская'
                            }
                        ]
                    }
                ]
            },
        ]
    }
];

function generateMenu(list: IMenuItem[]): string {
    let content: string = `<ul>`;
    for (const item of list) {
        const hasItems = Array.isArray(item.items) && item.items.length > 0;
        content += `<li><a class="${hasItems ? 'title' : ''}">${item.title}</a>`;
        if (hasItems) {
            content += generateMenu(item.items as IMenuItem[]);
        }
        content += `</li>`;
    }
    content += `</ul>`;
    return content;
}

const navMenuList = document.querySelector('.menu') as HTMLDivElement;
navMenuList.innerHTML = generateMenu(menuList);
navMenuList.addEventListener('click', function(ev: MouseEvent) {
    const el = ev.target as HTMLAnchorElement;
    if (!el.classList.contains('title')) {
        return;
    }
    const parenLi = el.parentNode as HTMLLIElement;
    parenLi.classList.toggle('menu-open');
}, false);
