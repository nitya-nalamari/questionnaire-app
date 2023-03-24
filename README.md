This is a sample questionnaire project. The UI is pretty bare bones. I used MUI to take advantage of some ready made components.

To run the code:
- npm install
- npm run dev

The application will open up at http://localhost:3000

The questions are obtained from question-data.json. The questions can be added/removed and the navigation steps will change.

The input types supported are in the components folder.

On submit a post request is sent to a mock "submit" api.

Assumptions:
- The id for each question object in the question-data.json file HAS to be incremental.
- Random ids are not supported. The application will not work as the consective numbers are used to increment and decrement the page id.
- Validation is done only when the "required" field in the question object is set to true

Extras:
- A summary page is shown with all the selected answers for review before submit.

Incomplete:
- Unit test cases are incomplete as the jest/babel plugin was causing multitude of issues. Skipped for now
