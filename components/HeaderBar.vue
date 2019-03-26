<template>
<body>
<div class="header-bar" id="menu">
  <nuxt-link class="header-bar link active" to="/">Главная</nuxt-link>
  <nuxt-link class="header-bar link" to="/okompanii">О компании</nuxt-link>
  <nuxt-link class="header-bar link" to="/statsubagentom">Стать субагентом</nuxt-link>
  <nuxt-link class="header-bar link" to="/uslygi">Услуги</nuxt-link>
  <nuxt-link class="header-bar link" to="/kontakty">Контакты</nuxt-link>
</div>
</body>
</template>

<script>
</script>

<style>
div {
  margin-top: 69px; }
  div nuxt-link {
    font-family: SegoeUI;
    font-size: 10px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: normal;
    color: #c5c5c5;
    text-decoration: none;
    width: 612px;
    margin: 19.5px;
    cursor: pointer; }
    @media screen and (max-width: 1280px) {
      div nuxt-link {
        font-family: SegoeUI;
        font-size: 10px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        letter-spacing: normal;
        color: #c5c5c5;
        text-decoration: none;
        width: 612px;
        margin: 20px;
        cursor: pointer; } }
  div :hover {
    color: #00aeef;
    border-bottom: 1px solid #00aeef;
    padding-bottom: 14px;
    text-decoration: none; }
  div .active {
    color: #00aeef;
    border-bottom: 1px solid #00aeef;
    padding-bottom: 14px;
    text-decoration: none; }

div:before {
  content: '';
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  width: 100%;
  height: 1px;
  background: #c5c5c5;
  position: relative;
  left: -25px;
  margin-left: -1178px; }
  @media screen and (max-width: 1280px) {
    div:before {
      content: '';
      display: inline-block;
      vertical-align: middle;
      box-sizing: border-box;
      width: 100%;
      height: 1px;
      background: #c5c5c5;
      position: relative;
      left: -34px;
      margin-left: -756px; } }

body {
  background: #1a1a1a; }
</style>
