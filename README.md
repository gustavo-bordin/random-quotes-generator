# Random quotes generator

### 1. Used tools

- Sequelize </li>
- Express </li>
- Dotenv </li>
- pg / pg-hstore </li>
  <br>

# 2. Setting up

- 2.1 Clone this repo:

```bash
$ git clone
```

- 2.2 Enter in created folder:

```bash
$ cd random-quotes-generator
```

- 2.3 Create a `.env` file for your enviroment variables:

```bash
$ mv .env.example .env
```

- 2.4 Fill the created file with your database credentials and choose an unallocated port to run the server.

- 2.5 Run the server

```bash
$ node src/server.js
```

# 3. Listing quotes

You have 3 filtering options for getting quotes, these are:

- language
- author
- keyword

You can use one of them or even mix the way you want to get the best quotes for you. Examples:

```bash
http://localhost:PORT?language=pt_br
```

```bash
http://localhost:PORT?language=pt_br&author=Gustavo Bordin
```

```bash
http://localhost:PORT?language=pt_br&author=Gustavo Bordin&keyword=love
```

# 4. Fill your database

- See: https://github.com/gustavobordinho/quotes-crawler
