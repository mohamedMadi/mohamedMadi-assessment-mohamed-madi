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

.loaderSize {
  width: 100% !important;
  height: 80% !important;
  transform: scale(2) !important;
  transition: 0.7s;
}

.loaderStyle {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #fff !important;
  text-align: -webkit-center;
  z-index: 980;
  transition: 0.7s;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.loader-Style .spinner {
  background-color: var(--darkBlue) !important;
}
.loader-Style .spinner::before {
  background-color: var(--darkGreen) !important;
}
.loader-Style .spinner::after {
  background-color: var(--darkPurple) !important;
}

.loaderStyle_2 {
  position: absolute;
  width: 50%;
  height: 50%;
  background: #fff;
  text-align: -webkit-center;
  z-index: 980;
  transition: 0.7s;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px !important;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.7s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.btn-primary {
  background-color: #002c52;
  border-color: #002c52;
  float: left;
  overflow: hidden;
  margin: 18px;
}

.search-box {
  display: block;
  margin-top: -7px;
  margin-bottom: 7px;
  outline: none;
  padding-left: 10px;
}

.vfc-separately-navigation-buttons div {
  z-index: 8 !important;
}

.vs__clear {
  display: none !important;
}

.vs__dropdown-toggle {
  height: 40px !important;
}

.vs__selected {
  line-height: 2.2 !important;
  font-size: 13px;
}

.vs__actions {
  cursor: pointer !important;
}

.apexcharts-legend-text {
  font-size: 13px !important;
  line-height: 2 !important;
}

.vodal,
.vodal-mask {
  z-index: 999;
}
.vodal-dialog {
  z-index: 999;
  background-color: transparent;
  width: 95%;
  box-shadow: none;
}

.vfc-styles-conditional-class
  .vfc-main-container
  .vfc-calendars-container
  .vfc-calendars
  .vfc-calendar
  div.vfc-content {
  z-index: 8 !important;
}

.vfc-content {
  z-index: 8 !important;
}

.pagination {
  display: inline-flex !important;
}
.pagination-container {
  width: auto;
  margin: auto;
  text-align: center;
  padding-top: 50px;
  clear: both;
}

.slimScrollBar {
  background: #fff !important;
  opacity: 0.2 !important;
}

.slimScrollDiv {
  float: left !important;
  height: 500px !important;
  width: 100% !important;
}

.float {
  height: 500px !important;
  width: 100% !important;
}

/******** edite sctollbar*********/

::-webkit-scrollbar {
  width: 7px;
  background: transparent !important;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: transparent;
  color: transparent;
  background: transparent !important;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #cecaca !important;
  border-radius: 15px;
}

:root {
  scrollbar-color: grey transparent !important;
  scrollbar-width: none !important;
}

/******** edite sctollbar*********/

/* g {
  fill: #fff !important;
}

.spinner * {
  fill: #fff !important;
}

.mx-input {
  border: none !important;
  box-shadow: none !important;
}

.invoice-table-insight .VueTables__search-field {
  display: none !important;
}

.filter-body-ticketing .multiselect__tags {
  background: transparent !important;
  border: transparent !important;
}
.filter-body-ticketing .multiselect__single {
  background: transparent !important;
}
.VueTables__search-field label {
  display: none !important;
} */

.VueTables__limit-field,
.VueTables__search {
  display: none !important;
}

.apexcharts-legend {
  width: 190px !important;
}

@media (max-width: 600px) {
  #chart .apexcharts-canvas {
    width: 100% !important;
  }

  #chart svg {
    width: 100% !important;
  }

  #chart svg foreignObject {
    width: 100% !important;
  }

  #chart svg foreignObject .apexcharts-slices {
    width: 100px !important;
  }

  #chart .apexcharts-legend {
    width: 100px !important;
    font-size: 12px !important;
    padding: 0px !important;
  }

  #chart .apexcharts-legend .apexcharts-legend-text {
    font-size: 10px !important;
  }

  #chart .apexcharts-legend .apexcharts-legend-marker {
    width: 9px !important;
    height: 9px !important;
  }

  #line_chart .apexcharts-legend {
    width: 100% !important;
    right: 0px !important;
  }
}

