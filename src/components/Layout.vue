<template>
  <div class="body_wrapper">
    <div class="side-bar" :class="isSideBarOpen ? 'open' : ''">
      <div class="logo">
        <!-- <img src="../assets/newDesign-assets/logo-white.svg" alt="logo" /> -->
      </div>
      <ul>
        <li @click="hideDropDown()">
          <router-link to="/">
            <img
              class="rout-icon"
              src="../assets/dashboard.svg"
            />Dashboard</router-link
          >
        </li>
      </ul>
    </div>
    <div class="container-header-body">
      <header>
        <div class="header_content">
          <div class="left">
            <span class="menu_icon" @click="isSideBarOpen = !isSideBarOpen"
              >
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div class="right">
            <div class="profile">
              <div class="img-wrapper">
                <img src="@/assets/profile-avatar.png" alt="profile" />
              </div>
              <h5 @click="showDropDown = !showDropDown">
                <!-- {{ $store.getters.current_user.name }} -->

                <span>
                  <i class="fas fa fa-chevron-down"></i>
                </span>
              </h5>
            </div>
          </div>
        </div>

      </header>
      <div class="container-body">
        <router-view />
      </div>
    </div>
  </div>
  </template>
  
<script>
export default {
  name:'LayOut',
  data() {
    return{
      isSideBarOpen:false,
      showDropDown:false
    }
  }
 }
</script>
  
<style>
* {
  box-sizing: border-box;
  font-family: 'Cairo', sans-serif;
  font-family: 'Varela Round', sans-serif;
}

html,
body,
#app,
.body-page {
  height: 100%;
  margin: 0;
}
/* .overflowBody {
  overflow-y: scroll;
} */

body {
  background: rgba(245, 245, 245, 1) !important;
  overflow-y: scroll;
}

.m-20 {
  margin-top: 40px;
}
.clearboth {
  clear: both;
  overflow: hidden;
}

.inProgress{
  background:#38A130 !important;
  color:#FFF
}

.testing{
  background:#EFD801 !important;
  color:#FFF
}

.finshing{
  background:#030000 !important;
  color:#FFF
}

.tasks .tasks_wrapper span{
  display:inline-block;
  padding: 5px 10%;
  background:#DDD;
  border-radius:5px;
}

.openAmmoutBtn{
  border:0;
  background:none;
  color:blue;

}


/******* New Design Styles *******/
:root {
  --darkBlue: #556aff;
  --lightBlue: #edefff;
  --darkPurple: #9f01d6;
  --lightPurple: #f4e4fa;
  --darkGreen: #007046;
  --lightGreen: #49d9a3;
  --redColor: #e60000;
  --borderBottomColor: #e3e3e3;

  --borderRadius_8: 8px;
  --borderRadius_20: 20px;
  --borderRadius_30: 30px;
}

/* Common classes */

.heading_without_icon {
  padding-left: 40px !important;
}

.heading_with_icon {
  padding-left: 25px !important;
}

.blue_heading {
  background-color: var(--lightBlue) !important;
  color: var(--darkBlue) !important;
}

.purple_heading {
  background-color: var(--lightPurple);
  color: var(--darkPurple);
}

.green_heading {
  background-color: var(--lightGreen);
  color: var(--darkGreen);
}

.task_wrapper {
  width: 100%;
  height: auto;
  padding: 18px 18px 0 18px;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.16);
}

.grid_wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-template-rows: repeat(2, auto);
  grid-gap: 40px;
}

.grid_wrapper_2 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-template-rows: repeat(1, auto);
  grid-gap: 40px;
}

.grid_wrapper_3 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-template-rows: repeat(2, auto);
  grid-gap: 40px;
}

.grid_wrapper_4 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 40px;
}

.grid_wrapper_5 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  grid-gap: 40px;
}

.inner_grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
}

.flex_wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.filters_wrapper {
  padding: 15px 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  gap: 20px;
}

.filters_wrapper_2 {
  padding: 15px 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(145px, 1fr));
  gap: 20px;
}

.fixedHeight_wrapper {
  height: 280px;
}

@media (max-width: 600px) {
  .grid_wrapper,
  .grid_wrapper_2 {
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  }
}

@media (min-width: 1441px) {
  .grid_wrapper,
  .grid_wrapper_2 {
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  }
}

