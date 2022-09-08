import React, { useEffect, useState } from "react";




function Card() {
    const colorBackground = new URL(
        "../images/bg-main-desktop.png",
        import.meta.url
      );
      const cardFront = new URL("../images/bg-card-front.png", import.meta.url);
      const cardBack = new URL("../images/bg-card-back.png", import.meta.url);
      const completedImg = new URL("../images/icon-complete.png.png", import.meta.url);
      const [isShown, setIsShown] = useState(false);
      const [noShow, setNoShow] = useState(true);
      const handleClick = (event) => {
          setIsShown((current) => !current);
          setNoShow((current) => !current);
      };
    //   const App = () => {
    //     const [loading, setLoading] = useState(false);
      
    //     useEffect(() => {
    //       setLoading(true);
    //       setTimeout(() => {
    //         setLoading(false);
    //       }, 2000);
    //     }, []);
    // }

  return (
    <div className="flex w-full h-full relative font-Grotesk text-sm">
      <div className="w-2/4 h-screen">
        <img src={colorBackground} alt="" className="h-screen w-full" />
      </div>
      {/* hidden */}
      {noShow && (
        <div className="w-3/4 h-screen grid place-items-center">
        <div className=" h-96 w-96 space-y-1">
          <p>CARDHOLDER NAME</p>
          <input
            className=" h-10 border rounded-xl w-full pl-5"
            type="text"
            placeholder="eg.Jane Asimesi"
          />
          <p className="pt-5">CARD NUMBER</p>
          <input
            className=" h-10 border rounded-xl w-full pl-5"
            type="text"
            required
            placeholder="eg.1234 5678 9123 0000"
          />
          <div className="flex py-5">
            <div className="flex flex-col pb-3">
              <div>
                <div>
                  <p className="pb-2">EXP. DATE (MM YY)</p>
                </div>
              </div>
              <div className="flex ">
                <input
                  className=" h-10 border rounded-xl w-20 mr-3 pl-5"
                  type="month"
                  required
                  placeholder="MM"
                />
                <input
                  className=" h-10 border rounded-xl w-20 pl-5"
                  type="text"
                  required
                  placeholder="YY"
                />
              </div>
            </div>
            <div className="px-5">
              <p className="pb-2">CVC</p>
              <input
                className=" h-10 border rounded-xl w-full pl-5"
                type="text"
                required
                placeholder="eg. 123"
              />
            </div>
          </div>
          <button 
          onClick={handleClick}
          className="border rounded-xl w-full h-10 bg-vdv text-white">
            CONFIRM
          </button>
        </div>
      </div>  
      )}
          
      {isShown && (
        <div className="w-3/4 h-screen flex flex-col justify-center items-center space-y-5">
        <img src={completedImg} alt="" className="w-20 h-20" />
        <h1 className="text-3xl tracking-wide">THANK YOU</h1>
        <p className="text-gray-500">we've added your card details</p>
        <button
        onClick={handleClick}
        className="border rounded-xl w-80 h-10 bg-vdv text-white m-10">
          Continue
        </button>
      </div>
      )}    
        
      
      <div className="absolute ml-64 mt-36">
        <div className="relative shadow-xl">
          <img src={cardFront} alt="" />
        </div>
      </div>
      <div className="absolute ml-64 mt-96">
        <div className="pt-8 ml-28 shadow-xl">
          <img src={cardBack} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Card
