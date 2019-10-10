from django.shortcuts import render
from django.http import JsonResponse
from django.forms.models import model_to_dict

from .models import Quote


def random_quote(request):
    """This method returns the quote text and the author"""
    quote = Quote.objects.order_by('?').first()
    return JsonResponse(model_to_dict(quote))


def index(request):
    """
    Base index on what to show when user comes to base
    :param request: request object
    :return: redirect to the correct page
    """
    return render(request, 'quotes/index.html', {})