.total-StoresWithOosItems .apexcharts-legend {
  height: 150px !important;
}
.total-attendence .apexcharts-legend {
  height: 150px !important;
}
.total-sales .apexcharts-legend {
  height: 150px !important;
}
.total-stocks .apexcharts-legend {
  height: 150px !important;
}
.vocChartContuner .apexcharts-legend {
  height: 150px !important;
  width: 200px !important;
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

.joeMI_heading {
  font-size: 22px !important;
  font-weight: bold !important;
  margin-bottom: 10px;
  border-radius: 15px !important;
  padding: 12px 0 !important;
  display: flex !important;
  align-items: center !important;
  text-transform: capitalize !important;
}

.joeMI_heading .icon {
  width: 25px;
  height: 25px;
  margin-right: 15px;
}

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

.joeMI_btn {
  width: 160px;
  height: 48px;
  border: none;
  border-radius: 15px;
  font-size: 16px;
  font-weight: bold;
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

/* .input_control .multiselect__tags {
  padding-left: 30px !important;
  font-size: 17px !important;
} */

.input_control .search {
  color: #a0a0a0;
  position: absolute;
  top: 14px;
  right: 14px;
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

/* .multiselect {
  position: relative !important;
  cursor: pointer;
}

.multiselect__select:before {
  top: 25px !important;
}

.multiselect__tags {
  border: none !important;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.16);
  border-radius: 15px !important;
  padding: 8px 40px 0 13px !important;
}

.multiselect__placeholder {
  color: #c3c3c9 !important;
  font-size: 14px;
}
.multiselect__content-wrapper {
  z-index: 99999999 !important;
}

.multiselect__content-wrapper .multiselect__option {
  background-color: #fff !important;
  color: #424242 !important;
}

.multiselect__content-wrapper .multiselect__option:hover {
  background-color: #f5f5f5 !important;
} */

.filter-date {
  position: relative !important;
}

.filter-date .vdp-datepicker__calendar {
  left: 0;
}

.filter-date > div input {
  width: 100%;
  border: none !important;
  outline: none !important;
  border-radius: 15px !important;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.16) !important;
  padding: 10px 0px 10px 40px;
  font-size: 14px;
  font-weight: normal;
  cursor: pointer;
}

.filter-date > div input:focus {
  outline: none;
}

.filter-date > div input::placeholder {
  color: #c3c3c9 !important;
}

.filter-date label {
  padding-left: 20px;
  font-size: 16px;
  font-weight: bold;
  color: #5a5a5a;
}

.filter-date .calender {
  color: #818181;
  position: absolute;
  top: 13px;
  left: 15px;
  cursor: pointer;
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

/*

  <div class="model_header">
    <h4 class="joeMI_heading heading_without_icon green_heading">
      Add New Samples
    </h4>
    <button @click="$bvModal.hide('bv-modal-samples')">
      <span><i class="fa fa-times" aria-hidden="true"></i> </span>
    </button>
  </div>

*/

/* delete modal */
/* Start Delete Modal Mockup */
/*
  <div class="delete_modal">
    <div class="delete_modal_header">
      <img
        src="../../assets/newDesign-assets/icons/trash-red.svg"
        alt=""
      />
      <h3>Are you sure you want to delete this ?</h3>
    </div>
    <div class="btns_wrapper">
      <button
        class="cancel"
        @click="$bvModal.hide('...')"
      >
        Cancel
      </button>
      <button class="confirm" @click="...()">Delete</button>
    </div>
  </div>
*/
/* End Delete Modal Mockup */

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

/* #bv-modal-ticket .multiselect__tags {
  border: 1px solid #dadada !important;
  box-shadow: none;
}

#bv-modal-ticket span.multiselect__placeholder {
  color: #c3c3c9 !important;
  padding-left: 15px;
  font-size: 17px !important;
}

#bv-modal-edit-role .multiselect__tag {
  background-color: rgba(85, 106, 255, 1);
} */

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

.dropDown-list {
  width: 240px;
  padding: 12px 20px;
  font-size: 18px;
  background: #fff;
  position: absolute;
  top: 60px;
  right: 50px;
  box-shadow: 4px 2px 4px 0px #ddd;
  cursor: pointer;
  z-index: 99;
}

.dropDown-list .btn_icon {
  color: #000;
  font-size: 32px;
  margin-right: 15px;
}

.dropDown-list .profile_btn a {
  color: rgba(0, 0, 0, 0.65);
}

#bv-modal-logout .logout-btns-actions {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
}

#bv-modal-logout h4 {
  display: flex;
  align-items: center;
}

#bv-modal-logout span {
  font-size: 40px;
  margin-right: 10px;
}

