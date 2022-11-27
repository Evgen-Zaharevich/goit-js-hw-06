// Напиши скрипт управления формой логина.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>

// 1.Обработка отправки формы form.login-form должна быть по событию submit.
// 2.При отправке формы страница не должна перезагружаться.
// 3.Если в форме есть незаполненные поля, выводи alert с предупреждением о том,
// что все поля должны быть заполнены.
// 4.Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект,
// где имя поля будет именем свойства, а значение поля - значением свойства.
// 5.Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

const formRef = document.querySelector(`.login-form`);

formRef.addEventListener(`submit`, onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  if (!email.value.trim() || !password.value.trim()) {
    alert(`Please fill in all input fields`);
  } else {
    const formData = {
      email: email.value,
      password: password.value,
    };
    console.log(formData);
    event.currentTarget.reset();
  }
}
