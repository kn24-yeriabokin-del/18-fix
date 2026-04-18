import React from 'react';

const AboutMe = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>👋 Привіт, я Євген</h1>
      <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#444' }}>
        Відверто кажучи, моя головна пристрасть — це 3D-графіка та моделювання, саме там я бачу своє професійне майбутнє. 
        Проте університетська програма диктує свої правила, тому зараз я проходжу шлях веброзробника. 
        Маю визнати: цей курс із React — напевно, найцікавіше і найсучасніше з усього, що може запропонувати моя спеціальність. 
        І хоча мій ентузіазм до написання коду для браузерів досить стриманий, я звик підходити до завдань логічно і виконувати їх якісно.
      </p>
      
      <h3>🎯 Мої справжні інтереси та принципи</h3>
      <ul style={{ fontSize: '16px', lineHeight: '1.6' }}>
        <li><strong>Фокус на 3D:</strong> вивчаю тривимірне моделювання, рендеринг та роботу з простором (бо полігони мені якось ближчі, ніж div-и).</li>
        <li><strong>Прагматизм:</strong> я свідомий того, що розуміння логіки програмування та JavaScript ніколи не буде зайвим, навіть якщо це не робота моєї мрії.</li>
        <li><strong>Відповідальність:</strong> якщо вже доводиться робити вебпроєкти в рамках навчання, я роблю їх так, щоб за них не було соромно.</li>
      </ul>

      <h3>💻 Університетські проєкти</h3>
      <p style={{ color: '#666', fontStyle: 'italic' }}>Те, що було створено в процесі опанування спеціальності:</p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div style={{ padding: '15px', border: '1px solid #ccc', borderRadius: '8px', background: '#f9f9f9' }}>
          <strong>HTML + CSS:</strong> <a href="https://github.com/kn24-yeriabokin-del/fist-project.git" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: '#007bff' }}>Базова верстка (бо з чогось треба починати)</a>
        </div>
        <div style={{ padding: '15px', border: '1px solid #ccc', borderRadius: '8px', background: '#f9f9f9' }}>
          <strong>JavaScript:</strong> <a href="https://github.com/kn24-yeriabokin-del/js-arrayMoreMethods.git" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: '#007bff' }}>Інтерактивні додатки (додаємо трохи логіки)</a>
        </div>
        <div style={{ padding: '15px', border: '1px solid #ccc', borderRadius: '8px', background: '#e3f2fd' }}>
          <strong>React:</strong> <a href="https://github.com/kn24-yeriabokin-del/18-fix" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: '#0056b3', fontWeight: 'bold' }}>SPA-портфоліо та API (найкраще з того, що було)</a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;