.logout-btns-actions button:first-of-type {
  margin-right: 20px;
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

/* Export Reports */
.export_items_wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 30px;
}

.export_item {
  padding: 35px 20px 20px;
  height: 270px;
}

.export_item .img_wrapper {
  width: 45px;
  margin: auto;
  margin-bottom: 15px;
}

.export_item .img_wrapper img {
  width: 100%;
  height: auto;
}

.export_item h5 {
  font-size: 14px;
  text-align: center;
  font-weight: bold;
  margin-bottom: 30px;
}

.export_item button {
  width: 120px;
  height: 40px;
  border-radius: 15px;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.16);
  margin-bottom: 5px;
}

/* Charts Summary */
.summary_chart_items {
  background-color: #fbfbfb;
  border-radius: 20px;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.16);
  padding: 40px 20px 30px 20px;
}

.summary_chart_items_header {
  padding-left: 20px;
  margin-bottom: 40px;
}

.summary_chart_items_title {
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 30px;
  color: #424242;
}

.summary_chart_items_title span {
  color: var(--darkBlue);
  font-weight: bold;
}

.summary_chart_items_subheader h5 span {
  color: var(--darkBlue);
}

.summary_chart_items_subheader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.summary_chart_items_subheader h5 {
  width: 280px;
  background-color: #fff;
  color: #424242;
  font-size: 16px;
  padding: 10px 0 10px 18px !important;
  margin-bottom: 0;
  border-radius: 15px !important;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.16);
}

.summary_chart_items_filters {
  display: flex;
  width: 300px;
}

.summary_chart_items_filters > div:first-child {
  margin-right: 20px;
}

.summary_chart_items_counters {
  display: flex;
}

.summary_chart_items_counters > div {
  height: 80px;
  width: 100px;
  margin-right: 15px;
  background-color: #fff;
  text-align: center;
  padding: 15px 5px;
  border-radius: 20px;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.16);
}

.summary_chart_items_counters > div > h5 {
  font-size: 16px;
  color: #424242;
}

.summary_chart_items_counters > div > h6 {
  font-size: 13px;
  color: var(--darkBlue);
  font-weight: bold;
}

.summary_chart_items_counters > div > span {
  margin-right: 15px;
}

.summary_chart_item {
  background-color: #fff;
  padding: 15px 0 30px 0;
  border-radius: 20px;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.16);
}

.summary_chart_item_top {
  padding: 0 15px;
}

.summary_chart_item_header {
  margin-bottom: 25px !important;
}

.summary_chart_item .input_wrapper {
  position: relative;
  width: 170px;
  margin-bottom: 10px;
}

.summary_chart_item .input_wrapper input {
  padding: 0 35px 0 15px !important;
}

.summary_chart_item .input_wrapper input::placeholder {
  font-size: 14px;
  color: #e0e0e0;
}

