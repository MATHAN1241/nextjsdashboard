// routes/attendanceForm.js
// const express = require('express');
// const router = express.Router();
// const Employee = require('../models/Employee');

// // Add Attendance
// router.post('/:employeeId/attendance', async (req, res) => {
//     try {
//         const employee = await Employee.findOne({ employeeId: req.params.employeeId });
//         if (!employee) {
//             return res.status(404).send("Employee not found");
//         }
//         const { date, present } = req.body;
//         employee.attendance.push({ date, present });
//         await employee.save();
//         res.status(201).send(employee);
//     } catch (error) {
//         res.status(400).send(error);
//     }
// });

// module.exports = router;
// const express = require('express');
// const router = express.Router();
// const{attendance} =require('../models/attendance')


// router.post('/clock/in', async (req, res) => {
//   const { employeeId } = req.body;

//   try {
//     // Check if the employee has already clocked in
//     const existingRecord = await attendance.findOne({ employeeId, clockOutTime: null });
//     if (existingRecord) {
    
//       return res.status(400).send('Employee already clocked in');
//     }

//     // If not already clocked in, proceed with clock-in
//     const clockInTime = new Date();
//     const showcurrentDate = new Date();
    
//     const formattedDate = showcurrentDate.toLocaleDateString('en-GB');
//     console.log(showcurrentDate,"uuu");
//     // console.log(formattedDate,"qqqq");
//     await attendance.create({ employeeId, clockInTime,formattedDate });
//     res.status(200).send('Clock in successful');
//   } catch (error) {
//     res.status(500).send('Error clocking in');
//   }
// });

// router.post('/clock/out', async (req, res) => {
//   const { employeeId } = req.body;
//   const clockOutTime = new Date();

//   try {

//     const recentRecord = await attendance.findOne({ employeeId }).sort({ clockInTime: -1 });
//     console.log(recentRecord,"iii");

//     // Check if there is a recent clock-in record for the employee
//     if (!recentRecord) {
//       return res.status(200).send('No attendance record found for the employee.');
//     }

//     // Check if the employee has already clocked out
//     const existingRecord = await attendance.findOne({ employeeId, clockOutTime: { $ne: null } });
//     if (existingRecord) {
//       return res.status(400).send('Clock-out time has already been recorded.');
//     }

//     // If clockOutTime is empty, set it to the current time
//     let updatedClockOutTime = clockOutTime;
    
//     // Update or create attendance record
//     await attendance.findOneAndUpdate(
//       { employeeId, clockOutTime: null },
//       { $set: { clockOutTime: updatedClockOutTime } },
//       { upsert: true }
//     );
    
//     res.status(200).send(`Clock out successful (Clock out time: ${updatedClockOutTime})`);
//   } catch (error) {
//     res.status(500).send('Error clocking out');
//   }
// });

// router.get('/attendance/:employeeId', async (req, res) => {
//   const { employeeId } = req.params;
//   try {
//     const attendanceRecords = await attendance.find({ employeeId });
//     const formattedRecords = attendanceRecords.map(record => {
//       const clockInDate = new Date(record.clockInTime).toLocaleDateString();
//       const clockInTime = new Date(record.clockInTime).toLocaleTimeString();
//       const clockOutDate = record.clockOutTime !== '00:00:00' ? new Date(record.clockOutTime).toLocaleDateString() : '';
//       const clockOutTime = record.clockOutTime !== '00:00:00' ? new Date(record.clockOutTime).toLocaleTimeString() : '';

//       // Calculate late time if clock in after 10:00 AM
//       const lateTime = new Date(record.clockInTime).getHours() < 10 ? 0 : Math.max(0, new Date(record.clockInTime).getHours() - 10);

//       // Calculate overtime if working more than an hour after 6:30 PM
//       let overtime = 0;
//       if (record.clockOutTime) {
//         const workingHours = (new Date(record.clockOutTime) - new Date(record.clockInTime)) / (1000 * 60 * 60); // Convert milliseconds to hours
//         overtime = workingHours > 8.5 ? workingHours - 8.5 : 0; // Subtract 8.5 hours for regular work hours
//       }

//       return {
//         clockInDate,
//         clockInTime,
//         clockOutDate,
//         clockOutTime,
//         lateTime: lateTime > 0 ? `${lateTime} ` : 'On time',
//         overtime: overtime > 0 ? `${overtime} hours overtime `: 'No overtime'
//       };
//     });

//     res.json(formattedRecords);
//   } catch (error) {
//     res.status(500).send('Error fetching attendance records');
//   }
// });


// router.get('/clock-in/:employeeId', async (req, res) => {
//   try {
//       const { employeeId } = req.params;
//       const currentDate = new Date();

//       // Find clock-in time by employee ID
//       const clockInRecord = await attendance.findOne({ employeeId });
//       if (clockInRecord) {
//           // Format the date and time separately
//           const clockInDate = new Date(clockInRecord.clockInTime).toLocaleDateString('en-IN');
//           const clockInTime = new Date(clockInRecord.clockInTime).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true });
//           const formattedDate = (clockInRecord.formattedDate);

//           // Construct the formatted result
//           const formattedClockInDate = `${clockInDate}`;
//           const formattedClockInTime =` ${clockInTime}`;
//           const currentDate =`${formattedDate}`;

//           // Return the formatted result
//           res.status(200).json({ clockInDate: formattedClockInDate,clockInTime:formattedClockInTime,formattedDate:currentDate  });
//       } else {
//           // If clock-in time is not found, return an error message
//           res.status(404).json({ error: 'Clock-in time not found' });
//       }
//   } catch (error) {
//       console.error('Error fetching clock-in time:', error);
//       res.status(500).json({ error: 'Internal server error' });
//   }
// });






//  module.exports = router;

const express = require('express');
const router = express.Router();
const{ClockIn} =require('../models/ClockIn');
const{ClockOut} =require('../models/ClockOut');
const{ClockOutRequest}=require('../models/ClockOutRequest');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const moment = require('moment-timezone');

