import React from "react";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const Weather = ({ weatherData }) => {
  return (
    <div>
      {weatherData.weather ? (
        <div className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto bg-blue-200 shadow-lg rounded-xl m-auto relative px-6 py-6 top-[10%]">
          <div className="flex flex-col md:flex-row justify-between w-full">
            <div className="w-full md:w-1/2 my-4 mx-auto flex justify-between items-center">
              <div className="flex flex-col items-start justify-between h-full">
                <div>
                  <div className="p-5 items-start flex flex-col gap-y-5">
                    <h1 className="text-3xl"> {weatherData.name}</h1>
                    <h1 className="text-5xl font-semibold">
                      {weatherData.main.temp.toFixed()}°C
                    </h1>
                  </div>
                </div>
                <div>
                  {weatherData.name !== undefined ? (
                    <div className="flex flex-col justify-evenly p-5 gap-y-2 my-4 mx-auto text-xs">
                      <div className="flex justify-between gap-x-2">
                        <p className="text-base">Hissedilen:</p>
                        <p className="text-base font-semibold w-20">
                          {weatherData.main.feels_like.toFixed()}°C
                        </p>
                      </div>

                      <div className="flex justify-between gap-x-8">
                        <p className="text-base">Nem:</p>
                        <p className="text-base font-semibold w-20">
                          {weatherData.main.humidity}%
                        </p>
                      </div>

                      <div className="flex justify-between gap-x-8">
                        <p className="text-base">Rüzgar Hızı:</p>
                        <p className="text-base font-semibold w-20">
                          {weatherData.wind.speed} Km/s
                        </p>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 items-center flex flex-col justify-between lg:items-end">
              <div className="relative">
                <img
                  src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`}
                  alt=""
                  className="w-[100px] md:w-[150px]"
                />
                <p className="text-md">
                  {capitalizeFirstLetter(weatherData.weather[0].description)}{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Weather;
