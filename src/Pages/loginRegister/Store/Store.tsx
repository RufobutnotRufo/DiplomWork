    import { useState } from "react";
    import "./Store.scss";
    import { StoreProducts } from "../../../UserInterface";

    const Store = () => {
    const [storeProducts, setProducts] = useState<StoreProducts[]>([
        {
        name: "Бензопила",
        id: 1,
        movie: "Зловещие мертвецы",
        description:
            "Бензопила, которую использует главный герой в борьбе с демоническими силами.",
        link: "https://www.youtube.com/watch?v=KVli81zszRY",
        },
        {
        name: "Сабля Дэймона",
        id: 2,
        movie: "Блэйд",
        description:
            "Сабля, используемая охотником на вампиров в его борьбе против тьмы.",
        link: "https://www.youtube.com/watch?v=TbgwqMFdDbU",
        },
        {
        name: "Амулет Сэмюэля",
        id: 3,
        movie: "Сверхъестественное",
        description:
            "Амулет, который помогает персонажам защищаться от сверхъестественных существ.",
        },
        {
        name: "Кибернетический Глаз",
        id: 4,
        movie: "Терминатор",
        description:
            "Кибернетический глаз, используемый для улучшения зрения и анализа окружающей среды.",
        },
        {
        name: "Костюм Бэтмена",
        id: 5,
        movie: "Темный рыцарь",
        description:
            "Иконный костюм Бэтмена, обеспечивающий ему защиту и скрытность.",
        },
        {
        name: "Кубок Исполнителя Желаний",
        id: 6,
        movie: "Исполнитель желаний",
        description: "Магический кубок, который исполняет желания владельца.",
        },
        {
        name: "Куртка Супергероя",
        id: 7,
        movie: "Пацаны",
        description: "Куртка супергероя, символизирующая его статус и силу.",
        },
        {
        name: "Огненный Морфеус",
        id: 8,
        movie: "Матрица",
        description:
            "Огненное оружие, использующееся для борьбы с агентами в виртуальном мире.",
        },
        {
        name: "Маска Кричащего",
        id: 9,
        movie: "Крик",
        description: "Маска убийцы, ставшая символом ужаса и страха в фильме.",
        },
        {
        name: "Кимоно Кобры",
        id: 10,
        movie: "Кобра Кай",
        description: "Кимоно, носимое учениками школы боевых искусств Кобра Кай.",
        },
        {
        name: "Детектор Секретных Заданий",
        id: 11,
        movie: "Миссия невыполнима",
        description: "Устройство для отслеживания и выполнения опасных миссий.",
        },
        {
        name: "Птица-Иллюзия",
        id: 12,
        movie: "Ранго",
        description:
            "Магическая птица, которая помогает персонажам в приключениях.",
        },
        {
        name: "Шляпа Дикого Запада",
        id: 13,
        movie: "Джанго освобожденный",
        description:
            "Шляпа, подчеркивающая стиль и характер персонажа в стиле вестерн.",
        },
        {
        name: "Карта Судьбы",
        id: 14,
        movie: "Бесславные ублюдки",
        description:
            "Карта, которая ведет к сокровищам или важным объектам в фильме.",
        },
        {
        name: "Зеркало Судьбы",
        id: 15,
        movie: "Счастливое число Слевина",
        description: "Зеркало, раскрывающее тайны и предсказывающее будущее.",
        },
        {
        name: "Проклятие Оппенгеймера",
        id: 16,
        movie: "Оппенгеймер",
        description:
            "Объект, связанный с тяжелым проклятием и секретами прошлого.",
        },
        {
        name: "Машина Безумного Макса",
        id: 17,
        movie: "Безумный Макс: Дорога ярости",
        description:
            "Уникальная машина, предназначенная для выживания в постапокалиптическом мире.",
        },
        {
        name: "Меч Джедая",
        id: 18,
        movie: "Звёздные войны: Эпизод 3 – Месть ситхов",
        description:
            "Меч, используемый Джедаями для борьбы с тёмной стороной Силы.",
        },
        {
        name: "Костюм Человека-паука",
        id: 19,
        movie: "Человек-паук",
        description:
            "Костюм, придающий человеку паука сверхспособности и защиту.",
        },
        {
        name: "Глаз Репликанта",
        id: 20,
        movie: "Бегущий по лезвию 2049",
        description:
            "Технологическое устройство, улучшающее восприятие и анализ.",
        },
        {
        name: "Яйцо Чужого",
        id: 21,
        movie: "Чужой",
        description:
            "Яйцо, из которого вылупляется опасный инопланетный организм.",
        },
        {
        name: "Книга Хранителей",
        id: 22,
        movie: "Хранители",
        description:
            "Книга с тайнами и историями супергероев, которые защищают мир.",
        },
        {
        name: "Лицо Джокера",
        id: 23,
        movie: "Джокер",
        description:
            "Маска, представляющая знаменитого злодея и его манипуляции.",
        },
        {
        name: "Набор Пилы",
        id: 24,
        movie: "Пила: Игра на выживание",
        description: "Инструменты, используемые в жестоких испытаниях выживания.",
        },
        {
        name: "Катана Убить Билла",
        id: 25,
        movie: "Убить Билла 2",
        description: "Катана, используемая для окончательной мести.",
        },
        {
        name: "Кубик Шестого Чувства",
        id: 26,
        movie: "Шестое чувство",
        description:
            "Мистический объект, связанный с раскрытием тайн и видениями.",
        },
        {
        name: "Амулет Константина",
        id: 27,
        movie: "Константин: Повелитель тьмы",
        description: "Амулет, защищающий от демонов и зла.",
        },
        {
        name: "Карта Пиратов Карибского моря",
        id: 28,
        movie: "Пираты Карибского моря",
        description: "Карта, ведущая к сокровищам пиратов и приключениям.",
        },
    ]);

    const handleQuantityChange = (id: number, delta: number) => {
        setProducts(prevProducts =>
          prevProducts.map(product =>
            product.id === id
              ? { ...product, quantity: (product.quantity || 1) + delta }
              : product
          )
        );
      };

    
      return (
        <div className="store">
          <h1 className="store-title">Магазин</h1>
          <ul className="store-products">
            {storeProducts.map((product) => (
              <li key={product.id} className="product-item">
                <h2 className="product-name">{product.name}</h2>
                <p className="product-movie"><strong>Фильм:</strong> {product.movie}</p>
                <p className="product-description">{product.description}</p>
                {product.link && (
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="product-link"
                  >
                    Смотреть видео
                  </a>
                )}
                <div className="quantity-controls">
                  <button onClick={() => handleQuantityChange(product.id, 1)}>+</button>
                  <span>{product.quantity || 1}</span>
                  <button onClick={() => handleQuantityChange(product.id, -1)}>-</button>
                </div>
                <button className="add-to-cart-button">Добавить в корзину</button>
              </li>
            ))}
          </ul>
        </div>
      );
    };
    
    export default Store;