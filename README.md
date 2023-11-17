## Getting Started

Setup .env file (copy .env.sample and rename to .env (or create new .env file) in root folder and set below variables)

```bash
DATABASE_URL=mysql://[username]:[password]@[hostname]:[database port]/[database name]
# i.e DATABASE_URL=mysql://root:@localhost:3306/mccp-listing

MAILER_FROM_NAME=(Name that will appear as sender when email sent)
# i.e MAILER_FROM_NAME=MCCP Listing

MAILER_FROM_EMAIL=(Email which will be used as sender email when sending email)
# i.e MAILER_FROM_EMAIL=example@gmail.com

MAILER_FROM_PASSWORD=(sender email app password used for authentication when sending email)
# i.e MAILER_FROM_PASSWORD="pppp pppp pppp pppp"

MAILER_TO_EMAIL=(receiver email to which email will be sent about listing submission when form submitted)
# i.e MAILER_TO_EMAIL=example@gmail.com
```

Instal Packages:

```bash
npm install
```

Migrate Database:

```bash
npm run migrate
```

Start Developement Server:

```bash
npm run dev
```

Start Production Server:

```bash
npm run build
# then
npm run start
```

App is running at [http://localhost:3000](http://localhost:3000).
