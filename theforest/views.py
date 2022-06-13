from django.shortcuts import render

from django.views.generic import TemplateView

# Create your views here.
class FixView(TemplateView):
    template_name = "fix.html"

class HomeView(TemplateView):
    template_name = "frontend/home.html"