// Clock-in route
router.post('/clock/in', async (req, res) => {
  const { employeeId } = req.body;
  const currentTime = new Date();
  const formattedDate = currentTime.toLocaleDateString('en-GB');

  try {
    const existingClockInRecord = await ClockIn.findOne({
      employeeId,
      formattedDate
    });

    if (existingClockInRecord) {
      // If a clock-in record exists for the employee on the current day, send an error response
      return res.status(400).send('Employee has already clocked in for the day');
    }
    // Proceed with clock-in
    const clockInTime = currentTime;
    await ClockIn.create({ employeeId, clockInTime, formattedDate });
    res.status(200).send('Clock in successful');
  } catch (error) {
    console.error(error);
    // Handle errors
    res.status(500).send('Error clocking in');
  }
});


// GET clock-in records for a specific employee on a given day
router.get('/clock/in/:employeeId', async (req, res) => {
  const { employeeId } = req.params;

  try {
    // Find clock-in records for the specified employee
    const clockInRecords = await ClockIn.find({ employeeId });

    // Format the clock-in time to "dd/mm/yyyy" and separate date and time
    const formattedClockInRecords = clockInRecords.map(record => {
      const clockInDateTime = new Date(record.clockInTime);
      const clockInTime = clockInDateTime.toLocaleTimeString('en-GB', { hour12: true });
      //const amOrPm = clockInDateTime.getHours() < 12 ? 'AM' : 'PM'; // Determine AM/PM
      return {
        ...record.toObject(),
        clockInDate: clockInDateTime.toLocaleDateString('en-GB'),
        clockInTime: clockInTime // Append AM/PM
      };
    });

    res.status(200).json(formattedClockInRecords);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching clock-in records');
  }
});
router.get('/clock/in', async (req, res) => {
  const { employeeId, clockInDate } = req.query;

  try {
    let query = {};

    // Validate and add employeeId to the query
    if (employeeId) {
      query.employeeId = employeeId;
    } else {
      return res.status(400).send('Missing employeeId parameter');
    }

    // Validate and add clockInDate to the query
    if (clockInDate) {
      // Parse the date provided in "dd-mm-yyyy" format
      const [day, month, year] = clockInDate.split('-');
      const parsedClockInDate = new Date(`${year}-${month}-${day}`);

      // Add the parsed date to the query
      query.clockInDate = { $gte: parsedClockInDate, $lt: new Date(parsedClockInDate.getTime() + 24 * 60 * 60 * 1000) };
    } else {
      return res.status(400).send('Missing clockInDate parameter');
    }

    // Find clock-in records based on the query
    const clockInRecords = await ClockIn.find(query);

    // Format the clock-in time and date
    const formattedClockInRecords = clockInRecords.map(record => ({
      employeeId: record.employeeId,
      clockInDate: record.clockInDate,
      clockInTime: record.clockInTime
    }));

    res.status(200).json(formattedClockInRecords);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching clock-in records');
  }
});



router.post('/clock/out', async (req, res) => {
  const { employeeId } = req.body;
  const currentTime = new Date();
  const formattedDate = currentTime.toLocaleDateString('en-GB');

  try {
    // Check if the employee has already clocked out for the day
    const existingClockOutRecord = await ClockOut.findOne({
      employeeId,
      formattedDate
    });

    // If the employee has already clocked out, send an error response
    if (existingClockOutRecord) {
      return res.status(400).send('Employee has already clocked out for the day');
    }

    // Check if the employee has clocked in for the day
    const existingClockInRecord = await ClockIn.findOne({
      employeeId,
      formattedDate
    });

    // If the employee has not clocked in, send an error response
    if (!existingClockInRecord) {
      return res.status(400).send('Employee has not clocked in for the day');
    }

    let clockOutTime = currentTime;

    // If the employee has not already clocked out, set the clockOutTime to 00:00:00
    // if (!existingClockOutRecord) {
    //   clockOutTime.setHours(0, 0, 0, 0);
    // }

    // Proceed with clock-out
    await ClockOut.create({ employeeId, clockOutTime, formattedDate });

    res.status(200).send('Clock out successful');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error clocking out');
  }
});

