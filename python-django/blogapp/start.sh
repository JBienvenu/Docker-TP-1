#!/usr/bin/env bash

python ./manage.py migrate
python ./manage.py loaddata ./data.json
gunicorn -c ./gunicornconfig.py blogapp.wsgi
