import pop_cat from './media/pop-cat.gif'
import tg_icon from './media/telegram_icon.png'

function App() {

  // useEffect(() => {
  //   document.title = "Web project page";
  // }, []);

  return (

    <html>
      <head></head>
      <body style={{backgroundColor: '#b8b8b8b8', display: 'flex', height: 2000}}>
        <div>
            <a
              href='http://github.com/poslam'><img src={pop_cat} alt="loading..." style={{position: 'absolute'}}></img>
            </a>
        </div>
        <div style={{margin: '0 auto', width: 'fit-content', padding: 170, paddingLeft: 600}}>
          <h1 style={{}}>Кириенко Денис</h1>
            <div style={{}}>Backend-разработчик</div>
            <div style={{}}>+7 924 522 71 72&nbsp; &nbsp; &nbsp;<a href="mailto:kirienko.do@dvfu.ru">kirienko.do@dvfu.ru</a>&nbsp; &nbsp; &nbsp; @poslam</div>
            <div style={{}}>&nbsp;</div>
            <div style={{}}>&nbsp;</div>
            
            <div>
              <a
              href='https://t.me/poslam'><img src={tg_icon} alt="loading..." 
              style={{height: 25, width: 25}}></img>
            </a>
            </div>
        </div>
      </body>
    </html>
  );
}

export default App;