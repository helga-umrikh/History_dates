interface DataItem {
    start_year: number
    end_year: number
    topic: string
    dates: {
        year: number
        description: string
    }[]
}

const data: DataItem[] = [
    {
        start_year: 1980,
        end_year: 1986,
        topic: 'Технологии',
        dates: [
            {
                year: 1987,
                description: '"Хищник"/Predator, США (реж. Джон Мактирнан)',
            },
            {
                year: 1988,
                description:
                    '"Кто подставил кролика Роджера"/ Who Framed Roder Rabbit, США (реж. Роберт Земекис)',
            },
            {
                year: 1989,
                description:
                    '"Назад в будущее 2"/ Back To The future 2, США (реж. Роберт Земекис)',
            },
            {
                year: 1990,
                description:
                    '"Крепкий орешек"/ Die hard 2, США (реж. Ренни Харлин)',
            },
            {
                year: 1991,
                description:
                    '"Семейка Адамс"/ The Addams Family, США (реж. Барри Зонненфельд)',
            },
        ],
    },
    {
        start_year: 1987,
        end_year: 1991,
        topic: 'Кино',
        dates: [
            {
                year: 1987,
                description: '"Хищник"/Predator, США (реж. Джон Мактирнан)',
            },
            {
                year: 1988,
                description:
                    '"Кто подставил кролика Роджера"/ Who Framed Roder Rabbit, США (реж. Роберт Земекис)',
            },
            {
                year: 1989,
                description:
                    '"Назад в будущее 2"/ Back To The future 2, США (реж. Роберт Земекис)',
            },
            {
                year: 1990,
                description:
                    '"Крепкий орешек"/ Die hard 2, США (реж. Ренни Харлин)',
            },
            {
                year: 1991,
                description:
                    '"Семейка Адамс"/ The Addams Family, США (реж. Барри Зонненфельд)',
            },
        ],
    },
    {
        start_year: 1992,
        end_year: 1997,
        topic: 'Литература',
        dates: [
            {
                year: 1992,
                description:
                    'Нобелевская премия по литературе - Дерек Уолкотт "За блестящий образец карибского эпоса в 64 разделах"',
            },
            {
                year: 1994,
                description: '"Бессонница" - роман Стивена Кинга',
            },
            {
                year: 1995,
                description: 'Нобелевска премия по литературе - Шеймас Хини',
            },
            {
                year: 1997,
                description:
                    '"Гарри Поттер и филосовский камень" книга Дж.Роулинг',
            },
        ],
    },
    {
        start_year: 1999,
        end_year: 2004,
        topic: 'Театр',
        dates: [
            {
                year: 1999,
                description:
                    'премьера балета "Золушка" в постановке Жан-Кристофа Майо, сценография Эрнеста Пиньона',
            },
            {
                year: 2000,
                description: 'возобновлено издение журнала "Театр"',
            },
            {
                year: 2002,
                description:
                    'премьера трилогии Тома Стоппарда "Берег Утопии" Королевский Национальный театр, Лондон',
            },
            {
                year: 2003,
                description:
                    'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
            },
            {
              year: 2004,
              description:
                  'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi',
          },
        ],
    },
    {
        start_year: 2006,
        end_year: 2014,
        topic: 'Спорт',
        dates: [
            {
                year: 2006,
                description:
                    '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды',
            },
            {
                year: 2007,
                description:
                    'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11',
            },
            {
                year: 2008,
                description:
                    'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi',
            },
            {
                year: 2009,
                description:
                    'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi',
            },
            {
                year: 2010,
                description:
                    'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi',
            },
            {
                year: 2011,
                description:
                    'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi',
            },
            {
                year: 2012,
                description:
                    'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi',
            },
            {
                year: 2013,
                description:
                    'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi',
            },
            {
                year: 2014,
                description:
                    'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi',
            },
        ],
    },
    {
        start_year: 2015,
        end_year: 2022,
        topic: 'Наука',
        dates: [
            {
                year: 2015,
                description:
                    '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды',
            },
            {
                year: 2016,
                description:
                    'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11',
            },
            {
                year: 2017,
                description:
                    'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi',
            },
            {
                year: 2018,
                description:
                    'Старт космического аппарата Solar Probe Plus, предназначенного для изучения Солнца',
            },
            {
                year: 2019,
                description:
                    'Google объявил о создании 53-кубитного квантого компьютера',
            },
            {
                year: 2020,
                description:
                    'Корабль Crew Dragon вернулся на Землю изпервого пилотируемого полета',
            },
            {
                year: 2021,
                description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            },
            {
                year: 2022,
                description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            },
        ],
    },
]

export default data
