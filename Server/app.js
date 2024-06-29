const express = require('express');
const app = express();
const port = 3001;

// Import routes
const indexRouter = require('./routes/index');
const aboutmeRouter = require('./routes/aboutme');
const projectsRouter = require('./routes/projects');
const systemdesignRouter = require('./routes/systemdesign');
const appleDevelopmentRouter = require('./routes/appleDevelopment');
const javascriptDevelopmentRouter = require('./routes/javascriptDevelopment');
const artRouter = require('./routes/rightbrain/art');
const literatureRouter = require('./routes/rightbrain/literature');
const songsRouter = require('./routes/rightbrain/songs');

// Use routes
app.use('/', indexRouter);
app.use('/', aboutmeRouter);
app.use('/', projectsRouter);
app.use('/', systemdesignRouter);
app.use('/', appleDevelopmentRouter);
app.use('/', javascriptDevelopmentRouter);
app.use('/', artRouter);
app.use('/', literatureRouter);
app.use('/', songsRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
