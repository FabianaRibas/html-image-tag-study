import type { NextPage } from "next";
import { useState } from "react";

const Home: NextPage = () => {
  const [uploadedImage, setUploadedImage] = useState<any>();

  const handleSave = (e: any) => {
    const reader = new FileReader();
    var result = null;
    reader.onload = () => {
      if (reader.readyState === 2) {
        result = reader.result;
        setUploadedImage(result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <>
      <div className="w-screen h-screen grid grid-row-2 md:grid-cols-2 text-l font-medium overflow-auto">
        <div className="w-full h-full bg-slate-50 text-indigo-800 centered p-4">
          <div>
            <div className="font-semibold pb-6 text-2xl">
              <h1>AGORA,</h1>
              <h1>ADICIONE UMA FOTO.</h1>
            </div>
            <div>
              <input
                type="file"
                name="image"
                accept="image/*"
                multiple
                capture="environment"
                className=" custom-file-input"
                onChange={handleSave}
              />
            </div>
          </div>
        </div>
        {uploadedImage ? (
          <div
            className={
              " m-16 border-double border-8 border-purple-900 centered"
            }
          >
            <div>
              <div className="h-80 w-80">
                <img src={uploadedImage} alt="" id="img" />
              </div>
            </div>
          </div>
        ) : (
          <div className={"bg-slate-50 centered"} />
        )}
      </div>
    </>
  );
};

export default Home;
