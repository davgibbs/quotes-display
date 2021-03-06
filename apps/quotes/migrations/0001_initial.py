# Generated by Django 2.2.3 on 2019-07-24 10:42

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Quote',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text', models.CharField(help_text='This is the quote text', max_length=1000)),
                ('author', models.CharField(help_text='This is the quote author', max_length=100)),
            ],
        ),
    ]
