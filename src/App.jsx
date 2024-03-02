import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div style={{ position: "relative" }}>
        <sectionSkewed skew="end" background="#000000" name="header">
          <div slot="outer-wrapper-children">
            <div className="hero-banner desktop-only">
              <p className="title-1 fw-500 font-48 lh-48 main-title-abs">
                Moving people, and the world
              </p>
            </div>
            <div className="hero-banner mobile-only">
              <videoComponent
                videoSrc="https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/banner-video-mob.mp4"
                videoType="video/mp4"
                height="auto"
                width="100%"
              />
            </div>
          </div>
        </sectionSkewed>

        <section-skewed>
          <div slot="outer-wrapper-children" className="pad-y-50">
            <booking-widget className="booking-widget-root" />
            <section className="max-width">
              <a
                className="content-wrapper event-elem"
                event-name="desktop_feed_card_ola_s1"
                event-value="{'event_value':'offer_heading', 'route_name':'{{route_source}}_to_{{route_destination}}'}"
                onclick="window.open('https://tr.olaelectric.com', '_blank');return false;"
              >
                <img
                  src="https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/index_banner.png"
                  height="100%"
                  width="100%"
                  className="desktop-only cursor-pointer"
                />
              </a>
              <a
                className="content-wrapper event-elem"
                event-name="desktop_feed_card_ola_s1"
                event-value="{'event_value':'offer_heading', 'route_name':'{{route_source}}_to_{{route_destination}}'}"
                onclick="window.open('https://tr.olaelectric.com', '_blank');return false;"
              >
                <img
                  src="https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/index_banner_mobile.png"
                  height="100%"
                  width="100%"
                  className="mobile-only cursor-pointer"
                />
              </a>
              <section className="text-center first-fold-text-push">
                <h1 className="electrified-title font-48 mar-bot-50 black fw-500 desktop-only">
                  Global mobility ecosystem driving communities forward
                </h1>
                <h1 className="non-electrified-title text-black font-24 lh-28 fw-500 mobile-only">
                  Global mobility ecosystem driving communities forward
                </h1>
              </section>
              <section name="statistics">
                <div className="flex-space-between statistics-flex-mb">
                  <div className="flex-column-center statistics-row-mb">
                    <object
                      type="image/svg+xml"
                      className="cities-covered-img"
                      data="https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/cts-covered.svg"
                      name="cities-covered"
                    />
                    <div className="desktop-only">
                      <p className="title-1 fw-500 font-40 lh-48 text-center">
                        250+
                      </p>
                      <p className="title-2 font-28 lh-32 fw-500 text-center">
                        Cities covered
                      </p>
                      <p className="title-3 font-16 fw-400 lh-24 text-center">
                        Across India, Australia, New Zealand and the UK
                      </p>
                    </div>
                    <div className="mobile-only">
                      <p className="title-1 fw-500 font-40 lh-48 text-center">
                        250+ cities
                      </p>
                      <p className="title-3 font-16 fw-400 lh-24 text-center">
                        Across India, Australia, New Zealand and the UK
                      </p>
                    </div>
                  </div>
                  <div className="flex-column-center statistics-row-mb">
                    <object
                      type="image/svg+xml"
                      className="cities-covered-img"
                      data="https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/year-rides.svg"
                      name="yearly-rides"
                    />
                    <div className="desktop-only">
                      <p className="title-1 fw-500 font-40 lh-48 text-center">
                        55 Cr+
                      </p>
                      <p className="title-2 font-28 lh-32 fw-500 text-center">
                        Yearly rides
                      </p>
                      <p className="title-3 font-16 fw-400 lh-24 text-center">
                        Booked by our customers every year
                      </p>
                    </div>
                    <div className="mobile-only">
                      <p className="title-1 fw-500 font-40 lh-48 text-center">
                        55 Crore+ yearly rides
                      </p>
                      <p className="title-3 font-16 fw-400 lh-24 text-center">
                        Booked by our customers every year
                      </p>
                    </div>
                  </div>
                  <div className="flex-column-center statistics-row-mb">
                    <object
                      type="image/svg+xml"
                      className="cities-covered-img"
                      data="https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/kms-covered.svg"
                      name="kms-covered"
                    />
                    <div className="desktop-only">
                      <p className="title-1 fw-500 font-40 lh-48 text-center">
                        12 Cr+
                      </p>
                      <p className="title-2 font-28 lh-32 fw-500 text-center">
                        Kilometers on S1
                      </p>
                      <p className="title-3 font-16 fw-400 lh-24 text-center">
                        Distance covered on Ola S1 scooters within a year of
                        launch
                      </p>
                    </div>
                    <div className="mobile-only">
                      <p className="title-1 fw-500 font-40 lh-48 text-center">
                        12 crore+ km on S1
                      </p>
                      <p className="title-3 font-16 fw-400 lh-24 text-center">
                        Distance covered on Ola S1 scooters within a year of
                        launch
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </section>
          </div>
        </section-skewed>
      </div>
    </>
  );
}

export default App;
