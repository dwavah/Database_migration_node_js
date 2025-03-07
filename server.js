const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { sequelize } = require('./models'); // Sequelize models

const studentRoutes = require('./routes/studentRoutes');
const teacherRoutes = require('./routes/teacherRoutes');
const courseRoutes = require('./routes/courseRoute');
const assignmentRoutes = require('./routes/assignmentRoute');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// API Routes
app.use('/api', studentRoutes);
app.use('/api', teacherRoutes);
app.use('/api', courseRoutes);
app.use('/api', assignmentRoutes);

// Test route
app.get('/', (req, res) => {
    res.send('Welcome to the School API');
});

// Sync database and start server
sequelize.sync().then(() => {
    console.log('Database connected successfully');
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}).catch(err => console.error('Database connection error:', err));
