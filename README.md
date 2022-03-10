# New York Times Mars

This project was created as an exersice with the following requirements:

1. It has to be a React application
2. Articles should be dynamically fetched from https://s1.nyt.com/ios-newsreader/candidates/test/articles.json
3. At least 2 views should be implemented:
   - a list of articles and
   - an article view
4. One image per article (its "top image") should be displayed on both the list view and the
   article view. (Any other images may be discarded.)
5. The user should be able to dynamically toggle the language preference from English to
   Martian.
6. The following translation rules apply for translating English to Martian:
   - All words greater than 3 characters should be translated to the word "boinga"
   - Numbers should not be translated unless embedded within a word. (ex. “20,000
   Leagues Under the Sea” should translate to “20,000 Boinga Boinga the Sea”,
   whereas “fri3nd” should translate to just “boinga”.
   - Capitalization must be maintained (ex. “Is there life on Mars?” should translate to
   “Is boinga boinga on Boinga?”)
   - Punctuation within words (e.g. we'll) can be discarded, all other punctuation
   (including paragraph spacing) must be maintained.
7. Test cases verifying Martian translation.
8. The user’s language selection persists across visits.
9. Test cases as needed.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
