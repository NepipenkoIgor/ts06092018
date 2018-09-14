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
                    { title: 'Коровы' },
                    { title: 'Ослы' },
                    { title: 'Собаки' },
                    { title: 'Тигры', items: [
                        { title: 'Амурский' },
                        { title: 'Бенгальский', items: [
                            {
                                title: 'Обычный',
                            },
                            {
                                title: 'Королевский'
                            }
                        ]}]
                    },
                    {
                        title: 'Дельфины'
                    }
                ]
            },
            {
                title: 'Другие',
                items: [
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

    menuItem.push(`<li><a>${title}</a>`);

    if (items) {
        menuItem.pop();
        menuItem.push(`<li><a class="title">${title}</a><ul>`);
        items.forEach((item: IMenuItem) => {
            menuItem.push( generateMenuItem(item) );
        });
        menuItem.push('</ul>');
    }

    menuItem.push('</li>');
    return menuItem.join('');
}

function generateMenu(infiniteMenuList: IMenuItem[]): string {
    let content: string = '<ul>';

    infiniteMenuList.forEach((menuItem: IMenuItem) => {
       content += generateMenuItem(menuItem);
    });

    content += '</ul>';
    return content;
}

const navMenuList = document.querySelector('.menu') as HTMLDivElement;
navMenuList.innerHTML = generateMenu(menuList);

navMenuList.addEventListener('click', function(evt: MouseEvent) {
    const anchor = evt.target as HTMLAnchorElement;
    const liElement = anchor.parentNode as HTMLLIElement;
    liElement.classList.toggle('menu-open');
});