router.get('/clock/in-out/:employeeId', async (req, res) => {
  const { employeeId } = req.params;

  try {
    // Get current date in 'dd/mm/yyyy' format
    const currentDate = new Date().toLocaleDateString('en-GB');

    // Find clock-in records for the specified employee
    const clockInRecords = await ClockIn.find({ employeeId });

    // Find clock-out records for the specified employee
    const clockOutRecords = await ClockOut.find({ employeeId });

    // Filter records for the current date
    const todayClockInRecords = clockInRecords.filter(record => {
      const dateKey = new Date(record.clockInTime).toLocaleDateString('en-GB');
      return dateKey === currentDate;
    });

    const todayClockOutRecords = clockOutRecords.filter(record => {
      const dateKey = new Date(record.clockOutTime).toLocaleDateString('en-GB');
      return dateKey === currentDate;
    });

    // Helper function to format time as HH:MM:SS AM/PM
    const formatTime = (date) => {
      let hours = date.getHours();
      const minutes = String(date.getMinutes()).padStart(2, '0');
      const seconds = String(date.getSeconds()).padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      hours = String(hours).padStart(2, '0');
      return `${hours}:${minutes}:${seconds} ${ampm}`;
    };

    // Combine clock-in and clock-out records for today
    const combinedRecords = todayClockInRecords.map(clockInRecord => {
      const clockInDateTime = new Date(clockInRecord.clockInTime);
      const expectedClockInTime = new Date(clockInRecord.clockInTime);
      expectedClockInTime.setHours(10, 0, 0, 0); // Set expected clock-in time to 10:00 AM

      // Calculate late time
      const lateMinutes = Math.max(0, (clockInDateTime - expectedClockInTime) / (1000 * 60));
      const lateHours = Math.floor(lateMinutes / 60);
      const lateMinutesRemainder = Math.floor(lateMinutes % 60);
      const lateTime = lateHours > 0 ? `${lateHours} : ${lateMinutesRemainder} ` : `00:${lateMinutesRemainder} `;

      // Find the corresponding clock-out record for the same date
      const clockOutRecord = todayClockOutRecords.find(record => {
        return new Date(record.clockOutTime).toLocaleDateString('en-GB') === currentDate;
      });

      let overtime = '00:00:00';
      let underTime = '00:00:00';
      let clockOutDate = '';
      let clockOutTime = '00:00:00';

      if (clockOutRecord) {
        const clockOutDateTime = new Date(clockOutRecord.clockOutTime);
        const expectedClockOutTime = new Date(clockOutRecord.clockOutTime);
        expectedClockOutTime.setHours(18, 30, 0, 0); // Set expected clock-out time to 6:30 PM

        // Calculate the difference between actual clock-out time and expected clock-out time
        const differenceMinutes = (clockOutDateTime - expectedClockOutTime) / (1000 * 60);
        const absoluteDifferenceMinutes = Math.abs(differenceMinutes);
        const differenceHours = Math.floor(absoluteDifferenceMinutes / 60);
        const differenceMinutesRemainder = Math.floor(absoluteDifferenceMinutes % 60);
        const formattedDifference = `${differenceHours.toString().padStart(2, '0')} : ${differenceMinutesRemainder.toString().padStart(2, '0')} `;

        // Determine if it's overtime or under time
        if (differenceMinutes > 0) {
          overtime = formattedDifference;
        } else if (differenceMinutes < 0) {
          underTime = formattedDifference;
        }

        // Set clock-out date and time
        clockOutDate = clockOutDateTime.toLocaleDateString('en-GB');
        clockOutTime = formatTime(clockOutDateTime);
      }

      return {
        clockInDate: clockInDateTime.toLocaleDateString('en-GB'),
        clockInTime: formatTime(clockInDateTime),
        lateTime: lateTime,
        clockOutDate: clockOutDate,
        clockOutTime: clockOutTime,
        overtime: overtime,
        underTime: underTime
      };
    });

    res.status(200).json(combinedRecords);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching clock records');
  }
});
// router.get('/clock/in-outlistofall/:employeeId', async (req, res) => {
//   const { employeeId } = req.params;

//   try {
//     // Find clock-in records for the specified employee
//     const clockInRecords = await ClockIn.find({ employeeId });

//     // Find clock-out records for the specified employee
//     const clockOutRecords = await ClockOut.find({ employeeId });

//     // Format the clock-in time to "dd/mm/yyyy" and separate date and time
//     const formattedClockInRecords = clockInRecords.map(record => {
//       const clockInDateTime = new Date(record.clockInTime);
//       const expectedClockInTime = new Date(record.clockInTime);
//       expectedClockInTime.setHours(10, 0, 0, 0); // Set expected clock-in time to 10:00 AM

//       // Calculate the difference between actual clock-in time and expected clock-in time
//       const lateMinutes = Math.max(0, (clockInDateTime - expectedClockInTime) / (1000 * 60));
//       const lateHours = Math.floor(lateMinutes / 60);
//       const lateMinutesRemainder = Math.floor(lateMinutes % 60);
//       const lateTime = lateHours > 0 ? `${lateHours.toString().padStart(2, '0')}:${lateMinutesRemainder.toString().padStart(2, '0')}` : `00:${lateMinutesRemainder.toString().padStart(2, '0')}`;

//       return {
//         ...record.toObject(),
//         clockInDate: clockInDateTime.toLocaleDateString('en-GB'),
//         clockInTime: clockInDateTime.toLocaleTimeString('en-GB', { hour12: true }),
//         lateTime: lateTime
//       };
//     });

//     // If there are clock-out records, format the clock-out time
//     // Otherwise, set it to "00:00:00"
//     let formattedClockOutRecords;
//     if (clockOutRecords.length > 0) {
//       formattedClockOutRecords = clockOutRecords.map(record => {
//         const clockOutDateTime = new Date(record.clockOutTime);
//         const expectedClockOutTime = new Date(record.clockOutTime);
//         expectedClockOutTime.setHours(18, 30, 0, 0); // Set expected clock-out time to 6:30 P

//         // Calculate the difference between actual clock-out time and expected clock-out time
//         const differenceMinutes = (clockOutDateTime - expectedClockOutTime) / (1000 * 60);
//         const absoluteDifferenceMinutes = Math.abs(differenceMinutes);
//         const differenceHours = Math.floor(absoluteDifferenceMinutes / 60);
//         const differenceMinutesRemainder = Math.floor(absoluteDifferenceMinutes % 60);
//         const formattedDifference = `${differenceHours.toString().padStart(2, '0')}:${differenceMinutesRemainder.toString().padStart(2, '0')}`;
    
//         // Determine if it's overtime or under time
//         const overtime = differenceMinutes > 0 ? formattedDifference : '00:00';
//         const underTime = differenceMinutes < 0 ? formattedDifference : '00:00';

//         return {
//           ...record.toObject(),
//           clockOutDate: clockOutDateTime.toLocaleDateString('en-GB'),
//           clockOutTime: clockOutDateTime.toLocaleTimeString('en-GB', { hour12: true }),
//           overtime: overtime,
//           underTime: underTime
//         };
//       });
//     } else {
//       formattedClockOutRecords = [{ clockOutTime: "00:00:00" }];
//     }

//     // Combine clock-in and clock-out records
//     let combinedRecords = [];
//     let i = 0;
//     let j = 0;
//     while (i < formattedClockInRecords.length || j < formattedClockOutRecords.length) {
//       if (i < formattedClockInRecords.length) {
//         const combinedRecord = { ...formattedClockInRecords[i] };
//         if (j < formattedClockOutRecords.length) {
//           combinedRecord.clockOutDate = formattedClockOutRecords[j].clockOutDate || ''; // If clockOutDate is undefined, set it to an empty string
//           combinedRecord.clockOutTime = formattedClockOutRecords[j].clockOutTime || ''; // If clockOutTime is undefined, set it to an empty string
//           combinedRecord.overtime = formattedClockOutRecords[j].overtime || ''; // If overtime is undefined, set it to an empty string
//           combinedRecord.underTime = formattedClockOutRecords[j].underTime || ''; // If underTime is undefined, set it to an empty string
//           j++;
//         }
//         combinedRecords.push(combinedRecord);
//         i++;
//       }
//     }