.summary_chart_item .input_wrapper .search {
  color: #a0a0a0;
  position: absolute;
  top: 14px;
  right: 14px;
}

.summary_chart_item .table {
  margin-bottom: 50px;
}

.summary_chart_item .table thead {
  padding: 20px 0;
  background: #fff !important;
  border: 0 !important;
}

.summary_chart_item .table tbody tr {
  border: none !important;
}

.summary_chart_item .table thead tr th,
.summary_chart_item .table tbody tr td {
  border: none !important;
}

.summary_chart_item .table thead tr th {
  color: #424242;
  font-size: 18px !important;
}

.summary_chart_item .table thead tr th:first-child,
.summary_chart_item .table tbody tr td:first-child {
  padding-left: 30px !important;
}

.summary_chart_item .table thead tr th:last-child,
.summary_chart_item .table tbody tr td:last-child {
  padding-right: 30px !important;
  text-align: right;
}

.summary_chart_item .table tbody tr:nth-child(odd) {
  background: #f6f6f6 !important;
}

.summary_chart_item .table tbody tr:nth-child(even) {
  background: #fff !important;
}

.summary_chart_item .pagination_wrapper {
  display: flex;
  justify-content: center;
}

/* Stock Count table*/
.stock_count .table {
  font-size: 12px;
}

.stock_count .table thead {
  background-color: var(--lightBlue);
  color: var(--darkBlue);
}

.stock_count .table tbody tr:nth-child(even) {
  background-color: #f6f6f6;
}

.stock_count .table thead th,
.stock_count .table tbody td {
  vertical-align: middle !important;
  padding: 10px 5px !important;
  border: 0 !important;
}

.stock_count .table tbody td {
  color: #868686;
}

/* Attendance Table */
.table #people tbody tr:nth-child(even),
.table tbody tr:nth-child(even) {
  background-color: #f6f6f6 !important;
}

.table #people tbody tr:nth-child(odd),
.table tbody tr:nth-child(odd) {
  background-color: #ffffff !important;
}

.table #people thead tr th,
.table #people tbody tr td,
.table thead tr th,
.table tbody tr td {
  border: 0 !important;
  cursor: default;
}

.table #people .VueTables .VuePagination,
.table .VueTables .VuePagination {
  border: 0 !important;
  justify-content: center;
}

.table #people .VueTables .VuePagination .VuePagination__count,
.table .VueTables .VuePagination .VuePagination__count {
  display: none !important;
}

.table #people .checkout_btn,
.table .checkout_btn {
  background-color: transparent !important;
  border: 0 !important;
  color: #3c41da !important;
}

/* Files */
.files .uploadFilesBtn {
  position: absolute;
  right: 15px;
  bottom: 5px;
}

.files .purpleBtn {
  width: 200px;
  height: 40px;
  border: 0;
  background-color: #7e88fd;
  color: #ebe4ea;
  border-radius: 15px;
  font-size: 16px;
}

.files_table_wrapper {
  padding-bottom: 20px;
}

.files_table,
.files_table_2,
.uploadFile_table {
  width: 100%;
}

.files_table thead tr td,
.files_table_2 thead tr td,
.uploadFile_table thead tr td {
  background-color: #e8e8e8;
  padding: 10px 0;
}

