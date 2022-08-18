//model here
const Listings = require("../models/listing");
const Reservations = require("../models/reservation");

//Method to add days by 1
Date.prototype.addDays = function (days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

//HUGE CREATE FUNCTION AND LOGIC FOR USER HANDLING AND DEAL WITH TIME
async function create(req, res) {
  try {
    //some query to add listing into the database
    //console.log("pathing works on api/reservations/create!!");

    console.log("Here is the request body: ", req.body);

    //set two date times for calculation
    let date1 = new Date(req.body.dateFrom);
    let date2 = new Date(req.body.dateTo);
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
    const day1past = Math.round((date1 - today) / one_day + 1);
    const day2past = Math.round((date2 - today) / one_day + 1);

    //Error handling for invalid date ranges
    if (isNaN(totalDays)) {
      console.log("Please select 2 dates branch");
      return res.status(200).json({
        userError: true,
        msg: "Please select two dates!",
      });
    } else if (day1past < 0 || day2past < 0) {
      console.log("Past dates branch");
      return res.status(200).json({
        userError: true,
        msg: "Cant book dates in the past!",
      });
    } else if (totalDays < 0) {
      console.log("backwards dates branch");
      return res.status(200).json({
        userError: true,
        msg: "Your check-in and check-out dates are backwards!",
      });
    } else {
      console.log("made it to listing dates branch");
      //Finally try to book, but first check if days are existing
      //Grab the listing data in general
      let listing = await Listings.findById(req.body.id);

      //const daysBooked = listing.daysbooked;
      //will implement booking blockage later
      const daysBooked = [];

      //this array is to display for error message which days are in conflict
      conflictDays = [];

      //iterate through each day and check if its in daysbooked, if not
      let availableDays = [];

      //because of UTC TO EST CONVERSTION, DAYS ARE BEHIND BY 1, FIX BY ADDING 1
      // date1 = date1.addDays(1);
      // date2 = date2.addDays(2);

      let curDate = date1;
      console.log("This is curDate: ", curDate);
      curDate = curDate.addDays(1);
      console.log("This is curDate after adding days: ", curDate);

      while (curDate <= date2.addDays(1)) {
        //check if this date has already been booked
        if (daysBooked.includes(curDate.toDateString())) {
          conflictDays.push(curDate.toDateString());
          curDate = curDate.addDays(1);
        } else {
          availableDays.push(curDate.toDateString());
          curDate = curDate.addDays(1);
        }
      }
      console.log("Blocked days array at the edn: ", conflictDays);
      console.log("available days array at the end: ", availableDays);

      if (conflictDays.length != 0) {
        return res.status(200).json({
          userError: true,
          msg: `Sorry! ${conflictDays} have been booked!`,
        });
      } else {
        //After all this, finally you can book
        console.log("made it to booking stage!");
        const totalCost = parseInt(req.body.rate) * (totalDays + 1);
        console.log("total cost is ", totalCost);

        date1 = date1.addDays(1).toDateString();
        date2 = date2.addDays(1).toDateString();

        const inputs = {
          user: req.body.user._id,
          listing: req.body.id,
          address: req.body.address,
          totalCost: totalCost,
          dateStart: date1,
          dateEnd: date2,
        };

        console.log("Building inputs for mongo: ", inputs);
        let reservation = new Reservations(inputs);
        try {
          await reservation.save();
          //some query to add listing into the database

          res.status(200).json({ text: "Successfully added reservation!" });
        } catch (err) {
          console.log(err);
          res.json(err);
        }
      }
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
    console.log(req.body.user);

    let reservations = await Reservations.find({ user: req.body.user._id });

    console.log("Found reservations: ", reservations);
    res.status(200).json(reservations);
  } catch (err) {
    res.json(err);
  }
}

module.exports = {
  create,
  index,
};
