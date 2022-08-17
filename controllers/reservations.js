//model here

//MAKE THIS ASYNC LATER WHEN WE ADD ACTUAL QUERIES
async function create(req, res) {
  try {
    //some query to add listing into the database
    console.log("pathing works on api/reservations/create!!");

    console.log(req.body);

    //set two date times for calculation
    const date1 = new Date(req.body.dateFrom);
    const date2 = new Date(req.body.dateTo);
    console.log(`Date From is ${date1} and Date To is ${date2}`);
    //grab today's date too
    const today = new Date();

    //one day in milliseconds
    const one_day = 1000 * 60 * 60 * 24;

    //calculate total days, first in Milliseconds then round/convert
    const totalDaysMs = date2 - date1;
    const totalDays = Math.round(totalDaysMs / one_day);

    console.log("Days you attempted to book for: ", totalDays);

    //check if any field is in the past
    const day1past = Math.round((date1-today) / one_day);
    const day2past = Math.round((date2-today) / one_day);


    //Error handling for invalid date ranges
    if (totalDays < 0) {
      return res.status(200).json({
        userError: true,
        msg: "Your check-in and check-out dates are backwards!",
      });
    } else if ()
    
    {
      res.status(200).json("Adding a Reservation to MongoDB in the future");
    }
    
    //PUSH DATES INTO DAYSBOOKED IN LISTING
    //   const dateArray = [];
    // let currentDate = new Date(startDate);

    // while (currentDate <= new Date(endDate)) {
    //   dateArray.push(new Date(currentDate));
    //   // Use UTC date to prevent problems with time zones and DST
    //   currentDate.setUTCDate(currentDate.getUTCDate() + steps);
    // }

    // return dateArray;
  } catch (err) {
    res.json(err);
  }
}

//MAKE THIS ASYNC LATER WHEN WE ADD ACTUAL QUERIES
async function index(req, res) {
  try {
    //some query to grab all  into the database
    console.log("pathing works on api/reservations/index!!");
    res
      .status(200)
      .json("Show all Reservations for User from MongoDB in the future");
  } catch (err) {
    res.json(err);
  }
}

module.exports = {
  create,
  index,
};
