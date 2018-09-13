interface IMenuItem {
    readonly title: string;
    items?: IMenuItem[];
}

const menuList: IMenuItem[] = [
    {
        title: 'Животные', items: [
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
            },
        ]
    },
    {
        title: 'Рыбы', items: [
            {
                title: 'Аквариумные', items: [
                { title: 'Гуппи' },
                { title: 'Скалярии' }
            ]
            },
            {
                title: 'Форель', items: [
                { title: 'Морская форель'}
            ]
            },
        ]
    }
];

function generateMenuItem(infiniteMenuItem: IMenuItem): string {
    const menuItem: string[] = [];
    const {title, items} = infiniteMenuItem;

    menuItem.push(`<li><a class="title">${title}</a>`);
    if (items) {
        menuItem.push('<ul>');
        items.forEach((item: IMenuItem) => {
            menuItem.push( generateMenuItem(item) );
        });
        menuItem.push('</ul>');
    }

    menuItem.push('</li>');
    return menuItem.join('');
}

function generateMenu(infiniteMenuList: IMenuItem[]): string {
    let content = '<ul>';

    infiniteMenuList.forEach((menuItem: IMenuItem) => {
       content += generateMenuItem(menuItem);
    });

    content += '</ul>';
    return content;
}

document.writeln(generateMenu(menuList));
