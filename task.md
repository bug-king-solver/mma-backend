"Database Design” Backend Developer
Your task is to design a database schema for a platform that offers mixed martial arts (MMA)
event information, fighter rankings, and statistics, similar to Sherdog.com and tapology.com.
Requirements:

1. Design a database schema that includes tables for fighters, events, fights, and rankings.
   ● Each fighter should have a record of their statistics (e.g., wins, losses, knockouts,
   submissions, etc.), personal details (e.g., weight class, nationality, team, etc.), and
   fight history. (Example: Marvin Vettori on Tapology)
   ● Each event should include a list of fights, location, date, and participating fighters.
   (Example: UFC Fight Night on Tapology)
   ● Rankings should be associated with weight classes and updated based on fight
   results.
2. Use a relational database management system (like PostgreSQL) to implement your
   schema.
3. Utilize TypeORM for creating and handling database schemas.
4. Provide an Entity Relationship Diagram (ERD) and write the SQL statements for
   creating these tables.
   Part 2: Backend API
   Now, create a RESTful API that can interact with your database. The API should support:
   ● CRUD operations for fighters, fights, and events.
   ● A method to calculate and update fighter rankings after each fight.
   ● API endpoints to retrieve fight statistics for a specific fighter and upcoming events.
   ● Proper error handling and data validation.
   Evaluation Criteria:
   In addition to meeting the above criteria, we will pay close attention to:● The architecture of your solution: how well-designed is your schema and API?
   ● The quality of your code: is it clean, organized, and well-documented?
   Please submit your database schema (including the ERD and SQL create statements), source
   code for your API, and any other relevant materials (e.g., API documentation). The source code
   must demonstrate effective use of TypeORM for managing the database operations."
