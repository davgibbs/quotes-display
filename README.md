# quotes-display
A small Web application to display Futurama quotes. It displays a random quote from a database of quotes.

![Futurama Quotes](https://github.com/davgibbs/quotes-display/blob/master/apps/display/static/display/img/screenshot.png)

## Developer Information
### Local development setup
After "git clone" on this repo, start by creating a Python virtualenv and installing requirements inside the diretory:
```bash
    $ virtualenv --python=/usr/bin/python3.6 venv
    $ source venv/bin/activate
    $ pip install -r requirements.txt
```
Then run the "migrate" command to create the Django sqlite database.
```bash
    $ python apps/manage.py migrate
```
Next load in the quotes .json file and runserver:
```
    $ python apps/manage.py loaddata futurama.json
    $ python apps/manage.py runserver
```
This is what is needed from the start the server-side.

To start the client-side, NodeJs must be installed. Then npm is used to installed the required packages that are listed in package.json:
```
    $ npm install
```
Finally start the development server using the command:
```
    $ npm run start
```

### Server setup
In this application, the deployment to the server packages up the static files and serves them as in a regular Django application before deployment. This step is run on the server:
```
    $ npm run build
    $ python manage.py collectstatic
```



