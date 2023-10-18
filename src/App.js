import pop_cat from './media/pop-cat.gif'

function App() {
  return (
    <>
      <div>
        <>
        <h1 style={{display: 'flex', justifyContent: 'center', 
              position: 'relative', left: 100}}>Кириенко Денис</h1>
          <p style={{display: 'flex', justifyContent: 'center',
              position: 'relative', left: 100}}>Backend-разработчик</p>
          <p style={{display: 'flex', justifyContent: 'center',
              position: 'relative', left: 100}}>+7 924 522 71 72&nbsp; &nbsp; &nbsp;<a href="mailto:kirienko.do@dvfu.ru">kirienko.do@dvfu.ru</a>&nbsp; &nbsp; &nbsp; @poslam</p>
          <p style={{display: 'flex', justifyContent: 'center',
              position: 'relative', left: 100}}>&nbsp;</p>
          <p style={{display: 'flex', justifyContent: 'center',
              position: 'relative', left: 100}}>&nbsp;</p>
        </>
      </div>
      <div>
        <><img src={pop_cat} alt="loading..."/></>
      </div>
    </>
  );
}

export default App;