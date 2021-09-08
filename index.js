const { v4 } = require('uuid');
const db = require('./config/database');
const Sport = require('./models/Sport');
const Event = require('./models/Event');
const app = require('./server');
const Country = require('./models/Country');

(async () => {
  await db.sync({force: true});
  
  const india = await Country.create({
    id: v4(),
    name: 'India'
  })
 
  const athletics = await Sport.create({
    id: v4(),
    name: 'Athletics',
  });

  const swimming = await Sport.create({
    id: v4(),
    name: 'Swimming',
  });

  const freeStyleSwimming = await Event.create({
    id: v4(),
    isLive: true,
    name: 'Freestyle Swimming',
    date: '08-09-2021',
    sportId: swimming.id,
  });

  freeStyleSwimming.addCountry(india);

  

  app.listen(process.env.PORT || 5000, () => console.log('Server started'));
})();


