type AdsProps = {
  level: number
}
const Ads = ({level}: AdsProps) => {
  if (level === 1)  return (
    <div className="animate-fadeIn w-full pb-3 mt-2 grid-cols-4 grid sm:grid-cols-8 gap-4">
      <div className="tooltip z-20 col-span-6" data-tip="8xBet">
        <a href="https://8x2256.com/#/">
          <img
            src={
              "https://mma.prnasia.com/media2/1853106/City_Football_Group_Limited_1.jpg?p=publish"
            }
            alt=""
            className="aspect-[2/1] rounded-md"
          />
        </a>
      </div>
      <div className="col-span-2 hidden sm:grid grid-cols-2 gap-2">
        <div className="tooltip col-span-2 z-20" data-tip="Etihad Airways">
          <a
            href="https://www.etihad.com/en-ae/?mjid=1549912&&pzevent=1100lywxtBif&ref=1011l3w4h3&CID=affgeneric&utm_campaign=genericen&utm_medium=affiliates&utm_source=genericen"
            className="col-span-2"
          >
            <img
              src={
                "https://mid-east.info/wp-content/uploads/2017/06/etihad-man.png"
              }
              alt=""
              className="aspect-[2/1] rounded-md"
            />
          </a>
        </div>
        <div className="tooltip col-span-2 z-20" data-tip="Superdry">
          <a href="https://www.superdry.com/" className="col-span-2">
            <img
              src={
                "https://i.pinimg.com/originals/12/21/97/122197b1577e5747e9b56fdf6fe39afb.png"
              }
              alt=""
              className="aspect-[2/1] rounded-md"
            />
          </a>
        </div>
        <div className="tooltip col-span-2 z-20" data-tip="Puma">
          <a
            href="https://www.maisononline.vn/collections/puma/?utm_source=google&utm_medium=cpc&utm_campaign=trd_vie_pum_dsa_search_mt*phrase_ag*pum_brand&utm_term=puma&utm_content=675576712505&gad_source=1&gclid=CjwKCAjwr7ayBhAPEiwA6EIGxFjPZXYQQOWTykvebY1qPL0KXVZgnDNxhPUtT8JOYSqnJM0hOesllxoC_sMQAvD_BwE"
            className="col-span-2"
          >
            <img
              src={
                "https://jdsportsblog.s3.amazonaws.com/wp-content/uploads/2020/07/Desktop_Top_and_Bottom_Banner_NEW.jpg"
              }
              alt=""
              className="aspect-[2/1] rounded-md"
            />
          </a>
        </div>
      </div>
    </div>
  );
  return (
    <div className="animate-fadeIn w-full py-3 mt-2 grid-cols-4 grid sm:grid-cols-8 gap-4 ">
      <div className="tooltip col-span-2 z-20" data-tip="8xBet">
        <a href="https://8x2256.com/#/">
          <img
            src={
              "https://mma.prnasia.com/media2/1853106/City_Football_Group_Limited_1.jpg?p=publish"
            }
            alt=""
            className="aspect-[2/1] rounded-md"
          />
        </a>
      </div>
      <div className="tooltip col-span-2 z-20" data-tip="Etihad Airways">
        <a
          href="https://www.etihad.com/en-ae/?mjid=1549912&&pzevent=1100lywxtBif&ref=1011l3w4h3&CID=affgeneric&utm_campaign=genericen&utm_medium=affiliates&utm_source=genericen"
          className="col-span-2"
        >
          <img
            src={
              "https://mid-east.info/wp-content/uploads/2017/06/etihad-man.png"
            }
            alt=""
            className="aspect-[2/1] rounded-md"
          />
        </a>
      </div>
      <div className="tooltip col-span-2 z-20" data-tip="Superdry">
        <a href="https://www.superdry.com/" className="col-span-2">
          <img
            src={
              "https://i.pinimg.com/originals/12/21/97/122197b1577e5747e9b56fdf6fe39afb.png"
            }
            alt=""
            className="aspect-[2/1] rounded-md"
          />
        </a>
      </div>
      <div className="tooltip col-span-2 z-20" data-tip="Puma">
        <a
          href="https://www.maisononline.vn/collections/puma/?utm_source=google&utm_medium=cpc&utm_campaign=trd_vie_pum_dsa_search_mt*phrase_ag*pum_brand&utm_term=puma&utm_content=675576712505&gad_source=1&gclid=CjwKCAjwr7ayBhAPEiwA6EIGxFjPZXYQQOWTykvebY1qPL0KXVZgnDNxhPUtT8JOYSqnJM0hOesllxoC_sMQAvD_BwE"
          className="col-span-2"
        >
          <img
            src={
              "https://jdsportsblog.s3.amazonaws.com/wp-content/uploads/2020/07/Desktop_Top_and_Bottom_Banner_NEW.jpg"
            }
            alt=""
            className="aspect-[2/1] rounded-md"
          />
        </a>
      </div>
    </div>
  );
}

export default Ads