.files_table thead tr td:first-child,
.files_table_2 thead tr td:first-child,
.uploadFile_table thead tr td:first-child {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

.files_table thead tr td:last-child,
.files_table_2 thead tr td:last-child,
.uploadFile_table thead tr td:last-child {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}

.files_table tr td:first-child {
  width: 30%;
  padding-left: 15px;
}

.files_table tr td:nth-child(2) {
  width: 25%;
}

.files_table tr td:nth-child(3) {
  width: 20%;
}

.files_table tr td:nth-child(4) {
  width: 20%;
}

.files_table thead td,
.files_table_2 thead td,
.uploadFile_table thead td {
  color: #5a5a5a;
  font-size: 16px;
  font-weight: bold;
}

.files_table tbody tr td,
.files_table_2 tbody tr td,
.uploadFile_table tbody tr td {
  font-size: 14px;
}

.files_table tbody tr:nth-child(even),
.files_table_2 tbody tr:nth-child(even),
.uploadFile_table tbody tr:nth-child(even) {
  background-color: #f6f6f6;
}

.files_table tbody tr:nth-child(odd) td,
.files_table_2 tbody tr:nth-child(odd) td,
.uploadFile_table tbody tr:nth-child(odd) td {
  padding-top: 10px;
  padding-bottom: 10px;
}

.files_table tbody tr:nth-child(even) td,
.files_table_2 tbody tr:nth-child(even) td,
.uploadFile_table tbody tr:nth-child(even) td {
  padding-top: 5px;
  padding-bottom: 5px;
}

.files_table tbody tr td:last-child a {
  color: #7e88fd;
  font-size: 12px;
}

.files_table_2 tr td:nth-child(1) {
  width: 25%;
  padding-left: 15px;
  word-break: break-all;
}

.files_table_2 tr td:nth-child(2) {
  width: 25%;
}

.files_table_2 tr td:nth-child(3) {
  width: 25%;
}

.files_table_2 tr td:nth-child(4) {
  width: 25%;
}

.files_table_2 tr td:nth-child(5) {
  width: 10%;
  padding-right: 15px;
}

.files_table_2 input[type='checkbox'] {
  appearance: none;
  width: 15px;
  height: 15px;
  position: relative;
  border-radius: 2px;
  cursor: pointer;
}

.files_table_2 input[type='checkbox']::before {
  content: '';
  border: 1px solid #7e88fd;
  background-color: #fff;
  width: calc(100% - 1px);
  height: calc(100% - 1px);
  border-radius: 2px;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.3s ease;
  cursor: pointer;
  padding: 1px 1px 0 1px;
}

.files_table_2 input[type='checkbox']:checked::before {
  background-color: #7e88fd;
  content: '\f00c ';
  font: normal normal normal 10px/1 FontAwesome;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Samples */
.samples .search_input {
  padding: 0px 30px 0 10px !important;
}
.samples .search_input::placeholder {
  font-size: 12px;
}

.samples .table thead tr th {
  background-color: rgba(238, 238, 238, 1);
  border: none !important;
  color: #5a5a5a;
}

.samples .table tbody tr td {
  font-size: 13px !important;
  color: #868686;
}

.samples .table tbody tr:nth-child(odd) td {
  background-color: #fff;
}

.samples .table tbody tr:nth-child(even) td {
  background-color: rgba(246, 246, 246, 1);
}

#bv-modal-sample.modal {
  display: block !important;
}

/* #bv-modal-sample.modal .multiselect__tags {
  box-shadow: none !important;
  border: 1px solid #dadada !important;
} */

#bv-modal-sample.modal .filter-date {
  margin-bottom: 20px;
}

#bv-modal-sample.modal .filter-date label {
  padding-left: 20px;
  font-size: 16px;
  font-weight: bold;
  color: #5a5a5a;
}

#bv-modal-sample.modal .filter-date > div input {
  box-shadow: none !important;
  border: 1px solid #dadada !important;
  padding: 10px 0px 10px 30px;
}

#bv-modal-sample.modal .filter-date .calender {
  color: #818181;
  position: absolute;
  top: 45px !important;
  right: 15px !important;
  left: unset !important;
  cursor: pointer;
}

#bv-modal-sample.modal .number_input {
  font-size: 14px !important;
}

/* Customer Engagement */
.customer_engagement .search_input {
  padding: 0px 30px 0 10px !important;
}

.customer_engagement .search_input::placeholder {
  font-size: 12px;
}

.customer_engagement .table thead tr th {
  background-color: rgba(238, 238, 238, 1);
  border: none !important;
  color: #5a5a5a;
}

