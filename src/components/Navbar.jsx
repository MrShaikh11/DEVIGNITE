import React from "react";

const Nav = () => {
  return (
    <div>
      <header className="ola-header-sticky">
        <div id="header" className="secondary-header">
          <div className="max-width">
            <div className="pull-left pd-16">
              <div className="navbar-mb">
                <div className="ola-logo">
                  <div className="display-flex">
                    <a
                      href=""
                      className="event-elem"
                      event-name="desktop_header_ola_logo"
                    >
                      <img src="https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/ola-white-logo.svg" />
                    </a>
                  </div>
                </div>
                <div className="pull-right">
                  <a
                    id="desktop_top_menu_ola_electric"
                    event-name="desktop_top_menu_ola_electric"
                    className="navbar-new-option event-elem"
                    href="https://olaelectric.com?utm_source=Olacabs&utm_medium=CLM&utm_campaign=HHB"
                    translation-key="ola_electric"
                  >
                    Ola Electric
                  </a>
                  <a
                    id="desktop_top_menu_ola_krutrim"
                    event-name="desktop_top_menu_ola_krutrim"
                    className="navbar-new-option event-elem"
                    href="https://olakrutrim.com/"
                  >
                    Ola Krutrim
                  </a>
                </div>
              </div>
            </div>
            <div>
              <a
                id="desktop_top_menu_book_now"
                event-name="desktop_top_menu_book_now"
                href="https://book.olacabs.com?utm_source=book_now_top_right"
                className="event-elem book-cab"
                translation-key="book_ola_cab"
              >
                Book an Ola Cab
              </a>
              <a
                id="desktop_top_menu_free_s1_test_ride_oc_header"
                event-name="desktop_top_menu_free_s1_test_ride_oc_header"
                className="event-elem test-ride"
                href="https://tr.olaelectric.com/trInfo?utm_source=Olacabs&utm_medium=CLM&utm_campaign=Header"
                translation-key="free_s1_tr"
              >
                Free S1 Test Ride
              </a>
              <button className="hamburger event-elem">
                <img
                  className="hamburger-mb"
                  src="https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/Hamburger.svg"
                />
              </button>
            </div>
            <div className="clearfix" />
          </div>
        </div>
        {/* Desktop Hamburger Menu Options */}
        <div id="sidebar_nav" className="sidebar_navigation hide-xs">
          <div className="close_btn cross" id="hamburger_close">
            <img src="https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/close.svg" />
          </div>
          <div className="clearfix" />
          <div className="option-wrapper">
            <ul className="ui-menu-options">
              <li>
                <a
                  id="desktop_side_nav_book_now"
                  event-name="desktop_side_nav_book_now"
                  className="event-elem li-menu-options "
                  href="https://book.olacabs.com?utm_source=book_now_top_right"
                >
                  Book an Ola Cab
                </a>
              </li>
              <li>
                <a
                  id="desktop_side_nav_drive_with_ola"
                  event-name="desktop_side_nav_drive_with_ola"
                  className="event-elem li-menu-options "
                  href="https://partners.olacabs.com/"
                >
                  Drive with Ola
                </a>
              </li>
              <li>
                <a
                  id="desktop_side_nav_ola_s1"
                  event-name="desktop_side_nav_ola_s1"
                  className="event-elem li-menu-options "
                  href="https://olaelectric.com/s1?utm_source=Olacabs&utm_medium=CLM&utm_campaign=HHB"
                >
                  Ola S1
                </a>
              </li>
              <li>
                <a
                  id="desktop_side_nav_ola_electric"
                  event-name="desktop_side_nav_ola_electric"
                  className="event-elem li-menu-options "
                  href="https://olaelectric.com?utm_source=Olacabs&utm_medium=CLM&utm_campaign=HHB"
                >
                  Ola Electric
                </a>
              </li>
              <li>
                <a
                  id="desktop_side_nav_ola_krutrim"
                  event-name="desktop_side_nav_ola_krutrim"
                  className="event-elem li-menu-options "
                  href="https://olakrutrim.com/"
                >
                  Ola Krutrim
                </a>
              </li>
              <li>
                <a
                  id="desktop_side_nav_ola_future_factory"
                  event-name="desktop_side_nav_ola_future_factory"
                  className="event-elem li-menu-options "
                  href="https://olaelectric.com/future-factory?utm_source=Olacabs&utm_medium=CLM&utm_campaign=HHB"
                >
                  Ola FutureFactory
                </a>
              </li>
              <li>
                <a
                  id="desktop_side_nav_ola_corporate"
                  event-name="desktop_side_nav_ola_corporate"
                  className="event-elem li-menu-options "
                  href="https://corporate.olacabs.com"
                >
                  Ola Corporate
                </a>
              </li>
              <li>
                <a
                  id="desktop_side_nav_ola_foundation"
                  event-name="desktop_side_nav_ola_foundation"
                  className="event-elem li-menu-options "
                  href="https://ola.foundation/"
                >
                  Ola Foundation
                </a>
              </li>
              <li>
                <a
                  id="desktop_side_nav_support"
                  event-name="desktop_side_nav_support"
                  className="event-elem li-menu-options "
                  href="https://help.olacabs.com/support"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div className="fix-bottom">
            <a
              className="offers-banner-mb event-elem"
              event-name="desktop_feed_card_free_s1_test_ride"
              onclick="window.open('https://tr.olaelectric.com', '_blank');return false;"
            >
              <img
                src="https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/pink-banner-mob.png"
                className="cursor-pointer"
                height="100%"
                width="100%"
              />
            </a>
            <div className="bottom-div">
              <a
                href="/careers"
                className="bottom-options event-elem"
                event-name="desktop_navbar_careers"
              >
                Careers
              </a>
              <a
                href="https://www.olacabs.com/info/faqs#notices"
                className="bottom-options event-elem"
                event-name="desktop_navbar_notices"
              >
                Notices
              </a>
              <a
                href="https://www.olacabs.com/info/faqs#privacyPolicy"
                className="bottom-options event-elem"
                event-name="desktop_navbar_privacy"
              >
                Privacy
              </a>
              <a
                href="https://www.olacabs.com/info/faqs#termsAndConditions"
                className="bottom-options event-elem"
                event-name="desktop_navbar_tnc"
              >
                T&amp;C
              </a>
            </div>
            <div className="bottom-div">
              <div>
                <a
                  href=""
                  className="event-elem"
                  event-name="desktop_navbar_ola_logo"
                >
                  <img src="https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/OLA-black.svg" />
                </a>
              </div>
              <div>
                <a
                  href="https://www.instagram.com/olacabs"
                  target="_blank"
                  className="event-elem"
                  event-name="desktop_navbar_instagram"
                >
                  <img
                    src="https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/instagram-icon.svg"
                    className="mL-26"
                  />
                </a>
                <a
                  href="https://www.youtube.com/user/OfficialOlacabs"
                  target="_blank"
                  className="event-elem"
                  event-name="desktop_navbar_youtube"
                >
                  <img
                    src="https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/youtube-icon.svg"
                    className="mL-26"
                  />
                </a>
                <a
                  href="https://twitter.com/Olacabs"
                  target="_blank"
                  className="event-elem"
                  event-name="desktop_navbar_twitter"
                >
                  <img
                    src="https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/twitter-icon.svg"
                    className="mL-26"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="body-overlay overlay-hide"></div>
      </header>
    </div>
  );
};

export default Nav;
