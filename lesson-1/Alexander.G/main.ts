interface IMenuItem {
    title: string;
    items?: IMenuItem[];
}

interface IMenuComponentOpts {
    container: HTMLDivElement;
    menuList: IMenuItem[];
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

interface IComponent {
    init(): void;
}

class MenuComponent implements IComponent {
    protected container: HTMLElement;
    protected menuList: IMenuComponentOpts['menuList'];
    public constructor (opts: IMenuComponentOpts) {
        this.container = opts.container;
        this.menuList = opts.menuList;
    }

    public init (): void {
        this.container.innerHTML = this.getMenu();
        this.container.addEventListener('click', this.clickHandler);
    }

    protected getMenu (): string {
        return `<ul>${this.menuList.map(this.getMenuItem, this).join('')}</ul>`;
    }

    protected getMenuItem (menuItem: IMenuItem): string {
        const title: string = this.getTitle(menuItem);
        return `
            <li>
                ${title}
                ${Array.isArray(menuItem.items)
                    ? `<ul>${menuItem.items.map(this.getMenuItem, this).join('')}</ul>`
                    : ''}
            </li>
        `;
    }

    protected getTitle (menuItem: IMenuItem): string {
        const className: string = menuItem.items ? 'expandable' : '';
        return `<a class="${className}">${menuItem.title}</a>`;
    }

    protected clickHandler (this: HTMLElement, ev: MouseEvent): void {
        const el: HTMLAnchorElement = ev.target as HTMLAnchorElement;
        const classList: DOMTokenList = el.classList;
        if (!classList.contains('expandable')) {
            return;
        }
        const parentLi: HTMLLIElement = el.parentNode as HTMLLIElement;
        parentLi.classList.toggle('expanded');
    }
}

(function () {
    const container: HTMLDivElement = document.querySelector('#menu') as HTMLDivElement;
    const menuComponent = new MenuComponent({container, menuList});
    menuComponent.init();
})();
