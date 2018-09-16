interface IMenuItem {
    title: string;
    link?: string;
    items?: IMenuItem[];
}

const menuList: IMenuItem[] = [
    {
        title: 'Животные',
        items: [
            {
                title: 'Млекопитающие',
                items: [
                    {
                        title: 'Коровы',
                    },
                    { title: 'Ослы' },
                    { title: 'Собаки' },
                    {
                        title: 'Кошки',
                        items: [{ title: 'Тигры' }, { title: 'Львы' }]
                    },
                ],
            },
            {
                title: 'Другие',
                items: [
                    {
                        title: 'Насекомые',
                        items: [
                            {
                                title: 'Членистоногие',
                                items: [{ title: 'Тараканы' }]
                            }
                        ],
                    },
                    { title: 'Змеи' },
                    { title: 'Птицы' },
                    { title: 'Ящерицы' },
                ],
            },
        ],
    },
    {
        title: 'Рыбы',
        items: [
            {
                title: 'Аквариумные',
                items: [{ title: 'Гуппи' }, { title: 'Скалярии' }],
            },
            {
                title: 'Форель',
                items: [{ title: 'Морская форель' }],
            },
        ],
    },
];


interface IMenuOpt {
    element: HTMLElement;
    menuList: IMenuItem[];
}

abstract class MenuGenerator {
    protected abstract _clickHandler(this: HTMLElement, ev: MouseEvent): void;

    protected abstract _generateMenu(menuList: IMenuItem[]): string;
}

class Menu extends MenuGenerator {

    public constructor(opt: IMenuOpt) {
        super();
        opt.element.innerHTML = this._generateMenu(opt.menuList);
        opt.element.addEventListener('click', this._clickHandler);
    }

    protected _clickHandler(this: HTMLElement, ev: MouseEvent): void {
        const el: HTMLAnchorElement = ev.target as HTMLAnchorElement;
        const classList: DOMTokenList = el.classList;
        if (!classList.contains('title')) {
            return;
        }
        const parentLi: HTMLLIElement = el.parentNode as HTMLLIElement;
        parentLi.classList.toggle('menu-open');
    }

    protected _generateMenu(list: IMenuItem[]): string {
        return `<ul>${list.reduce((acc: string, next: IMenuItem) => {
            acc += `<li><a ${next.items ? 'class=title' : ''}
            ${next.link ? 'href=' + next.link : ''}>${next.title}</a>`;
            if (!next.items) {
                acc += `</li>`;
                return acc;
            }
            acc += `${this._generateMenu(next.items)}`;
            return acc;
        }, ``)}</ul>`;
    }
}

const element: HTMLElement = document.querySelector('.menu') as HTMLElement;

const nav: Menu = new Menu({
    element,
    menuList
});