from django.http import HttpResponse
from django.shortcuts import render


# Create your views here.
def LogIn_Page(request):
    return render(request,"LogIn.html")

def Base(request):
    return render(request,"Base.html")

def UserMaster(request):
    return render(request,"User_Master.html")

def PurchaseMaster(request):
    return render(request,"PurchaseMaster.html")

def Report(request):
    return render(request,"Report.html")