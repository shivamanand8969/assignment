import React from 'react'
import PlaceCondidate from './PlaceCondidate';
import Slider from "react-slick";

const PlacedCondidateCrawsel = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll:1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear"
      };
      return (
        <div className="slider-container ">
        <Slider {...settings}>
          <div>       
            <PlaceCondidate img={"https://overseasdata.s3.ap-south-1.amazonaws.com/JobData/92/JOB09201280.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAWDCXZNCOULZNVOK6%2F20240427%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240427T122948Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604800&X-Amz-Signature=fda9a80cd554a2c522560061b4643e65216fd16062d3feada41c1d06030a7780"}/>
          </div>
          <div>       
            <PlaceCondidate img={"https://overseasdata.s3.ap-south-1.amazonaws.com/JobData/92/JOB09201280.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAWDCXZNCOULZNVOK6%2F20240427%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240427T122948Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604800&X-Amz-Signature=fda9a80cd554a2c522560061b4643e65216fd16062d3feada41c1d06030a7780"}/>
          </div>
          <div>       
            <PlaceCondidate img={"https://overseasdata.s3.ap-south-1.amazonaws.com/JobData/92/JOB09201280.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAWDCXZNCOULZNVOK6%2F20240427%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240427T122948Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604800&X-Amz-Signature=fda9a80cd554a2c522560061b4643e65216fd16062d3feada41c1d06030a7780"}/>
          </div>
          <div>       
            <PlaceCondidate img={"https://overseasdata.s3.ap-south-1.amazonaws.com/JobData/92/JOB09201280.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAWDCXZNCOULZNVOK6%2F20240427%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240427T122948Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604800&X-Amz-Signature=fda9a80cd554a2c522560061b4643e65216fd16062d3feada41c1d06030a7780"}/>
          </div>

      </Slider>
      </div>
  
      );
}

export default PlacedCondidateCrawsel