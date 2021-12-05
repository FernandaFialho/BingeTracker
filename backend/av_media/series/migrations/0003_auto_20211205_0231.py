# Generated by Django 3.2.9 on 2021-12-05 05:31

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('series', '0002_auto_20211130_1840'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='series',
            name='streaming_service',
        ),
        migrations.AddField(
            model_name='series',
            name='rating',
            field=models.IntegerField(default=0, validators=[django.core.validators.MaxValueValidator(limit_value=10), django.core.validators.MinValueValidator(limit_value=0)]),
        ),
        migrations.AddField(
            model_name='series',
            name='user_id',
            field=models.IntegerField(default=0),
        ),
        migrations.DeleteModel(
            name='Season',
        ),
    ]
