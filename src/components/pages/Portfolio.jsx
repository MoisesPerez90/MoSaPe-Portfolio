import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


export default function Portfolio() {
  return (
    <div className='container d-flex flex-column m-5'>
      <div className=''>
        <h2>Portfolio</h2>
        <br />
      </div>
      <div id="carouselExampleDark" className="carousel carousel-dark slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-label="Slide 1" aria-current="true"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5" aria-label="Slide 6"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active text-center">
            <img src="../../public/images/Sabores-Do-Mundo.jpeg" className="mx-auto" width="800" height="400"/>
            <div className="carousel-caption d-none d-md-block text-bg-secondary p-3 mx-auto opacity-75">
              <h5>Sabores-Do-Mundo</h5>
              <p>A full Library of the most famous dishes of the world, which includes detailed information about every dish</p>
              <div>
                <button type='button' className="btn btn-outline-dark btn-sm m-2">
                  <a href="https://sabores-do-mondo.herokuapp.com/">Go to app</a>
                </button>
                <button type='button' className="btn btn-outline-dark btn-sm m-2">
                  <a href="https://github.com/MoisesPerez90/Sabores-Do-Mundo">Go to repository</a>
                </button>
              </div>
            </div>
          </div>
          <div className="carousel-item text-center">
            <img src="../../public/images/Wheater-API.png" className="mx-auto" width="800" height="400"/>
            <div className="carousel-caption d-none d-md-block text-bg-secondary p-3 mx-auto opacity-75">
              <h5>Wheater Dashboard</h5>
              <p>a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.</p>
              <div>
                <button type='button' className="btn btn-outline-dark btn-sm m-2">
                  <a href="https://moisesperez90.github.io/Rapid-WeatherAPP-I/">Go to app</a>
                </button>
                <button type='button' className="btn btn-outline-dark btn-sm m-2">
                  <a href="https://github.com/MoisesPerez90/Rapid-WeatherAPP-I">Go to repository</a>
                </button>
              </div>
            </div>
          </div>
          <div className="carousel-item text-center">
            <img src="../../public/images/Scheduler.png" className="mx-auto" width="800" height="400"/>
            <div className="carousel-caption d-none d-md-block text-bg-secondary p-3 mx-auto opacity-75">
              <h5>Work Day Scheduler</h5>
              <p>A simple calendar application that allows a user to save events for each hour of the day.</p>
              <div>
                <button type='button' className="btn btn-outline-dark btn-sm m-2">
                  <a href="https://moisesperez90.github.io/A-top-time-organizer/">Go to app</a>
                </button>
                <button type='button' className="btn btn-outline-dark btn-sm m-2">
                  <a href="https://github.com/MoisesPerez90/A-top-time-organizer">Go to repository</a>
                </button>
              </div>
            </div>
          </div>
          <div className="carousel-item text-center">
            <img src="../../public/images/Quiz.png" className="mx-auto" width="800" height="400"/>
            <div className="carousel-caption d-none d-md-block text-bg-secondary p-3 mx-auto opacity-75">
              <h5>The funniest quiz</h5>
              <p>This is a quiz app where you will face programming questions.</p>
              <div>
                <button type='button' className="btn btn-outline-dark btn-sm m-2">
                  <a href="https://moisesperez90.github.io/The-funniest-quiz/">Go to app</a>
                </button>
                <button type='button' className="btn btn-outline-dark btn-sm m-2">
                  <a href="https://github.com/MoisesPerez90/The-funniest-quiz">Go to repository</a>
                </button>
              </div>
            </div>
          </div>
          <div className="carousel-item text-center">
            <img src="../../public/images/Generator.png" className="mx-auto" width="800" height="400"/>
            <div className="carousel-caption d-none d-md-block text-bg-secondary p-3 mx-auto opacity-75">
              <h5>Password Generator</h5>
              <p>An application that enables employees to generate random passwords based on criteria that they’ve selected</p>
              <div>
                <button type='button' className="btn btn-outline-dark btn-sm m-2">
                  <a href="http://www.mosape.security-engine-helper.com/">Go to app</a>
                </button>
                <button type='button' className="btn btn-outline-dark btn-sm m-2">
                  <a href="https://github.com/MoisesPerez90/security-engine-helper">Go to repository</a>
                </button>
              </div>
            </div>
          </div>
          <div className="carousel-item text-center">
            <img src="../../public/images/MedicalApp.png" className="mx-auto" width="800" height="400"/>
            <div className="carousel-caption d-none d-md-block text-bg-secondary p-3 mx-auto opacity-75">
              <h5>Medical-Appointments</h5>
              <p>This app allows users to effectively manage their appointments by providing a comprehensive view of past appointments with notes and follow-up-task, reschedule or cancel appointments, input and store information about medical providers and insurance for quick reference. it helps users stay organized and on top of their health appointments</p>
              <div>
                <button type='button' className="btn btn-outline-dark btn-sm m-2">
                  <a href="https://espinosasalvador.github.io/Medical-Appointments/">Go to app</a>
                </button>
                <button type='button' className="btn btn-outline-dark btn-sm m-2">
                  <a href="https://github.com/EspinosaSalvador/Medical-Appointments">Go to repository</a>
                </button>
              </div>
            </div>
          </div>
          <div className="carousel-item text-center">
            <img src="../../public/images/TravelBuddy.JPG" className="mx-auto" width="800" height="400"/>
            <div className="carousel-caption d-none d-md-block text-bg-secondary p-3 mx-auto opacity-75">
              <h5>Travel-buddy</h5>
              <p>This app offers an alternative to crowded tourist attractions, allowing travelers to discover local guides with insider knowledge and create unforgettable memories</p>
              <div>
                <button type='button' className="btn btn-outline-dark btn-sm m-2">
                  <a href="https://github.com/0mar77/travel-buddy">Go to app</a>
                </button>
                <button type='button' className="btn btn-outline-dark btn-sm m-2">
                  <a href="https://github.com/0mar77/travel-buddy">Go to repository</a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
)}