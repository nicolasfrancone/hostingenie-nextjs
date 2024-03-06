"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Avatar from '@mui/material/Avatar';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './testimonials.css';
import LogoImage from '@/public/images/_93dedf3a-e6cb-4d89-9d8f-93ebcd67e33e-modified.png'

interface ButtonProps {
  className: string;
  onClick: () => void;
}

interface CardProps {
  img: string;
  testimonial: string;
  name: string;
  jobTitle: string;
}

const PreviousBtn: React.FC<ButtonProps> = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIosIcon style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};

const NextBtn: React.FC<ButtonProps> = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIosIcon style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};
const Testimonials = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000
  }
  return (

    <section id="testimonials">
      <div className="max-w-6xl  pb-15 mx-auto px-4 sm:px-20">
        <div className="py-12 md:py-12 border-t border-gray-800 pt-15"></div>
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2 className="h2 mb-4">Don't take our word for it!</h2>
          <p className="text-xl text-gray-400">See what our hosts are saying after implementing Hostingenie for their properties.</p>
        </div>

        <div
          className="testimonial flex justify-center items-center mb-10" style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="w-1/2 mx-auto text-center mb-10">
            <Slider {...settings} prevArrow={<PreviousBtn className={""} onClick={function (): void {
              throw new Error("Function not implemented.");
            } } />} nextArrow={<NextBtn className={""} onClick={function (): void {
              throw new Error("Function not implemented.");
            } } />}>
              <Card
                img="/images/_93dedf3a-e6cb-4d89-9d8f-93ebcd67e33e-modified.png"
                testimonial="What are you waiting to be the first review on our website? Contact us NOW!"
                name="Nicolás Francone"
                jobTitle="CEO and Founder"
              />
              <Card
                img="/images/_93dedf3a-e6cb-4d89-9d8f-93ebcd67e33e-modified.png"
                testimonial="What are you waiting to be the first review on our website? Contact us NOW!"
                name="Nicolás Francone"
                jobTitle="CEO and Founder"
              />
              <Card
                img="/images/_93dedf3a-e6cb-4d89-9d8f-93ebcd67e33e-modified.png"
                testimonial="What are you waiting to be the first review on our website? Contact us NOW!"
                name="Nicolás Francone"
                jobTitle="CEO and Founder"
              />
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

const Card: React.FC<CardProps> = ({ img, testimonial, name, jobTitle }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        color: "gray",
      }}
    >
      <Avatar
        imgProps={{ style: { borderRadius: "50%" } }}
        src={img}
        style={{
          width: 120,
          height: 120,
          border: "1px solid lightgray",
          padding: 7,
          marginBottom: 20,
        }}
      />
      <p className="text-lg text-gray-400 grow italic">
        &ldquo;{testimonial}&rdquo;
      </p>
      <p style={{ fontStyle: "italic", marginTop: 25 }}>
        <span style={{ fontWeight: 500, color: "#ccfefb" }}>{name}</span>, {jobTitle}
      </p>
    </div>
  );
};


export default Testimonials;