.centred_btn {
  display: block;
  margin: auto;
}

.blue_btn {
  background-color: var(--lightBlue) !important;
  color: var(--darkBlue) !important;
}

.purple_btn {
  background-color: var(--lightPurple);
  color: var(--darkPurple);
}

.green_btn {
  background-color: var(--lightGreen);
  color: var(--darkGreen);
}

.white_btn {
  background-color: #fff;
  border: 1px solid #eaeaea;
}

.white_purple_btn {
  background-color: #fff;
  color: var(--darkPurple);
  border: 1px solid #eaeaea;
  font-weight: normal;
}

.white_blue_btn {
  background-color: #fff;
  color: var(--darkBlue);
  border: 1px solid #eaeaea;
}

.white_green_btn {
  background-color: #fff;
  color: var(--darkGreen);
  border: 1px solid #eaeaea;
}

.red_btn {
  background-color: var(--redColor);
  color: #fff;
}

input[type='text'].text_input,
input[type='password'].password_input,
input[type='search'].search_input,
input[type='email'].email_input,
input[type='number'].number_input {
  height: 41px !important;
  border: none !important;
  padding: 0px 30px !important;
  border-radius: 15px !important;
  background-color: #fff !important;
  font-size: 17px !important;
  text-align: left !important;
}

input[type='text'].full_width,
input[type='password'].full_width,
input[type='search'].full_width,
input[type='number'].full_width {
  width: 100%;
}

input[type='text'].with_boxShadow,
input[type='password'].with_boxShadow,
input[type='search'].with_boxShadow,
input[type='number'].with_boxShadow {
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.16) !important;
}

input[type='text'].with_border,
input[type='password'].with_border,
input[type='search'].with_border,
input[type='email'].with_border,
input[type='number'].with_border {
  border: 1px solid #dadada !important;
}

input[type='text'].text_input::placeholder,
input[type='search'].search_input::placeholder,
input[type='number'].number_input::placeholder {
  color: #c3c3c9 !important;
}

input[type='text'].text_input:focus,
input[type='password'].password_input:focus,
input[type='search'].search_input:focus,
input[type='number'].number_input:focus {
  outline: none;
}

.input_control {
  margin-bottom: 20px;
  position: relative;
}

.input_control.field {
  padding: 10px 20px;
}

.input_control label {
  padding-left: 20px;
  font-size: 16px;
  font-weight: bold;
  color: #5a5a5a;
}

.input_control input {
    width: 100%;
    height: 40px;
    border: 1px solid rgba(233, 233, 233, 1);
    outline: none;
    font-size: 14px;
    font-weight: bold;
    color: #000;
    padding: 0 30px;
    border-radius: 10px;  
}

.mt_20 {
  margin-top: 20px;
}

.mb_20 {
  margin-bottom: 20px;
}

.my_20 {
  margin: 20px 0;
}

.my_40 {
  margin: 40px 0;
}

.mb_40 {
  margin-bottom: 40px;
}

.mt_40 {
  margin-top: 40px;
}

.p_20 {
  padding: 20px;
}

.pt_20 {
  padding-top: 20px;
}

.pt_40 {
  padding-top: 40px;
}

.pb_20 {
  padding-bottom: 20px;
}

.pb_40 {
  padding-bottom: 40px;
}

.py_20 {
  padding: 20px 0;
}


/* Modals */
.modal {
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  overflow-y: scroll !important ;
}

.modal-content {
  width: 500px;
  border-radius: 20px;
  background-color: #fff;
}

.model_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.model_header h4 {
  width: calc(100% - 50px);
  margin: 0;
  padding: 12px 0px 12px 44px;
  font-size: 22px;
  font-weight: bold;
  border-radius: 20px;
  text-align: left;
}

.model_header button {
  border: none;
  background-color: #e04f5f;
  color: #fff;
  width: 35px;
  height: 35px;
  text-align: center;
  font-size: 23px;
  line-height: 25px;
  border-radius: 50%;
}

.modal-content .input_control label {
  padding-left: 20px;
  font-size: 16px;
  font-weight: bold;
}

.modal-content .delete_modal .delete_modal_header {
  display: flex;
  align-items: center;
  margin-bottom: 25px;
}

