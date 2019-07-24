from django.contrib import admin

from .models import Quote

class QuoteAdmin(admin.ModelAdmin):
    list_display = ('text', 'author')
    list_display_links = ('text',)

admin.site.register(Quote, QuoteAdmin)

