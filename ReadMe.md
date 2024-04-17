# SQL Injection project

Hello there, fellow programmer! If you're reading this then you'd like to lear more about the SQL Inject vulnerability. These days this kind of weak spot does not occur in applications. Or, at least, I hope so. Most of apps and websites has some ways to prevent this kind of malicious behaviour.


# What is this attack all about?

Your data is stored in some kind of SQL database. It's safe there as long as you don't touch it.
But you actually want to access it, for example to show your customers products that you offer or sell. And here comes the funny part: curiosity-driven user may access not only the data that you want to show, but all the data that you store in your database. Yes, this includes all passwords, paid content etc. 

Sound scary, innit? It is, and that's why you have to know how to prevent it. Most applications these days use different libraries to solve it, ORMs and characters escaping. I'm not going to dive deep into it here, there are plenty of good examples and resources out there to show you the ropes.

# So what this application does exactly?

Not much really. I just made it to be vulnerable to SQL Injection attack. It has two paths: 
- \/ - Main path where you can search for some items stored in database
- /products - Results page with found products
You can tweak it and twist it as much as you want.

# What is my purpose here?

There are 2 results that you want to get:
- Show all products on results page, even the hidden ones
- Show all accounts and their passwords

If you manage to get those two, you can grant yourself a title of SQL Injection master.
And use it to be proud of yourself. It's very important to be proud of your accomplishments.

# How to install it?

1. Install NodeJS.
2. Fill in your .env file with data:

DB_HOST=<db_host>
DB_USER=<db_user>
DB_PASSWORD=<db_password>
DB_NAME=<db_name>
DB_PORT=3306

3. Import SQL data from db_dump to your database.
4. Run the application and have fun.