.modal-content .delete_modal .delete_modal_header img {
  margin-right: 10px;
}

.modal-content .delete_modal .delete_modal_header h3 {
  margin: 0;
  color: #868686;
  font-size: 18px;
  margin-top: 5px;
}

.modal-content .delete_modal .btns_wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-content .delete_modal .btns_wrapper button {
  border: none;
  width: 220px;
  height: 40px;
  border-radius: 20px;
  font-size: 18px;
}

.modal-content .delete_modal .btns_wrapper .cancel {
  background-color: #eeeeee;
  color: #868686;
}

.modal-content .delete_modal .btns_wrapper .confirm {
  background-color: #e60000;
  color: #fff;
}

.nav_btns,
.sub_nav_btns {
  border-bottom: 2px solid #eaeaea;
  margin-bottom: 15px;
}

.nav_btns button,
.sub_nav_btns button {
  border: none;
  background-color: transparent;
  color: #e0e0e0;
  margin-right: 15px;
  font-weight: bold;
  transition: color 0.3s ease;
}

.nav_btns button {
  font-size: 28px;
  padding: 5px 10px;
  outline: none;
}

.sub_nav_btns button {
  font-size: 14px;
  padding: 5px;
}

.nav_btns button.active,
.sub_nav_btns button.active {
  border-bottom: 3px solid #424242;
  color: #424242;
}

/* Any layout styles */
.animateArrow {
  transform: rotate(180deg);
  transition: 0.7s;
}

.removeAnimateArrow {
  transform: rotate(0deg);
  transition: 0.7s;
}

.body_wrapper {
  background-color: #f5f5f5;
  display: flex;
  padding: 0px 0px 30px 10px;
}

