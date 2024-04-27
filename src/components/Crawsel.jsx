import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import React from 'react'
import CardForCrawsel from "./CardForCrawsel";

const Crawsel = () => {
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
           
            <CardForCrawsel img={"https://overseasdata.s3.ap-south-1.amazonaws.com/JobData/92/JOB09201280.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAWDCXZNCOULZNVOK6%2F20240427%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240427T122948Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604800&X-Amz-Signature=fda9a80cd554a2c522560061b4643e65216fd16062d3feada41c1d06030a7780"}/>
          </div>
          <div>
            <CardForCrawsel img={"https://overseasdata.s3.ap-south-1.amazonaws.com/JobData/101/JOB010101304.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAWDCXZNCOULZNVOK6%2F20240427%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240427T122303Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604800&X-Amz-Signature=c0178160f4a3d5e928b0beff3020f93e7cedea7f3de734520c20374e58ea5c85"}/>
          </div>
          <div>
            <CardForCrawsel img={"https://overseasdata.s3.ap-south-1.amazonaws.com/JobData/101/JOB010101304.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAWDCXZNCOULZNVOK6%2F20240427%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240427T122303Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604800&X-Amz-Signature=c0178160f4a3d5e928b0beff3020f93e7cedea7f3de734520c20374e58ea5c85"}/>
          </div>
          <div>
            <CardForCrawsel img={"https://overseasdata.s3.ap-south-1.amazonaws.com/JobData/101/JOB010101304.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAWDCXZNCOULZNVOK6%2F20240427%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240427T122303Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604800&X-Amz-Signature=c0178160f4a3d5e928b0beff3020f93e7cedea7f3de734520c20374e58ea5c85"}/>
          </div>
          <div>
            <CardForCrawsel img={"https://overseasdata.s3.ap-south-1.amazonaws.com/JobData/91/JOB09101306.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAWDCXZNCOULZNVOK6%2F20240427%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240427T114024Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604800&X-Amz-Signature=49b48e4b02d55a5c46dde75d3d501bcc2c3ceae7ae83c8a534fed981815c64ca"}/>
          </div>
          <div>
            <CardForCrawsel img={"https://overseasdata.s3.ap-south-1.amazonaws.com/JobData/101/JOB010101304.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAWDCXZNCOULZNVOK6%2F20240427%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240427T122303Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604800&X-Amz-Signature=c0178160f4a3d5e928b0beff3020f93e7cedea7f3de734520c20374e58ea5c85"}/>
          </div>
          <div>
            <CardForCrawsel img={"https://overseasdata.s3.ap-south-1.amazonaws.com/JobData/101/JOB010101304.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAWDCXZNCOULZNVOK6%2F20240427%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240427T122303Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604800&X-Amz-Signature=c0178160f4a3d5e928b0beff3020f93e7cedea7f3de734520c20374e58ea5c85"}/>
          </div>
        </Slider>
      </div>
  
      );
}

export default Crawsel