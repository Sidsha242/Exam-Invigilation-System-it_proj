# Generated by Django 5.0.3 on 2024-03-22 05:28

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Teacher',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.CharField(max_length=80)),
                ('password', models.CharField()),
                ('teacher_id', models.IntegerField()),
            ],
        ),
    ]