import { useState } from "react";
import "./AdvertisingVideo.scss";
import XbET from "../assets/реклама 1xbet (1хбет) с барабаном.mp4";

const AdverisingVideo = () => {
  const [addToggle, setAddToggle] = useState(false);
  const [addBlockToggle, setAddBlockToggle] = useState(false);

  setTimeout(() => {
    setAddToggle(true);
  }, 8000);


  setTimeout(() => {
    setAddBlockToggle(true);
  }, 4000);

  const CloseAddWindow = () => {
    setAddBlockToggle(false);
  };

  return (
    <>
      {addBlockToggle ? (
        <div className="adversiting-video-section">
          <div className="video-comp">
            {addToggle ? (
              <button
                className="button-close-add"
                onClick={() => CloseAddWindow()}
              >
                Close add X
              </button>
            ) : (
              ""
            )}
            <video
              className="video-add"
              controls
              width="100%"
              height="100%"
              autoPlay
              playsInline
              muted
            >
              <source className="video" src={XbET} />
            </video>
          </div>
        </div>
      ) : (
        <div>ADD LOAD</div>
      )}
    </>
  );
};

export default AdverisingVideo;
