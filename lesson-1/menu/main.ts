const raw_data: any[] = [{
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
            }
        ]
    }];


// вариант через типы

type Node = {
    title: string;
    items?: Node[];
};


// вариант через интерфейсы

interface INode {
    title: string;
    items?: INode[];
}


// либо так, ведь не просто так нам говорили про проброс в конце
type Node2<T> = {
    title: string;
    items?: T[];
};

// вариант 1
const menuList: Node[] = [...raw_data];

// вариант 2
const menuList2: INode[] = [...raw_data];

// вариант 3
const menuList3: Node2[] = [...raw_data];


function generateMenu(list: Node[]): string {
    let content: string = `<ul>`;
    for (const a of list) {

        if  (!a.items)
        {
            content += `<li><span> ${a.title}</span>`;
        }
        else
        {
            content += `<li><a class="title"> ${a.title}</a>`;
            content +=generateMenu(a.items);
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
