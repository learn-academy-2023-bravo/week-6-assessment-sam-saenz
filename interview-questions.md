# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort and a model called Student. The cohort model has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: The missing foreign key would need to be added to the Student table, and reference the primary key of the Cohort table. This key would be called cohort_id and take in an integer. You can add this column to the table by using a migration, first generating it in the terminal, adding the method for inserting the column to the code of the file, then migrating the database to apply the changes.

Researched answer: The following would be the way by which a migration can be generated: 'rails generate migration add_cohort_id'. Then in order to add the method you would use 'add_foreign_key :student, :cohort, column: :cohort_id', then use 'rails db:migrate'.

2. Which RESTful routes must always be passed params? Why?

Your answer: The restful routes that must always take params are post, put, patch, and delete. Post needs the params to make the entry into the database, while put, patch, and delete need at least the id of the data being modified/destroyed.

Researched answer: Additionally, get does not always need params because in the case of index, you are grabbing each value within a table regardless of id, so no param is used, but get will need params for something like show, which will retrieve only a single value.

3. Name three rails generator commands. What is created by each?

Your answer: There is rails g controller, which makes a controller file, a corresponding view, and a helper file. Rails g migration, which creates a migration filee used to make various changes to the database. Finally, there is Rails g resource, which will add resource declarations to our routes.rb creating the RESTful routes.

Researched answer: Rails g model will generate a model of the specified name along with a corresponding migration. Rails g controller will creeate a controller file and its required resources.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
Called by index, this will get all of the data from the student table.

action: "POST" location: /students
Called by create, this will insert new data into the database.

action: "GET" location: /students/new
Called by new, this starts a form for the entry of new data.

action: "GET" location: /students/2
Called by show, this will get the data of a specific entry in the database.

action: "GET" location: /students/2/edit
Called by edit, this will begin a form to edit the data of an entry in the database.

action: "PATCH" location: /students/2
Called by update, this will change the data in an entry to newly passed information.

action: "DELETE" location: /students/2
Called by destroy, this will remove the indicated data from the database.

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

1. As a user, I can see a landing page with a title.

2. As a user, I can see a list of to-do items on the landing page, along with their current status.

3. As a user, I can click on an item to go to a page with its name, add date, status, and due date.

4. As a user, I can click a button that will start a form to add new to-do items, each with the necessary information.

5. As a user, I can see a button on each item's page that will change the item's status from incomplete to complete.

6. As a user, I can see a button that starts a form to edit any info about a task.

7. As a user, I can see a button that will completely remove a task from the list(delete).

8. As a user, I can navigate back to the landing page from any item's page.

9. As a user, I cannot add a task without all of the necessary information.

10. As a user, I can see pleasant styling on the page.