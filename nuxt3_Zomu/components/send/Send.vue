<template>
<div class="nav_send_form">
    <form onkeypress="return event.keyCode != 13;" class="form">
      <input class="form__input" type="text" placeholder="Name">
      <input class="form__input" type="text" placeholder="Email">
      <textarea class="form__input form_text" placeholder="Content"></textarea>
      <button class="form__button button submit">SEND</button>
    </form>
  </div>
</template>
