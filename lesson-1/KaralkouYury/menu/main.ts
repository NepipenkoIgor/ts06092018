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
                    {title: 'Ящерицы'},
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
                    {title: 'Морская форель'}
                ]
            },
        ]
    }
];

// function generateMenu(list: IMenuItem[]): string {
//     let content: string = `<ul>`;
//     for (const a of list) {
//         content += `<li><a class="title"> ${a.title}</a><ul>`;
//         for (const item of a.items) {
//             content += `<li><a>${item}</a></li>`;
//         }
//         content += `</li></ul>`;
//     }
//     content += `</ul>`;
//     return content;
// }
//
// let navMenuList = document.querySelector('.menu') as HTMLDivElement;
// navMenuList.innerHTML = generateMenu(menuList);
// navMenuList.onclick = (ev: MouseEvent) => {
//     const el = ev.target as HTMLAnchorElement;
//     const classList = el.classList;
//     if (!classList.contains('title')) {
//         return;
//     }
//     const parenLi = el.parentNode as HTMLLIElement;
//     parenLi.classList.toggle('menu-open');
// };