.customer_engagement .table tbody tr td {
  font-size: 13px !important;
  color: #868686;
}

.customer_engagement .table tbody tr:nth-child(odd) td {
  background-color: #fff;
}

.customer_engagement .table tbody tr:nth-child(even) td {
  background-color: rgba(246, 246, 246, 1);
}

#bv-modal-customer.modal {
  display: block !important;
}

/* #bv-modal-customer.modal .multiselect__tags {
  box-shadow: none !important;
  border: 1px solid #dadada !important;
} */

#bv-modal-customer.modal .filter-date {
  margin-bottom: 20px;
}

#bv-modal-customer.modal .filter-date label {
  padding-left: 20px;
  font-size: 16px;
  font-weight: bold;
  color: #5a5a5a;
}

#bv-modal-customer.modal .filter-date > div input {
  box-shadow: none !important;
  border: 1px solid #dadada !important;
  padding: 10px 0px 10px 30px;
}

#bv-modal-customer.modal .filter-date .calender {
  color: #818181;
  position: absolute;
  top: 45px !important;
  right: 15px !important;
  left: unset !important;
  cursor: pointer;
}

#bv-modal-customer.modal .text_input {
  font-size: 14px !important;
}

/* Target */
.target .purpleBtn,
.items_collections .purpleBtn {
  width: 200px;
  height: 40px;
  border: 0;
  background-color: #7e88fd;
  color: #ebe4ea;
  border-radius: 15px;
  font-size: 16px;
  display: block;
  margin-left: auto;
}

.target table thead th {
  background: rgb(225, 225, 225);
  border: 0 !important;
  font-size: 15px !important ;
  padding-top: 20px !important;
  padding-bottom: 20px !important;
}

.target table tbody td {
  border: 0 !important;
  font-size: 13px !important ;
  vertical-align: unset !important;
  padding-top: 5px !important;
  padding-bottom: 5px !important;
  cursor: default !important;
}

.target table tbody tr:nth-child(even) td {
  background: rgba(246, 246, 246, 1);
}

.target .VuePagination__count {
  display: none !important;
}

.target table button {
  border: 0;
  background: transparent;
}

.target .fa-trash {
  color: rgba(134, 134, 134, 1);
}

.target table .fa-edit {
  color: rgba(134, 134, 134, 1);
  font-size: 16px;
}

.target .VuePagination {
  margin-top: 30px !important;
  justify-content: center !important;
}

.target .VuePagination__pagination-item-prev-chunk,
.target .VuePagination__pagination-item-next-chunk,
.target .VuePagination__pagination-item-prev-page,
.target .VuePagination__pagination-item-next-page {
  cursor: pointer !important;
}

/* #bv-modal-addOrEdit .multiselect__placeholder {
  color: #c3c3c9 !important;
  font-size: 17px;
}

#bv-modal-addOrEdit .multiselect__tags {
  border: 1px solid #dadada !important;
  box-shadow: none !important;
}

#bv-modal-addOrEdit .multiselect__single {
  padding-left: 0 !important;
} */

#bv-modal-addOrEdit.modal .is_main {
  position: relative;
}

#bv-modal-addOrEdit.modal .is_main_input {
  position: absolute;
  top: 6px;
  left: 80px;
}

#promoters_target_table table td {
  border: 0 !important;
}

#promoters_target_table table tbody tr:nth-child(even) td {
  background: rgba(246, 246, 246, 1);
}

#single_promoter_target .popup_header {
  background: #e8e8e8;
  padding: 5px 36px;
  display: flex;
  justify-content: space-between;
  font-family: 'Cairo';
  font-weight: 600;
  font-size: 16px;
}

#single_promoter_target .popup_header > span,
#single_promoter_target .targets_list li > span {
  flex: 1;
}

#single_promoter_target .popup_header > span:nth-child(2),
#single_promoter_target .targets_list li > span:nth-child(2) {
  text-align: center;
}

