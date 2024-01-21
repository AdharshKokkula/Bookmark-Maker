# Bookmark-Maker

Welcome to the Bookmark Maker repository! 📚🔖

# About:

Bookmark Maker is a simple web page that allows users to create bookmarks for their favorite websites. 
Built using HTML, CSS, and JavaScript, the application features a form to input site names and URLs, display error messages for empty inputs, and dynamically add bookmarks to a list. 
Clicking on a bookmarked site's URL opens it in a new tab.


# Features:

📖 Bookmark Creation: Create bookmarks with site names and URLs.

🚫 Error Handling: Display error messages for empty input fields.

🔗 Dynamic Bookmark List: Dynamically add bookmarks to the list with clickable URLs.


# Live Demo:

Check out the live demo [here](https://modelbookmark.ccbp.tech/) to explore the Bookmark Maker.


# How to Use:

Clone the Repository:
git clone https://github.com/your-username/bookmark-maker.git

Open index.html:
Open the index.html file in your web browser to start using the Bookmark Maker.


# Create Bookmarks:

The HTML form element with id bookmarkForm contains:

HTML input elements with ids siteNameInput and siteUrlInput.

HTML button element with id submitBtn.

HTML label elements for input elements with ids siteNameInput and siteUrlInput.

HTML p elements with ids siteNameErrMsg and siteUrlErrMsg.

The HTML unordered list element with id bookmarksList displays created bookmarks.


# Submit Bookmarks:

When the HTML button element with id submitBtn is clicked:

If values are provided in the input elements with ids siteNameInput and siteUrlInput, a new bookmark is added to the bookmarksList.

If the siteNameInput value is empty, the HTML p element with id siteNameErrMsg displays an error message.

If the siteUrlInput value is empty, the HTML p element with id siteUrlErrMsg displays an error message.


# Open Bookmarked Site:

Clicking on the HTML anchor element associated with the bookmarked site URL opens it in a new tab.


# Error Handling:

When the HTML input element with id siteNameInput is empty after changing the value inside the input, the HTML p element with id siteNameErrMsg displays an error message.

When the HTML input element with id siteUrlInput is empty after changing the value inside the input, the HTML p element with id siteUrlErrMsg displays an error message.


# Customization:

Feel free to customize the code and styles to match your preferences or add additional features. Contributions and suggestions are welcome!


# Technologies Used:

-HTML

-CSS

-JavaScript


# Author:

K Adharsh

Email: adarshkokkula@gmail.com

LinkedIn: linkedin.com/in/adharsh-kokkula
