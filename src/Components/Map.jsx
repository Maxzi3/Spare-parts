import { useEffect } from "react";
import Aos from "aos";
const Map = () => {
    useEffect(() => {
      Aos.init({
        duration: 1000, // Animation duration in milliseconds
        once: true,
      });
    }, []);
  return (
    <div className="relative w-full h-full pb-1/2">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4608.911614304701!2d3.336865724501195!3d6.5323831949989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8dd6313647d7%3A0x366aca69903ee00d!2s23%20Olakunle%20St%2C%20Mushin%2C%20Lagos%20102215%2C%20Lagos!5e0!3m2!1sen!2sng!4v1722711146639!5m2!1sen!2sng"
        allowfullscreen=""
        className="w-full mb-20 h-96"
        data-aos="zoom-out"
      ></iframe>
    </div>
  );
}

export default Map
