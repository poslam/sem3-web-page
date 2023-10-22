import pop_cat from './media/pop-cat.gif'
import tg_icon from './media/telegram_icon.png'
import wait_cat from './media/wait_cat.png'
import avatar from './media/avatar.jpg'
import React, { useEffect } from 'react';

function App() {

  useEffect(() => {
    document.title = "Кириенко Денис";
  }, []);

  return (

    <html>
      <head></head>
      <body style={{backgroundColor: '#ffcd82', display: 'flex', height: '100vh'}}>
        <a
          href='https://t.me/poslam'><img src={avatar} alt="loading..." 
          style={{height: '100vh'}}></img>
        </a>
        
        <div style={{margin: 'auto', position: 'relative', alignContent: 'center', paddingBottom: 100, display: 'inline-block'}}>
          <h1 style={{fontSize: 50}}>Кириенко Денис</h1>
            <div style={{paddingBottom: 50, fontSize: 35}}>Backend-разработчик
              
            </div>
            <a
                href='https://t.me/poslam'><img src={tg_icon} alt="loading..." 
                style={{height: 35, width: 35}}></img>
              </a>
              <a
                href='http://github.com/poslam'><img src={pop_cat}
                alt="loading..." style={{height: 35, width: 35, paddingLeft: 20}}></img>
              </a>
              <a
                href='https://vk.com/poslam'><img src={wait_cat} alt="loading..." 
                style={{height: 35, width: 35, paddingLeft: 20}}></img>
              </a>
              <text style={{fontSize: 20, paddingLeft: 20, verticalAlign: 'top'}}>+7 924 522 71 72&nbsp; &nbsp; &nbsp;<a href="mailto:kirienko.do@dvfu.ru">kirienko.do@dvfu.ru</a></text>
        </div>
      </body>
    </html>
  );
}

export default App;