import React, { Component } from 'react';
import { Router, Switch, Route, Link } from "react-router-dom";
import Menulist from '../menu/menulist';
import './home.css';


class home extends Component {
    render() {
        return (
            <div>
            <div class="bgImage">
                <img width="1090px" height="300px" src="https://t4.ftcdn.net/jpg/02/70/56/69/240_F_270566995_7RFlVu4vEwyQmkZgh3xvdGdqoJyMASc7.jpg" />
                <div class="discountImg">
                    <div class="One">
                        <img width="350" height="200" src="https://rukminim1.flixcart.com/flap/1400/1400/image/15cbd99e6fcb6fc1.jpg?q=50" />
                    </div>
                    <div class="two">
                    <img width="350" height="200" src="https://rukminim1.flixcart.com/flap/960/960/image/ed04b09381eec3f9.jpg?q=75" />   
                    </div>
                    <div class="three">
                    <img width="350" height="200" src="https://rukminim1.flixcart.com/flap/960/960/image/7991ac0613e2ddd5.png?q=75" />
                    </div>
                </div>
            </div>
        <div>
        <div className="footer">
        <div class="advertizement">
            <img src="https://www.grocerg.com/pub/media/codazon/slideshow/cache/880x469/b/a/banner-slider04.jpg" width="600px" height="300px" />
        </div>
        <div className="label">
            <img src="https://media.istockphoto.com/photos/groceries-picture-id171302954?k=20&m=171302954&s=612x612&w=0&h=kDpFXA8IoG22Uxog3YUmWvzBRzwyibd6r4S2v5z-Mno=" width="470px" height="300px" />
        </div>
        </div>
    </div>
    <footer class="end">
      <p className="footer-heading">
       We are available at:
      </p>
      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-facebook-f"></i
      ></a>
      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-twitter"></i
      ></a>


      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-google"></i
      ></a>

      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-instagram"></i
      ></a>
      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-linkedin"></i
      ></a>

     
    </footer>
    

    </div>
        );
    }
}

export default home;