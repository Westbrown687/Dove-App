import "./stickynote.css";
import { FaPlus } from "react-icons/fa";

export function StickyWall() {
  return (
    <>
      <div>
        <section className="upcoming-date-con">
          <div className="upcoming-text">Sticky Wall</div>
        </section>

        <section className="content-body">
          <div className="content-container-one">
            <div className="socialmedia">Social Media</div>
            <div className="content">
              <div className="contentbody">
                <div className="hyphen">-</div>
                <div>Plan social content</div>
              </div>
              <div className="contentbody">
                <div className="hyphen">-</div>
                <div>Plan social content</div>
              </div>
              <div className="contentbody">
                <div className="hyphen">-</div>
                <div>Plan social content</div>
              </div>
            </div>
          </div>
          <div className="content-container-two">
            <div className="socialmedia">Social Media</div>
            <div className="content">
              <div className="contentbody">
                <div className="hyphen">-</div>
                <div>Plan social content</div>
              </div>
              <div className="contentbody">
                <div className="hyphen">-</div>
                <div>Plan social content</div>
              </div>
              <div className="contentbody">
                <div className="hyphen">-</div>
                <div>Plan social content</div>
              </div>
            </div>
          </div>
          <div className="content-container-three">
            <div className="socialmedia">Social Media</div>
            <div className="content">
              <div className="contentbody">
                <div className="hyphen">-</div>
                <div>Plan social content</div>
              </div>
              <div className="contentbody">
                <div className="hyphen">-</div>
                <div>Plan social content</div>
              </div>
              <div className="contentbody">
                <div className="hyphen">-</div>
                <div>Plan social content</div>
              </div>
            </div>
          </div>
          <div className="content-container-four">
            <div className="socialmedia">Social Media</div>
            <div className="content">
              <div className="contentbody">
                <div className="hyphen">-</div>
                <div>Plan social content</div>
              </div>
              <div className="contentbody">
                <div className="hyphen">-</div>
                <div>Plan social content</div>
              </div>
              <div className="contentbody">
                <div className="hyphen">-</div>
                <div>Plan social content</div>
              </div>
            </div>
          </div>
          <div className="content-container-two">
            <div className="socialmedia">Banner Ads</div>
            <div className="content">
              <div className="contentbody">
                <div className="hyphen">-</div>
                <div>Plan social content</div>
              </div>
              <div className="contentbody">
                <div className="hyphen">-</div>
                <div>Plan social content</div>
              </div>
              <div className="contentbody">
                <div className="hyphen">-</div>
                <div>Plan social content</div>
              </div>
            </div>
          </div>

          <button className="add-container">
            <FaPlus className="addition" />
          </button>
        </section>
      </div>
    </>
  );
}
