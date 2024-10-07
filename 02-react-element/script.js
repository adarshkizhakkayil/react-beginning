// const h2 = React.createElement('h2',{className:'subheading'},'hello');

// const container = React.createElement('div',{},[

//     React.createElement('section',{key:0},[

//         React.createElement('p',{key:1},
//             'The library for developers'
//         ),
//         React.createElement('img',
//             {key:2,style : {width : 200} ,src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1024px-React_Logo_SVG.svg.png' },
            
//         )
//     ]),

//     React.createElement('section',{key:1},[

//         React.createElement('form',{key:1},[
//             React.createElement('label',{key:0, htmlFor : 'username'}, Username),
//             React.createElement('input',{key:1, id: 'username'})
//         ])
//     ])
  
// ])
// const root = ReactDOM.createRoot(document.querySelector('#root'))
// root.render(h2)
// root.render(container)


const container = React.createElement(
    'div',
    { className: 'container', id: 'container' },
    [
      React.createElement('section', { key: 1 }, [
        React.createElement(
          'p',
          { key: 1 },
          'The library for web and native user interfaces'
        ),
        React.createElement('img', {
          key: 2,
          style: {
            width: 200,
            backgroundColor: 'teal',
            borderRadius: 8,
            padding: 16,
          },
          src: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
        }),
      ]),
      React.createElement('section', { key: 2 }, [
        React.createElement('form', { key: 1 }, [
          React.createElement('div', {className: 'input-group', key: 1}, [
            React.createElement(
              'label',
              { key: 1, htmlFor: 'username' },
              'Username'
            ),
            React.createElement('input', { key: 2, id: 'username' }),
          ]),
          React.createElement('div', {className: 'input-group', key: 2}, [
            React.createElement(
              'label',
              { key: 1, htmlFor: 'password' },
              'Password'
            ),
            React.createElement('input', { key: 2, id: 'password', type: 'password' }),
          ]),
        ]),
      ]),
    ]
  )
  
  const root = ReactDOM.createRoot(document.querySelector('#root'))
  
  root.render(container)