//     res.status(200).json(combinedRecords);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Error fetching clock records');
//   }
// });
router.get('/clock/in-outlistofall/:employeeId', async (req, res) => {
  const { employeeId } = req.params;

  try {
    // Find clock-in records for the specified employee
    const clockInRecords = await ClockIn.find({ employeeId });

    // Find clock-out records for the specified employee
    const clockOutRecords = await ClockOut.find({ employeeId });

    // Format the clock-in records
    const formattedClockInRecords = clockInRecords.map(record => {
      const clockInDateTime = new Date(record.clockInTime);
      const expectedClockInTime = new Date(record.clockInTime);
      expectedClockInTime.setHours(10, 0, 0, 0); // Set expected clock-in time to 10:00 AM

      const lateMinutes = Math.max(0, (clockInDateTime - expectedClockInTime) / (1000 * 60));
      const lateHours = Math.floor(lateMinutes / 60);
      const lateMinutesRemainder = Math.floor(lateMinutes % 60);
    //  const lateTime = lateHours > 0 ? `${lateHours} hours ${lateMinutesRemainder} mins` : `${lateMinutesRemainder} mins`;
    const lateTime = lateHours > 0 ? `${lateHours.toString().padStart(2, '0')}:${lateMinutesRemainder.toString().padStart(2, '0')}` : `00:${lateMinutesRemainder.toString().padStart(2, '0')}`;
      return {
        ...record.toObject(),
        clockInDate: clockInDateTime.toLocaleDateString('en-GB'),
        clockInTime: clockInDateTime.toLocaleTimeString('en-GB', { hour12: true }),
        lateTime: lateTime,
        clockOutDate: '',
        clockOutTime: '',
        overtime: '',
        underTime: ''
      };
    });

    // Format the clock-out records
    const formattedClockOutRecords = clockOutRecords.map(record => {
      const clockOutDateTime = new Date(record.clockOutTime);
      const expectedClockOutTime = new Date(record.clockOutTime);
      expectedClockOutTime.setHours(18, 30, 0, 0); // Set expected clock-out time to 6:30 PM

      const differenceMinutes = (clockOutDateTime - expectedClockOutTime) / (1000 * 60);
      const absoluteDifferenceMinutes = Math.abs(differenceMinutes);
      const differenceHours = Math.floor(absoluteDifferenceMinutes / 60);
      const differenceMinutesRemainder = Math.floor(absoluteDifferenceMinutes % 60);
      //  const formattedDifference = ${differenceHours} hours ${differenceMinutesRemainder} mins;
      const formattedDifference = `${differenceHours.toString().padStart(2, '0')}:${differenceMinutesRemainder.toString().padStart(2, '0')}`;
      const overtime = differenceMinutes > 0 ? formattedDifference : '';
      const underTime = differenceMinutes < 0 ? formattedDifference : '';

      return {
        ...record.toObject(),
        clockOutDate: clockOutDateTime.toLocaleDateString('en-GB'),
        clockOutTime: clockOutDateTime.toLocaleTimeString('en-GB', { hour12: true }),
        overtime: overtime,
        underTime: underTime
      };
    });

    // Create a combined list of records by matching clock-in and clock-out times by date
    const combinedRecords = formattedClockInRecords.map(clockInRecord => {
      const clockOutRecord = formattedClockOutRecords.find(clockOutRecord => clockOutRecord.clockOutDate === clockInRecord.clockInDate);
      if (clockOutRecord) {
        return {
          ...clockInRecord,
          clockOutDate: clockOutRecord.clockOutDate,
          clockOutTime: clockOutRecord.clockOutTime,
          overtime: clockOutRecord.overtime,
          underTime: clockOutRecord.underTime
        };
      }
      return clockInRecord;
    });

    res.status(200).json(combinedRecords);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching clock records');
  }
});
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Specify the directory to save the uploaded files
  },
  filename: function (req, file, cb) {
    // Generate a unique filename
    const uniqueFilename = Date.now() + '-' + file.originalname;
    cb(null, uniqueFilename);
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 1024 * 5 }, // Limit file size to 5GB
  fileFilter: function (req, file, cb) {
    // Validate file type
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type, only images are allowed!'), false);
    }
  }
});

// router.post('/clockout/request', upload.array('images', 5), async (req, res) => {
//   const { employeeId, clockInTime, requestedClockOutTime, remarks } = req.body;

//   try {
//     // Ensure the input times are trimmed and in the correct format
//     const clockInTimeString = clockInTime.trim();
//     const requestedClockOutTimeString = requestedClockOutTime.trim();

//     // Parse IST time to moment object
//     const clockInTimeIST = moment.tz(clockInTimeString, 'HH:mm:ss A', 'Asia/Kolkata');
//     const requestedClockOutTimeIST = moment.tz(requestedClockOutTimeString, 'HH:mm:ss A', 'Asia/Kolkata');

//     if (!clockInTimeIST.isValid() || !requestedClockOutTimeIST.isValid()) {
//       return res.status(400).send('Invalid time format');
//     }

//     // Convert IST to UTC ISO 8601 format with milliseconds
//     const clockInDateUTC = clockInTimeIST.clone().utc().toISOString(true);
//     const requestedClockOutDateUTC = requestedClockOutTimeIST.clone().utc().toISOString(true);
    
//     // Ensure both times are in the same format for comparison and storage
//     const clockInDateStandardized = clockInTimeIST.clone().format('HH:mm:ss A');
//     const requestedClockOutDateStandardized = requestedClockOutTimeIST.clone().format('HH:mm:ss A');

//     // Log the input data for debugging
//     console.log('Received data:', { employeeId, clockInDateUTC, requestedClockOutDateUTC, remarks });

