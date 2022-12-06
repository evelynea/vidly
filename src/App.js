import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Movies from './components/movies';
import MovieForm from './components/movieForm';
import Customers from './components/customers'
import Rentals from './components/rentals'
import NotFound from './components/notFound'
import NavBar from './components/navBar';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';


// import Home from './components/home';
// import NavBar from './components/navBar'
// import Products from './components/products'
// import Posts from './components/posts'
// import Dashboard from './components/admin/dashboard';
// import ProductDetails from './components/productDetails'



function App() {
  return (
    // <div>
    //   <NavBar />
    //   <div className='content'>
    //     <Switch>
    //       <Route path="/products/:id" component={ProductDetails}/>
    //       <Route
    //         path="/products"
    //         render={(props) => <Products sortBy="newest" {...props}  />}
    //       />
    //       {/* here we are adding a new prop to the existing component, which already had props before. for that reason, we spread the existing props too {the three dots in bracket} */}

    //       <Route path="/posts/:year?/:month?" component={Posts} />
    //       <Route path="/admin" component={Dashboard} />
    //       <Route path="/not-found" component={NotFound}/>
    //       <Route path="/"  exact component={Home} />
    //       <Redirect to="/not-found"/>
    //     </Switch>
    //   </div>
    // </div>
    <React.Fragment>
    <NavBar/>
    <main className="container">
      <Switch>
        <Route path="/register" component={RegisterForm} />
        <Route path="/login" component={LoginForm} />
        <Route path="/movies/:id" component={MovieForm} />
        <Route path="/movies" component={Movies} />
        <Route path="/customers" component={Customers} />
        <Route path="/rentals" component={Rentals} />
        <Route path="/not-found" component={NotFound} />
        <Redirect from='/' exact to='/movies' />
        <Redirect to="/not-found"/>
      </Switch>
    </main>
    </React.Fragment>
  );
}

export default App;
