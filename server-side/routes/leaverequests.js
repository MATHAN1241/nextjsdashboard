const express = require('express');
const router = express.Router();

// Sample data for leave requests (replace this with your actual data source)
let leaveRequests = [
  {
    id: 112,
    fromDate: '02/03/2024',
    toDate: '01/03/2024',
    reason: 'sick leave',
    status: 'pending'
  },
  {
    id: 121,
    fromDate: '02/03/2024',
    toDate: '01/03/2024',
    reason: 'sick leave',
    status: 'pending'
  },
  // Add more sample requests as needed
];

// Route to get all leave requests
router.get('/', (req, res) => {
  res.json(leaveRequests);
});

// Route to approve a leave request
router.post('/:id/approve', (req, res) => {
  const requestId = parseInt(req.params.id);
  const index = leaveRequests.findIndex(request => request.id === requestId);
  if (index !== -1) {
    leaveRequests[index].status = 'approved';
    res.status(200).json({ message: 'Request approved successfully' });
  } else {
    res.status(404).json({ error: 'Request not found' });
  }
});

// Route to reject a leave request
router.post('/:id/reject', (req, res) => {
  const requestId = parseInt(req.params.id);
  const index = leaveRequests.findIndex(request => request.id === requestId);
  if (index !== -1) {
    leaveRequests[index].status = 'rejected';
    res.status(200).json({ message: 'Request rejected successfully' });
  } else {
    res.status(404).json({ error: 'Request not found' });
  }
});

module.exports = router;