//     // Ensure the clock-in record exists by finding the exact match including milliseconds
//     const clockInRecord = await ClockIn.findOne({
//       employeeId,
//       clockInTime: { $gte: new Date(clockInDateUTC), $lte: new Date(clockInDateUTC).setMilliseconds(999) }
//     });
//     if (!clockInRecord) {
//       return res.status(400).send('No matching clock-in record found');
//     }

//     // Check if a clock-out request already exists for the same date and requested clock-out time
//     const clockOutRecord = await ClockOutRequest.findOne({
//       employeeId,
//       clockInTime: new Date(clockInDateUTC),
//       requestedClockOutTime: { $gte: new Date(requestedClockOutDateUTC), $lt: moment(requestedClockOutDateUTC).add(1, 'day').toDate() }
//     });

//     if (clockOutRecord) {
//       return res.status(400).send('Clock-out request already exists for the same date and requested clock-out time');
//     }

//     // Check if files are uploaded
//     if (!req.files || req.files.length === 0) {
//       return res.status(400).send('No images uploaded');
//     }

//     // Extract the filenames of the uploaded images
//     const imageNames = [];
//     for (const file of req.files) {
//       const existingImage = await ClockOutRequest.findOne({ images: file.filename });
//       if (existingImage) {
//         console.error('Duplicate filename:', file.filename);
//       } else {
//         imageNames.push(file.filename);
//       }
//     }

//     // Create the clock-out request
//     const newClockOutRecord = await ClockOutRequest.create({
//       employeeId,
//       clockInTime: new Date(clockInDateUTC),
//       requestedClockOutTime: new Date(requestedClockOutDateUTC),
//       remarks,
//       images: imageNames // Store image filenames
//     });

//     res.status(200).send({ message: 'Clock-out request submitted successfully' });
//   } catch (error) {
//     if (error instanceof multer.MulterError) {
//       if (error.code === 'LIMIT_FILE_SIZE') {
//         return res.status(400).send('File size should not exceed 5GB');
//       }
//     }
//     console.error('Error submitting clock-out request:', error);
//     res.status(500).send('Error submitting clock-out request');
//   }
// });

// router.post('/clockout/request', upload.array('images', 5), async (req, res) => {
//   const { employeeId, clockInTime, requestedClockOutTime, remarks } = req.body;

//   try {
//     // Ensure the input times are trimmed and in the correct format
//     const clockInTimeString = clockInTime.trim();
//     const requestedClockOutTimeString = requestedClockOutTime.trim();

//     // Parse IST time to moment object
//     const clockInTimeIST = moment.tz(clockInTimeString, 'HH:mm:ss A', 'Asia/Kolkata');
//     const requestedClockOutTimeIST = moment.tz(requestedClockOutTimeString, 'HH:mm:ss A', 'Asia/Kolkata');

//     if (!clockInTimeIST.isValid() || !requestedClockOutTimeIST.isValid()) {
//       return res.status(400).send('Invalid time format');
//     }

//     // Convert IST to UTC ISO 8601 format with milliseconds
//     const clockInDateUTC = clockInTimeIST.clone().utc().toISOString(true);
//     const requestedClockOutDateUTC = requestedClockOutTimeIST.clone().utc().toISOString(true);
    
//     // Ensure both times are in the same format for comparison and storage
//     const clockInDateStandardized = clockInTimeIST.clone().format('HH:mm:ss A');
//     const requestedClockOutDateStandardized = requestedClockOutTimeIST.clone().format('HH:mm:ss A');

//     // Log the input data for debugging
//     console.log('Received data:', { employeeId, clockInDateUTC, requestedClockOutDateUTC, remarks });

//     // Ensure the clock-in record exists by finding the exact match including milliseconds
//     const clockInRecord = await ClockIn.findOne({
//       employeeId,
//       clockInTime: { $gte: new Date(clockInDateUTC), $lte: new Date(clockInDateUTC).setMilliseconds(999) }
//     });
//     if (!clockInRecord) {
//       return res.status(400).send('No matching clock-in record found');
//     }

//     // Check if a clock-out request already exists for the same date and requested clock-out time
//     const clockOutRecord = await ClockOutRequest.findOne({
//       employeeId,
//       clockInTime: new Date(clockInDateUTC),
//       requestedClockOutTime: { $gte: new Date(requestedClockOutDateUTC), $lt: moment(requestedClockOutDateUTC).add(1, 'day').toDate() }
//     });

//     if (clockOutRecord) {
//       return res.status(400).send('Clock-out request already exists for the same date and requested clock-out time');
//     }

//     // Extract the filenames of the uploaded images
//     const imageNames = [];
//     if (req.files && req.files.length > 0) {
//       for (const file of req.files) {
//         const existingImage = await ClockOutRequest.findOne({ images: file.filename });
//         if (existingImage) {
//           console.error('Duplicate filename:', file.filename);
//         } else {
//           imageNames.push(file.filename);
//         }
//       }
//     }

//     // Create the clock-out request
//     const newClockOutRecord = await ClockOutRequest.create({
//       employeeId,
//       clockInTime: new Date(clockInDateUTC),
//       requestedClockOutTime: new Date(requestedClockOutDateUTC),
//       remarks,
//       images: imageNames // Store image filenames
//     });

//     res.status(200).send({ message: 'Clock-out request submitted successfully' });
//   } catch (error) {
//     if (error instanceof multer.MulterError) {
//       if (error.code === 'LIMIT_FILE_SIZE') {
//         return res.status(400).send('File size should not exceed 5GB');
//       }
//     }
//     console.error('Error submitting clock-out request:', error);
//     res.status(500).send('Error submitting clock-out request');
//   }
// });
// router.post('/clockout/request', upload.array('images', 5), async (req, res) => {
//   const { employeeId, clockInTime, requestedClockOutTime, remarks } = req.body;

//   try {
//     // Ensure the input times are trimmed and in the correct format
//     const clockInTimeString = clockInTime?.trim();
//     const requestedClockOutTimeString = requestedClockOutTime?.trim();

//     // Parse IST time to moment object
//     const clockInTimeIST = moment.tz(clockInTimeString, 'HH:mm:ss A', 'Asia/Kolkata');
//     const requestedClockOutTimeIST = moment.tz(requestedClockOutTimeString, 'HH:mm:ss A', 'Asia/Kolkata');

