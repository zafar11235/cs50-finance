# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('newsletter', '0003_auto_20151126_1756'),
    ]

    operations = [
        migrations.RenameField(
            model_name='signup',
            old_name='name',
            new_name='full_name',
        ),
    ]