.side-bar {
  width: 300px;
  min-height: 94vh !important;
  background-image: linear-gradient(to bottom, #8a93fe, #3343fb);
  margin-top: 20px;
  padding: 30px 15px;
  border-radius: 40px;
  position: fixed !important;
  z-index: 999;
  overflow: hidden;
}

.side-bar ::-webkit-scrollbar {
  width: 7px;
  background: transparent !important;
}

/* Track */
.side-bar ::-webkit-scrollbar-track {
  box-shadow: transparent;
  color: transparent;
  background: transparent;
  border-radius: 10px;
}

/* Handle */
.side-bar ::-webkit-scrollbar-thumb {
  background: #fff;
  border-radius: 15px;
}

/* Any Home layout Styles */
.animateArrow {
  transform: rotate(180deg);
  transition: 0.7s;
}

.removeAnimateArrow {
  transform: rotate(0deg);
  transition: 0.7s;
}

.body_wrapper {
  background-color: #f5f5f5;
  display: flex;
  padding: 0px 0px 30px 10px;
}

.side-bar {
  width: 300px;
  height: 94vh;
  background-image: linear-gradient(to bottom, #8a93fe, #3343fb);
  margin-top: 20px;
  padding: 30px 15px;
  border-radius: 40px;
  position: fixed !important;
  z-index: 999;
}

.side-bar ::-webkit-scrollbar {
  width: 7px;
  background: transparent !important;
}

/* Track */
.side-bar ::-webkit-scrollbar-track {
  box-shadow: transparent;
  color: transparent;
  background: transparent;
  border-radius: 10px;
}

/* Handle */
.side-bar ::-webkit-scrollbar-thumb {
  background: #fff;
  border-radius: 15px;
}

.side-bar .logo {
  padding: 0 0 30px 50px;
}

.side-bar .logo img {
  width: 80px;
  height: auto;
}

.side-bar ul {
  width: 100%;
  padding: 0;
  list-style: none;
  max-height: 440px;
  overflow-y: scroll;
}

.side-bar ul li.dropdown {
  color: #ffffff;
  padding: 15px 25px;
  border-radius: 20px;
  line-height: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.side-bar ul li.dropdown h5 {
  width: 100%;
  margin: 0;
  font-size: 16px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.side-bar ul li.dropdown h5 i {
  font-size: 12px;
}

.side-bar ul > li a,
.side-bar .drop-list li a {
  width: 100%;
  padding: 15px 25px;
  color: #ffffff;
  font-size: 16px;
  border-radius: 20px;
  line-height: 20px;
  display: flex;
  align-items: center;
}

.side-bar .drop-list li a {
  padding: 15px 10px 15px 80px;
}

.side-bar ul li a img {
  margin-right: 20px;
}

.side-bar ul li img {
  margin-right: 20px;
  width: 22px;
}

.side-bar ul li a:hover,
.side-bar ul li a.active_sidebar_btn,
.side-bar ul li a.router-link-active,
.side-bar ul li.dropdown:hover {
  background-color: #626ac9;
}

.container-header-body {
  width: calc(100% - 300px);
  margin-left: 300px;
  padding: 0 40px;
  position: relative;
  background: rgba(245, 245, 245, 1) !important;
}

.container-header-body header {
  padding: 20px 0;
  margin-bottom: 36px;
}

.container-header-body header .header_content {
  display: flex;
  justify-content: space-between !important;
  align-items: center;
}

.container-header-body .menu_icon {
  display: none;
  cursor: pointer;
  width:40px;
}

.container-header-body .menu_icon span{
  display:block;
  width:100%;
  height:4px;
  border-radius:5px;
  background:#2c3e50;
  margin-bottom:5px;
}

.container-header-body header .right .profile {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.container-header-body header .header_content {
  justify-content: flex-end;
}

.container-header-body header .right .profile .img-wrapper {
  width: 50px;
  height: 50px;
  margin-right: 15px;
}

.container-header-body header .right .profile .img-wrapper img {
  width: 100%;
  height: auto;
  border-radius: 50%;
}

.container-header-body header .right .profile h5 {
  margin: 0;
  color: #424242;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
}

.container-header-body header .right .profile h5 span {
  margin-left: 10px;
  margin-right: 15px;
  font-size: 12px;
}


/* Tasks */
.tasks_wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 30px;
}

.single_tasks {
  padding: 5px 10px;
  height: 220px;
}

.single_tasks .actions_btns {
  display: flex;
  justify-content: flex-end;
}

.single_tasks .actions_btns button {
  border: 0;
  background: transparent;
}

.single_tasks .actions_btns button img {
  width: 14px;
}

.single_tasks .img_wrapper {
  width: 60px;
  height: 60px;
  margin: auto;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 15px;
}

.single_tasks .img_wrapper img {
  width: 100%;
  height: 100%;
}

.single_tasks h5 {
  font-size: 14px;
  text-align: center;
  font-weight: bold;
  margin-bottom: 10px;
}

.single_tasks h6 {
  font-size: 13px;
  text-align: center;
  margin-bottom: 20px;
}

.tasks .single_tasks button.details_btn {
  display: block;
  margin: auto;
  border: 0;
  background: transparent;
  width: 110px;
  height: 35px;
  border-radius: 15px;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.16);
  margin-bottom: 5px;
}

.tasks .single_tasks button.details_btn a {
  color: #5a5a5a;
}


@media (max-width: 600px) {
  .side-bar {
    width: 220px;
    padding: 30px 5px;
    border-radius: 40px;
    left: -100%;
    transition: all 0.3s ease;
  }

  .side-bar.open {
    left: 15px;
  }

  .side-bar .logo img {
    width: 60px;
    height: auto;
  }

  .side-bar ul {
    max-height: 65vh;
  }

  .side-bar ul > li a,
  .side-bar .drop-list li a {
    padding: 15px;
    font-size: 15px;
  }

  .side-bar ul li.dropdown {
    padding: 15px;
  }

  .side-bar ul li.dropdown h5 {
    font-size: 15px;
  }

  .side-bar .drop-list li a {
    padding: 15px 10px 15px 75px;
  }

  .container-header-body {
    width: 100%;
    padding: 0 10px;
    margin-left: 0;
  }

  .container-header-body header .header_content {
    flex-direction: row-reverse;
  }

  .container-header-body header .right .profile .img-wrapper {
    width: 45px;
    height: 45px;
    margin-right: 10px;
  }

  .container-header-body header .right .profile h5 {
    font-size: 16px;
  }

  .container-header-body header .right .profile h5 span {
    font-size: 10px;
  }

  .container-header-body .menu_icon {
    display: block;
  }

  .container-header-body .menu_icon i {
    font-size: 18px;
  }

  .modal-content {
    width: 260px;
  }
}

tbody {
  cursor: pointer !important;
}
</style>

  