//     if (!clockInTimeIST.isValid() || !requestedClockOutTimeIST.isValid()) {
//       return res.status(400).send('Invalid time format');
//     }

//     // Convert IST to UTC ISO 8601 format with milliseconds
//     const clockInDateUTC = clockInTimeIST.clone().utc().toISOString(true);
//     const requestedClockOutDateUTC = requestedClockOutTimeIST.clone().utc().toISOString(true);
    
//     // Ensure both times are in the same format for comparison and storage
//     const clockInDateStandardized = clockInTimeIST.clone().format('HH:mm:ss A');
//     const requestedClockOutDateStandardized = requestedClockOutTimeIST.clone().format('HH:mm:ss A');

//     // Log the input data for debugging
//     console.log('Received data:', { employeeId, clockInDateUTC, requestedClockOutDateUTC, remarks });

//     // Ensure the clock-in record exists by finding the exact match including milliseconds
//     const clockInRecord = await ClockIn.findOne({
//       employeeId,
//       clockInTime: { $gte: new Date(clockInDateUTC), $lte: new Date(clockInDateUTC).setMilliseconds(999) }
//     });
//     if (!clockInRecord) {
//       return res.status(400).send('No matching clock-in record found');
//     }

//     // Check if a clock-out request already exists for the same date and requested clock-out time
//     const clockOutRecord = await ClockOutRequest.findOne({
//       employeeId,
//       clockInTime: new Date(clockInDateUTC),
//       requestedClockOutTime: { $gte: new Date(requestedClockOutDateUTC), $lt: moment(requestedClockOutDateUTC).add(1, 'day').toDate() }
//     });

//     if (clockOutRecord) {
//       return res.status(400).send('Clock-out request already exists for the same date and requested clock-out time');
//     }

//     // Extract the filenames of the uploaded images
//     const imageNames = [];
//     if (req.files && req.files.length > 0) {
//       for (const file of req.files) {
//         const existingImage = await ClockOutRequest.findOne({ images: file.filename });
//         if (existingImage) {
//           console.error('Duplicate filename:', file.filename);
//         } else {
//           imageNames.push(file.filename);
//         }
//       }
//     }

//     // Create the clock-out request
//     const newClockOutRecord = await ClockOutRequest.create({
//       employeeId,
//       clockInTime: new Date(clockInDateUTC),
//       requestedClockOutTime: new Date(requestedClockOutDateUTC),
//       remarks,
//       images: imageNames // Store image filenames
//     });

//     res.status(200).send({ message: 'Clock-out request submitted successfully' });
//   } catch (error) {
//     if (error instanceof multer.MulterError) {
//       if (error.code === 'LIMIT_FILE_SIZE') {
//         return res.status(400).send('File size should not exceed 5GB');
//       }
//     }
//     console.error('Error submitting clock-out request:', error);
//     res.status(500).send('Error submitting clock-out request');
//   }
// });
// router.post('/clockout/request', upload.array('images', 5), async (req, res) => {
//   const { employeeId, clockInTime, requestedClockOutTime, remarks } = req.body;

//   if (!employeeId || !clockInTime || !requestedClockOutTime || !remarks) {
//     return res.status(400).send('All fields are required');
//   }

//   try {
//     // Ensure the input times are trimmed and in the correct format
//     const clockInTimeString = clockInTime.trim();
//     const requestedClockOutTimeString = requestedClockOutTime.trim();

//     // Parse IST time to moment object
//     const clockInTimeIST = moment.tz(clockInTimeString, 'HH:mm:ss A', 'Asia/Kolkata');
//     const requestedClockOutTimeIST = moment.tz(requestedClockOutTimeString, 'HH:mm:ss A', 'Asia/Kolkata');

//     if (!clockInTimeIST.isValid() || !requestedClockOutTimeIST.isValid()) {
//       return res.status(400).send('Invalid time format');
//     }

//     // Convert IST to UTC ISO 8601 format with milliseconds
//     const clockInDateUTC = clockInTimeIST.clone().utc().toISOString(true);
//     const requestedClockOutDateUTC = requestedClockOutTimeIST.clone().utc().toISOString(true);

//     // Ensure both times are in the same format for comparison and storage
//     const clockInDateStandardized = clockInTimeIST.clone().format('HH:mm:ss A');
//     const requestedClockOutDateStandardized = requestedClockOutTimeIST.clone().format('HH:mm:ss A');

//     // Log the input data for debugging
//     console.log('Received data:', { employeeId, clockInDateUTC, requestedClockOutDateUTC, remarks });

//     // Ensure the clock-in record exists by finding the exact match including milliseconds
//     const clockInRecord = await ClockIn.findOne({
//       employeeId,
//       clockInTime: { $gte: new Date(clockInDateUTC), $lte: new Date(clockInDateUTC).setMilliseconds(999) }
//     });
//     if (!clockInRecord) {
//       return res.status(400).send('No matching clock-in record found');
//     }

//     // Check if a clock-out request already exists for the same date and requested clock-out time
//     const clockOutRecord = await ClockOutRequest.findOne({
//       employeeId,
//       clockInTime: new Date(clockInDateUTC),
//       requestedClockOutTime: { $gte: new Date(requestedClockOutDateUTC), $lt: moment(requestedClockOutDateUTC).add(1, 'day').toDate() }
//     });

//     if (clockOutRecord) {
//       return res.status(400).send('Clock-out request already exists for the same date and requested clock-out time');
//     }

//     // Extract the filenames of the uploaded images
//     const imageNames = [];
//     if (req.files && req.files.length > 0) {
//       for (const file of req.files) {
//         const existingImage = await ClockOutRequest.findOne({ images: file.filename });
//         if (existingImage) {
//           console.error('Duplicate filename:', file.filename);
//         } else {
//           imageNames.push(file.filename);
//         }
//       }
//     }

