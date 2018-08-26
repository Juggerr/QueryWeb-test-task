# Generated by Django 2.1 on 2018-08-25 16:27

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Task',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField()),
                ('status', models.CharField(choices=[('TODO', 'Todo'), ('DONE', 'Done')], max_length=4)),
            ],
        ),
    ]