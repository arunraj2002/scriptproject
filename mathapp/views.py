from django.shortcuts import render

# Create your views here.
def Artriangle(request):
    context= {}
    return render(request,'mathapp/Artriangle.html',context)

def cylinder(request):
    context= {}
    return render(request,'mathapp/cylinder.html',context)