//     // Create the clock-out request
//     const newClockOutRecord = await ClockOutRequest.create({
//       employeeId,
//       clockInTime: new Date(clockInDateUTC),
//       requestedClockOutTime: new Date(requestedClockOutDateUTC),
//       remarks,
//       images: imageNames // Store image filenames
//     });

//     res.status(200).send({ message: 'Clock-out request submitted successfully' });
//   } catch (error) {
//     if (error instanceof multer.MulterError) {
//       if (error.code === 'LIMIT_FILE_SIZE') {
//         return res.status(400).send('File size should not exceed 5GB');
//       }
//     }
//     console.error('Error submitting clock-out request:', error);
//     res.status(500).send('Error submitting clock-out request');
//   }
// });
// router.post('/clockout/request', upload.array('images', 5), async (req, res) => {
//   const { employeeId, clockInTime, requestedClockOutTime, remarks } = req.body;

//   try {
//     // Ensure the input times are trimmed and in the correct format
//     const clockInTimeString = clockInTime.trim();
//     const requestedClockOutTimeString = requestedClockOutTime.trim();

//     // Parse IST time to moment object
//     const clockInTimeIST = moment.tz(clockInTimeString, 'HH:mm:ss A', 'Asia/Kolkata');
//     const requestedClockOutTimeIST = moment.tz(requestedClockOutTimeString, 'HH:mm:ss A', 'Asia/Kolkata');

//     if (!clockInTimeIST.isValid() || !requestedClockOutTimeIST.isValid()) {
//       return res.status(400).send('Invalid time format');
//     }

//     // Convert IST to UTC ISO 8601 format with milliseconds
//     const clockInDateUTC = clockInTimeIST.clone().utc().toISOString(true);
//     const requestedClockOutDateUTC = requestedClockOutTimeIST.clone().utc().toISOString(true);

//     // Log the input data for debugging
//     console.log('Received data:', { employeeId, clockInDateUTC, requestedClockOutDateUTC, remarks });

//     // Ensure the clock-in record exists by finding the most recent match including milliseconds
//     const clockInRecord = await ClockIn.findOne({
//       employeeId,
//       clockInTime: { $lte: new Date(requestedClockOutDateUTC) }
//     }).sort({ clockInTime: -1 });

//     if (!clockInRecord) {
//       return res.status(400).send('No matching clock-in record found');
//     }

//     // Check if a clock-out request already exists for the same date and requested clock-out time
//     const clockOutRecord = await ClockOutRequest.findOne({
//       employeeId,
//       clockInTime: clockInRecord.clockInTime,
//       requestedClockOutTime: { $gte: new Date(requestedClockOutDateUTC), $lt: moment(requestedClockOutDateUTC).add(1, 'day').toDate() }
//     });

//     if (clockOutRecord) {
//       return res.status(400).send('Clock-out request already exists for the same date and requested clock-out time');
//     }

//     // Extract the filenames of the uploaded images
//     const imageNames = [];
//     if (req.files && req.files.length > 0) {
//       for (const file of req.files) {
//         const existingImage = await ClockOutRequest.findOne({ images: file.filename });
//         if (existingImage) {
//           console.error('Duplicate filename:', file.filename);
//         } else {
//           imageNames.push(file.filename);
//         }
//       }
//     }

//     // Create the clock-out request
//     const newClockOutRecord = await ClockOutRequest.create({
//       employeeId,
//       clockInTime: clockInRecord.clockInTime,
//       requestedClockOutTime: new Date(requestedClockOutDateUTC),
//       remarks,
//       images: imageNames // Store image filenames
//     });

//     res.status(200).send({ message: 'Clock-out request submitted successfully' });
//   } catch (error) {
//     if (error instanceof multer.MulterError) {
//       if (error.code === 'LIMIT_FILE_SIZE') {
//         return res.status(400).send('File size should not exceed 5GB');
//       }
//     }
//     console.error('Error submitting clock-out request:', error);
//     res.status(500).send('Error submitting clock-out request');
//   }
// });
router.post('/clockout/request', upload.array('images', 5), async (req, res) => {
  const { employeeId, clockInTime, requestedClockOutTime, remarks } = req.body;

  // Check if required fields are present
  if (!employeeId || !clockInTime || !requestedClockOutTime || !remarks) {
    return res.status(400).send('All fields are required');
  }

  try {
    // Ensure the input times are trimmed and in the correct format
    const clockInTimeString = clockInTime.trim();
    const requestedClockOutTimeString = requestedClockOutTime.trim();

    // Parse the provided clock-in time and requested clock-out time as IST
    const clockInTimeIST = moment.tz(clockInTimeString, 'hh:mm:ss A', 'Asia/Kolkata');
    const requestedClockOutTimeIST = moment.tz(requestedClockOutTimeString, 'hh:mm:ss A', 'Asia/Kolkata');

    if (!clockInTimeIST.isValid() || !requestedClockOutTimeIST.isValid()) {
      return res.status(400).send('Invalid time format');
    }

    // Extract the time component as HH:mm:ss
    const clockInTimeComponent = clockInTimeIST.format('HH:mm:ss');

    // Retrieve all clock-in records for the specified employee
    const clockInRecords = await ClockIn.find({ employeeId }).sort({ clockInTime: -1 });

    // Find the most recent record with the matching time component
    const clockInRecord = clockInRecords.find(record => {
      const recordTimeComponent = moment(record.clockInTime).format('HH:mm:ss');
      return recordTimeComponent === clockInTimeComponent;
    });

    if (!clockInRecord) {
      console.log('No match found for clock-in time component:', clockInTimeComponent);
      return res.status(400).send('No matching clock-in record found');
    }

    // Extract the date part from the clock-in record
    const clockInDatePart = moment(clockInRecord.clockInTime).format('YYYY-MM-DD');

    // Combine the date part from clock-in with the time part from requested clock-out
    const requestedClockOutDateTime = moment.tz(`${clockInDatePart} ${requestedClockOutTimeString}`, 'YYYY-MM-DD hh:mm:ss A', 'Asia/Kolkata');

    if (!requestedClockOutDateTime.isValid()) {
      return res.status(400).send('Invalid combined date and time format');
    }

    // Convert the combined datetime to UTC
    const requestedClockOutDateUTC = requestedClockOutDateTime.clone().utc().toISOString(true);

    // Check if a clock-out request already exists for the same date and requested clock-out time
    const clockOutRecord = await ClockOutRequest.findOne({
      employeeId,
      clockInTime: clockInRecord.clockInTime,
      requestedClockOutTime: {
        $gte: new Date(requestedClockOutDateUTC),
        $lt: moment(requestedClockOutDateUTC).add(1, 'day').toDate()
      }
    });

    if (clockOutRecord) {
      return res.status(400).send('Clock-out request already exists for the same date and requested clock-out time');
    }

    // Check if files are uploaded
    if (!req.files || req.files.length === 0) {
      return res.status(400).send('No images uploaded');
    }

    // Extract the filenames of the uploaded images
    const imageNames = [];
    for (const file of req.files) {
      const existingImage = await ClockOutRequest.findOne({ images: file.filename });
      if (existingImage) {
        console.error('Duplicate filename:', file.filename);
      } else {
        imageNames.push(file.filename);
      }
    }

    // Create the clock-out request
    const newClockOutRecord = await ClockOutRequest.create({
      employeeId,
      clockInTime: clockInRecord.clockInTime,
      requestedClockOutTime: new Date(requestedClockOutDateUTC),
      remarks,
      images: imageNames // Store image filenames
    });

    res.status(200).send({ message: 'Clock-out request submitted successfully' });
  } catch (error) {
    if (error instanceof multer.MulterError) {
      if (error.code === 'LIMIT_FILE_SIZE') {
        return res.status(400).send('File size should not exceed 5GB');
      }
    }
    console.error('Error submitting clock-out request:', error);
    res.status(500).send('Error submitting clock-out request');
  }
});

