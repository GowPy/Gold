$(document).ready(function() {
//$('#myModal').modal('hide');
});

$(document).on("click","#idSignin",function(){
     Log();
    // window.location.href = "/BMSApp/BMS";
});

$(document).on("click","#btnLogOut",function(){
   window.location.href = "/GoldApp/LogIn"
});

$(document).on("click",".btnCancel",function(){
   window.location.href = "/GoldApp/Base"
});
///////Mandatory Alert///////////////


//    function Login(){
//          //let Login = 1;
//          let UserName = $("#UserName").val();
//          debugger
//          let PassWord = $("#PassWord").val();
//          let CompanyName = $("#CompanyName").val();
//          let Branch = $("#Branch").val();
//          let AdminType = $("#ChkAdmin").is(":checked");
//          let UserType = $("#ChkUser").is(":checked");
//          let CommonType;
//          AdminType == true ? CommonType='Admin' : UserType == true ? CommonType='User': AdminType == false && UserType == false ? CommonType='' : "" ;
//          if(CommonType == ""){
//            alert("Please choose the UserType,before log-in.");
//          }
//          else if(UserName == ""){
//            alert("Please fill the Username.");
//          }
//          /*else if(Branch == ""){
//            alert("Please choose the Branch.");
//          }*/
//          else if(PassWord == ""){
//            alert("Please fill the Password.");
//          }
//          else if(CompanyName == ""){
//            alert("Please fill the CompanyName")
//          }
//          else if(Branch == ""){
//            alert("Please select the Branch")
//          }
//          else{
//            Log(CommonType,UserName,PassWord,CompanyName,Branch);
//          }
//      };

function Log(){
 let UserName = $("#id_username").val();
 let Password = $("#id_password").val();

  if(UserName == "admin" && Password == "admin"){
   setTimeout(function() {SuccessAlert("1");}, 200);
   //window.location.href = "/BMSApp/Dashboard";
  }
  else{
   setTimeout(function() {FailAlert();}, 200);
  }
}

function SuccessAlert(Token){
swal({
  title: 'Logged In...',
  text: "Successfully You Are In....",
  type: 'success',
  showConfirmButton:false
});
 setTimeout(function(){CloseSwal(Token);},2500);
};

function FailAlert(){
 swal({
  title: 'Fail...',
  text: "Failed To Log In....",
  type: 'error',
  showConfirmButton:false
 });
 setTimeout(function(){CloseSwal("");},2500);
}

function CloseSwal(Token){
  debugger
  window.location.href = "/GoldApp/Base";
//  let UserName = $("#UserName").val();
//  let CompanyName = $("#CompanyName").val();
//  let Branch = $("#Branch").val();
//  swal.close();
//  if(Token != ""){
//  window.location.href = "/BMSApp/Dashboard?Token=" +Token+ "&UserName=" + UserName +"&CompanyName=" + CompanyName+"&Branch=" +Branch;
//  }
};

/*
 function CheckPassword(PWD,From,CommonType){
     let ChkNumeric = 0;
     let ChkAlpha = 0;
     let UName = $('#UserName').val();
     let Pwd = $('#PassWord').val();
     let Val = PWD.split('');
     let Pointer = From;
     if (Val.length > 0) {
     debugger
        for (i = 0; Val.length > i; i++) {
            if ($.isNumeric(Val[i]) == true) {
                ChkNumeric = ChkNumeric + 1;
            }
            else if ($.isNumeric(Val[i]) == false) {
                ChkAlpha = ChkAlpha + 1;
            }
        }
        if(ChkNumeric == 0 && ChkAlpha == 0){
          alert("Please enter the valid password")
        }
        else{
         window.location.href = "/BMSApp/Dashboard";
        }
        }
     ChkAlpha = 0;
     ChkNumeric = 0;
     }
*/

///UserType////
let AdminTouch=0;
$(document).on('click', '#ChkAdmin', function () {
    UserTouch=0;
    AdminTouch = AdminTouch+1;
    AdminTouch==1  ? $('#ChkUser').prop('checked', false) : AdminTouch > 1 ? ($(this).prop('checked',false))+(AdminTouch=0):"";
});

let UserTouch=0;
$(document).on('click', '#ChkUser', function () {
    AdminTouch=0;
    UserTouch = UserTouch+1;
    UserTouch==1  ? $('#ChkAdmin').prop('checked', false) : UserTouch > 1 ? ($(this).prop('checked',false))+(UserTouch=0):"";
});
///UserType////
///Psw///
 function myFunction() {
     var x = document.getElementById("PassWord");
     if (x.type === "password") {
     x.type = "text";
     } else {
     x.type = "password";
     }
    };
///Psw///

/*
$(document).on('keyup focus', '#CompanyName', function () {
    debugger
    let SearchData = $("#CompanyName").val();
    let Mode = "CompanyName";
    let items = [];
    debugger
    items.push("SearchData : "+SearchData);
    items.push("Mode : "+Mode);
    let JsonText = JSON.stringify(items);
    let Result = AjaxPost("/BMSApp/GetBranch/",{"JsonText" : JsonText});
    let Join_Dic = Result.split('}{').join('}_{')
    let Split_Array = Join_Dic.split('_');
    let Array = [] ;
    for(var i=0; i < Split_Array.length; i++){
      var SplitVal = Split_Array[i].split("{");
      var SplitAgn = SplitVal[1].split("}");
      let Str = SplitAgn[0].split("'");
      Array.push((Str[1]));
    }
    console.log(Array);
    var Obj = Array[0];
    if(Result != ""){
     Ac();
    }
    function Ac(){
      $('#CompanyName').autocomplete({
        source: function (request, responce) {
           if(Array != ""){
            responce(Array);
           }
        },
        minLength: 0,
      }).bind('click', function () { $(this).autocomplete("search"); });
    }
});
*/

/*
$(document).on('blur', '#CompanyName', function () {
debugger
    let SearchData = $("#CompanyName").val();
    if(SearchData != ''){
     let Mode = "Check_DrinkName";
     let items = [];
     items.push("SearchData : "+SearchData);
     items.push("Mode : "+Mode);
     let JsonText = JSON.stringify(items);
     let Result = AjaxPost("/BMSApp/DeleteData/",{"JsonText" : JsonText});
     if (Result != SearchData){
      $("#CompanyName").val('');
     }
    }
});*/