#single_promoter_target .popup_header > span:last-child,
#single_promoter_target .targets_list li > span:last-child {
  text-align: right;
}

#single_promoter_target .targets_list {
  list-style: none;
  padding: 10px 0 0 0;
}

#single_promoter_target .targets_list li {
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
  padding: 5px 36px;
  font-size: 12px;
}

#single_promoter_target .targets_list li:nth-child(odd) {
  background-color: #f6f6f6;
}

/* Jcp styles */
#bv-edit-promoter-info.modal .upload_image,
#bv-edit-merchandiser-info.modal .upload_image,
#bv-modal-category.modal .upload_image {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 41px !important;
  border: none !important;
  padding: 0px 0px 0px 30px !important;
  border-radius: 15px !important;
  background-color: #fff !important;
  font-size: 17px !important;
  border: 1px solid #dadada !important;
}

#bv-edit-promoter-info.modal .upload_image span,
#bv-edit-merchandiser-info.modal .upload_image span,
#bv-modal-category.modal .upload_image span {
  word-break: break-all;
  color: #c3c3c9;
  font-size: 14px;
}

#bv-edit-promoter-info.modal .upload_image button.white_blue_btn,
#bv-edit-merchandiser-info.modal .upload_image button.white_blue_btn,
#bv-modal-category.modal .upload_image button.white_blue_btn {
  position: relative;
  height: 41px !important;
  border-right: 0;
}

#bv-edit-promoter-info.modal .upload_image button.delete_icon,
#bv-edit-merchandiser-info.modal .upload_image button.delete_icon,
#bv-modal-category.modal .upload_image button.delete_icon {
  border: 0;
  background: transparent;
  margin-right: 10px;
}

#bv-edit-promoter-info.modal .upload_image button input,
#bv-edit-merchandiser-info.modal .upload_image button input,
#bv-modal-category.modal .upload_image button input {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  cursor: pointer;
}

#bv-modal-add-jcp.modal {
  display: block !important;
}

#bv-modal-add-jcp.modal .calendar_wrapper {
  margin: 30px 0;
}

#bv-modal-add-jcp.modal .vfc-main-container {
  box-shadow: unset !important;
  border: 1px solid #dadada !important;
  border-radius: 15px !important;
}

/* Edit JCP Modal */

#bv-modal-edit-jcp-time.modal {
  display: block !important;
}

#bv-modal-edit-jcp-time.modal .checkbox_wrapper {
  margin-bottom: 40px;
  padding-left: 20px;
}

#bv-modal-edit-jcp-time.modal .line {
  border-top: 2px solid rgba(245, 245, 245, 1);
  margin: 50px 0;
}

#bv-modal-edit-jcp-time.modal .checkbox_wrapper input[type='checkbox'] {
  appearance: none;
  width: 15px;
  height: 15px;
  margin-right: 5px;
  position: relative;
  border-radius: 2px;
  cursor: pointer;
}

#bv-modal-edit-jcp-time.modal .checkbox_wrapper input[type='checkbox']::before {
  content: '';
  border: 1px solid #7e88fd;
  background-color: #fff;
  width: calc(100% - 1px);
  height: calc(100% - 1px);
  border-radius: 2px;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.3s ease;
  cursor: pointer;
  padding: 1px 1px 0 1px;
}

#bv-modal-edit-jcp-time.modal
  .checkbox_wrapper
  input[type='checkbox']:checked::before {
  background-color: #7e88fd;
  content: '\f00c ';
  font: normal normal normal 10px/1 FontAwesome;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

#bv-modal-edit-jcp-time.modal .checkbox_wrapper label {
  font-size: 18px;
  color: #5a5a5a;
  margin-bottom: 0;
}

#bv-modal-edit-jcp-time.modal .input_control {
  position: relative;
}

