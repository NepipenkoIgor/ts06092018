interface IMenuItem {
    title: string;
    items?: IMenuItem[];
}

const menuList: IMenuItem[] = [
    {
        items: [
            {
                items: [
                    {
                        title: 'Достоевский',
                    },
                    {
                        title: 'Гоголь',
                    },
                    {
                        title: 'Тургенев',
                    }
                ],
                title: 'XIX век'
            },
            {
                items: [
                    {
                        title: 'Пастернак',
                    },
                    {
                        title: 'Блок',
                    },
                    {
                        title: 'Маяковский',
                    }
                ],
                title: 'XX век'
            }
        ],
        title: 'Писатели'
    }, {
        items: [
            {
                items: [
                    {
                        title: 'Айвазовский',
                    },
                    {
                        title: 'Брюллов',
                    },
                    {
                        title: 'Васнецов',
                    }
                ],
                title: 'XIX век'
            },
            {
                items: [
                    {
                        title: 'Дега',
                    },
                    {
                        title: 'Сезанн',
                    },
                    {
                        title: 'Уорхолл',
                    }
                ],
                title: 'XX век'
            }
        ],
        title: 'Художники'
    }, {
        items: [
            {
                items: [
                    {
                        items: [
                            {
                                title: 'Концерт для фортепиано с оркестром',
                            }
                        ],
                        title: 'Грик',
                    },
                    {
                        items: [
                            {
                                title: 'Калиостро',
                            },
                            {
                                title: 'Жизнь артистаь',
                            }
                        ],
                        title: 'Штраус',
                    }
                ],
                title: 'XIX век'
            },
            {
                items: [
                    {
                        title: 'Скрябин',
                    },
                    {
                        items: [
                            {
                                title: 'Цыганское каприччио',
                            },
                            {
                                title: 'Опера «Скупой Рыцарь',
                            }
                        ],
                        title: 'Рахманинов'
                    },
                    {
                        title: 'Стравинский',
                    }
                ],
                title: 'XX век'
            }
        ],
        title: 'Композиторы'
    }
];

function generateMenu(list: IMenuItem[]): string {
    let content: string = `<ul>`;
    for (const a of list) {
        if (a.items) {
            content += `<li><a class="title"> ${a.title}</a>`;
            content += generateMenu(a.items);
            content += `</li>`;
        } else {
            content += `<li><a>${a.title}</a></li>`;
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
