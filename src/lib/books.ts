export type Book = {
	title: string;
	author: string;
	year: number;
	size: string;
};

export type Books = {
	[filename: string]: Book;
};

export const books: Books = {
	'1836-saveliev-bukhara': {
		title: 'Бухара в 1835 году',
		author: 'П. Савельев',
		year: 1836,
		size: '1 МБ'
	},
	'1843-khanykov-opisanie-bukhary': {
		title: 'Описание Бухарского ханства',
		author: 'Н. Ханыков',
		year: 1843,
		size: '11 МБ'
	},
	'1870-maev-ot-peterburga-do-tashkenta': {
		title: 'Путеводитель от С.-Петербурга до Ташкента',
		author: 'К. Н. Маев',
		year: 1870,
		size: '4 МБ'
	},
	'1874-arandarenko-dosugi-v-turkestane': {
		title: 'Досуги в Туркестане',
		author: 'Г. А. Арандаренко',
		year: 1874,
		size: '33 МБ'
	},
	'1886-nalivkin-ocherk-byta-zhenshiny': {
		title: 'Очерк быта женщины оседлого туземного населения Ферганы',
		author: 'В. Наливкин и М. Наливкина',
		year: 1886,
		size: '16 МБ'
	},
	'1887-krestovskiy-u-emira-bukharskogo': {
		title: 'В гостях у эмира Бухарского',
		author: 'В. В. Крестовский',
		year: 1887,
		size: '17 МБ'
	},
	'1893-evarnitskiy-ot-baku-do-tashkenta': {
		title: 'Путеводитель по Средней Азии от Баку до Ташкента в археологическом и историческом отношениях',
		author: 'Д. Э. Эварницкий',
		year: 1893,
		size: '12 МБ'
	},
	'1896-ostroumov-sarty': {
		title: 'Сарты. Этнографические материалы',
		author: 'Н. П. Остроумов',
		year: 1896,
		size: '16 МБ'
	},
	'1897-narshakhi-istoriya-bukhari': {
		title: 'История Бухары',
		author: 'Мухаммад Наршахи',
		year: 1897,
		size: '9 МБ'
	},
	'1897-uralov-na-verbludah': {
		title: 'На верблюдах. Воспоминания из жизни в Средней Азии',
		author: 'Н. Уралов',
		year: 1897,
		size: '13 МБ'
	},
	'1900-shkapskiy-khiva-vodnoe-khozyaystvo': {
		title: 'Как хивинцы ведут полевое хозяйство на своих безводных землях',
		author: 'О. Шкапский',
		year: 1900,
		size: '4 МБ'
	},
	'1908-wolfson-kak-zhivut-sarty': {
		title: 'Как живут сарты',
		author: 'Э. С. Вульфсон',
		year: 1908,
		size: '7 МБ'
	},
	'1909-logofet-strana-bespraviya': {
		title: 'Страна бесправия. Бухарское ханство и его современное состояние',
		author: 'Д. И. Логофет',
		year: 1909,
		size: '14 МБ'
	},
	'1910-pankratiev-samarqand': {
		title: 'Исторические памятники г. Самарканда',
		author: 'Г. А. Панкратьев',
		year: 1910,
		size: '2 МБ'
	},
	'1912-dobromyslov-tashkent-history': {
		title: 'Ташкент в прошлом и настоящем. Исторический очерк',
		author: 'А. И. Добромыслов',
		year: 1912,
		size: '17 МБ'
	},
	'1912-gavrilov-risolya': {
		title: 'Рисоля сартовских ремесленников. Исследование преданий мусульманских цехов',
		author: 'М. Гаврилов',
		year: 1912,
		size: '4 МБ'
	},
	'1941-masson-ulugbek': {
		title: 'Обсерватория Улугбека',
		author: 'М. Е. Массон',
		year: 1941,
		size: '16 МБ'
	},
	'1949-tashkent-arhitektura-gorodov-sssr': {
		title: 'Ташкент. Архитектура городов СССР',
		author: 'С. Полупанов, Ю. Яралов',
		year: 1949,
		size: '12 МБ'
	},
	'1951-freiman-khorezm-language': {
		title: 'Хорезмский язык',
		author: 'А. А. Фрейман',
		year: 1951,
		size: '13 МБ'
	},
	'1957-rempel-panjara': {
		title: 'Панджара',
		author: 'Л. Ремпель',
		year: 1957,
		size: '18 МБ'
	},
	'1961-abdullaev-khorezm-govory': {
		title: 'Хорезмские говоры узбекского языка',
		author: 'Ф. А. Абдуллаев',
		year: 1961,
		size: '21 МБ'
	},
	'1965-ahmedov-gosudarstvo-kochevyh-uzbekov': {
		title: 'Государство кочевых узбеков',
		author: 'Б. А. Ахмедов',
		year: 1965,
		size: '8 МБ'
	},
	'1966-arch-295': {
		title: 'Археология Средней Азии. Выпуск 295',
		author: 'Труды Ташкентского государственного университета им. В. И. Ленина',
		year: 1966,
		size: '15 МБ'
	},
	'1966-mukminova-vakfnoma': {
		title: 'К истории аграрных отношений в Узбекистане XVI в. По материалам «Вакф-наме»',
		author: 'Р. Г. Мукминова',
		year: 1966,
		size: '19 МБ'
	},
	'1967-genplan': {
		title: 'Генеральный план развития Ташкента',
		author: 'А. И. Банке, Ю. П. Пурецкий, А. В. Стазаева, А. В. Якушев',
		year: 1967,
		size: '4 МБ'
	},
	'1984-lunina-south-sogd': {
		title: 'Города южного Согда в VIII-XII вв.',
		author: 'С. Б. Лунина',
		year: 1984,
		size: '23 МБ'
	},
	'1984-mahmudov-salihov-uzbek-cuisine': {
		title: 'Города южного Согда в VIII-XII вв.',
		author: 'К. М. Махмудов, Ш. Г. Салихов',
		year: 1984,
		size: '38 МБ'
	},
	'1986-lunina-archeology': {
		title: 'Археология Средней Азии',
		author: 'С. Б. Лунина',
		year: 1986,
		size: '9 МБ'
	},
	'1986-salihov-uzbek-cuisine': {
		title: 'Блюда узбекской кухни',
		author: 'Ш. Г. Салихов',
		year: 1986,
		size: '36 МБ'
	},
	'1987-kadirova-soviet-uzbek-arch': {
		title: 'Архитектура Советского Узбекистана',
		author: 'Т. Ф. Кадырова',
		year: 1987,
		size: '50 МБ'
	},
	'1990-kissen-uzbek': {
		title: 'Узбекский язык для взрослых. Самоучитель',
		author: 'И. А. Киссен, Ш. У. Рахматуллаев',
		year: 1990,
		size: '16 МБ'
	},
	'1991-ismatullaev-samouchitel': {
		title: 'Самоучитель узбекского языка',
		author: 'Х. Исматуллаев',
		year: 1991,
		size: '5 МБ'
	},
	'1991-salihov-uzbek-cuisine': {
		title: 'Блюда узбекской кухни',
		author: 'Ш. Г. Салихов',
		year: 1991,
		size: '36 МБ'
	},
	// '1992-yuldashev-uzbek': {
	// 	title: 'Изучаем узбекский язык',
	// 	author: 'Р. Юлдашев',
	// 	year: 1992,
	// 	size: '19 МБ'
	// }
};
