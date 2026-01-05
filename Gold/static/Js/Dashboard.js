
let CompanyName =getParameterByName("CompanyName");
let BranchName =getParameterByName("Branch");
  let Comp = $("#lblCompanyName").text();
   let Bran = $("#lblBranch").text();
$(document).ready(function(){
 if(CompanyName == ""){

   CompanyName = localStorage.getItem("Company_Name");
   BranchName = localStorage.getItem("Branch_Name");
 }


 Today();
 Monthly();
 Yearly();
});

function Today(){

   let items = [];
   items.push("SearchData : "+"Today");
   items.push("CompanyName : "+CompanyName);
   items.push("Branch : "+BranchName);

   let JsonText = JSON.stringify(items);

   let result = AjaxPost("/BMSApp/GetDashboard/", {"JsonText" : JsonText});
   if(result == ""){
    result =0
   }
   $("#idToady").text(result);
}

function Monthly(){

   let items = [];

   items.push("SearchData : "+"Month");
   items.push("CompanyName : "+CompanyName);
   items.push("Branch : "+BranchName);

   let JsonText = JSON.stringify(items);

   let result = AjaxPost("/BMSApp/GetDashboard/", {"JsonText" : JsonText});
   if(result == ""){
    result =0
   }
   $("#idMonthly").text(result);
}

function Yearly(){

   let items = [];

   items.push("SearchData : "+"Year");
   items.push("CompanyName : "+CompanyName);
   items.push("Branch : "+BranchName);

   let JsonText = JSON.stringify(items);

   let result = AjaxPost("/BMSApp/GetDashboard/", {"JsonText" : JsonText});
   if(result == ""){
    result =0
   }
   $("#idYearly").text(result);
}