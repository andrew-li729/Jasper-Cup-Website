Features:

Results JSON File that is parsed after each race, database for leaderboards. Display results on website.

NEEDS:


-MERN STACK
-track penalties and red flags
-ADD UNIT TESTS
-DATABASE (for leaderboards)
-RELATIONAL DATABASE
-ECOMMERCE (store button for merchandise, stickers)
-TOP NAVBAR (with Jasper Cup logo)
-MOBILE FRIENDLY (react native?)
-TWITCH CHANNEL INTEGRATION
-WEBSITE BACKEND WILL PARSE RESULTS OF RACE (calculate points)
-SINGLE PAGE FOR CURRENT SEASON
-CURRENT SEASON COUNT, TRACKS WE WILL BE RACING ON, CURRENT CAR
-PULL USERNAMES AND PROFILES FROM STEAM

STRETCH:

-PAST SEASON LEADERBOARDS
-STATUS OF THE SERVER
-INTAKE FORMS FOR RACE SIGNUPS
-SOME KIND OF SCHEDULING UI

--------------------------------------------------------------------------------------------------------------------------------
DATABASE DESIGN:

one season -> many race
many race_driver -> one race

many car -> many drivers

one result -> one race_driver

one lap(s) -> one race-driver

race_driver is combination of driver/car/result/lap info


using steam GUID, so varchar(20) unique,
non unique usernames.
