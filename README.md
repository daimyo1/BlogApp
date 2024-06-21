# Full stack Blog Application 
## User Story 
As a full stack web development student
I want a personal blog
So that I can showcase my thoughts and experiences

## Acceptance Criteria
-GIVEN a personal blog
-WHEN I load the app,
-THEN I am presented with the landing page containing a form with labels and inputs for username, blog title, and blog content.
-WHEN I submit the form,
-THEN blog post data is stored to localStorage.
-WHEN the form submits,
-THEN I am redirected to the posts page.
-WHEN I enter try to submit a form without a username, title, or content,
-THEN I am presented with a message that prompts me to complete the form.
-WHEN I view the posts page,
-THEN I am presented with a header, with a light mode/dark mode toggle, and a "Back" button.
-WHEN I click the light mode/dark mode toggle,
-THEN the page content's styles update to reflect the selection.
-WHEN I click the "Back" button,
-THEN I am redirected back to the landing page where I can input more blog entries.
-WHEN I view the main content,
-THEN I am presented with a list of blog posts that are pulled from localStorage.
-WHEN I view localStorage,
-THEN I am presented with a JSON array of blog post objects, each including the post author's username, title of the post, and post's content.
-WHEN I take a closer look at a single blog entry in the list,
-THEN I can see the title, the content, and the author of the post.
-WHEN I view the footer,
-THEN I am presented with a link to the developer's portfolio.

## Live Site
![blog demo](https://github.com/daimyo1/BlogApp/assets/163930521/f3fd53f5-2cc8-466e-90ad-fb3033c333fb)

### Usage
When you load the app, you will see a form with fields for username, blog title, and blog content.

Enter your username, the title of your blog post, and the content of your blog post.

Click the submit button. Your blog post will be stored in localStorage, and you will be redirected to the posts page.
If any field is left empty, you will see a message prompting you to complete the form.

On the posts page, you will see a list of all blog posts pulled from localStorage.
Each post will display the title, content, and author.
