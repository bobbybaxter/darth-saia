# Darth Saia's SWGOH Dashboard
## Overview
Darth Saia's Star Wars Galaxy of Heroes (SWGOH) Dashboard is a tool to help SWGOH players coordinate a gameplan for upgrading their heroes and easily track their progress.

## Screenshots
![image of Darth Saia's SWGOH Dashboard webpage](https://raw.githubusercontent.com/bobbybaxter/darth-saia/master/img/screenshot.png)

## Getting Started
Clone the repo:
```
$git clone https://github.com/bobbybaxter/personal-bio-site
```

### Prerequisites
Download HTTP Server, to be able to serve the site locally in your browser:
```
$npm install -g http-server
```

## Running
Browse to the personal-bio-site/ directory and run HTTP Server by typing the following command into the terminal:
```
$ hs -p 5000
```

In your web browser, copy and paste this:

 `localhost:5000`

## Future Plans
**Short Term**
- Create a function to only show Characters or Ships
- Build an input box for players to provide their Player ID and pull their own information
- Convert table to Datatable for end user sorting/customization

**Long Term**
- Build a toon stats/upgrades tracker
- Build an event priority tool
- Build a store priority tool
- Build a team counters tool for GA/TB/TW
- Build a 7 star squads tool
- Develop a swgoh.life style Days Calculator
- Develop a crouchingrancor style Cantina Calculator

## Changelog
### 03/05/2019 - v0.2.0
- implemented initial api get request

### 03/02/2019 - v0.1.0
* added readme
* committed initial dashboard UI
