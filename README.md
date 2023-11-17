## Getting Started

Setup .env file

```bash
set DATABASE_URL
DATABASE_URL=mysql://[username]:[password]@[hostname]:[database port]/[database name]
# i.e DATABASE_URL=mysql://root:@localhost:3306/mccp-listing
set MAILER_FROM_NAME (used as sender name when sending email)
# i.e MAILER_FROM_NAME=MCCP Listing
set MAILER_FROM_EMAIL (used as sender email when sending email)
# i.e MAILER_FROM_EMAIL=example@gmail.com
set MAILER_FROM_PASSWORD (sender email app password used for authentication when sending email)
# i.e MAILER_FROM_PASSWORD="pppp pppp pppp pppp"
set MAILER_TO_EMAIL (email to which email will be sent about listing submission when form submitted)
# i.e MAILER_TO_EMAIL=example@gmail.com
```

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
