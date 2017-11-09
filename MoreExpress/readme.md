#Rendering HTML and Templates

* Use res.render() to render HTML (from an EJS file)
    * Must use views directory
* Explain what EJS is and why we use it
    * Embedded JavaScript. Let's use use variables in HTML
    * Useful for filling out templates with information specific to user
* Pass variables to EJS templates
    * Pass variables to template using an object in res.render()

#EJS Control Flow

* Show examples of control flow in EJS templates
* Write if statements in an EJS file
* Write loops in an EJS file

Loop through all posts
    make an entry div
        title
        tagline
        ...

<%= %> - render returned value to page
<% %> - for pure logic like if statements, just runs the code