#bv-modal-edit-jcp-time.modal .input_control input {
  height: 41px !important;
  width: 100% !important;
  border: none !important;
  padding: 0px 30px !important;
  border-radius: 15px !important;
  background-color: #fff !important;
  font-size: 15px !important;
  text-align: left !important;
  border: 1px solid #dadada !important;
}

/* #bv-modal-edit-jcp-time.modal .input_control input::placeholder {
  font-size: 15px !important;
  color: #b9b9b9 !important;
} */

#bv-modal-edit-jcp-time.modal .vdp-datepicker + i {
  position: absolute;
  right: 20px;
  top: 45px;
  color: rgba(185, 185, 185, 1);
}

#bv-modal-edit-jcp-time.modal .mx-datepicker {
  width: 100% !important;
}
#bv-modal-edit-jcp-time.modal .mx-input-wrapper .mx-icon-calendar {
  position: absolute;
  right: 20px !important;
  color: rgba(185, 185, 185, 1);
}

#bv-modal-edit-jcp-time.modal .mx-datepicker + .time {
  background: #fff;
  position: absolute;
  top: 33px;
  left: 20px;
  height: 38px;
  line-height: 40px;
  padding-left: 10px;
  font-size: 15px !important;
  color: #b9b9b9 !important;
}

#bv-modal-edit-jcp-time.modal .mx-datepicker + .time.isChecked {
  color: #888888 !important;
}

.jcp_invoices_table .VueTables thead th {
  background-color: #eeeeee;
  border: 0;
}

.jcp_invoices_table .VueTables tbody td {
  background-color: #fff;
}

.jcp_invoices_table .VueTables .VuePagination {
  justify-content: center !important;
  padding-top: 30px;
}

.jcp_invoices_table .VueTables .VuePagination .VuePagination__count {
  display: none;
}

/* Projects */
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


.modalPopUp .oldDate {
  display: block;
  margin-top: 5px;
  margin-left: 30px;
}

.modalPopUp .ant-time-picker,
.modalPopUp .ant-time-picker {
  width: 100% !important;
}

.modalPopUp .ant-time-picker-input,
#checkOut_modal.modal .ant-time-picker-input {
  width: 100% !important;
  height: 41px !important;
  border-radius: 15px !important;
}

.modalPopUp .ant-time-picker-input,
#checkOut_modal.modal .ant-time-picker-input {
  width: 100% !important;
  height: 41px !important;
  padding-left: 30px !important;
  border-radius: 15px !important;
}

.modalPopUp .ant-time-picker-input::placeholder,
#checkOut_modal.modal .ant-time-picker-input::placeholder {
  font-size: 15px !important;
}

/* Project Details */
.projectDetails .rightSide #chart > div {
  min-height: 150px !important;
}

.projectDetails .rightSide #chart .apexcharts-canvas {
  vertical-align: top !important;
  position: absolute !important;
  top: 105px !important;
  height: 200px !important;
}

.projectDetails .rightSide #chart svg path {
  stroke: rgba(85, 106, 255, 1) !important ;
}

.projectDetails .rightSide #chart svg .apexcharts-datalabel-label {
  fill: #424242 !important;
}

.projectDetails .rightSide #chart svg .apexcharts-datalabel-value {
  fill: #556aff !important;
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

  .dropDown-list {
    width: 150px;
    padding: 5px 20px;
    font-size: 14px;
    top: 70px;
    left: 10px;
  }

  .dropDown-list .btn_icon i {
    font-size: 25px;
  }

  .dropDown-list .btn_icon img {
    width: 20px;
  }

  .modal-content {
    width: 260px;
  }

  #bv-modal-logout .JoeMI_heading {
    font-size: 14px !important;
    padding-left: 10px !important;
  }

  #bv-modal-logout span {
    font-size: 25px;
    margin-right: 10px;
  }

  #bv-modal-logout .joeMI_btn {
    width: 80px;
    height: 28px;
    font-size: 12px;
  }
}

tbody {
  cursor: pointer !important;
}
</style>

  