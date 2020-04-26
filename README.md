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

> Project will render daily Global infections and recoveries from CoVid19 for different countries.
> It will have a home page that will generate Global Data
> It will have a countries page that will generate a list of countries, which, when clicked, will show individual details on the infection rate.

<br>

### Overview

_**Project Title** CoVid19Daily

<br>

### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views.

https://wireframe.cc/uO85UV
https://wireframe.cc/QbamIv
imgur images:
https://i.imgur.com/1VUtXMi.png
https://i.imgur.com/ImLfZ2Y.png
- Desktop Resource Index

https://covid19api.com/


<br>

### MVP

> The Page will render Global Data for all Covid19 infections 
> There will be a separate page that lists all the countries with clickable links
> Upon Clicking, the the viewer will be taken to the country's individual data.

_The **Project Title** Is a Reat Hooks based website built to render the latest news about the CoVid19 Crisis. It will give viewers a consized list of infections, deaths and recoveries both Globally and Individual Countries. The purpose of the project is for viewers to be aware of the pandemic's affect on the daily lives of citizens of each country._

<br>

#### Goals

- _Find Suitable API to work with_
- _Save a local JSON file to work with._
- _Use API to render appropriate Data on Appropriate Pages._
- _Use API to list all countries affected by COVID19 ._
- _USe API to target each country and render individual Data for the page._
- _Use Storybook to add multiple designed elements onto the page._

<br>

#### Libraries

> Use this section to list all supporting libraries and their role in the project.

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|   React Router   | _used to Route users to different pages ._ |
| axios | _used to get data from a specific AP._ |
|   React Hooks  | _To use function based componenets to render elements on Page._ |

<br>

#### Data

> Use the Data Section to define the API(s) you will be consuming for your project, inluding sample URL queries.

|    API     | Quality Docs? | Website       | Sample Query                            |
| :--------: | :-----------: | :------------ | :-------------------------------------- |
| Covid19API |      yes      | _https://covid19api.com/_ | _https://api.covid19api.com/summary_ |

<br>

#### Component Hierarchy

> Use this section to define your React components and the data architecture of your app.

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

> Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the navigation and logo._               |
|  Navigation  | functional |   n   |   n   | _The navigation will provide a link to each of the pages._       |
|   Home       |   function    |   y   |   n   | _produce global Data for all countries affect by covid19._    |
|   Countries   |   functional |   y   |   n | _Countries will use props to render a list of countries._       |
| Countries/:id | functional |   y  |   y   | _will list individual data for each country that is called._     |
|    Footer    | functional |   n   |   n   | _The footer will show info about me and list credit to API    ._ |

<br>

#### Component Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above. 
>
> Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evalute possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Render API on console  |    H     |     3 hrs      |     0 hrs     |    3 hrs    |
| create local json      |    M     |     3 hrs      |     0 hrs     |     TBD     |
| create component Layout |    H     |     3 hrs      |     0 hrs     |     TBD     |
| render Global Data on Page |    H     |     7 hrs      |     0 hrs     |     TBD     |
| create links and Routes |    H     |     5 hrs      |     0 hrs     |     TBD     |
| make Helper functions  |    H     |     2 hrs      |     0 hrs     |     TBD     |
| create countries list |    H     |     8 hrs      |     0 hrs     |     TBD     |
| create ContryDetail  |    H     |     8 hrs      |     0 hrs     |     TBD     |
| Design Webpage/CSS |    H     |     3 hrs      |     0 hrs     |     TBD     |
| USe StoryBooks  |    H     |     10 hrs      |     0 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     0 hrs     |     TBD     |

<br>

#### Helper Functions

> Use this section to document all helper functions– generic functions that can be reused in other applications.

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

### Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like.
