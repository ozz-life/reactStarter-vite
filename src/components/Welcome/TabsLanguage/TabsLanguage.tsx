import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import iconRU from './images/ru.png';
import iconUSGB from './images/usgb.jpg';

export default () => (
  <Tabs>
    <TabList>
      <Tab>
        <img src={iconUSGB} alt="ENicon" height={120}/>
      </Tab>
      <Tab>
      <img src={iconRU} alt="RUicon" height={120}/>
      </Tab>
    </TabList>

    <TabPanel>
      <h2>React Starter - vite</h2>

<p>After a lot of fiddling with create-react-app, parcel and webpack. And also thanks to the change of major versions of react-router-dom and apollo, with incompatible updates. Everything had to be rewritten (again). I wanted a working starter, with a minimally embedded structure. Especially considering that most of these starters do not work.</p>
<p>Here is the basic directory structure and examples of connecting react-router-v6, apollo, tabs component from the repository. From this you can start, look and do in the image and likeness. This is what I was missing. And this is something with which you can really safely start from scratch.</p>
<p>And although I wanted to make a starter "middle" level. On an adaptive layout. With basic admin. React forms. Pagination. Burger menu. Writing comments to the database. And other chips. All this had to be abandoned. It was really important for me that everything just worked right away, and all the concepts here were as clear as possible to any beginner. Unfortunately, each next feature is radically different from project to project. Even the nav component had to be abandoned, it is too individual...</p>
<p>As a result, further thinking about this, especially if you bother with architecture and conditional patterns, like atomic design, will lead to the creation of a framework similar to the next react, like gatsby/next.js/remix etc . The pointlessness of this exercise is all too obvious.</p>
<p>But this repository can be really useful to someone.</p>
<p>Thanks for watching and good luck ;)</p>
    </TabPanel>
    <TabPanel>
      <h2>React Starter - vite</h2>
            <p>После долгих мучений с create-react-app, parcel и webpack. А так же благодаря смене мажорных версий react-router-dom и apollo, с несовместимыми обновлениями. Всё пришлось переписывать (снова). Мне захотелось рабочий стартер, c минимально заложенной структурой.
               Особенно с учётом того, что большинство подобных стартеров не работают</p>
            <p>Здесь представлена базовая структура директорий и примеры подключения react-router-v6, apollo, компонента tabs из репозитория. C этого можно начать, посмотреть и сделать по образу и подобию.
               Это то, чего мне не хватало. И это то, с чего действительно можно смело начать с нуля.</p>
            <p>И хоть я хотел сделать стартер "среднего" уровня. На адаптивной вёрстке. С базовой админкой. React-формами. Пагинацией. Бургер-меню. Записью комментариев в базу данных. И прочими фишками. От всего этого пришлось отказаться.
            Мне было действительно важно, чтобы всё просто сразу заработало, а все концепции здесь были максимально понятны любому начинающему. К сожалению каждая следующая фича кардинально отличается от проекта к проекту. Даже от nav компонента пришлось отказаться, он слишком индивидуален...
            </p>
            <p>В результате дальнейшее продумывание подобного, особенно если заморачиваться на архитектуре и условным паттернам, вроде atomic design приведёт к созданию
               похожего на очередной react фреймворк, вроде gatsby/next.js/remix etc . Бессмысленность этого занятия слишком очевидна. </p>
            <p>Но этот репозиторий может быть кому-то действительно полезен. </p>
            <p>Спасибо за внимание и удачи ;)</p>
    </TabPanel>
  </Tabs>
);