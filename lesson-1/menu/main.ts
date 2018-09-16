// interface IMenuItem {
//     title: string;
//     items: string[];
// }
//
// const menuList: IMenuItem[] = [
//     {
//         items: ['Angular', 'React', 'Vue'],
//         title: 'JavaScript',
//     }, {
//         items: ['Angular', 'Polymer'],
//         title: 'Dart',
//     }
// ];
//
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
interface IMenuItem {
    title: string;
    items?: IMenuItem[];
}

const menuList: IMenuItem[] = [
    {
        title: 'Животные', items: [
            {
                title: 'Млекопитающие', items: [
                    {title: 'Коровы'},
                    {title: 'Ослы'},
                    {title: 'Собаки'},
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
    }];

function generateMenu(list: IMenuItem[]): string {
    let hasItems: boolean;
    let class_: string;
    let content: string = `<ul>`;

    for (const a of list) {
        hasItems = (Array.isArray(a.items) && a.items.length > 0);
        class_ = hasItems ? 'title' : '';

        content += `<li><a class="${class_}">${a.title}</a>`;

        if (Array.isArray(a.items) && a.items.length > 0) {
            // Error:(54, 37) TS2345: Argument of type 'IMenuItem[] | undefined'
            // is not assignable to parameter of type 'IMenuItem[]'.
            // Type 'undefined' is not assignable to type 'IMenuItem[]'.
            content += generateMenu(a.items);
        } else {
            content += `</li>`;
        }
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