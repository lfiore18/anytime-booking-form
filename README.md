# Anytime Booking: Booking Form Task

## Tech used:
Vanilla JS
Tailwind CSS for styling

## My Approach
As discussed in the interview, I've opted to use 2 <code><input type="date"></code> tags with regards to collecting the "check-in" and "checkout" dates from the user and calculating the length of the users stay: for better or worse!
I would estimate that it took roughly 1 hour 40 minutes to complete the task, however I did get a little carried away and spent extra time trying to apply some validation to the date picking.

## Some Caveats
When choosing "check-in" and "checkout" dates, the length of the stay should be calculated automatically and reflected in the final price.
It is by no means perfect and I had a hard time drawing the line with where to stop QAing, but I took a stab at it because I thought it was more interesting and challenging.

There are a few bugs. For example, you can choose a check-in date that is greater than the check-out date by choosing a day in the next month. This results in negative totals which is obviously undesired behaviour. I know how to fix this, but I've probably gone outside the scope of the task as it is.

For styling purposes, I opted for Tailwind simply because it's what I'm most comfortable with and used to. It could have just as easily have been Bootstrap or vanilla CSS.

I hope I've done enough to demonstrate my skill and I thank you for your consideration.

## Running the project
It should be as easy as:
1. running <code>npm install</code> for the dependencies
2. running <code>npm start</code> to compile tailwindcss and start watching for changes (shouldn't be necessary unless the src/css/main.css file is changed)