router.get('/clockout/requests/:status', async (req, res) => {
  const { status } = req.params;

  try {
    // Fetch all clock-out requests with the specified status from the database
    const requests = await ClockOutRequest.find({ status });

    // Format the requestedClockOutTime and clockInTime with both date and time separately
    const formattedRequests = requests.map(request => {
      const formattedRequest = request.toObject();
      formattedRequest.requestedClockOutDate = formatDate(request.requestedClockOutTime);
      formattedRequest.requestedClockOutTime = formatTimeIST(request.requestedClockOutTime);
      formattedRequest.clockInDate = formatDate(request.clockInTime);
      formattedRequest.clockInTime = formatTimeIST(request.clockInTime);
      formattedRequest.requestedOvertime = calculateRequestedOvertime(request);
      return formattedRequest;
    });

    // Function to format the time based on IST in 12-hour format without AM/PM indicator
    function formatTimeIST(time) {
      const timeIST = moment(time).tz('Asia/Kolkata');
      let hours = timeIST.hours();
      const minutes = timeIST.minutes();
      const seconds = timeIST.seconds();

      // Convert to 12-hour format
      const formattedHours = (hours % 12 || 12).toString().padStart(2, '0');
      const formattedMinutes = minutes.toString().padStart(2, '0');
      const formattedSeconds = seconds.toString().padStart(2, '0');

      return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    }

    // Function to format the date
    function formatDate(time) {
      const timeIST = moment(time).tz('Asia/Kolkata');
      return timeIST.format('MM/DD/YYYY');
    }

    // Function to calculate requested overtime (example implementation)
    function calculateRequestedOvertime(request) {
      // Your logic for calculating requested overtime
      // This is just a placeholder and should be replaced with actual implementation
      const clockInTime = moment(request.clockInTime);
      const requestedClockOutTime = moment(request.requestedClockOutTime);
      const duration = moment.duration(requestedClockOutTime.diff(clockInTime));
      const hours = duration.asHours();
      return hours.toFixed(2);
    }

    // Send the formatted requests as a response
    res.json(formattedRequests);
  } catch (error) {
    console.error('Error fetching clock-out requests:', error);
    res.status(500).send('Error fetching clock-out requests');
  }
});


router.get('/clockout/requests', async (req, res) => {
  try {
    // Fetch all clock-out requests from the database
    const requests = await ClockOutRequest.find();

    // Format the requestedClockOutTime and clockInTime with both date and time separately
    const formattedRequests = requests.map(request => {
      const formattedRequest = request.toObject();
      formattedRequest.requestedClockOutDate = formatDate(request.requestedClockOutTime);
      formattedRequest.requestedClockOutTime = formatTimeIST(request.requestedClockOutTime);
      formattedRequest.clockInDate = formatDate(request.clockInTime);
      formattedRequest.clockInTime = formatTimeIST(request.clockInTime);
      formattedRequest.requestedOvertime = calculateRequestedOvertime(request);
      return formattedRequest;
    });

    // Send the formatted requests as a response
    res.json(formattedRequests);
  } catch (error) {
    console.error('Error fetching clock-out requests:', error);
    res.status(500).send('Error fetching clock-out requests');
  }
});

// Helper function to format date
function formatDate(date) {
  const dateIST = moment(date).tz('Asia/Kolkata');
  return dateIST.format('MM/DD/YYYY');
}

// Helper function to format time without AM/PM indicator
function formatTimeIST(time) {
  const timeIST = moment(time).tz('Asia/Kolkata');
  let hours = timeIST.hours();
  const minutes = timeIST.minutes();
  const seconds = timeIST.seconds();

  // Convert to 12-hour format
  const formattedHours = (hours % 12 || 12).toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedSeconds = seconds.toString().padStart(2, '0');

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

// Helper function to calculate requested overtime
function calculateRequestedOvertime(request) {
  const clockInTime = request.clockInTime.getTime();
  const requestedClockOutTime = request.requestedClockOutTime.getTime();
  const millisecondsInHour = 1000 * 60 * 60;
  const requestedOvertimeMilliseconds = requestedClockOutTime - clockInTime - (8.5 * millisecondsInHour); // Subtract regular working hours
  const requestedOvertimeHours = requestedOvertimeMilliseconds / millisecondsInHour;
  return requestedOvertimeHours.toFixed(2);
}

module.exports = router;