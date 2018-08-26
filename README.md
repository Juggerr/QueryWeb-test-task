# QueryWeb-test-task

Deployment steps:
* Clone the repository and enter to the project directory
```bash
https://github.com/Juggerr/QueryWeb-test-task.git && cd QueryWeb-test-task
```
* [Optional] Create new python virtual environment and activate it
```bash
python3 -m venv VENV && source ./VENV/bin/activate
```
* Install python required packages
```bash
pip install -r requirements.txt
```
* Perform Django migrations
```bash
./manage.py migrate
```
* Install node modules
```bash
npm install
```
* Generate frontend build
```bash
./node_modules/webpack/bin/webpack.js
```
* Run django development server
```bash
./manage.py runserver
```
The server will be available under [http://127.0.0.1:8000]()