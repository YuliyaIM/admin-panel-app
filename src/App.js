
import '../src/reset.css';
import '../src/style.css';
import './App.css';

function App() {
   return (
      <div classNameName="page">
         <header className="page-header">
            <h1 className="page-header__text">Список заказов</h1>
            <button className="dropdown__button dropdown__button_transparent">
               <div className="dropdown-wrapper">
                  <svg className="dropdown__button-img" xmlns="http://www.w3.org/2000/svg" fill="#459DF5" viewBox="0 0 16 16"
                     strok="none">
                     <circle stroke="none" cx="8" cy="8" r="4" />
                     <path stroke="none" d="M 15 9 L 16 8 L 15 7 H 13 V 9 H 15 Z" />
                     <path stroke="none" d="M 1 9 L 0 8 L 1 7 H 3 V 9 H 1 Z" />
                     <path stroke="none" d="M 7 15 L 8 16 L 9 15 V 13 H 7 V 15 Z" />
                     <path stroke="none" d="M 7 1 L 8 0 L 9 1 V 3 H 7 V 1 Z" />
                     <path stroke="none" d="M 12.5 14 H 14 L 14 12.5 L 12.5 11 L 11 12.5 L 12.5 14 Z" />
                     <path stroke="none" d="M 2 3.5 L 2 2 L 3.5 2 L 5 3.5 L 3.5 5 L 2 3.5 Z" />
                     <path stroke="none" d="M 3.5 14 H 2 L 2 12.5 L 3.5 11 L 5 12.5 L 3.5 14 Z" />
                     <path stroke="none" d="M 14 3.5 V 2 L 12.5 2 L 11 3.5 L 12.5 5 L 14 3.5 Z" />
                  </svg>
                  <span className="dropdown__title dropdown__title_light">Светлая</span>
               </div>
            </button>
         </header>
         <div className="items-group">
            <div className="items-group__item">
               <div className="searchbar">
                  <svg className="searchbar__img" viewBox="0 0 16 16" fill="none" stroke="#459DF5">
                     <path
                        d="M10.0355 10.0355C11.9882 8.08291 11.9882 4.91709 10.0355 2.96447C8.08291 1.01184 4.91709 1.01184 2.96447 2.96447C1.01184 4.91709 1.01184 8.08291 2.96447 10.0355C4.91709 11.9882 8.08291 11.9882 10.0355 10.0355ZM10.0355 10.0355L14 14M14 14L14.5 13.5L11.5 10.5M14 14L13.5 14.5L10.5 11.5"
                        fill="none" />
                  </svg>
                  <input className="searchbar__item" type="text" value="" placeholder="Номер заказа или ФИО" />
               </div>
               <button className="button button__filter" type="submit">
                  <span className="button__text">Фильтры</span>
                  <svg className="img img_filter" viewBox="0 0 16 16" fill="#FFFFFF" stroke="none"
                     xmlns="http://www.w3.org/2000/svg">
                     <path d="M12 4H4V5.5L7 8.5V12L9 13V8.5L12 5.5V4Z" stroke="none" />
                  </svg>
               </button>
               <button className="button button_regular" type="submit">
                  <span className="button__text">Сбросить фильтры</span>
               </button>
            </div>
            <div className="items-group__item items-group__item_secondary">
               <button className="button button_secondary" type="submit">
                  <span className="button__text">Загрузка</span>
                  <svg className="img img_filter" viewBox="0 0 16 16" fill="none" stroke="#459DF5"
                     xmlns="http://www.w3.org/2000/svg">
                     <path d="M2.50251 7.5V8.5C2.50251 10.75 4.75251 13.5 8.00251 13.5C10 13.5 11.6187 12.5 12.6 11"
                        fill="none" />
                     <path d="M13.5 8.5V7.5C13.5 5.25 11.25 2.5 7.99997 2.5C6 2.5 4.38135 3.5 3.4 5" fill="none" />
                     <path d="M4.5 9.5L2.50254 7.5L0.752533 9.75" fill="none" />
                     <path d="M11.5 6.5L13.5 8.5L15.25 6.25" fill="none" />
                  </svg>
               </button>
            </div>
         </div>
         <form className="filter">
            <div className="input-group">
               <label className="lable" for="lable-date">Дата оформления</label>
               <div className="input-group__container">
                  <div className="input-group__wrapper">
                     <input className="input input__order-date_start" id="lable-date" type="data" name="date-time"
                        value="20.01.2021" placeholder="dd.mm.dddd" />
                     <button className="input-group__button" type="reset">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#BAD8F5" viewBox="0 0 16 16"
                           className="order-date__img">
                           <path d="M12.5 3.5L3.5 12.5M3.5 3.5L12.5 12.5" fill="none" />
                        </svg>
                     </button>
                  </div>
                  <input className="input input__order-date_end" id="lable-date-time" type="data" name="date-time" value=""
                     placeholder="dd.mm.dddd" />
               </div>
            </div>
            <div className="order-status">
               <label className="lable" for="lable-status">Cтатус заказа</label>
               <div className="order-status__wrapper">
                  <input className="input input_order-status" name="text" id="lable-status" value="Любой" />
                  <button className="button__icon button__icon_small" type="submit">
                     <svg className="img img_icon-small" xmlns="http://www.w3.org/2000/svg" fill="#459DF5" stroke="none"
                        viewBox="0 0 16 16">
                        <path stroke="none" d="M 5 6 H 11 V 6.5 L 8.25 11 H 7.75 L 5 6.5 V 6 Z" />
                     </svg>
                  </button>
               </div>

               <div className="dropdown__item">
                  <label className="dropdown__lable">
                     <div className="dropdown__wrapper">
                        <input className="dropdown__checkbox-input" type="checkbox" />
                        <svg className="dropdown__checkbox-img" viewBox="0 0 16 16" fill="#FFF" stroke="none">
                           <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none" />
                        </svg>
                        <span className="dropdown__title">Новый</span>
                     </div>
                  </label>
                  <label className="dropdown__lable">
                     <div className="dropdown__wrapper">
                        <input className="dropdown__checkbox-input" type="checkbox" />
                        <svg className="dropdown__checkbox-img" viewBox="0 0 16 16" fill="#FFF" stroke="none">
                           <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none" />
                        </svg>
                        <span className="dropdown__title">Рассчет</span>
                     </div>
                  </label>
                  <label className="dropdown__lable">
                     <div className="dropdown__wrapper">
                        <input className="dropdown__checkbox-input" type="checkbox" />
                        <svg className="dropdown__checkbox-img" viewBox="0 0 16 16" fill="#FFF" stroke="none">
                           <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none" />
                        </svg>
                        <span className="dropdown__title">Подтвержден</span>
                     </div>
                  </label>
                  <label className="dropdown__lable">
                     <div className="dropdown__wrapper">
                        <input className="dropdown__checkbox-input" type="checkbox" />
                        <svg className="dropdown__checkbox-img" viewBox="0 0 16 16" fill="#FFF" stroke="none">
                           <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none" />
                        </svg>
                        <span className="dropdown__title">Отложен</span>
                     </div>
                  </label>
                  <label className="dropdown__lable">
                     <div className="dropdown__wrapper">
                        <input className="dropdown__checkbox-input" type="checkbox" />
                        <svg className="dropdown__checkbox-img" viewBox="0 0 16 16" fill="#FFF" stroke="none">
                           <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none" />
                        </svg>
                        <span className="dropdown__title">Выполнен</span>
                     </div>
                  </label>
                  <label className="dropdown__lable">
                     <div className="dropdown__wrapper">
                        <input className="dropdown__checkbox-input" type="checkbox" />
                        <svg className="dropdown__checkbox-img" viewBox="0 0 16 16" fill="#FFF" stroke="none">
                           <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none" />
                        </svg>
                        <span className="dropdown__title">Отменен</span>
                     </div>
                  </label>
               </div>
            </div>
            <div className="input-group">
               <label className="lable" for="lable-sum">Сумма заказа</label>
               <div className="input-group__container">
                  <div className="input-group__wrapper">
                     <input className="input input__order-sum_start" id="lable-sum" type="data" name="date-time" value="5000"
                        placeholder="Введите сумму" />
                     <button className="input-group__button" type="reset">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#BAD8F5" viewBox="0 0 16 16"
                           className="order-date__img">
                           <path d="M12.5 3.5L3.5 12.5M3.5 3.5L12.5 12.5" fill="none" />
                        </svg>
                     </button>
                  </div>
                  <input className="input input__order-sum_end" id="lable-date-time" type="data" name="date-time" value=""
                     placeholder="Введите сумму" />
               </div>
            </div>
            <label className="lable">
               <div className="button-general__wrapper">
                  <button className="button-general" type="submit">
                     <span className="button__text">Применить</span>
                  </button>
               </div>
            </label>
         </form>
         <div className="table">
            <div className="table__header">
               <div className="table__row">
                  <div className="table__cell table__cell_checkbox">
                     <div className="checkbox">
                        <label className="checkbox__lable">
                           <div className="chechbox__items">
                              <input className="checkbox__input" type="checkbox" />
                              <svg className="checkbox__img" viewBox="0 0 16 16" fill="#FFF" stroke="none">
                                 <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none" />
                              </svg>
                           </div>
                        </label>
                     </div>
                  </div>
                  <div className="table__cell table__cell_number-order">
                     <span className="header-name">#</span>
                  </div>
                  <div className="table__cell table__cell_date-order">
                     <div className="header-name__wrapper">
                        <span className="header-name">Дата</span>
                        <button className="button__icon button__icon_small" type="submit">
                           <svg className="img img_icon-small img_header" xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF"
                              stroke="none" viewBox="0 0 16 16">
                              <path stroke="none" d="M 5 6 H 11 V 6.5 L 8.25 11 H 7.75 L 5 6.5 V 6 Z" />
                           </svg>
                        </button>
                     </div>
                  </div>
                  <div className="table__cell table__cell_status-order">
                     <div className="header-name__wrapper">
                        <span className="header-name">Статус</span>
                        <button className="button__icon button__icon_small" type="submit">
                           <svg className="img img_icon-small img_header" xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF"
                              stroke="none" viewBox="0 0 16 16">
                              <path stroke="none" d="M 5 6 H 11 V 6.5 L 8.25 11 H 7.75 L 5 6.5 V 6 Z" />
                           </svg>
                        </button>
                     </div>
                  </div>
                  <div className="table__cell table__cell_positions">
                     <div className="header-name__wrapper">
                        <span className="header-name">Позиций</span>
                        <button className="button__icon button__icon_small" type="submit">
                           <svg className="img img_icon-small img_header" xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF"
                              stroke="none" viewBox="0 0 16 16">
                              <path stroke="none" d="M 5 6 H 11 V 6.5 L 8.25 11 H 7.75 L 5 6.5 V 6 Z" />
                           </svg>
                        </button>
                     </div>
                  </div>
                  <div className="table__cell table__cell_sum">
                     <div className="header-name__wrapper">
                        <span className="header-name">Сумма</span>
                        <button className="button__icon button__icon_small" type="submit">
                           <svg className="img img_icon-small img_header" xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF"
                              stroke="none" viewBox="0 0 16 16">
                              <path stroke="none" d="M 5 6 H 11 V 6.5 L 8.25 11 H 7.75 L 5 6.5 V 6 Z" />
                           </svg>
                        </button>
                     </div>
                  </div>
                  <div className="table__cell table__cell_customer">
                     <span className="header-name">ФИО покупателя</span>
                  </div>
               </div>
            </div>
            <div className="table__body">
               <div className="table__body table__body_wrapper"></div>
               <label>
                  <div className="table__row">
                     <div className="table__cell table__cell_checkbox">
                        <div className="checkbox">
                           <label className="checkbox__lable">
                              <div className="chechbox__items">
                                 <input className="checkbox__input" type="checkbox" />
                                 <svg className="checkbox__img" viewBox="0 0 16 16" fill="#FFF" stroke="none">
                                    <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none" />
                                 </svg>
                              </div>
                           </label>
                        </div>
                     </div>
                     <div className="table__cell table__cell_number-order">1270989</div>
                     <div className="table__cell table__cell_date-order">15.02.2021, 18:00</div>
                     <div className="table__cell table__cell_status-order">
                        <svg className="icon-status icon-status_new" viewBox="0 0 16 16" fill="#FF8C56" stroke="none"
                           xmlns="http://www.w3.org/2000/svg">
                           <circle cx="8" cy="8" r="4" stroke="none" />
                        </svg>
                        Новый
                     </div>
                     <div className="table__cell table__cell_positions">6</div>
                     <div className="table__cell table__cell_sum">101907</div>
                     <div className="table__cell table__cell_customer">Чернышев Филипп Семёнович</div>
                  </div>
               </label>
               <label>
                  <div className="table__row">
                     <div className="table__cell table__cell_checkbox">
                        <div className="checkbox">
                           <label className="checkbox__lable">
                              <div className="chechbox__items">
                                 <input className="checkbox__input" type="checkbox" />
                                 <svg className="checkbox__img" viewBox="0 0 16 16" fill="#FFF" stroke="none">
                                    <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none" />
                                 </svg>
                              </div>
                           </label>
                        </div>
                     </div>
                     <div className="table__cell table__cell_number-order">2353474</div>
                     <div className="table__cell table__cell_date-order">12.03.2021, 05:15</div>
                     <div className="table__cell table__cell_status-order">
                        <svg className="icon-status icon-status_new" viewBox="0 0 16 16" fill="#FF8C56" stroke="none"
                           xmlns="http://www.w3.org/2000/svg">
                           <circle cx="8" cy="8" r="4" stroke="none" />
                        </svg>
                        Новый
                     </div>
                     <div className="table__cell table__cell_positions">2</div>
                     <div className="table__cell table__cell_sum">98003</div>
                     <div className="table__cell table__cell_customer">Филиппов Степан Васильевич</div>
                  </div>
               </label>
               <label>
                  <div className="table__row">
                     <div className="table__cell table__cell_checkbox">
                        <div className="checkbox">
                           <label className="checkbox__lable">
                              <div className="chechbox__items">
                                 <input className="checkbox__input" type="checkbox" />
                                 <svg className="checkbox__img" viewBox="0 0 16 16" fill="#FFF" stroke="none">
                                    <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none" />
                                 </svg>
                              </div>
                           </label>
                        </div>
                     </div>
                     <div className="table__cell table__cell_number-order">1103397</div>
                     <div className="table__cell table__cell_date-order">03.02.2021, 08:04</div>
                     <div className="table__cell table__cell_status-order">
                        <svg className="icon-status icon-status_payment" viewBox="0 0 16 16" fill="#459DF5" stroke="none"
                           xmlns="http://www.w3.org/2000/svg">
                           <circle cx="8" cy="8" r="4" stroke="none" />
                        </svg>
                        Расчет
                     </div>
                     <div className="table__cell table__cell_positions">5</div>
                     <div className="table__cell table__cell_sum">3800</div>
                     <div className="table__cell table__cell_customer">Тихонова Алина Давидовна</div>
                  </div>
               </label>
               <label>
                  <div className="table__row">
                     <div className="table__cell table__cell_checkbox">
                        <div className="checkbox">
                           <label className="checkbox__lable">
                              <div className="chechbox__items">
                                 <input className="checkbox__input" type="checkbox" />
                                 <svg className="checkbox__img" viewBox="0 0 16 16" fill="#FFF" stroke="none">
                                    <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none" />
                                 </svg>
                              </div>
                           </label>
                        </div>
                     </div>
                     <div className="table__cell table__cell_number-order">6924662</div>
                     <div className="table__cell table__cell_date-order">21.01.2021, 13:32</div>
                     <div className="table__cell table__cell_status-order table__cell_completed">
                        <svg className="icon-status" viewBox="0 0 16 16" fill="#0FB864" stroke="none"
                           xmlns="http://www.w3.org/2000/svg">
                           <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none" />
                        </svg>
                        Выполнен
                     </div>
                     <div className="table__cell table__cell_positions">1</div>
                     <div className="table__cell table__cell_sum">5700</div>
                     <div className="table__cell table__cell_customer">Александрова Юлия Никитична</div>
                  </div>
               </label>
               <label>
                  <div className="table__row">
                     <div className="table__cell table__cell_checkbox">
                        <div className="checkbox">
                           <label className="checkbox__lable">
                              <div className="chechbox__items">
                                 <input className="checkbox__input" type="checkbox" />
                                 <svg className="checkbox__img" viewBox="0 0 16 16" fill="#FFF" stroke="none">
                                    <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none" />
                                 </svg>
                              </div>
                           </label>
                        </div>
                     </div>
                     <div className="table__cell table__cell_number-order">2200086</div>
                     <div className="table__cell table__cell_date-order">19.01.2021, 10:28</div>
                     <div className="table__cell table__cell_status-order table__cell_canceled">
                        <svg className="icon-status" viewBox="0 0 16 16" fill="none" stroke="#000"
                           xmlns="http://www.w3.org/2000/svg">
                           <path d="M12.5 12.5L3.5 3.5" fill="none" />
                           <circle cx="8" cy="8" r="6.5" fill="none" />
                        </svg>
                        Отменен
                     </div>
                     <div className="table__cell table__cell_positions">-</div>
                     <div className="table__cell table__cell_sum">-</div>
                     <div className="table__cell table__cell_customer">Андрей</div>
                  </div>
               </label>
               <label>
                  <div className="table__row">
                     <div className="table__cell table__cell_checkbox">
                        <div className="checkbox">
                           <label className="checkbox__lable">
                              <div className="chechbox__items">
                                 <input className="checkbox__input" type="checkbox" />
                                 <svg className="checkbox__img" viewBox="0 0 16 16" fill="#FFF" stroke="none">
                                    <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none" />
                                 </svg>
                              </div>
                           </label>
                        </div>
                     </div>
                     <div className="table__cell table__cell_number-order">2842064</div>
                     <div className="table__cell table__cell_date-order">04.01.2021, 12:12</div>
                     <div className="table__cell table__cell_status-order">
                        <svg className="icon-status" viewBox="0 0 16 16" fill="#FF8C56" stroke="none"
                           xmlns="http://www.w3.org/2000/svg">
                           <circle cx="8" cy="8" r="4" stroke="none" />
                        </svg>
                        Отложен
                     </div>
                     <div className="table__cell table__cell_positions">1</div>
                     <div className="table__cell table__cell_sum">20500</div>
                     <div className="table__cell table__cell_customer">Cудакова Анастасия Ильинична</div>
                  </div>
               </label>
               <label>
                  <div className="table__row">
                     <div className="table__cell table__cell_checkbox">
                        <div className="checkbox">
                           <label className="checkbox__lable">
                              <div className="chechbox__items">
                                 <input className="checkbox__input" type="checkbox" />
                                 <svg className="checkbox__img" viewBox="0 0 16 16" fill="#FFF" stroke="none">
                                    <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none" />
                                 </svg>
                              </div>
                           </label>
                        </div>
                     </div>
                     <div className="table__cell table__cell_number-order">1730071</div>
                     <div className="table__cell table__cell_date-order">17.12.2020 22:45</div>
                     <div className="table__cell table__cell_status-order table__cell_completed">
                        <svg className="icon-status" viewBox="0 0 16 16" fill="#0FB864" stroke="none"
                           xmlns="http://www.w3.org/2000/svg">
                           <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none" />
                        </svg>
                        Выполнен
                     </div>
                     <div className="table__cell table__cell_positions">1</div>
                     <div className="table__cell table__cell_sum">1399</div>
                     <div className="table__cell table__cell_customer">Зверева Арина Николаевна</div>
                  </div>
               </label>
               <label>
                  <div className="table__row">
                     <div className="table__cell table__cell_checkbox">
                        <div className="checkbox">
                           <label className="checkbox__lable">
                              <div className="chechbox__items">
                                 <input className="checkbox__input" type="checkbox" />
                                 <svg className="checkbox__img" viewBox="0 0 16 16" fill="#FFF" stroke="none">
                                    <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none" />
                                 </svg>
                              </div>
                           </label>
                        </div>
                     </div>
                     <div className="table__cell table__cell_number-order">7987376</div>
                     <div className="table__cell table__cell_date-order">07.12.2020 08:57</div>
                     <div className="table__cell table__cell_status-order table__cell_completed">
                        <svg className="icon-status" viewBox="0 0 16 16" fill="#0FB864" stroke="none"
                           xmlns="http://www.w3.org/2000/svg">
                           <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none" />
                        </svg>
                        Выполнен
                     </div>
                     <div className="table__cell table__cell_positions">3</div>
                     <div className="table__cell table__cell_sum">117810</div>
                     <div className="table__cell table__cell_customer">Карташов Максим Кириллович</div>
                  </div>
               </label>
               <label>
                  <div className="table__row">
                     <div className="table__cell table__cell_checkbox">
                        <div className="checkbox">
                           <label className="checkbox__lable">
                              <div className="chechbox__items">
                                 <input className="checkbox__input" type="checkbox" />
                                 <svg className="checkbox__img" viewBox="0 0 16 16" fill="#FFF" stroke="none">
                                    <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none" />
                                 </svg>
                              </div>
                           </label>
                        </div>
                     </div>
                     <div className="table__cell table__cell_number-order">1373265</div>
                     <div className="table__cell table__cell_date-order">15.11.2020, 14:26</div>
                     <div className="table__cell table__cell_status-order icon-status_completed">
                        <svg className="icon-status" viewBox="0 0 16 16" fill="#0FB864" stroke="none"
                           xmlns="http://www.w3.org/2000/svg">
                           <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none" />
                        </svg>
                        Выполнен
                     </div>
                     <div className="table__cell table__cell_positions">1</div>
                     <div className="table__cell table__cell_sum">1708</div>
                     <div className="table__cell table__cell_customer">Васильев Вадим Даниилович</div>
                  </div>
               </label>
               <label>
                  <div className="table__row">
                     <div className="table__cell table__cell_checkbox">
                        <div className="checkbox">
                           <label className="checkbox__lable">
                              <div className="chechbox__items">
                                 <input className="checkbox__input" type="checkbox" />
                                 <svg className="checkbox__img" viewBox="0 0 16 16" fill="#FFF" stroke="none">
                                    <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none" />
                                 </svg>
                              </div>
                           </label>
                        </div>
                     </div>
                     <div className="table__cell table__cell_number-order">1311100</div>
                     <div className="table__cell table__cell_date-order">07.11.2020, 18:52</div>
                     <div className="table__cell table__cell_status-order table__cell_canceled">
                        <svg className="icon-status" viewBox="0 0 16 16" fill="none" stroke="#000"
                           xmlns="http://www.w3.org/2000/svg">
                           <path d="M12.5 12.5L3.5 3.5" fill="none" />
                           <circle cx="8" cy="8" r="6.5" fill="none" />
                        </svg>
                        Отменен
                     </div>
                     <div className="table__cell table__cell_positions">-</div>
                     <div className="table__cell table__cell_sum">-</div>
                     <div className="table__cell table__cell_customer">София</div>
                  </div>
               </label>
            </div>
            <div className="table-footer">
               <form className="table-footer__button-group">
                  <span className="table-footer__text">Выбрано записей: 5</span>
                  <button className="button button_small button_change-status" type="submit">
                     <span className="button__text">Изменить статус</span>
                     <svg className="img img_small img_small-footer " viewBox="0 0 16 16" fill="none" stroke="#FFFFFF"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 14.5H15" fill="none" />
                        <path
                           d="M5 13L1.5 14.5L3 11M5 13L3 11M5 13L12 6M3 11L10 4M11 3L12.5 1.5L14.5 3.5L13 5M11 3L13 5M11 3L10 4M13 5L12 6M12 6L10 4"
                           fill="none" />
                     </svg>
                  </button>
                  <div className="table-footer__downdrop ">
                     <form className="dropdown__item dropdown__item_large">
                        <div className="dropdown__block">
                           <span className="dropdown__title">Удалить n записей?</span>
                           <button className="dropdown__button dropdown__button_small dropdown__button_transparent">
                              <span className="dropdown__title dropdown__title_light">Удалить</span>
                           </button>
                           <button className="dropdown__button dropdown__button_small">
                              <span className="dropdown__title dropdown__title_dark">Отмена</span>
                           </button>
                        </div>
                     </form>
                     <button className="button button_small button_delete" type="submit">
                        <span className="button__text">Удалить</span>
                        <svg className="img img_small img_small-footer" viewBox="0 0 16 16" fill="none" stroke="#FFFFFF"
                           xmlns="http://www.w3.org/2000/svg">
                           <path
                              d="M2 3.5H3.5M14 3.5H12.5M5.5 3.5H10.5M5.5 3.5V2.5C5.5 1.94772 5.94772 1.5 6.5 1.5H9.5C10.0523 1.5 10.5 1.94772 10.5 2.5V3.5M5.5 3.5H3.5M10.5 3.5H12.5M3.5 3.5V13.5C3.5 14.0523 3.94772 14.5 4.5 14.5H11.5C12.0523 14.5 12.5 14.0523 12.5 13.5V3.5"
                              fill="none" stroke-linecap="round" />
                           <path d="M6.5 6V12M9.5 6V12" fill="none" stroke-linecap="round" />
                        </svg>
                     </button>
                  </div>
               </form>
               <div className="paginations">
                  <form className="table-footer__pagination-group">
                     <button className="button button_micro button_fill" type="submit">
                        <span className="button__text">1</span>
                     </button>
                     <button className="button button_micro" type="submit">
                        <span className="button__text">2</span>
                     </button>
                     <button className="button button_micro" type="submit">
                        <span className="button__text">3</span>
                     </button>
                     <button className="button button_micro" type="submit">
                        <span className="button__text">...</span>
                     </button>
                     <button className="button button_micro" type="submit">
                        <span className="button__text">18</span>
                     </button>
                  </form>
                  <button className="button button_micro" type="submit">
                     <span className="button__text">#</span>
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}

export default App;
