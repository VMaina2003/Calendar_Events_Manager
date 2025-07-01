const events = [
  {
    title: "Tech Meetup",
    date: new Date("2025-07-01"),
    location: "Nairobi",
    attendees: new Set(["Alice", "Bob"]),
  },
  {
    title: "Design Workshop",
    date: new Date("2025-06-30"),
    location: "Mombasa",
    attendees: new Set(["Victor", "Sara"]),
  },
  {
    title: "Startup Pitch",
    date: new Date("2025-07-10"),
    location: "Kisumu",
    attendees: new Set(["Jane"]),
  },
  {
    title: "Code Camp",
    date: new Date("2025-06-28"),
    location: "Nakuru",
    attendees: new Set(["Tom", "Jerry"]),
  }
];


// ===== Step 2: Get today's date and 7 days later =====
const today = new Date(); // today's full date
const sevenDaysLater = new Date();
sevenDaysLater.setDate(today.getDate() + 7);

// ===== Step 3: Filter and map upcoming events =====
const upcomingEvents = events
  .filter(event => event.date >= today && event.date <= sevenDaysLater)
  .map(event => `${event.title} - ${event.date.toDateString()}`);

// ===== Step 4: Display result =====
console.log(" Upcoming Events in the Next 7 Days:");
upcomingEvents.forEach(event => console.log("•", event));

// ===== Step 5: Store organizers using WeakMap =====
const organizers = new WeakMap();
organizers.set(events[0], "Victor Maina");
organizers.set(events[1], "Sara Njeri");
organizers.set(events[2], "Beckie ");
organizers.set(events[3], "John Kip");

console.log("\n👤 Organizer of 'Design Workshop':", organizers.get(events[1]));

// ===== Step 6: Display events as a table using destructuring =====
console.log(" Event Table:");
events.forEach(({ title, date, location }) => {
  console.log(`| ${title.padEnd(15)} | ${date.toDateString()} | ${location}`);
});

// ===== Step 7: Function to add an attendee =====
function addAttendee(eventTitle, attendeeName) {
  const event = events.find(e => e.title === eventTitle);
  if (event) {
    event.attendees.add(attendeeName);
    console.log(`${attendeeName} added to '${eventTitle}'`);
  } else {
    console.log(` Event '${eventTitle}' not found.`);
  }
}

// ===== Step 8: Convert to JSON with formattedDate =====
events.forEach(event => {
  event.toJSON = function () {
    const { title, date, location, attendees } = this;
    return {
      title,
      date,
      location,
      attendees: [...attendees],
      formattedDate: `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
    };
  };
});

const eventsJSON = JSON.stringify(events, null, 2);
console.log(" JSON Export:\n", eventsJSON);

// ===== Step 9: Object keys, values, entries of first event =====
const firstEvent = events[0];

console.log(" First Event Keys:", Object.keys(firstEvent));
console.log(" First Event Values:", Object.values(firstEvent));

console.log(" First Event Entries:");
Object.entries(firstEvent).forEach(([key, value]) => {
  console.log(`${key}:`, value);
});

// ===== Step 10: Display all events using .forEach() =====
console.log(" All Events Overview:");
events.forEach(event => {
  console.log(`- ${event.title} on ${event.date.toDateString()}`);
});