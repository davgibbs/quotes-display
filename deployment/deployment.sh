#!/bin/bash

# This file is run on the server where a deployment is to be done.
# The steps need to be run in this order
# Ensure that you are in the root directory of git repository.
# For example:
#   ~/quotes-display$ bash deployment/deployment.sh production_settings

if [ $# -eq 0 ]
  then
    echo "No django settings supplied"
    exit 1
fi

SETTINGS_FILE=$1
echo "Starting deployment with $SETTINGS_FILE settings"

echo "---------------------------"
echo "Go to the correct directory"
echo "---------------------------"
cd ~/quotes-display

echo "---------------------------------"
echo "Get the latest master from Gitlab"
echo "---------------------------------"
git fetch

echo "--------------------"
echo "Updating local files"
echo "--------------------"
git reset --hard origin/master

echo "----------------------------------------------------------"
echo "Clean the directory except for the Python env and Node env"
echo "----------------------------------------------------------"
git clean -d -x -f -e venv/ -e node_modules/ -e db.sqlite3

echo "------------------"
echo "Upgrade Python env"
echo "------------------"
venv/bin/pip install -r requirements.txt


echo "-------------------------------------"
echo "Run any migrations that are available"
echo "-------------------------------------"
venv/bin/python apps/manage.py migrate --settings=quotesdisplay.$SETTINGS_FILE

echo "---------------------------"
echo "Install the JavaScript dependencies"
echo "---------------------------"
npm install

echo "---------------------------"
echo "Build the production bundle"
echo "---------------------------"
npm run build

echo "---------------------------------------"
echo "Collect all the static files for Django"
echo "---------------------------------------"
venv/bin/python apps/manage.py collectstatic --noinput --clear --settings=quotesdisplay.$SETTINGS_FILE
