import conference from '../images/conference.png';
import pokemon from '../images/pokemon.jpg';
import bookstore from '../images/bookstore.png';
import covidapp from '../images/covidapp.png';
import recipeapp from '../images/recipeapp.png';
import budgetapp from '../images/budgetapp.jpg';

const projectData = [
  {
    id: 1,
    title: 'Conference Page',
    technologies: [
      {
        id: 't1',
        technologie: 'css',
      },
      {
        id: 't2',
        technologie: 'html',
      },
      {
        id: 't3',
        technologie: 'JavaScript',
      },
    ],
    description: 'In this project, I build a web page with desktop and mobile versions for a conference using HTML, CSS, and JavaScript.',
    liveButton: 'https://alexr16.github.io/Conference-page/',
    sourceButton: 'https://github.com/Alexr16/Conference-page',
    image: conference,
  },
  {
    id: 2,
    title: 'Pokemon App',
    technologies: [
      {
        id: 't4',
        technologie: 'SASS',
      },
      {
        id: 't5',
        technologie: 'html',
      },
      {
        id: 't6',
        technologie: 'JavaScript',
      },
      {
        id: 't7',
        technologie: 'Webpack',
      },
    ],
    description: 'Mobile and desktop version APP showing information about pokemon monsters fetched from PokeAPI.',
    liveButton: 'https://alexr16.github.io/Pokemon-App/',
    sourceButton: 'https://github.com/Alexr16/Pokemon-App',
    image: pokemon,
  },
  {
    id: 3,
    title: 'Book Store',
    technologies: [
      {
        id: 't8',
        technologie: 'React',
      },
      {
        id: 't9',
        technologie: 'SASS',
      },
      {
        id: 't10',
        technologie: 'Redux',
      },
    ],
    description: 'In this project I build a "Awesome Books" App that allows users to add a book, remove selected book, and display a list of books.',
    liveButton: 'https://isnt-alexr16-awesome.netlify.app/',
    sourceButton: 'https://github.com/Alexr16/BookStore',
    image: bookstore,
  },
  {
    id: 4,
    title: 'Metrics WebApp',
    technologies: [
      {
        id: 't11',
        technologie: 'React',
      },
      {
        id: 't12',
        technologie: 'SASS',
      },
      {
        id: 't13',
        technologie: 'Redux',
      },
      {
        id: 't3',
        technologie: 'JavaScript',
      },
    ],
    description: 'In this project I built a mobile web application to check a list of countries COVID status making use of React and Redux.',
    liveButton: 'https://deploy-preview-3--super-cool-site-by-alexr16.netlify.app/',
    sourceButton: 'https://github.com/Alexr16/Metrics-webapp',
    image: covidapp,
  },
  {
    id: 5,
    title: 'Recipe App',
    technologies: [
      {
        id: 't14',
        technologie: 'Ruby',
      },
      {
        id: 't15',
        technologie: 'Ruby on Rails',
      },
      {
        id: 't16',
        technologie: 'SASS',
      },
    ],
    description: 'The Recipe app keeps track of all your recipes, ingredients, and inventory. It will allow you to save ingredients, keep track of what you have, create recipes, and generate a shopping list based on what you have and what you are missing from a recipe. Also, since sharing recipes is an important part of cooking the app should allow you to make them public so anyone can access them.',
    liveButton: 'https://calm-mountain-98535.herokuapp.com/',
    sourceButton: 'https://github.com/Retky/RecipeApp',
    image: recipeapp,
  },
  {
    id: 6,
    title: 'Budget App',
    technologies: [
      {
        id: 't17',
        technologie: 'Ruby',
      },
      {
        id: 't18',
        technologie: 'Ruby on Rails',
      },
      {
        id: 't19',
        technologie: 'SASS',
      },
    ],
    description: 'Mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.',
    liveButton: 'https://glacial-waters-55756.herokuapp.com',
    sourceButton: 'https://github.com/Alexr16/Budget-app',
    image: budgetapp,
  },
];

export default projectData;
