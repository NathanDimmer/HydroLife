>:warning: This is a Hackathon entry for Massey Hacks 5, and was created in under 24 hours. The code in this repo is likely to be hacky and potentially unstable/insecure, so please be careful if forking this repo. You can view the project's Devpost page [here](https://devpost.com/software/hydrolife).

>:trophy: HydroLife won Best IoT Hack Using a Qualcomm Device at Massey Hacks 5!

Inspiration
----
Everyone needs to drink water, and dehydration can cause fatigue, foggy memory, decreased metabolism, and increased chance of kidney stones. About 75% of US Citizens are chronically dehydrated, and 4% of deaths in 3rd world countries are due to dehydration, and reminders and gamification through technology can help. Although smart water bottles exist, we don't always drink from the same bottle. We wanted to create a casing that was adjustable and could go around any water bottle to help you stay on top of your hydration.

What it does
---------
HydroLife is a casing designed to fit around any water bottle in order for people to be able to track their water consumption. This will help people to drink more water, and have a stronger connection with the importance of fresh and clean water. The main benefits of this type of device over a dedicated smart water bottle is that you can use it on all of the liquids that you drink in a day. When people are drinking soda, or coffee, they are getting hydrated, but the traditional tracking methods don't count that.

HydroLife is perfect for anyone, from busy students who need to stay hydrated for studying, to parents who want to monitor their kids drinking at a sports game. It works especially well for parents of very young children. You could put the device on a sippy cup, to monitor if your toddler is staying hydrated, and monitor your entire family from the one app.

How we built it
--------
We mounted a dragon board to a water bottle using 3D printed mounts, rubber bands, tape, and MLH logo stickers. For the back end, we run a Python 3 script using mraa on the Dragon Board, and that goes to our Firebase server.

Challenges we ran into
---------
We went through 6 different Dragon Boards, with each of them having a unique problem. For the physical bottle itself, we didn't have any hot glue, or strong tape, so it was put together with masking tape, and stickers.

Accomplishments that we're proud of
---------
Getting HydroLife to exist at all, and not giving up!

What we learned
----------
How to troubleshoot everything on a Dragon Board, from Python, to the WiFi, and how to work with hardware hacks.

What's next for HydroLife
-----
You don’t want to drink water all at once for the day, and it is unhealthy (even dangerous) to drink too much in one day, so in the future the app could include a progress bar to show if they are drinking too little, right on target, or too much during the day. This could be part of the gamification aspect. Making the software social will allow you to compare your score with your friends.

Built With
------
- dragon-board
- python
- mraa
- bootstrap
- javascript
- html
- css3
- firebase
- gcp
- google-cloud


Contributors
--
Bill Li - [@bill-l1](https://github.com/bill-l1)  
Jason Guo - [@JasonYG](https://github.com/JasonYG)  
Nathan Dimmer - [@NathanDimmer](https://github.com/NathanDimmer)  
Raymond Qu - [@Reiyer](https://github.com/Reiyer)
