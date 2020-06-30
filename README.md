# MusicEvent
MongoDB:

za uvozenje inicijalnih podataka:

cd server/components/events

mongoimport --db bazaEU --collections events --file events.json



cd server/components/users

mongoimport --db bazaEU --collections eusers --file users.json


Client:

npm install

ng serve

Za logovanje na pocetku edan od korisnika iz baze ima 

username:alex123

password:alex123alex


Server:
npm install 

npm install -D nodemon

nodemon server.js


