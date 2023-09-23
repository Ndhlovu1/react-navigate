# Creating React Routs SPA

1. Step 1
```shell
npm install react-router-dom@6
```

2. Step 2
```js
//Inside the Index.js
import BrowserRouter from "react-router-dom"

//inside the function, wrap the <App/> inside the <BrowserRouter></BrowserRouter>
<BrowserRouter>
    <App />
</BrowserRouter>
```

3. Step 3
```js
//Inside the App.js
import {Routes, Route, Link} from "react-router-dom"

//then declare your links
<Link to="/" className='nav-item'>Home</Link>
<Link to="/about" className='nav-item'>About</Link>

// then declare the routes and their individual route


<Routes>
    <Route path='/' element={<Homepage/>}></Route>
    <Route path='/about' element={<AboutLittleLemon/>}></Route>
</Routes>

```

4. step 4
```shell
#Run the app
npm start

```
