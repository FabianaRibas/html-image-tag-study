import type { NextPage } from "next";
import { useState } from "react";

const Home: NextPage = () => {
  const [photo, setPhoto] = useState(false);
  var [video, setVideo] = useState<any>(null);

  const isWindowAvailable = () => {
    if (typeof window !== "undefined") {
      const videoElement = document.querySelector("video");
      setVideo(videoElement);
    }
  };
  const checkDeviceSuport = () => {
    if (
      "mediaDevices" in navigator &&
      "getUserMedia" in navigator.mediaDevices
    ) {
      console.log("Let's get this party started");
      isWindowAvailable();
      requestUserPermission();
      setPhoto(true);
    }
  };

  const requestUserPermission = () => {
    const promise = navigator.mediaDevices.getUserMedia({ video: true });
    promise
      .then((stream) => {
        video!.srcObject = stream;
        video!.play();
      })
      .catch((error) => {
        alert("Camera error: " + error);
      });
  };

  const handleVideoStream = () => {
    var canvas = document.querySelector("canvas");
    canvas!.height = 480;
    canvas!.width = 3000;
    const context = canvas?.getContext("2d");
    context?.drawImage(video!, 0, 0);
  };

  return (
    <>
      <section>
        <div className="w-screen h-screen grid grid-cols-2 text-xl font-medium">
          <div className="w-full h-full bg-slate-50 text-purple-900 centered">
            <div className="m-10">
              <h1 className="font-semibold pb-6 text-2xl">
                Agora, adicione uma foto.
              </h1>
              <form onSubmit={() => {}}>
                <div className="grid grid-rows-2">
                  <button
                    type={"button"}
                    className="bg-purple-900 text-purple-50 rounded border-2 p-2 mt-5 border-primary"
                    onClick={checkDeviceSuport}
                  >
                    Usar câmera
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full h-full bg-slate-50 text-slate-300 centered">
            <div className="grid grid-cols-1">
              <video autoPlay className="rounded pb-2"></video>
              {photo && (
                <>
                  <canvas className="bg-base-3 w-full h-24 rounded"></canvas>
                  <button
                    type={"button"}
                    className="bg-purple-900 text-purple-50 rounded border-2 p-2 mt-2"
                    onClick={handleVideoStream}
                  >
                    Tirar foto
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
