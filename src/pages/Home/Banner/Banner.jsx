import banner from '../../../../src/assets/imagebanner.jpg'
const Banner = () => {
    return (
        <div
  className="hero min-h-screen"
  style={{
    backgroundImage: `url(${banner})`,
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Discover Your Perfect Product"</h1>
      <p className="mb-5">
      Shop the Best Deals on Quality Brands – Find Exactly What You Need Today!
      </p>
    </div>
  </div>
</div>
    );
};

export default Banner;