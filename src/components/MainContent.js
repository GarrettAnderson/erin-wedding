import React, { Component } from 'react'

export class MainContent extends Component {
  render() {
    return (
      <div>
        {/* <!-- Fixed navbar -->
     <!-- navbar-fixed-top --> */}
        <nav class="navbar navbar-default probootstrap-navbar">
          <div class="container">
            <div class="navbar-header">
              <button
                type="button"
                class="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#navbar-collapse"
                aria-expanded="false"
                aria-controls="navbar"
              >
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar" />
                <span class="icon-bar" />
                <span class="icon-bar" />
              </button>
              <a class="navbar-brand" href="index.html" title="uiCookies:Wedding">
                Jake <em>&amp;</em> Kate
              </a>
            </div>

            <div id="navbar-collapse" class="navbar-collapse collapse">
              <ul class="nav navbar-nav navbar-right">
                <li class="active">
                  <a href="#" data-nav-section="home">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" data-nav-section="groom-bride">
                    Groom &amp; Bride
                  </a>
                </li>
                <li>
                  <a href="#" data-nav-section="when-where">
                    When &amp; Where
                  </a>
                </li>
                <li>
                  <a href="#" data-nav-section="gallery">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#" data-nav-section="rsvp">
                    RSVP
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default MainContent
