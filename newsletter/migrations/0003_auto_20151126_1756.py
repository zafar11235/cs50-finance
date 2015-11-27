# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('newsletter', '0002_auto_20151126_1732'),
    ]

    operations = [
        migrations.RenameField(
            model_name='signup',
            old_name='update',
            new_name='updated',
        ),
    ]
