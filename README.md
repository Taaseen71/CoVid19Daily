# CoVid19Daily Project 2
Essentially generates data on different countries about daily infections and recoveries


- [Project Planning](#Project-Planning)
  - [Overview](#Overview)
  - [Wireframes](#Wireframes)
  - [MVP](#MVP)
    - [Goals](#Goals)
    - [Libraries](#Libraries)
    - [Data](#Data)
    - [Component Hierarchy](#Component-Hierarchy)
    - [Component Breakdown](#Component-Breakdown)
    - [Component Estimates](#Component-Estimates)
    - [Helper Functions](#Helper-Functions)
  - [Post-MVP](#Post-MVP)
- [Project Delivery](#Project-Delivery)
  - [Code Showcase](#Code-Showcase)
  - [Code Issues & Resolutions](#Code-Issues--Resolutions)

## Project Planning

- _Project will render daily Global infections and recoveries from CoVid19 for different countries._
- _It will have a home page that will generate Global Data_
- _It will have a countries page that will generate a list of countries, which, when clicked, will show individual details on the infection rate._

<br>

### Overview

_**Project Title** CoVid19Daily_

<br>

### Wireframes



https://wireframe.cc/uO85UV
https://wireframe.cc/QbamIv
imgur images:
https://i.imgur.com/1VUtXMi.png
https://i.imgur.com/ImLfZ2Y.png
- Desktop Resource Index

https://covid19api.com/


<br>

### MVP

- _The Page will render Global Data for all Covid19 infections._
- _There will be a separate page that lists all the countries with clickable links._
- _Upon Clicking, the the viewer will be taken to the country's individual data._

_The **Project Title** Is a Reat Hooks based website built to render the latest news about the CoVid19 Crisis. It will give viewers a consized list of infections, deaths and recoveries both Globally and Individual Countries. The purpose of the project is for viewers to be aware of the pandemic's affect on the daily lives of citizens of each country._

<br>

#### Goals

- _Find Suitable API to work with._
- _Save a local JSON file to work with._
- _Use API to render appropriate Data on Appropriate Pages._
- _Use API to list all countries affected by COVID19._
- _USe API to target each country and render individual Data for the page._
- _Use Storybook to add multiple designed elements onto the page._

<br>

#### Libraries



|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|   React Router   | _used to Route users to different pages ._ |
| axios | _used to get data from a specific AP._ |
|   React Hooks  | _To use function based componenets to render elements on Page._ |

<br>

#### Data


|    API     | Quality Docs? | Website       | Sample Query                            |
| :--------: | :-----------: | :------------ | :-------------------------------------- |
| Covid19API |      yes      | _https://covid19api.com/_ | _https://api.covid19api.com/summary_ |

<br>

#### Component Hierarchy


```
src

|__ components/
      |__ Nav.jsx
      |__ Countries.jsx
      |__ CountryDetail.jsx
      |__ data.json
      |__ Home.jsx
      |__ Footer.jsx
|__ App.jsx
|__ App.css
```

<br>

#### Component Breakdown



|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the navigation and logo._               |
|  Navigation  | functional |   n   |   n   | _The navigation will provide a link to each of the pages._       |
|   Home       |   function    |   n   |   y   | _produce global Data for all countries affect by covid19._    |
|   Countries   |   functional |   n   |   y | _Countries will use props to render a list of countries._       |
| Countries/:id | functional |   y  |   y   | _will list individual data for each country that is called._     |
|    Footer    | functional |   n   |   n   | _The footer will show info about me and list credit to API    ._ |

<br>

#### Component Estimates



| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Render API on console  |    H     |     3 hrs      |     3 hrs     |    3 hrs    |
| create local json      |    L    |     3 hrs      |     1 hrs     |     1 hrs     |
| create component Layout |    M     |     3 hrs      |     5 hrs     |     5 hrs     |
| render Global Data on Page |    H     |     7 hrs      |     5 hrs     |     5 hrs     |
| create links and Routes |    H     |     5 hrs      |     5 hrs     |     5 hrs     |
| make Helper functions  |    H     |     2 hrs      |     2 hrs     |     2 hrs    |
| create countries list |    H     |     8 hrs      |     8 hrs     |     8 hrs  |
| create ContryDetail  |    H     |     8 hrs      |     10 hrs     |     10 hrs   |
| Design Webpage/CSS |    H     |     3 hrs      |     2 hrs     |     2 hrs     |
| USe StoryBooks  |    M     |     8 hrs      |     10 hrs     |     10 hrs     |
| Use npm tests   |    L     |    0 hrs       |    0 hrs      |   0 hrs     |
| Bug fixes       |    L     |    5 hrs       |    8 hrs       |   8 hrs   |
| TOTAL               |          |    50 hrs      |     58 hrs     |    58 hrs      |

<br>

#### Helper Functions


|  Function  | Description                                |
| :--------: | :----------------------------------------- |
| Date | _in api call date looks off need to use split funciton to fix._ |
| loopfunction | _may use a loop funciton to do country.map()_|

<br>

### Post-MVP

- _use a button that goes through countries one by one in the :id section._
- _add a chart that tracks infections from the start of the pandemic._
- _use a chart to show that data._

<br>

***

## Project Delivery

### Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.
(keeping these placeholder texts so that i can change them later)

### Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like.
