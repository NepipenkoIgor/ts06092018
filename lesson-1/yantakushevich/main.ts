interface IMenuItem {
    title: string;
    items: (string | IMenuItem[])[];
}

const menuList: IMenuItem[] = [
    {
        items: ['Angular', 'React', 'Vue'],
        title: 'JavaScript',
    },
    {
        items: [[
            {
                items: [[
                    {
                        items: ['Angular', 'React', 'Vue'],
                        title: 'JavaScript',
                    }, {
                        items: ['Angular', 'Polymer'],
                        title: 'Dart',
                    }
                ],
                'React',
                'Vue',
                [
                    {
                        items: ['Angular', 'React', 'Vue'],
                        title: 'JavaScript',
                    }, {
                        items: ['Angular', 'Polymer'],
                        title: 'Dart',
                    }
                ]
            ],
                title: 'JavaScript',
            }, {
                items: ['Angular', 'Polymer'],
                title: 'Dart',
            }
        ],
        'Polymer',
    ],
        title: 'Dart',
    }
];

function generateMenu(list: IMenuItem[], content?: string): string {
    let result = content || `<ul>`;
    for (const a of list) {
        result += `<li><a class="title"> ${a.title}</a><ul>`;
        for (const item of a.items) {
            result += `<li>`;
            if (typeof item === 'string') {
                result += `<a>${item}</a>`;
            } else {
                result += generateMenu(item, result);
            }
            result += `</li>`;
        }
        result += `</li></ul>`;
    }
    result += `</ul>`;
    return result;
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
