# Recipe App 

This project is build using react-js to search specific recipe and you can view more detail about it

---

## Technology used:

- React js
- React-bootstrap
- cypress

### How to Run

- yarn install.
- create .env file in main directory
- put inside of it => REACT_APP_BASE_URL=https://api.spoonacular.com/recipes/
- get your apiKey from the website and put it also in the file ad this => REACT_APP_API_KEY= YOUR_API_KEY
- yarn start to start your app.
- yarn test to start testing your code.

---

## Design Decisions

1. I started by imaging the wire-frame like the pic below based on the functionality I should have.

![wireFrame picture](./src/Assets/Images/wireframe.png)

2. used react-bootstrap to do grid

3. added pure css to adjust stuff

### HighLights and Lesson learned

- I wished that I started my design with mobile-first approach.
- could do test for the viewports but didn't have time for that.
- for sure missing pagination feature that I can work on.
- Do better validation for user input maybe using useForm() hooks.
