import React from 'react';
import './navbar.scss';

// const Navbar = () => {
//   const [active, setActive] = React.useState('');

//   return (
// <div className="navbar_wrapper">
//   <img src={logo_navbar} width={120} alt="" className="logo_navbar" />
//   <div>
//     {array_navbar.map((t) => (
//       <span
//         onClick={() => {
//           activeFunc(t);
//         }}
//         key={t}
//         className={active === t ? 'span_active' : 'span_unactive'}
//       >
//         {active && <div className="split"></div>}
//         {t}
//         {active && <div className="round"></div>}
//       </span>
//     ))}
//   </div>
// </div>
//   );
// };

const Navbar = () => {
  const array_navbar = [
    { name: 'Итоги', img: '../assets/icon-timeline.svg' },
    { name: 'Заказы', img: '../assets/icon-orders.png' },
    { name: 'Сообщение', img: '../assets/icon-orders.png' },
    { name: 'Звонки', img: '../assets/icon-orders.png' },
    { name: 'Контрагенты', img: '../assets/icon-orders.png' },
    { name: 'Документы', img: '../assets/icon-orders.png' },
    { name: 'Исполнители', img: '../assets/icon-orders.png' },
    { name: 'Отчеты', img: '../assets/icon-orders.png' },
    { name: 'База знаний', img: '../assets/icon-orders.png' },
    { name: 'Настройки', img: '../assets/icon-orders.png' },
  ];
  const [active, setActive] = React.useState('');
  const activeFunc = (t) => {
    if (active == '') {
      setActive(t);
    } else {
      setActive('');
      setActive(t);
    }
  };
  return (
    <div className="navbar_wrapper">
      <img src="../assets/logo_navbar.jpg" width={120} alt="" className="logo_navbar" />
      <div>
        {array_navbar.map((t) => (
          <span
            onClick={() => {
              activeFunc(t.name);
            }}
            key={t.name}
            className={active === t.name ? 'span_active' : 'span_unactive'}
          >
            {active && <div className="split"></div>}
            <img src={t.img} className="image_navbar" />
            {t.name}
            {active && <div className="round"></div>}
          </span>
        ))}
        <button>
          Добавить заказ <img src="../assets/icon-plus.png" width={30} />
        </button>
        <button>
          Оплата <img src="../assets/icon-oplata.png" width={30} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
